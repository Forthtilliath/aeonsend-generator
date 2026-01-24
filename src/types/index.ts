import type { Tuple } from "./helpers";

export interface Card {
	id: string;
	name: string;
	description: string;
	cost: number;
	image: string;
}

export interface Nemesis {
	name: string;
	difficulty: number;
	description: string;
	tier: number;
	hp: number;
}

type Breach = "none" | "open" | "left" | "bottom" | "right" | "top";
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
}

type CardType = "gem" | "relic" | "spell";
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
	type: CardTypeMarket;
	position: number;
	criteria: MarketCondition;
}

export interface Battle {
	number: number;
	nemesis: Nemesis;
	mages: Mage[];
	supply: SupplyCard[];
	remainingRerolls: number;
}

export interface Expedition {
	battles: Tuple<Battle, 4>;
	playerInfo: {
		mode: "perPlayer" | "total";
		numPlayers: number;
		magesPerPlayer: number;
		totalMages: number;
	};
}

export interface PlayerConfig {
	mode: "perPlayer" | "total";
	numPlayers: number;
	magesPerPlayer: number;
	totalMages: number;
}

export interface RerollConfig {
	type: "individual" | "global";
	maxIndividualRerolls: number;
	removeExcess: boolean;
}

export interface MarketTemplate {
	id: string;
	name: string;
	config: Tuple<MarketCondition, 9>;
}
