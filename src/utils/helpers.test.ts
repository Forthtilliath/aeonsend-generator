import { describe, expect, test } from "bun:test";
import type { Battle, MarketCondition } from "../types";
import {
	clamp,
	copyTuple,
	generateRandomInteger,
	generateSupply,
	getCriteriaLabel,
	getRandomItemFromArray,
	getTypeBgColor,
	getTypeColor,
	getTypeLabel,
	hasExcessCards,
	matchesCondition,
	shuffle,
} from "./helpers";

describe("clamp", () => {
	test("returns the value when within range", () => {
		expect(clamp(2, 1, 4)).toBe(2);
	});

	test("clamps to min when below range", () => {
		expect(clamp(-5, 1, 4)).toBe(1);
	});

	test("clamps to max when above range", () => {
		expect(clamp(99, 1, 4)).toBe(4);
	});

	test("returns min for NaN", () => {
		expect(clamp(Number.NaN, 1, 4)).toBe(1);
	});
});

describe("matchesCondition", () => {
	const card = {
		id: "X",
		name: "Test",
		description: "",
		cost: 5,
		image: "",
		expansion: "Aeon's End" as const,
	};

	test("'any' operator always matches", () => {
		const condition: MarketCondition = {
			type: "gem",
			operator: "any",
			cost: null,
		};
		expect(matchesCondition(card, condition)).toBe(true);
	});

	test("'<=' operator matches when cost is lower or equal", () => {
		const condition: MarketCondition = { type: "gem", operator: "<=", cost: 5 };
		expect(matchesCondition(card, condition)).toBe(true);
		expect(matchesCondition({ ...card, cost: 6 }, condition)).toBe(false);
	});

	test("'>=' operator matches when cost is higher or equal", () => {
		const condition: MarketCondition = { type: "gem", operator: ">=", cost: 5 };
		expect(matchesCondition(card, condition)).toBe(true);
		expect(matchesCondition({ ...card, cost: 4 }, condition)).toBe(false);
	});

	test("'=' operator matches exact cost only", () => {
		const condition: MarketCondition = { type: "gem", operator: "=", cost: 5 };
		expect(matchesCondition(card, condition)).toBe(true);
		expect(matchesCondition({ ...card, cost: 4 }, condition)).toBe(false);
	});

	test("'range' operator matches within bounds, inclusive", () => {
		const condition: MarketCondition = {
			type: "gem",
			operator: "range",
			cost: 3,
			costMax: 5,
		};
		expect(matchesCondition({ ...card, cost: 3 }, condition)).toBe(true);
		expect(matchesCondition({ ...card, cost: 5 }, condition)).toBe(true);
		expect(matchesCondition({ ...card, cost: 2 }, condition)).toBe(false);
		expect(matchesCondition({ ...card, cost: 6 }, condition)).toBe(false);
	});
});

describe("getTypeColor / getTypeBgColor / getTypeLabel", () => {
	test("returns distinct values per type", () => {
		expect(getTypeColor("gem")).toContain("purple");
		expect(getTypeColor("relic")).toContain("blue");
		expect(getTypeColor("spell")).toContain("yellow");

		expect(getTypeBgColor("gem")).toContain("purple");
		expect(getTypeBgColor("relic")).toContain("blue");
		expect(getTypeBgColor("spell")).toContain("yellow");

		expect(getTypeLabel("gem")).toBe("Gemme");
		expect(getTypeLabel("relic")).toBe("Relique");
		expect(getTypeLabel("spell")).toBe("Sort");
	});
});

describe("getCriteriaLabel", () => {
	test("'any' operator", () => {
		expect(getCriteriaLabel({ type: "gem", operator: "any", cost: null })).toBe(
			"Tout",
		);
	});

	test("'range' operator", () => {
		expect(
			getCriteriaLabel({ type: "gem", operator: "range", cost: 3, costMax: 5 }),
		).toBe("Entre 3⚡ et 5⚡");
	});

	test("'<=' operator", () => {
		expect(getCriteriaLabel({ type: "gem", operator: "<=", cost: 4 })).toBe(
			"≤ 4⚡",
		);
	});

	test("'>=' operator", () => {
		expect(getCriteriaLabel({ type: "gem", operator: ">=", cost: 4 })).toBe(
			"≥ 4⚡",
		);
	});

	test("'=' operator", () => {
		expect(getCriteriaLabel({ type: "gem", operator: "=", cost: 4 })).toBe(
			"4⚡",
		);
	});
});

