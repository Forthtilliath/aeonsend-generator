import { describe, expect, test } from "bun:test";
import { ALL_EXPANSIONS } from "../data/expansions";
import { marketTemplates } from "../data/marketTemplates";
import type { SetupConfig } from "../types";
import { buildExpedition, drawMages, getTiers } from "./expedition";

const owned = new Set(ALL_EXPANSIONS);
const market = marketTemplates.get("balanced")?.config ?? [];

const setup: SetupConfig = {
	numPlayers: 2,
	extraMages: 2,
	battleCount: 4,
	tier: 1,
	marketResets: 1,
	cardRerolls: 3,
	removeExcess: true,
};

describe("getTiers", () => {
	test("campaign plays tiers 1 to 4, single battle plays the chosen tier", () => {
		expect(getTiers(setup)).toEqual([1, 2, 3, 4]);
		expect(getTiers({ ...setup, battleCount: 1, tier: 3 })).toEqual([3]);
	});
});

describe("buildExpedition", () => {
	test("campaign: one nemesis per tier, in order", () => {
		const { expedition } = buildExpedition(setup, market, owned);
		expect(expedition.battles.map((b) => b.nemesis.tier)).toEqual([1, 2, 3, 4]);
		expect(expedition.story.transitions.length).toBe(3);
	});

	test("single battle uses the chosen tier", () => {
		const { expedition } = buildExpedition(
			{ ...setup, battleCount: 1, tier: 2 },
			market,
			owned,
		);
		expect(expedition.battles.length).toBe(1);
		expect(expedition.battles[0].nemesis.tier).toBe(2);
		expect(expedition.story.transitions).toEqual([]);
	});

	test("draws players + extra mages for each battle, without duplicates", () => {
		const { expedition } = buildExpedition(setup, market, owned);
		expect(expedition.battles.length).toBe(4);
		for (const battle of expedition.battles) {
			expect(battle.mages.length).toBe(4);
			expect(new Set(battle.mages.map((m) => m.id)).size).toBe(4);
		}
	});

	test("each battle starts with the configured resets and rerolls", () => {
		const { expedition } = buildExpedition(setup, market, owned);
		for (const battle of expedition.battles) {
			expect(battle.remainingResets).toBe(1);
			expect(battle.remainingRerolls).toBe(3);
			expect(battle.supply.length).toBe(9);
		}
	});

	test("warns when a tier has no nemesis in the owned boxes", () => {
		const { warnings } = buildExpedition(setup, market, new Set());
		expect(warnings.length).toBeGreaterThan(0);
	});
});

describe("drawMages", () => {
	test("never draws more mages than available", () => {
		expect(drawMages(500, owned).length).toBeLessThan(500);
	});
});
