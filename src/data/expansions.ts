import type { Expansion } from "../types";

export interface ExpansionWave {
	label: string;
	/** Boîte jouable seule, qui ouvre la vague. */
	standalone: Expansion;
	/** Extensions de la vague, qui demandent une boîte autonome pour être jouées. */
	expansions: Expansion[];
}

/**
 * Vagues de sortie, d'après https://aeonsend.wiki.gg/wiki/Set.
 * À l'État Sauvage et Tales of Old Gravehold n'appartiennent officiellement à
 * aucune vague : rangées comme sur le wiki, avec la boîte autonome qu'elles complètent.
 */
export const EXPANSION_WAVES: ExpansionWave[] = [
	{
		label: "Vague 1",
		standalone: "Aeon's End",
		expansions: ["Les Profondeurs", "Les Sans-Noms"],
	},
	{
		label: "Vague 2",
		standalone: "Guerre Éternelle",
		expansions: ["Le Vide", "Ténèbres d'Ailleurs"],
	},
	{
		label: "Vague 3",
		standalone: "Legacy",
		expansions: ["Secrets Enfouis"],
	},
	{
		label: "Vague 4",
		standalone: "Une Ère Nouvelle",
		expansions: ["Rêves Brisés", "De Vieux Souvenirs", "À l'État Sauvage"],
	},
	{
		label: "Vague 5",
		standalone: "Les Parias",
		expansions: ["Retour à Gravehold", "Le Village du Sud"],
	},
	{
		label: "Vague 6",
		standalone: "Legacy of Gravehold",
		expansions: ["The Ruins"],
	},
	{
		label: "Vague 7",
		standalone: "Past and Future",
		expansions: ["Origins", "Evolution"],
	},
	{
		label: "Vague 8",
		standalone: "Le Commencement",
		expansions: ["Les Cavernes", "Les Abysses", "Tales of Old Gravehold"],
	},
	{
		label: "Vague 9",
		standalone: "Beyond the Breach",
		expansions: ["The Surface", "The Returned"],
	},
	{
		label: "Vague 10",
		standalone: "System Overload",
		expansions: ["The Cinderkeep", "The Wastes"],
	},
];

export const waveBoxes = (wave: ExpansionWave): Expansion[] => [
	wave.standalone,
	...wave.expansions,
];

export const ALL_EXPANSIONS: Expansion[] = EXPANSION_WAVES.flatMap(waveBoxes);
