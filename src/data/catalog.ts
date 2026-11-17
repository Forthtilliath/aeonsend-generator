import type { CardsByType, Mage, Nemesis, Tier } from "../types";
import { FR_CARD_FILES } from "./fr";
import { mages as frMages } from "./mages";
import { nemeses as frNemeses } from "./nemeses";
import { US_CARD_FILES, usMages, usNemeses } from "./us";

/**
 * Fichiers de cartes (chemin depuis src/data), chacun rangé par vague, boîte
 * puis id : `bun run sort:cards` les trie tous.
 */
export const CARD_FILES: Record<string, CardsByType> = {
	...FR_CARD_FILES,
	...US_CARD_FILES,
};

const cardSources = Object.values(CARD_FILES);

/** Toutes les cartes du marché : boîtes françaises puis traductions maison. */
export const allCards: CardsByType = {
	gems: cardSources.flatMap((source) => source.gems),
	relics: cardSources.flatMap((source) => source.relics),
	spells: cardSources.flatMap((source) => source.spells),
};

export const allMages: Mage[] = [...frMages, ...usMages];

const nemesesOfTier = (tier: Tier): Nemesis[] => [
	...frNemeses[tier],
	...usNemeses.filter((nemesis) => nemesis.tier === tier),
];

export const allNemeses: Record<Tier, Nemesis[]> = {
	1: nemesesOfTier(1),
	2: nemesesOfTier(2),
	3: nemesesOfTier(3),
	4: nemesesOfTier(4),
};
