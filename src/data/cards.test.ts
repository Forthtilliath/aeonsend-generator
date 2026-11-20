import { describe, expect, test } from "bun:test";
import { compareCards } from "./cardOrder";
import { allCards, CARD_FILES } from "./catalog";

const lists = Object.entries(CARD_FILES).flatMap(([file, cards]) =>
	Object.entries(cards).map(
		([category, list]) => [file, category, list] as const,
	),
);

describe("cards", () => {
	test.each(lists)(
		"%s : les %s sont rangées par vague, boîte puis id (bun run sort:cards)",
		(_, __, list) => {
			expect(list.map((c) => c.id)).toEqual(
				[...list].sort(compareCards).map((c) => c.id),
			);
		},
	);

	test("le texte suit la syntaxe des CSV nanDECK (cf. utils/cardText.ts)", () => {
		const offenders = Object.values(allCards)
			.flat()
			.filter(
				(c) =>
					/\n|Ether|(?:\d|jetons?) Éther|\. OU|Écho<br>|brèches adjacentes, de manière|\((?:duo|lien|echo)\)/.test(
						c.description,
					) ||
					c.description
						.match(/<[^>]*>/g)
						?.some((tag) => !/^<\/?(?:br|b|i|small)>$/.test(tag)),
			)
			.map((c) => c.id);
		expect(offenders).toEqual([]);
	});

	test("chaque id est unique (les cartes bannies sont enregistrées par id)", () => {
		const ids = Object.values(allCards)
			.flat()
			.map((c) => c.id);
		expect(ids.filter((id, i) => ids.indexOf(id) !== i)).toEqual([]);
	});
});
