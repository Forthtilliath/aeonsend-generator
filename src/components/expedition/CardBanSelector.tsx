import { compareCards } from "../../data/cardOrder";
import { allCards } from "../../data/catalog";
import { ALL_EXPANSIONS } from "../../data/expansions";
import type { Card, CardType, Expansion } from "../../types";
import { type CardBans, isCardBanned } from "../../utils/cardBans";
import { TYPE_SYMBOL } from "../../utils/supply";

interface CardBanSelectorProps {
	ownedExpansions: ReadonlySet<Expansion>;
	bans: CardBans;
	onToggle: (card: Card) => void;
	/** Bannit (`true`) ou réautorise (`false`) toutes les cartes données. */
	onSetBanned: (cards: Card[], banned: boolean) => void;
	/** Réautorise toutes les cartes. */
	onReset: () => void;
}

interface TypedCard {
	card: Card;
	type: CardType;
}

const LINK = "text-aether-300/90 hover:text-aether-200 disabled:opacity-40";

/** Cartes du marché par boîte, dans l'ordre des vagues, gemmes puis reliques puis sorts. */
const CARDS_BY_EXPANSION: ReadonlyMap<Expansion, TypedCard[]> = (() => {
	const typed: TypedCard[] = [
		...allCards.gems.map((card) => ({ card, type: "gem" as const })),
		...allCards.relics.map((card) => ({ card, type: "relic" as const })),
		...allCards.spells.map((card) => ({ card, type: "spell" as const })),
	];
	return new Map(
		ALL_EXPANSIONS.map((expansion) => [
			expansion,
			typed
				.filter(({ card }) => card.expansion === expansion)
				.sort(
					(a, b) => a.card.cost - b.card.cost || compareCards(a.card, b.card),
				),
		]),
	);
})();

/** Exclusion carte par carte, en plus du choix des boîtes. */
export const CardBanSelector = ({
	ownedExpansions,
	bans,
	onToggle,
	onSetBanned,
	onReset,
}: CardBanSelectorProps) => {
	const groups = ALL_EXPANSIONS.filter((e) => ownedExpansions.has(e))
		.map((expansion) => ({
			expansion,
			cards: CARDS_BY_EXPANSION.get(expansion) ?? [],
		}))
		.filter(({ cards }) => cards.length > 0);
	return (
		<section aria-label="Cartes bannies">
			<div className="mb-2 flex items-start justify-between gap-3 text-sm">
				<p className="text-bone-400">
					Cartes allumées : tirables au marché. Touchez une carte pour la
					bannir, par exemple si elle manque à votre collection.
				</p>
				<button
					type="button"
					className={`${LINK} shrink-0`}
					onClick={onReset}
					disabled={bans.banned.length === 0}
				>
					Tout réautoriser
				</button>
			</div>
			{groups.length === 0 && (
				<p className="text-sm text-ember-300">Aucune boîte sélectionnée.</p>
			)}
			<div className="divide-y divide-abyss-700/70">
				{groups.map(({ expansion, cards }) => {
					const boxCards = cards.map(({ card }) => card);
					const banned = boxCards.filter((card) => isCardBanned(card, bans));
					return (
						<details key={expansion} className="py-2">
							<summary className="cursor-pointer text-sm font-semibold text-bone-100">
								{expansion}
								<span className="ml-2 font-normal text-bone-500">
									{banned.length === 0
										? "toutes tirables"
										: `${banned.length} / ${cards.length} bannie${banned.length > 1 ? "s" : ""}`}
								</span>
							</summary>
							<div className="mt-2 flex gap-3 text-xs">
								<button
									type="button"
									className={LINK}
									onClick={() => onSetBanned(boxCards, false)}
									disabled={banned.length === 0}
								>
									Tout autoriser
								</button>
								<button
									type="button"
									className={LINK}
									onClick={() => onSetBanned(boxCards, true)}
									disabled={banned.length === cards.length}
								>
									Tout bannir
								</button>
							</div>
							<div className="mt-2 flex flex-wrap gap-1.5">
								{cards.map(({ card, type }) => (
									<button
										type="button"
										key={card.name}
										onClick={() => onToggle(card)}
										aria-pressed={!isCardBanned(card, bans)}
										className="rune-toggle min-h-8 px-2 py-1 text-xs font-semibold"
									>
										<span aria-hidden="true">{TYPE_SYMBOL[type]} </span>
										{card.name}
										<span className="text-bone-500"> {card.cost}</span>
									</button>
								))}
							</div>
						</details>
					);
				})}
			</div>
		</section>
	);
};
