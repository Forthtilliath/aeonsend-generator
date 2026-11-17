import { describe, expect, test } from "bun:test";
import { cardBansSchema } from "../schemas/storage";
import {
	ALL_CARDS,
	getBannedNames,
	isCardBanned,
	NO_CARD_BANS,
	toggleCardBan,
} from "./cardBans";

const [card, other] = ALL_CARDS;
if (!card || !other) throw new Error("cartes de test introuvables");

describe("toggleCardBan", () => {
	test("no card is banned by default", () => {
		for (const c of ALL_CARDS)
			expect(isCardBanned(c, NO_CARD_BANS)).toBe(false);
		expect(getBannedNames(NO_CARD_BANS).size).toBe(0);
	});

	test("bans then re-allows a card", () => {
		const banned = toggleCardBan(NO_CARD_BANS, card);
		expect(banned).toEqual({ banned: [card.name] });
		expect(isCardBanned(card, banned)).toBe(true);
		expect(isCardBanned(other, banned)).toBe(false);
		expect(toggleCardBan(banned, card)).toEqual(NO_CARD_BANS);
	});

	test("getBannedNames lists the banned cards", () => {
		const names = getBannedNames(toggleCardBan(NO_CARD_BANS, card));
		expect(names.has(card.name)).toBe(true);
		expect(names.has(other.name)).toBe(false);
	});
});

describe("cardBansSchema", () => {
	test("drops unknown names, duplicates and keys", () => {
		const result = cardBansSchema.parse({
			banned: [card.name, card.name, "Carte disparue"],
			allowed: [other.name],
		});
		expect(result).toEqual({ banned: [card.name] });
	});

	test("rejects a malformed value as a whole", () => {
		expect(cardBansSchema.safeParse({ banned: "x" }).success).toBe(false);
		expect(cardBansSchema.safeParse({ banned: [""] }).success).toBe(false);
		expect(cardBansSchema.safeParse({}).success).toBe(false);
	});
});
