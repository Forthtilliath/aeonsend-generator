import { describe, expect, test } from "bun:test";
import { parseCardText, tokenizeLine } from "./cardText";

describe("tokenizeLine", () => {
	test("remplace « N Ether » par l'icône et met les mots-clés en gras", () => {
		expect(tokenizeLine("Lancer : Infligez 2 dégâts. Gagnez 1 Ether.")).toEqual(
			[
				{ kind: "bold", value: "Lancer :" },
				{ kind: "text", value: " Infligez 2 dégâts. Gagnez " },
				{ kind: "aether", amount: "1" },
				{ kind: "text", value: "." },
			],
		);
	});

	test("met Connectez et Conjurez en gras, pas Conjuration", () => {
		expect(tokenizeLine("Connectez cette relique. Conjurez.")).toEqual([
			{ kind: "bold", value: "Connectez" },
			{ kind: "text", value: " cette relique. " },
			{ kind: "bold", value: "Conjurez" },
			{ kind: "text", value: "." },
		]);
		expect(tokenizeLine("Conjuration")).toEqual([
			{ kind: "text", value: "Conjuration" },
		]);
	});

	test("ne touche pas à un mot qui commence par Ether", () => {
		expect(tokenizeLine("2 Etherées")).toEqual([
			{ kind: "text", value: "2 Etherées" },
		]);
	});
});

describe("parseCardText", () => {
	test("découpe les retours à la ligne, (ou) et (hr)", () => {
		const blocks = parseCardText("Gagnez 3 Ether.\nA(ou)B(hr)C");
		expect(blocks.map((b) => b.kind)).toEqual([
			"line",
			"line",
			"or",
			"line",
			"rule",
			"line",
		]);
	});

	test("affiche Lien à part, avec son rappel de règle", () => {
		expect(parseCardText("(lien)Lancer : X")[0]).toEqual({
			kind: "keyword",
			label: "Lien",
			reminder:
				"Deux sorts ayant Lien peuvent être préparés sur la même brèche.",
		});
	});

	test("Duo : le rappel de règle seul, sans libellé", () => {
		expect(parseCardText("(duo)Lancer : X")[0]).toEqual({
			kind: "keyword",
			reminder: "Ce sort doit être préparé sur deux brèches adjacentes.",
		});
	});

	test("passe à la ligne avant « Lancer : » s'il n'ouvre pas le texte", () => {
		const blocks = parseCardText(
			"Lorsque préparé, gagnez 1 charge. Lancer : X",
		);
		expect(blocks).toHaveLength(2);
		expect(blocks[1]).toEqual({
			kind: "line",
			tokens: [
				{ kind: "bold", value: "Lancer :" },
				{ kind: "text", value: " X" },
			],
		});
		expect(parseCardText("Lancer : X")).toHaveLength(1);
	});

	test("ignore les morceaux vides", () => {
		expect(parseCardText("A\n\n(hr)")).toEqual([
			{ kind: "line", tokens: [{ kind: "text", value: "A" }] },
			{ kind: "rule" },
		]);
	});
});
