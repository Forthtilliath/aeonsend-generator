import { allCards as cards } from "../data/catalog";
import type {
	Card,
	CardType,
	CardTypeMarket,
	Expansion,
	MarketCondition,
	SupplyCard,
} from "../types";
import { isExpansionOwned, matchesCondition, pickRandomItem } from "./helpers";

const CARD_TYPES: CardType[] = ["gem", "relic", "spell"];
const SLOT_TYPES: CardTypeMarket[] = [...CARD_TYPES, "any"];
const CATEGORY: Record<CardType, keyof typeof cards> = {
	gem: "gems",
	relic: "relics",
	spell: "spells",
};

/** Contraintes communes à tout un marché. */
export interface DrawOptions {
	/** Boîtes possédées ; sans elles, toutes les boîtes sont permises. */
	ownedExpansions?: ReadonlySet<Expansion>;
	/** Xaxos : Paria remplace Gravehold : les cartes `requiresXaxos` sont permises. */
	xaxosOutcast?: boolean;
	/** Id des cartes bannies par le joueur. */
	bannedCards?: ReadonlySet<string>;
}

/** La carte peut-elle être tirée avec ces contraintes ? */
export const isCardAllowed = (card: Card, options: DrawOptions): boolean =>
	(!card.requiresXaxos || options.xaxosOutcast === true) &&
	!options.bannedCards?.has(card.id) &&
	(!options.ownedExpansions ||
		isExpansionOwned(card.expansion, options.ownedExpansions));

/**
 * Tire une carte répondant à `condition`, absente de `usedNames`. Un emplacement
 * « Tout » pioche dans les trois catégories et reçoit le type réel de la carte.
 */
export const drawCard = (
	condition: MarketCondition,
	usedNames: ReadonlySet<string>,
	options: DrawOptions = {},
): SupplyCard | null => {
	const types = condition.type === "any" ? CARD_TYPES : [condition.type];
	const candidates = types.flatMap((type) =>
		cards[CATEGORY[type]]
			.filter(
				(card) =>
					matchesCondition(card, condition) &&
					!usedNames.has(card.name) &&
					isCardAllowed(card, options),
			)
			.map((card) => ({ card, type })),
	);
	if (candidates.length === 0) return null;
	const { card, type } = pickRandomItem(candidates);
	return { ...card, type, position: 0, criteria: condition };
};

/** Trie par catégorie (gemmes, reliques, sorts) puis par coût, et renumérote. */
export const sortSupply = (supply: SupplyCard[]): SupplyCard[] =>
	CARD_TYPES.flatMap((type) =>
		supply.filter((c) => c.type === type).sort((a, b) => a.cost - b.cost),
	).map((card, idx) => ({ ...card, position: idx + 1 }));

export const generateSupply = (
	marketConfig: MarketCondition[],
	options: DrawOptions = {},
): SupplyCard[] => {
	const supply: SupplyCard[] = [];
	const usedNames = new Set<string>();
	for (const condition of marketConfig) {
		const card = drawCard(condition, usedNames, options);
		if (card) {
			supply.push(card);
			usedNames.add(card.name);
		}
	}
	return sortSupply(supply);
};

/**
 * Relance la carte en `position` avec le même critère. Avec `replace`, la
 * nouvelle carte remplace l'ancienne ; sinon elle s'ajoute et les joueurs
 * retirent ensuite celle qu'ils ne gardent pas. `null` si aucune carte n'est
 * disponible (la relance n'est alors pas consommée).
 */
export const rerollSupplyCard = (
	supply: SupplyCard[],
	position: number,
	replace: boolean,
	options: DrawOptions = {},
): SupplyCard[] | null => {
	const oldCard = supply.find((c) => c.position === position);
	if (!oldCard) return null;
	const usedNames = new Set(supply.map((c) => c.name));
	const newCard = drawCard(oldCard.criteria, usedNames, options);
	if (!newCard) return null;
	const kept = replace ? supply.filter((c) => c !== oldCard) : supply;
	return sortSupply([...kept, newCard]);
};

export const removeSupplyCard = (
	supply: SupplyCard[],
	position: number,
): SupplyCard[] => sortSupply(supply.filter((c) => c.position !== position));

/**
 * Pour chaque type d'emplacement (y compris « Tout »), indique s'il y a plus de
 * cartes au marché que d'emplacements prévus — cas d'une relance sans remplacement.
 */
export const getExcessBySlotType = (
	supply: SupplyCard[],
	marketConfig: MarketCondition[],
): Record<string, boolean> => {
	const result: Record<string, boolean> = {};
	for (const type of SLOT_TYPES) {
		const cardCount = supply.filter((c) => c.criteria.type === type).length;
		const slotCount = marketConfig.filter((c) => c.type === type).length;
		result[type] = cardCount > slotCount;
	}
	return result;
};

export const TYPE_SYMBOL: Record<CardTypeMarket, string> = {
	gem: "💎",
	relic: "🔮",
	spell: "✨",
	any: "❓",
};

/** Composition d'un marché, ex. « 3 💎 · 2 🔮 · 4 ✨ ». */
export const getMarketComposition = (marketConfig: MarketCondition[]): string =>
	SLOT_TYPES.map((type) => ({
		type,
		count: marketConfig.filter((c) => c.type === type).length,
	}))
		.filter(({ count }) => count !== 0)
		.map(({ type, count }) => `${count} ${TYPE_SYMBOL[type]}`)
		.join(" · ");
