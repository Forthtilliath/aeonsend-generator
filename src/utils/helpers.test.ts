import { describe, expect, test } from "bun:test";
import type { MarketCondition } from "../types";
import {
	copyTuple,
	getCriteriaLabel,
	getTypeLabel,
	matchesCondition,
	pickRandomItem,
	plural,
	secureRandom,
} from "./helpers";

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

describe("getTypeLabel", () => {
	test("returns the french label per type", () => {
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

describe("secureRandom", () => {
	test("stays within [0, 1) across many draws", () => {
		for (let i = 0; i < 500; i++) {
			const value = secureRandom();
			expect(value).toBeGreaterThanOrEqual(0);
			expect(value).toBeLessThan(1);
		}
	});
});

describe("pickRandomItem", () => {
	test("returns an item from the array", () => {
		const arr = [1, 2, 3];
		expect(arr).toContain(pickRandomItem(arr));
	});

	test("reaches every item", () => {
		const seen = new Set<number>();
		for (let i = 0; i < 200; i++) seen.add(pickRandomItem([1, 2, 3]));
		expect(seen.size).toBe(3);
	});

	test("throws on an empty array instead of returning undefined", () => {
		expect(() => pickRandomItem([])).toThrow();
	});
});

describe("plural", () => {
	test("keeps the singular for 0 and 1, as in French", () => {
		expect(plural(0, "relance")).toBe("relance");
		expect(plural(1, "relance")).toBe("relance");
		expect(plural(2, "relance")).toBe("relances");
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
