import { describe, expect, test } from "bun:test";
import { at } from "../testing/at";
import type { MarketCondition } from "../types";
import {
	drawCard,
	generateSupply,
	getExcessBySlotType,
	getMarketComposition,
	isCardAllowed,
	removeSupplyCard,
	rerollSupplyCard,
} from "./supply";

const any = (type: MarketCondition["type"]): MarketCondition => ({
	type,
	operator: "any",
	cost: null,
});

const config: MarketCondition[] = [
	any("gem"),
	any("gem"),
	any("relic"),
	{ type: "spell", operator: ">=", cost: 5 },
];

describe("generateSupply", () => {
	test("one card per slot, no duplicates", () => {
		const supply = generateSupply(config);
		expect(supply.length).toBe(config.length);
		expect(new Set(supply.map((c) => c.name)).size).toBe(supply.length);
	});

	test("sorted by category then cost, positions 1..n", () => {
		const supply = generateSupply(config);
		expect(supply.map((c) => c.type)).toEqual(["gem", "gem", "relic", "spell"]);
		expect(at(supply, 1).cost).toBeGreaterThanOrEqual(at(supply, 0).cost);
		expect(supply.map((c) => c.position)).toEqual([1, 2, 3, 4]);
	});

	test("respects cost conditions", () => {
		const supply = generateSupply(config);
		expect(at(supply, 3).cost).toBeGreaterThanOrEqual(5);
	});

	test("an 'any' slot keeps its card with a concrete type", () => {
		const supply = generateSupply([any("any"), any("any"), any("any")]);
		expect(supply.length).toBe(3);
		for (const card of supply) {
			expect(["gem", "relic", "spell"]).toContain(card.type);
			expect(card.criteria.type).toBe("any");
		}
	});

	test("skips expansions not owned", () => {
		const supply = generateSupply(config, {
			ownedExpansions: new Set(["Aeon's End"]),
		});
		for (const card of supply) {
			expect(["Aeon's End", "Inconnue"]).toContain(card.expansion);
		}
	});
});

describe("isCardAllowed", () => {
	const card = {
		id: "X",
		name: "Test",
		description: "",
		cost: 4,
		expansion: "Les Parias" as const,
	};
	const xaxosCard = { ...card, requiresXaxos: true as const };

	test("keeps Xaxos-only cards out when Gravehold defends", () => {
		expect(isCardAllowed(xaxosCard, {})).toBe(false);
		expect(isCardAllowed(xaxosCard, { xaxosOutcast: false })).toBe(false);
		expect(isCardAllowed(card, { xaxosOutcast: false })).toBe(true);
	});

	test("allows them when Xaxos: Outcast replaces Gravehold", () => {
		expect(isCardAllowed(xaxosCard, { xaxosOutcast: true })).toBe(true);
	});

	test("still requires the box to be owned", () => {
		const options = { xaxosOutcast: true, ownedExpansions: new Set<never>() };
		expect(isCardAllowed(xaxosCard, options)).toBe(false);
	});

	test("rejects banned cards", () => {
		expect(isCardAllowed(card, { bannedCards: new Set(["X"]) })).toBe(false);
		expect(isCardAllowed(card, { bannedCards: new Set(["Y"]) })).toBe(true);
	});
});

describe("drawCard", () => {
	test("returns null when nothing matches", () => {
		const impossible: MarketCondition = { type: "gem", operator: "=", cost: 9 };
		expect(drawCard(impossible, new Set())).toBeNull();
	});
});

describe("rerollSupplyCard", () => {
	test("replace keeps the market size and swaps the card", () => {
		const supply = generateSupply(config);
		const old = at(supply, 0);
		const next = rerollSupplyCard(supply, old.position, true);
		expect(next?.length).toBe(supply.length);
		expect(next?.map((c) => c.name)).not.toContain(old.name);
	});

	test("without replace adds a card and flags the excess", () => {
		const supply = generateSupply(config);
		const next = rerollSupplyCard(supply, at(supply, 0).position, false);
		expect(next?.length).toBe(supply.length + 1);
		expect(next && getExcessBySlotType(next, config).gem).toBe(true);
		expect(next && getExcessBySlotType(next, config).spell).toBe(false);
	});

	test("returns null for an unknown position", () => {
		expect(rerollSupplyCard(generateSupply(config), 99, true)).toBeNull();
	});
});

describe("removeSupplyCard", () => {
	test("removes the card and renumbers", () => {
		const supply = generateSupply(config);
		const next = removeSupplyCard(supply, 1);
		expect(next.length).toBe(supply.length - 1);
		expect(next.map((c) => c.position)).toEqual([1, 2, 3]);
	});
});

describe("getMarketComposition", () => {
	test("counts each slot type", () => {
		expect(getMarketComposition(config)).toBe("2 💎 · 1 🔮 · 1 ✨");
		expect(getMarketComposition([any("any")])).toBe("1 ❓");
	});
});
