import type { Tuple } from "./helpers";

export type Expansion =
	| "Aeon's End"
	| "Les Profondeurs"
	| "Les Sans-Noms"
	| "Guerre Éternelle"
	| "Ténèbres d'Ailleurs"
	| "Le Vide"
	| "De Vieux Souvenirs"
	| "Une Ère Nouvelle"
	| "Secrets Enfouis"
	| "Rêves Brisés"
	| "Les Parias"
	| "Inconnue";

export interface Card {
	id: string;
	name: string;
	description: string;
	cost: number;
	image: string;
	expansion: Expansion;
}

export interface Nemesis {
	name: string;
	/** Article utilisé dans l'histoire (« le Masque Tordu »), absent pour un nom propre. */
	article?: "le" | "la";
	difficulty: number;
	description: string;
	lore: string;
	tier: number;
	hp: number;
	expansion: Expansion;
}

export type Breach = "none" | "open" | "left" | "bottom" | "right" | "top";
type PowerPhase =
	| "nemesesDraw"
	| "currentPlayerMain"
	| "anyPlayerMain"
	| "turnOrderDraw"
	| "currentPlayerMainOrIncantation"
	| "allyPlayerMain"
	| "currentPlayerEndDraw";

export interface Mage {
	id: string;
	name: string;
	title: string;
	breachs: [Breach, Breach, Breach, Breach];
	complexity: number;
	abilityPhase: PowerPhase;
	abilityTitle: string;
	abilityDescription: string;
	abilityCharge: number;
	expansion: Expansion;
}

export type CardType = "gem" | "relic" | "spell";
type CardTypeMarket = CardType | "any";

type MarketConditionAny = {
	type: CardTypeMarket;
	operator: "any";
	cost: null;
	costMax?: never;
};

type MarketConditionComparison = {
	type: CardTypeMarket;
	operator: "<=" | ">=" | "=";
	cost: number;
	costMax?: never;
};

type MarketConditionRange = {
	type: CardTypeMarket;
	operator: "range";
	cost: number;
	costMax: number;
};

export type MarketCondition =
	| MarketConditionAny
	| MarketConditionComparison
	| MarketConditionRange;

export interface SupplyCard extends Card {
	/** Type réel de la carte (un emplacement « Tout » reçoit le type tiré). */
	type: CardType;
	position: number;
	criteria: MarketCondition;
}

export type Tier = 1 | 2 | 3 | 4;

export interface Battle {
	number: number;
	tier: Tier;
	nemesis: Nemesis;
	supply: SupplyCard[];
	remainingResets: number;
	remainingRerolls: number;
}

export interface Story {
	intro: string;
	/** Texte affiché avant l'affrontement d'index i + 1. */
	transitions: string[];
	epilogue: string;
}

export interface Expedition {
	battles: Battle[];
	/** Marché utilisé au tirage, réutilisé par les réinitialisations. */
	marketConfig: MarketCondition[];
	mages: Mage[];
	numPlayers: number;
	story: Story;
}

/** Réglages saisis par les joueurs avant le tirage. */
export interface SetupConfig {
	numPlayers: number;
	extraMages: number;
	battleCount: 1 | 4;
	tier: Tier;
	marketResets: number;
	cardRerolls: number;
	removeExcess: boolean;
}

export interface MarketTemplate {
	id: string;
	name: string;
	config: Tuple<MarketCondition, 9>;
}
