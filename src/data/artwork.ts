import { slugify } from "../utils/slug";

/**
 * Images rangées par slug du nom (cf. `slugify`). Vite les copie dans
 * /assets avec un hash : elles profitent du cache long défini dans vercel.json.
 */
const bySlug = (files: Record<string, string>): Map<string, string> =>
	new Map(
		Object.entries(files).map(([path, url]) => [
			path.slice(path.lastIndexOf("/") + 1, path.lastIndexOf(".")),
			url,
		]),
	);

/** Haut des plateaux Némésis, récupéré par scripts/nemesis-art.ps1. */
const NEMESIS_ART = bySlug(
	import.meta.glob<string>("../assets/nemeses/*.jpg", {
		eager: true,
		query: "?url",
		import: "default",
	}),
);

/**
 * Plateaux des mages : vide pour l'instant. Déposer un scan dans
 * src/assets/mages/<slug du nom>.jpg (ex. « moineau.jpg ») suffit à l'afficher
 * dans la fiche du mage.
 */
const MAGE_BOARDS = bySlug(
	import.meta.glob<string>("../assets/mages/*.{jpg,png,webp}", {
		eager: true,
		query: "?url",
		import: "default",
	}),
);

export const getNemesisArt = (name: string): string | undefined =>
	NEMESIS_ART.get(slugify(name));

export const getMageBoard = (name: string): string | undefined =>
	MAGE_BOARDS.get(slugify(name));
