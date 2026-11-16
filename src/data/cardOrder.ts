import type { Card } from "../types";
import { ALL_EXPANSIONS } from "./expansions";

/** Rang de la boîte dans l'ordre des vagues ; « Inconnue » passe en dernier. */
const expansionRank = (card: Card): number => {
	const rank = ALL_EXPANSIONS.indexOf(card.expansion);
	return rank === -1 ? ALL_EXPANSIONS.length : rank;
};

/** Numéro final de l'id (« EN-FIN-044 » → 44), pour ignorer préfixes et zéros. */
const idNumber = (card: Card): number =>
	Number(card.id.match(/(\d+)$/)?.[1] ?? Number.POSITIVE_INFINITY);

/** Ordre des cartes dans les données : par vague et boîte, puis par id. */
export const compareCards = (a: Card, b: Card): number =>
	expansionRank(a) - expansionRank(b) ||
	idNumber(a) - idNumber(b) ||
	a.id.localeCompare(b.id, "fr", { numeric: true });
