import { describe, expect, test } from "bun:test";
import { cards } from "./cards";
import { ALL_EXPANSIONS } from "./expansions";
import { mages } from "./mages";
import { nemeses } from "./nemeses";

describe("EXPANSION_WAVES", () => {
	test("chaque boîte n'apparaît que dans une seule vague", () => {
		expect(new Set(ALL_EXPANSIONS).size).toBe(ALL_EXPANSIONS.length);
	});

	test("toute boîte utilisée par les données est rangée dans une vague", () => {
		const used = new Set(
			[
				...Object.values(cards).flat(),
				...mages,
				...Object.values(nemeses).flat(),
			]
				.map((item) => item.expansion)
				.filter((expansion) => expansion !== "Inconnue"),
		);
		for (const expansion of used) expect(ALL_EXPANSIONS).toContain(expansion);
	});
});
