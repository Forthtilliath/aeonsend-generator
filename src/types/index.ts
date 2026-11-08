import type { Tuple } from "./helpers";

/** Nom français quand la boîte est sortie en VF (Matagot), sinon nom anglais. */
export type Expansion =
	| "Aeon's End"
	| "Les Profondeurs"
	| "Les Sans-Noms"
	| "Guerre Éternelle"
	| "Le Vide"
	| "Ténèbres d'Ailleurs"
	| "Legacy"
	| "Secrets Enfouis"
	| "Une Ère Nouvelle"
	| "Rêves Brisés"
	| "De Vieux Souvenirs"
	| "À l'État Sauvage"
	| "Les Parias"
	| "Retour à Gravehold"
	| "Le Village du Sud"
	| "Legacy of Gravehold"
	| "The Ruins"
	| "Past and Future"
	| "Origins"
	| "Evolution"
	| "Le Commencement"
	| "Les Cavernes"
	| "Les Abysses"
	| "Tales of Old Gravehold"
	| "Beyond the Breach"
	| "The Surface"
	| "The Returned"
	| "System Overload"
	| "The Cinderkeep"
	| "The Wastes"
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
export type CardTypeMarket = CardType | "any";

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
	/** Mages tirés pour cet affrontement (joueurs + mages en trop). */
	mages: Mage[];
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
