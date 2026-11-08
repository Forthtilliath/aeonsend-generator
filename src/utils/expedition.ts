import { mages as allMages } from "../data/mages";
import { nemeses } from "../data/nemeses";
import type {
	Battle,
	Expansion,
	Expedition,
	Mage,
	MarketCondition,
	Nemesis,
	SetupConfig,
	Tier,
} from "../types";
import { getRandomItemFromArray, isExpansionOwned, shuffle } from "./helpers";
import { generateStory } from "./story";
import { generateSupply } from "./supply";

export const ALL_TIERS: Tier[] = [1, 2, 3, 4];

/** Paliers joués : 1 → 4 en campagne, ou le seul palier choisi. */
export const getTiers = (setup: SetupConfig): Tier[] =>
	setup.battleCount === 4 ? ALL_TIERS : [setup.tier];

/**
 * Tire une némésis du palier parmi les boîtes possédées. S'il n'y en a aucune,
 * pioche dans toutes les boîtes et le signale (`fallback`).
 */
export const pickNemesis = (
	tier: Tier,
	ownedExpansions: ReadonlySet<Expansion>,
): { nemesis: Nemesis; fallback: boolean } => {
	const pool = nemeses[tier];
	const owned = pool.filter((n) =>
		isExpansionOwned(n.expansion, ownedExpansions),
	);
	return owned.length > 0
		? { nemesis: getRandomItemFromArray(owned), fallback: false }
		: { nemesis: getRandomItemFromArray(pool), fallback: true };
};

/** Tire `count` mages distincts (limité au nombre disponible). */
export const drawMages = (
	count: number,
	ownedExpansions: ReadonlySet<Expansion>,
): Mage[] => {
	const owned = allMages.filter((m) =>
		isExpansionOwned(m.expansion, ownedExpansions),
	);
	const pool = owned.length > 0 ? owned : allMages;
	return shuffle(pool).slice(0, Math.max(0, count));
};

export const buildExpedition = (
	setup: SetupConfig,
	marketConfig: MarketCondition[],
	ownedExpansions: ReadonlySet<Expansion>,
): { expedition: Expedition; warnings: string[] } => {
	const warnings: string[] = [];
	const missingTiers: Tier[] = [];

	const battles: Battle[] = getTiers(setup).map((tier, index) => {
		const { nemesis, fallback } = pickNemesis(tier, ownedExpansions);
		if (fallback) missingTiers.push(tier);
		return {
			number: index + 1,
			tier,
			nemesis,
			supply: generateSupply(marketConfig, ownedExpansions),
			remainingResets: setup.marketResets,
			remainingRerolls: setup.cardRerolls,
		};
	});

	if (missingTiers.length > 0) {
		warnings.push(
			`Aucune némésis de palier ${missingTiers.join(", ")} dans les boîtes sélectionnées : une némésis d'une autre boîte a été utilisée.`,
		);
	}

	const wanted = setup.numPlayers + setup.extraMages;
	const mages = drawMages(wanted, ownedExpansions);
	if (mages.length < wanted) {
		warnings.push(
			`Seulement ${mages.length} mages disponibles (${wanted} demandés).`,
		);
	}

	return {
		expedition: {
			battles,
			marketConfig: [...marketConfig],
			mages,
			numPlayers: setup.numPlayers,
			story: generateStory(battles, mages, setup.numPlayers),
		},
		warnings,
	};
};
