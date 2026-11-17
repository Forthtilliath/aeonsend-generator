/**
 * Nom de fichier tiré d'un nom affiché : « Cœur de la corruption » donne
 * « coeur-de-la-corruption ». Même règle que `Get-Slug` dans
 * scripts/nemesis-art.ps1, qui nomme les illustrations des Némésis.
 */
export const slugify = (name: string): string =>
	name
		.normalize("NFD")
		.replace(/\p{Mn}/gu, "")
		.toLowerCase()
		.replaceAll("œ", "oe")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
