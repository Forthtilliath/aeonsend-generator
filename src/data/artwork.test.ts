import { describe, expect, test } from "bun:test";
import { readdirSync } from "node:fs";
import { slugify } from "../utils/slug";
import { allNemeses } from "./catalog";

describe("illustrations des Némésis", () => {
	const slugs = new Set(
		Object.values(allNemeses)
			.flat()
			.map((nemesis) => slugify(nemesis.name)),
	);
	const files = readdirSync(new URL("../assets/nemeses", import.meta.url));

	test("chaque image correspond à une Némésis (même slug que le script)", () => {
		const orphans = files.filter(
			(file) => !slugs.has(file.replace(/\.jpg$/, "")),
		);
		expect(orphans).toEqual([]);
	});

	test("slugify suit la règle du script PowerShell", () => {
		expect(slugify("Cœur de la corruption")).toBe("coeur-de-la-corruption");
		expect(slugify("Masque Tordu (Beyond the Breach)")).toBe(
			"masque-tordu-beyond-the-breach",
		);
		expect(slugify("Titan de l'Ombre")).toBe("titan-de-l-ombre");
	});
});
