import { createPluralize, pickRandom } from "@forthtilliath/ts-kit";
import type { Card, Expansion, MarketCondition } from "../types";

export const isExpansionOwned = (
	expansion: Expansion,
	ownedExpansions: ReadonlySet<Expansion>,
): boolean => expansion === "Inconnue" || ownedExpansions.has(expansion);

export const matchesCondition = (
	card: Card,
	condition: MarketCondition,
): boolean => {
	if (condition.operator === "any") return true;
	if (condition.cost === null) return true;
	if (condition.operator === "<=") return card.cost <= condition.cost;
	if (condition.operator === ">=") return card.cost >= condition.cost;
	if (condition.operator === "=") return card.cost === condition.cost;
	if (condition.operator === "range") {
		return card.cost >= condition.cost && card.cost <= condition.costMax;
	}
	return false;
};

export const getTypeLabel = (type: string): string => {
	if (type === "gem") return "Gemme";
	if (type === "relic") return "Relique";
	if (type === "any") return "Tout";
	return "Sort";
};

export const getCriteriaLabel = (criteria: MarketCondition): string => {
	if (!criteria) return "";
	if (criteria.operator === "any") return "Tout";
	if (criteria.operator === "range") {
		return `Entre ${criteria.cost}⚡ et ${criteria.costMax}⚡`;
	}
	if (criteria.operator === "<=") {
		return `≤ ${criteria.cost}⚡`;
	}
	if (criteria.operator === ">=") {
		return `≥ ${criteria.cost}⚡`;
	}
	return `${criteria.cost}⚡`;
};

/**
 * Nombre dans `[0, 1)` tiré par `crypto.getRandomValues`, à passer aux
 * tirages de ts-kit (`shuffle`, `pickRandom`) à la place de `Math.random`.
 * L'écart à l'uniforme (au plus n / 2³² pour n éléments) est négligeable.
 */
export const secureRandom = (): number => {
	const [value = 0] = crypto.getRandomValues(new Uint32Array(1));
	return value / 0x1_0000_0000;
};

/** Élément tiré au hasard ; lève une erreur sur un tableau vide. */
export const pickRandomItem = <T>(items: readonly T[]): T => {
	if (items.length === 0) {
		throw new Error("pickRandomItem: cannot pick from an empty array");
	}
	return pickRandom(items, secureRandom) as T;
};

/** Accord en nombre à la française (0 et 1 au singulier). */
export const plural = createPluralize("fr");

export function copyTuple<T extends unknown[]>(tuple: T): T {
	return tuple.slice() as T;
}
