/**
 * Découpe le texte d'une carte du marché en blocs affichables. La syntaxe est
 * celle des CSV nanDECK, pour copier un texte d'un côté à l'autre tel quel :
 * `<br>` retour à la ligne, `(ou)` alternative, `(hr)` trait de séparation,
 * « éther(s) » remplacé par l'icône, `<b>…</b>` gras, `<small>…</small>` petit
 * texte et `<small><i>…</i></small>` rappel de règle. Espace normale ou insécable avant les deux-points.
 */

import type { CardKeywordId } from "../types";

export type TextToken =
	| { kind: "text"; value: string }
	| { kind: "bold"; value: string }
	/** Rappel de règle, en petit et en italique (`<small><i>`). */
	| { kind: "note"; value: string }
	/** Texte en petit, sans italique (`<small>` seul). */
	| { kind: "small"; value: string }
	/** « 3 éthers » : le nombre (s'il y en a un) suivi de l'icône d'éther. */
	| { kind: "aether"; amount?: string };

export type TextBlock =
	| { kind: "line"; tokens: TextToken[] }
	| { kind: "or" }
	| { kind: "rule" };

/** Mot-clé en tête de texte, porté par un champ de la carte. */
export interface CardKeyword {
	/** Libellé affiché (Duo n'en a pas sur la carte). */
	label?: string;
	/** Rappel de règle, comme sur les cartes nanDECK. */
	reminder?: string;
}

export const CARD_KEYWORDS = {
	echo: { label: "Écho" },
	link: {
		label: "Lien",
		reminder: "Deux sorts ayant Lien peuvent être préparés sur la même brèche.",
	},
	duo: {
		reminder:
			"Ce sort doit être préparé sur deux brèches adjacentes, de manière à ce qu’il touche les deux brèches. Les deux brèches sont occupées par ce sort.",
	},
} as const satisfies Record<CardKeywordId, CardKeyword>;

const MARKERS = /(\(ou\)|\(hr\)|<br>)/;
// Mots-clés en gras, comme sur les cartes nanDECK (espace normale ou insécable).
const KEYWORD_SOURCE =
	"(?:Lancer|Rappel|Vaincu|Durable|Xaxos ?)[ \\u00a0]:|Connectez|Conjurez|Conjurer";
const INLINE = new RegExp(
	[
		"<small><i>.*?</i></small>",
		"<small>.*?</small>",
		"<i>.*?</i>",
		"<b>.*?</b>",
		`(?:${KEYWORD_SOURCE})(?![\\p{L}])`,
		"(?<![\\p{L}])(?:\\d+ )?éthers?_?(?![\\p{L}])",
	].join("|"),
	"u",
);
const SPLIT = new RegExp(`(${INLINE.source})`, "u");
const AETHER = /^(?:(\d+) )?éthers?_?$/;
const BOLD = new RegExp(`^(?:${KEYWORD_SOURCE})$`, "u");
const TAGS = /<\/?(?:small|i|b)>/g;

export const tokenizeLine = (line: string): TextToken[] =>
	line
		.split(SPLIT)
		.filter((part) => part !== "")
		.map((part): TextToken => {
			const aether = AETHER.exec(part);
			if (aether)
				return aether[1]
					? { kind: "aether", amount: aether[1] }
					: { kind: "aether" };
			if (part.startsWith("<small><i>") || part.startsWith("<i>")) {
				return { kind: "note", value: part.replace(TAGS, "") };
			}
			if (part.startsWith("<small>")) {
				return { kind: "small", value: part.replace(TAGS, "") };
			}
			if (part.startsWith("<b>") || BOLD.test(part)) {
				return { kind: "bold", value: part.replace(TAGS, "") };
			}
			return { kind: "text", value: part };
		});

export const parseCardText = (description: string): TextBlock[] => {
	const blocks: TextBlock[] = [];
	for (const piece of description.split(MARKERS)) {
		if (piece === "(ou)") blocks.push({ kind: "or" });
		else if (piece === "(hr)") blocks.push({ kind: "rule" });
		else if (piece !== "<br>" && piece.trim() !== "") {
			blocks.push({ kind: "line", tokens: tokenizeLine(piece.trim()) });
		}
	}
	return blocks;
};
