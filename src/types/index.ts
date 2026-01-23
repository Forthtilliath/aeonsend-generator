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

export interface MarketCondition {
	type: "gem" | "relic" | "spell";
	operator: "<=" | ">=" | "=" | "any";
	cost: number | null;
}

export interface SupplyCard extends Card {
	type: "gem" | "relic" | "spell";
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
	battles: Battle[];
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
	name: string;
	config: MarketCondition[];
}
