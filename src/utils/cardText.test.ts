import { describe, expect, test } from "bun:test";
import { parseCardText, tokenizeLine } from "./cardText";

const NBSP = " ";

describe("tokenizeLine", () => {
	test("remplace « N éther(s) » par l'icône et met les mots-clés en gras", () => {
		expect(
			tokenizeLine(`Lancer${NBSP}: Infligez 2 dégâts. Gagnez 1 éther.`),
		).toEqual([
			{ kind: "bold", value: `Lancer${NBSP}:` },
			{ kind: "text", value: " Infligez 2 dégâts. Gagnez " },
			{ kind: "aether", amount: "1" },
			{ kind: "text", value: "." },
		]);
		expect(tokenizeLine("Gagnez 3 éthers.")[1]).toEqual({
			kind: "aether",
			amount: "3",
		});
	});

	test("icône seule pour « éther » sans nombre", () => {
		expect(tokenizeLine("Gagnez un jeton éther.")).toEqual([
			{ kind: "text", value: "Gagnez un jeton " },
			{ kind: "aether" },
			{ kind: "text", value: "." },
		]);
	});

	test("ne touche pas à un mot qui contient éther", () => {
		expect(tokenizeLine("2 éthérées")).toEqual([
			{ kind: "text", value: "2 éthérées" },
		]);
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

	test("balises <b> et rappel <small><i>", () => {
		expect(tokenizeLine("« <b>OU</b> X »")).toEqual([
			{ kind: "text", value: "« " },
			{ kind: "bold", value: "OU" },
			{ kind: "text", value: " X »" },
		]);
		expect(tokenizeLine("<small><i>(Rappel de règle.)</i></small>")).toEqual([
			{ kind: "note", value: "(Rappel de règle.)" },
		]);
		expect(tokenizeLine("<small>Condition.</small> Gagnez 1 charge.")).toEqual([
			{ kind: "small", value: "Condition." },
			{ kind: "text", value: " Gagnez 1 charge." },
		]);
	});
});

describe("parseCardText", () => {
	test("découpe <br>, (ou) et (hr)", () => {
		const blocks = parseCardText("Gagnez 3 éthers.<br>A(ou)B(hr)C");
		expect(blocks.map((b) => b.kind)).toEqual([
			"line",
			"line",
			"or",
			"line",
			"rule",
			"line",
		]);
	});

	test("« Lancer : » ne coupe la ligne que sur un <br>", () => {
		expect(
			parseCardText("Lorsque préparé, gagnez 1 charge.<br>Lancer : X"),
		).toHaveLength(2);
		expect(parseCardText("« OU Lancer : X » Y")).toHaveLength(1);
	});

	test("ignore les morceaux vides", () => {
		expect(parseCardText("A<br><br>(hr)")).toEqual([
			{ kind: "line", tokens: [{ kind: "text", value: "A" }] },
			{ kind: "rule" },
		]);
	});
});
