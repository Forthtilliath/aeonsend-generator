import type { PowerPhase } from "../types";

/** Moment où le pouvoir d'un mage peut être utilisé, tel qu'affiché dans sa fiche. */
export const PHASE_LABELS: Record<PowerPhase, string> = {
	nemesesDraw: "Pendant le tour de la Némésis, quand elle pioche une carte",
	currentPlayerMain: "Pendant votre phase principale",
	anyPlayerMain: "Pendant la phase principale de n'importe quel joueur",
	turnOrderDraw: "Quand une carte d'ordre du tour est piochée",
	currentPlayerMainOrIncantation:
		"Pendant votre phase principale ou d'incantation",
	allyPlayerMain: "Pendant la phase principale d'un allié",
	allyPlayerCasting: "Pendant la phase d'incantation d'un allié",
	currentPlayerEndDraw: "À la fin de votre phase de pioche",
};