describe("generateRandomInteger", () => {
	test("returns 0 for a non-positive max", () => {
		expect(generateRandomInteger(0)).toBe(0);
		expect(generateRandomInteger(-3)).toBe(0);
	});

	test("stays within [0, max) across many draws", () => {
		for (let i = 0; i < 500; i++) {
			const value = generateRandomInteger(7);
			expect(value).toBeGreaterThanOrEqual(0);
			expect(value).toBeLessThan(7);
		}
	});

	test("always returns 0 for max = 1", () => {
		expect(generateRandomInteger(1)).toBe(0);
	});
});

describe("getRandomItemFromArray", () => {
	test("returns an item from the array", () => {
		const arr = [1, 2, 3];
		expect(arr).toContain(getRandomItemFromArray(arr));
	});

	test("throws on an empty array instead of returning undefined", () => {
		expect(() => getRandomItemFromArray([])).toThrow();
	});
});

describe("shuffle", () => {
	test("preserves length and elements without mutating the input", () => {
		const original = [1, 2, 3, 4, 5];
		const shuffled = shuffle(original);

		expect(shuffled).not.toBe(original);
		expect(shuffled.length).toBe(original.length);
		expect([...shuffled].sort()).toEqual([...original].sort());
		expect(original).toEqual([1, 2, 3, 4, 5]);
	});
});

describe("copyTuple", () => {
	test("returns a new array with the same content", () => {
		const original = [1, 2, 3] as const;
		const copy = copyTuple(original as unknown as number[]);

		expect(copy).not.toBe(original);
		expect(copy).toEqual([1, 2, 3]);
	});
});

describe("generateSupply", () => {
	const marketConfig: MarketCondition[] = [
		{ type: "gem", operator: "any", cost: null },
		{ type: "gem", operator: "any", cost: null },
		{ type: "relic", operator: "any", cost: null },
	];

	test("generates one card per market slot without duplicates", () => {
		const supply = generateSupply(marketConfig);
		expect(supply.length).toBe(marketConfig.length);
		const names = supply.map((c) => c.name);
		expect(new Set(names).size).toBe(names.length);
	});

	test("sorts result by category then cost", () => {
		const supply = generateSupply(marketConfig);
		const gems = supply.filter((c) => c.type === "gem");
		for (let i = 1; i < gems.length; i++) {
			expect(gems[i].cost).toBeGreaterThanOrEqual(gems[i - 1].cost);
		}
	});

	test("removeExcess trims cards beyond the configured count per type", () => {
		const supply = generateSupply(marketConfig, [], true);
		const gemCount = supply.filter((c) => c.type === "gem").length;
		expect(gemCount).toBeLessThanOrEqual(2);
	});
});

describe("hasExcessCards", () => {
	test("flags a type as excess when supply exceeds market config count", () => {
		const marketConfig: MarketCondition[] = [
			{ type: "gem", operator: "any", cost: null },
		];
		const battle = {
			supply: [
				{
					id: "1",
					name: "A",
					description: "",
					cost: 1,
					image: "",
					type: "gem",
					position: 1,
					criteria: marketConfig[0],
				},
				{
					id: "2",
					name: "B",
					description: "",
					cost: 2,
					image: "",
					type: "gem",
					position: 2,
					criteria: marketConfig[0],
				},
			],
		} as unknown as Battle;

		expect(hasExcessCards(battle, marketConfig).gem).toBe(true);
	});

	test("returns an empty object for a falsy battle", () => {
		expect(hasExcessCards(null as unknown as Battle, [])).toEqual({});
	});
});
