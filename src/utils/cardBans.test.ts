import { describe, expect, test } from "bun:test";
import { cardBansSchema } from "../schemas/storage";
import {
	ALL_CARDS,
	getBannedIds,
	isCardBanned,
	NO_CARD_BANS,
	setCardsBanned,
	toggleCardBan,
} from "./cardBans";

const [card, other] = ALL_CARDS;
if (!card || !other) throw new Error("cartes de test introuvables");

describe("toggleCardBan", () => {
	test("no card is banned by default", () => {
		for (const c of ALL_CARDS)
			expect(isCardBanned(c, NO_CARD_BANS)).toBe(false);
		expect(getBannedIds(NO_CARD_BANS).size).toBe(0);
	});

	test("bans then re-allows a card", () => {
		const banned = toggleCardBan(NO_CARD_BANS, card);
		expect(banned).toEqual({ banned: [card.id] });
		expect(isCardBanned(card, banned)).toBe(true);
		expect(isCardBanned(other, banned)).toBe(false);
		expect(toggleCardBan(banned, card)).toEqual(NO_CARD_BANS);
	});

	test("getBannedIds lists the banned cards", () => {
		const ids = getBannedIds(toggleCardBan(NO_CARD_BANS, card));
		expect(ids.has(card.id)).toBe(true);
		expect(ids.has(other.id)).toBe(false);
	});
});

describe("setCardsBanned", () => {
	test("bans a whole set of cards without duplicates, then re-allows it", () => {
		const one = toggleCardBan(NO_CARD_BANS, card);
		const all = setCardsBanned(one, [card, other], true);
		expect([...all.banned].sort()).toEqual([card.id, other.id].sort());
		expect(setCardsBanned(all, [card, other], false)).toEqual(NO_CARD_BANS);
	});

	test("leaves the other bans untouched", () => {
		const one = toggleCardBan(NO_CARD_BANS, card);
		expect(setCardsBanned(one, [other], false)).toEqual(one);
	});
});

describe("cardBansSchema", () => {
	test("drops unknown ids, duplicates and keys", () => {
		const result = cardBansSchema.parse({
			banned: [card.id, card.id, "Carte disparue"],
			allowed: [other.id],
		});
		expect(result).toEqual({ banned: [card.id] });
	});

	test("converts bans saved by name, including former names", () => {
		const result = cardBansSchema.parse({
			banned: [card.name, other.id, other.name, "Agréagat de diamants"],
		});
		expect(result).toEqual({ banned: [card.id, other.id, "AE03"] });
	});

	test("rejects a malformed value as a whole", () => {
		expect(cardBansSchema.safeParse({ banned: "x" }).success).toBe(false);
		expect(cardBansSchema.safeParse({ banned: [""] }).success).toBe(false);
		expect(cardBansSchema.safeParse({}).success).toBe(false);
	});
});
