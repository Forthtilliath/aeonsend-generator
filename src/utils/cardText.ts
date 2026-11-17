/**
 * Découpe le texte d'une carte du marché en blocs affichables, avec les mêmes
 * balises que les données (et que les scripts nanDECK) :
 * `(ou)` alternative, `(hr)` trait de séparation, `(duo)`/`(echo)`/`(lien)`
 * mot-clé en tête de texte, `\n` retour à la ligne.
 */

export type TextToken =
	| { kind: "text"; value: string }
	| { kind: "bold"; value: string }
	/** « 3 Ether » : le nombre suivi de l'icône d'éther. */
	| { kind: "aether"; amount: string };

export type TextBlock =
	| { kind: "line"; tokens: TextToken[] }
	| { kind: "or" }
	| { kind: "rule" }
	/**
	 * Mot-clé affiché (`label`) et/ou rappel de sa règle (`reminder`), absent
	 * du texte des cartes.
	 */
	| { kind: "keyword"; label?: string; reminder?: string };

const KEYWORDS: Record<
	string,
	Omit<Extract<TextBlock, { kind: "keyword" }>, "kind">
> = {
	// Duo : pas de libellé sur la carte, seulement le rappel.
	"(duo)": {
		reminder: "Ce sort doit être préparé sur deux brèches adjacentes.",
	},
	"(echo)": { label: "Écho" },
	// Même rappel que les cartes nanDECK (commun/carte-joueur-texte.txt).
	"(lien)": {
		label: "Lien",
		reminder: "Deux sorts ayant Lien peuvent être préparés sur la même brèche.",
	},
};

const MARKERS = /(\(ou\)|\(hr\)|\(duo\)|\(echo\)|\(lien\)|\n)/;
// Mots-clés en gras, comme sur les cartes nanDECK.
const KEYWORD_SOURCE =
	"Lancer :|Rappel :|Vaincu :|Durable :|Xaxos ?:|Connectez|Conjurez|Conjurer";
const INLINE = new RegExp(
	`((?:${KEYWORD_SOURCE})(?![\\p{L}])|\\d+ Ether(?![\\p{L}]))`,
	"u",
);
const AETHER = /^(\d+) Ether$/;
const BOLD = new RegExp(`^(?:${KEYWORD_SOURCE})$`);

export const tokenizeLine = (line: string): TextToken[] =>
	line
		.split(INLINE)
		.filter((part) => part !== "")
		.map((part): TextToken => {
			const aether = AETHER.exec(part);
			if (aether?.[1]) return { kind: "aether", amount: aether[1] };
			if (BOLD.test(part)) return { kind: "bold", value: part };
			return { kind: "text", value: part };
		});

export const parseCardText = (description: string): TextBlock[] => {
	const blocks: TextBlock[] = [];
	for (const piece of description.split(MARKERS)) {
		if (piece === "(ou)") blocks.push({ kind: "or" });
		else if (piece === "(hr)") blocks.push({ kind: "rule" });
		else if (KEYWORDS[piece]) {
			blocks.push({ kind: "keyword", ...KEYWORDS[piece] });
		} else if (piece.trim() !== "" && piece !== "\n") {
			// « Lancer : » ouvre toujours une nouvelle ligne, comme sur les cartes.
			for (const line of piece.split(/(?=Lancer :)/)) {
				if (line.trim() !== "") {
					blocks.push({ kind: "line", tokens: tokenizeLine(line.trim()) });
				}
			}
		}
	}
	return blocks;
};
