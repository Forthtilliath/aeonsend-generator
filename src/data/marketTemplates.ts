import type { MarketCondition, MarketTemplate } from "../types";
import type { Tuple } from "../types/helpers";

export const marketTemplates = new Map<string, MarketTemplate>([
	[
		"balanced",
		{
			id: "balanced",
			name: "Marché #1 : Équilibré",
			config: [
				{ type: "gem", operator: "<=", cost: 4 },
				{ type: "gem", operator: "=", cost: 4 },
				{ type: "gem", operator: "any", cost: null },
				{ type: "relic", operator: "any", cost: null },
				{ type: "relic", operator: "any", cost: null },
				{ type: "spell", operator: "<=", cost: 4 },
				{ type: "spell", operator: "<=", cost: 5 },
				{ type: "spell", operator: ">=", cost: 5 },
				{ type: "spell", operator: ">=", cost: 6 },
			],
		},
	],
	[
		"pierced",
		{
			id: "pierced",
			name: "Marché #2 : Porte-monnaie percé",
			config: [
				{ type: "gem", operator: ">=", cost: 3 },
				{ type: "gem", operator: ">=", cost: 3 },
				{ type: "gem", operator: ">=", cost: 3 },
				{ type: "relic", operator: ">=", cost: 4 },
				{ type: "relic", operator: "any", cost: null },
				{ type: "spell", operator: "<=", cost: 5 },
				{ type: "spell", operator: "<=", cost: 6 },
				{ type: "spell", operator: ">=", cost: 6 },
				{ type: "spell", operator: ">=", cost: 7 },
			],
		},
	],
	[
		"master",
		{
			id: "master",
			name: "Marché #3 : Maître de la magie",
			config: [
				{ type: "gem", operator: "<=", cost: 4 },
				{ type: "gem", operator: "range", cost: 4, costMax: 5 },
				{ type: "gem", operator: "range", cost: 4, costMax: 5 },
				{ type: "relic", operator: "any", cost: null },
				{ type: "spell", operator: "=", cost: 3 },
				{ type: "spell", operator: "=", cost: 4 },
				{ type: "spell", operator: ">=", cost: 5 },
				{ type: "spell", operator: ">=", cost: 5 },
				{ type: "spell", operator: ">=", cost: 5 },
			],
		},
	],
	[
		"adaptable",
		{
			id: "adaptable",
			name: "Marché #4 : Adaptable ",
			config: [
				{ type: "gem", operator: ">=", cost: 4 },
				{ type: "gem", operator: "any", cost: null },
				{ type: "gem", operator: "any", cost: null },
				{ type: "relic", operator: "<=", cost: 4 },
				{ type: "relic", operator: ">=", cost: 4 },
				{ type: "relic", operator: "any", cost: null },
				{ type: "spell", operator: "<=", cost: 5 },
				{ type: "spell", operator: ">=", cost: 5 },
				{ type: "spell", operator: "any", cost: null },
			],
		},
	],
	[
		"precision",
		{
			id: "precision",
			name: "Marché #5 : Précision",
			config: [
				{ type: "gem", operator: "=", cost: 2 },
				{ type: "gem", operator: "=", cost: 3 },
				{ type: "gem", operator: "=", cost: 4 },
				{ type: "gem", operator: "=", cost: 5 },
				{ type: "relic", operator: "any", cost: null },
				{ type: "spell", operator: "=", cost: 4 },
				{ type: "spell", operator: "=", cost: 5 },
				{ type: "spell", operator: "=", cost: 6 },
				{ type: "spell", operator: ">=", cost: 6 },
			],
		},
	],
	[
		"contrasted",
		{
			id: "contrasted",
			name: "Marché #6 : Contrasté",
			config: [
				{ type: "gem", operator: "=", cost: 3 },
				{ type: "gem", operator: "=", cost: 4 },
				{ type: "relic", operator: "<=", cost: 4 },
				{ type: "relic", operator: ">=", cost: 4 },
				{ type: "relic", operator: "any", cost: null },
				{ type: "spell", operator: "range", cost: 3, costMax: 4 },
				{ type: "spell", operator: "range", cost: 5, costMax: 6 },
				{ type: "spell", operator: "range", cost: 5, costMax: 6 },
				{ type: "spell", operator: ">=", cost: 6 },
			],
		},
	],
	[
		"unlimited",
		{
			id: "unlimited",
			name: "Marché #7 : Sans limite",
			config: [
				{ type: "gem", operator: "any", cost: null },
				{ type: "gem", operator: "any", cost: null },
				{ type: "gem", operator: "any", cost: null },
				{ type: "relic", operator: "any", cost: null },
				{ type: "relic", operator: "any", cost: null },
				{ type: "spell", operator: "any", cost: null },
				{ type: "spell", operator: "any", cost: null },
				{ type: "spell", operator: "any", cost: null },
				{ type: "spell", operator: "any", cost: null },
			],
		},
	],
	[
		"versatile",
		{
			id: "versatile",
			name: "Marché #8 : Polyvalent",
			config: [
				{ type: "gem", operator: "range", cost: 2, costMax: 3 },
				{ type: "gem", operator: "=", cost: 4 },
				{ type: "gem", operator: "any", cost: null },
				{ type: "relic", operator: "range", cost: 5, costMax: 8 },
				{ type: "relic", operator: "any", cost: null },
				{ type: "spell", operator: "range", cost: 2, costMax: 4 },
				{ type: "spell", operator: "range", cost: 2, costMax: 4 },
				{ type: "spell", operator: "range", cost: 6, costMax: 8 },
				{ type: "spell", operator: "range", cost: 6, costMax: 8 },
			],
		},
	],
	[
		"premium",
		{
			id: "premium",
			name: "Marché #9 : Premium",
			config: [
				{ type: "gem", operator: "range", cost: 4, costMax: 8 },
				{ type: "gem", operator: "range", cost: 4, costMax: 8 },
				{ type: "gem", operator: "range", cost: 4, costMax: 8 },
				{ type: "relic", operator: "range", cost: 5, costMax: 8 },
				{ type: "relic", operator: "any", cost: null },
				{ type: "spell", operator: "range", cost: 2, costMax: 5 },
				{ type: "spell", operator: "range", cost: 2, costMax: 5 },
				{ type: "spell", operator: "range", cost: 2, costMax: 5 },
				{ type: "spell", operator: "range", cost: 7, costMax: 8 },
			],
		},
	],
]);

export const findMarketTemplate = (
	id: string,
	userPresets: MarketTemplate[],
): MarketTemplate | undefined =>
	marketTemplates.get(id) ?? userPresets.find((preset) => preset.id === id);

export const defaultCustomMarket: Tuple<MarketCondition, 9> = [
	{ type: "gem" as const, operator: "<=" as const, cost: 4 },
	{ type: "gem" as const, operator: "<=" as const, cost: 4 },
	{ type: "gem" as const, operator: "any" as const, cost: null },
	{ type: "relic" as const, operator: "any" as const, cost: null },
	{ type: "relic" as const, operator: "any" as const, cost: null },
	{ type: "spell" as const, operator: "<=" as const, cost: 5 },
	{ type: "spell" as const, operator: "<=" as const, cost: 6 },
	{ type: "spell" as const, operator: ">=" as const, cost: 5 },
	{ type: "spell" as const, operator: ">=" as const, cost: 6 },
];
