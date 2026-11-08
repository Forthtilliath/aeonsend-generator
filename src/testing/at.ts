/**
 * Élément d'index `index` (négatif : depuis la fin), pour les tests : lève une
 * erreur explicite au lieu de laisser passer `undefined`.
 */
export const at = <T>(items: readonly T[], index: number): T => {
	const item = items.at(index);
	if (item === undefined) {
		throw new Error(`at: no item at index ${index} (length ${items.length})`);
	}
	return item;
};
