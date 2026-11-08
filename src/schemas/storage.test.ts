import { describe, expect, test } from "bun:test";
import { defaultCustomMarket } from "../data/marketTemplates";
import {
	marketConfigSchema,
	ownedExpansionsSchema,
	selectedMarketSchema,
	setupConfigSchema,
	userPresetsSchema,
} from "./storage";

const preset = { id: "a", name: "Mon marché", config: defaultCustomMarket };

describe("userPresetsSchema", () => {
	test("accepts a valid preset and strips unknown keys", () => {
		const result = userPresetsSchema.parse([{ ...preset, extra: "x" }]);
		expect(result[0]).toEqual(preset);
	});

	test("rejects the whole list on a single bad entry", () => {
		const bad = { ...preset, config: defaultCustomMarket.slice(0, 8) };
		expect(userPresetsSchema.safeParse([preset, bad]).success).toBe(false);
	});

	test("rejects out-of-range costs and inverted ranges", () => {
		const withSlot = (slot: unknown) => [
			{ ...preset, config: [slot, ...defaultCustomMarket.slice(1)] },
		];
		expect(
			userPresetsSchema.safeParse(
				withSlot({ type: "gem", operator: "<=", cost: 42 }),
			).success,
		).toBe(false);
		expect(
			userPresetsSchema.safeParse(
				withSlot({ type: "gem", operator: "range", cost: 6, costMax: 2 }),
			).success,
		).toBe(false);
	});

	test("rejects over-long names", () => {
		expect(
			userPresetsSchema.safeParse([{ ...preset, name: "x".repeat(41) }])
				.success,
		).toBe(false);
	});
});

describe("selectedMarketSchema", () => {
	test("accepts template ids, custom and preset uuids", () => {
		for (const id of ["balanced", "custom", crypto.randomUUID()]) {
			expect(selectedMarketSchema.safeParse(id).success).toBe(true);
		}
	});

	test("rejects empty, over-long or non-string ids", () => {
		for (const id of ["", "x".repeat(65), "<script>", 42, null]) {
			expect(selectedMarketSchema.safeParse(id).success).toBe(false);
		}
	});
});

describe("marketConfigSchema", () => {
	test("accepts the default custom market", () => {
		expect(marketConfigSchema.safeParse(defaultCustomMarket).success).toBe(
			true,
		);
	});

	test("rejects a market without exactly 9 slots", () => {
		expect(
			marketConfigSchema.safeParse(defaultCustomMarket.slice(0, 8)).success,
		).toBe(false);
		expect(
			marketConfigSchema.safeParse([
				...defaultCustomMarket,
				defaultCustomMarket[0],
			]).success,
		).toBe(false);
	});
});

describe("ownedExpansionsSchema", () => {
	test("rejects unknown expansions", () => {
		expect(ownedExpansionsSchema.safeParse(["Aeon's End"]).success).toBe(true);
		expect(ownedExpansionsSchema.safeParse(["Inventée"]).success).toBe(false);
	});
});

describe("setupConfigSchema", () => {
	const setup = {
		numPlayers: 2,
		extraMages: 1,
		battleCount: 4,
		tier: 1,
		marketResets: 1,
		cardRerolls: 2,
		removeExcess: true,
	};

	test("accepts a valid setup", () => {
		expect(setupConfigSchema.safeParse(setup).success).toBe(true);
	});

	test("rejects out-of-bounds values", () => {
		expect(
			setupConfigSchema.safeParse({ ...setup, numPlayers: 5 }).success,
		).toBe(false);
		expect(
			setupConfigSchema.safeParse({ ...setup, battleCount: 2 }).success,
		).toBe(false);
		expect(setupConfigSchema.safeParse({ ...setup, tier: 0 }).success).toBe(
			false,
		);
	});
});
