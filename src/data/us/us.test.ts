import { describe, expect, test } from "bun:test";
import { US_ONLY_EXPANSIONS } from "../expansions";
import { FR_CARD_FILES } from "../fr";
import { mages as frMages } from "../mages";
import { US_CARD_FILES, usMages, usNemeses } from ".";

const usCards = Object.values(US_CARD_FILES).flatMap((file) =>
	Object.values(file).flat(),
);
const frCards = Object.values(FR_CARD_FILES).flatMap((file) =>
	Object.values(file).flat(),
);

describe("traductions maison", () => {
	test("tout vient d'une boîte inédite en français et garde son nom anglais", () => {
		for (const item of [...usCards, ...usMages, ...usNemeses]) {
			expect(US_ONLY_EXPANSIONS.has(item.expansion)).toBe(true);
			expect(item.nameEn?.trim()).toBeTruthy();
		}
	});

	test("les id de cartes sont uniques et absents des cartes françaises", () => {
		const ids = usCards.map((card) => card.id);
		const frIds = new Set(frCards.map((card) => card.id));
		expect(new Set(ids).size).toBe(ids.length);
		for (const id of ids) expect(frIds.has(id)).toBe(false);
	});

	test("les noms de cartes sont uniques (le tirage les compare par nom)", () => {
		const names = usCards.map((card) => card.name);
		const frNames = new Set(frCards.map((card) => card.name));
		expect(new Set(names).size).toBe(names.length);
		for (const name of names) expect(frNames.has(name)).toBe(false);
	});

	test("les coûts restent entre 0 et 9 (bornes du marché)", () => {
		for (const card of usCards) {
			for (const cost of [card.cost, card.developCost ?? 0]) {
				expect(Number.isInteger(cost)).toBe(true);
				expect(cost).toBeGreaterThanOrEqual(0);
				expect(cost).toBeLessThanOrEqual(9);
			}
		}
	});

	test("les id de mages sont uniques", () => {
		const ids = [...frMages, ...usMages].map((mage) => mage.id);
		expect(new Set(ids).size).toBe(ids.length);
	});

	test("chaque némésis a un palier de 1 à 4 et des PV positifs", () => {
		for (const nemesis of usNemeses) {
			expect([1, 2, 3, 4]).toContain(nemesis.tier);
			expect(nemesis.hp).toBeGreaterThan(0);
		}
	});
});
