import { describe, expect, test } from "bun:test";
import { compareCards } from "./cardOrder";
import { CARD_FILES } from "./catalog";

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
});
