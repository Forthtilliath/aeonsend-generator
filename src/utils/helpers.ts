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

export const clamp = (value: number, min: number, max: number): number => {
	if (Number.isNaN(value)) return min;
	return Math.min(Math.max(value, min), max);
};

export const getTypeColor = (type: string): string => {
	if (type === "gem") return "from-purple-500 to-fuchsia-500";
	if (type === "relic") return "from-blue-500 to-cyan-500";
	return "from-yellow-500 to-amber-500";
};

export const getTypeBgColor = (type: string): string => {
	if (type === "gem") return "bg-purple-800/40 border-purple-400/70";
	if (type === "relic") return "bg-blue-800/40 border-blue-400/70";
	return "bg-yellow-800/40 border-yellow-400/70";
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

export const generateRandomInteger = (max: number): number => {
	if (max <= 0) return 0;

	// Rejects values beyond the last full multiple of `max` so the modulo
	// below stays uniform, instead of biasing the low end of the range.
	const MAX_UINT32 = 0xffffffff;
	const rejectionLimit = MAX_UINT32 - (MAX_UINT32 % max);

	let value: number;
	do {
		value = crypto.getRandomValues(new Uint32Array(1))[0];
	} while (value > rejectionLimit);

	return value % max;
};

export const getRandomItemFromArray = <T>(arr: T[]): T => {
	if (arr.length === 0) {
		throw new Error("getRandomItemFromArray: cannot pick from an empty array");
	}
	const randomIndex = generateRandomInteger(arr.length);
	return arr[randomIndex];
};

export function shuffle<T>(array: T[]): T[] {
	const shuffledArray = [...array];
	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const j = generateRandomInteger(i + 1);
		[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
	}
	return shuffledArray;
}

export function copyTuple<T extends unknown[]>(tuple: T): T {
	return tuple.slice() as T;
}
