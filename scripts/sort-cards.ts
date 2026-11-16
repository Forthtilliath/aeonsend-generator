/**
 * Range les cartes de src/data/cards.ts par vague, boîte puis id, sans toucher
 * au texte de chaque carte. Lancer avec `bun run sort:cards`.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { compareCards } from "../src/data/cardOrder";
import { cards } from "../src/data/cards";

const FILE = new URL("../src/data/cards.ts", import.meta.url);
const source = readFileSync(FILE, "utf8").replaceAll("\r\n", "\n");

let output = source;
for (const [category, list] of Object.entries(cards)) {
	const header = `\t${category}: [\n`;
	const start = source.indexOf(header) + header.length;
	const end = source.indexOf("\n\t],", start);
	if (start < header.length || end === -1)
		throw new Error(`Catégorie ${category} introuvable`);

	const blocks = source.slice(start, end).match(/\t\t\{\n[\s\S]*?\n\t\t\},?/g);
	if (blocks?.length !== list.length)
		throw new Error(
			`${category} : ${blocks?.length} blocs pour ${list.length} cartes`,
		);

	// Les blocs sont dans l'ordre du tableau : on les trie avec leur carte.
	const sorted = list
		.map((card, i) => ({ card, block: (blocks[i] ?? "").replace(/,$/, "") }))
		.sort((a, b) => compareCards(a.card, b.card))
		.map(({ block }) => `${block},`)
		.join("\n");
	output = output.replace(source.slice(start, end), () => sorted);
}

writeFileSync(FILE, output);
console.log("Cartes triées.");
