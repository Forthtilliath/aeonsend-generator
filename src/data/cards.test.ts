import { describe, expect, test } from "bun:test";
import { compareCards } from "./cardOrder";
import { cards } from "./cards";

describe("cards", () => {
	test.each(Object.entries(cards))(
		"les %s sont rangées par vague, boîte puis id (bun run sort:cards)",
		(_, list) => {
			expect(list.map((c) => c.id)).toEqual(
				[...list].sort(compareCards).map((c) => c.id),
			);
		},
	);
});
