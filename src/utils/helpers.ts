import { cards } from "../data/cards";
import type { Battle, Card, MarketCondition, SupplyCard } from "../types";

export const matchesCondition = (
	card: Card,
	condition: MarketCondition,
): boolean => {
	if (condition.operator === "any") return true;
	if (condition.cost === null) return true;
	if (condition.operator === "<=") return card.cost <= condition.cost;
	if (condition.operator === ">=") return card.cost >= condition.cost;
	if (condition.operator === "=") return card.cost === condition.cost;
  if(condition.operator === "range") {
    return card.cost >= condition.cost && card.cost <= condition.costMax;
  }
	return false;
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

export const generateSupply = (
	marketConfig: MarketCondition[],
	existingSupply: SupplyCard[] = [],
	removeExcess: boolean = false,
): SupplyCard[] => {
	const supply: SupplyCard[] = [];
	const usedCards = new Set(existingSupply.map((c) => c.name));

	marketConfig.forEach((condition, index) => {
		const typeKey =
			condition.type === "gem"
				? "gems"
				: condition.type === "relic"
					? "relics"
					: "spells";
		const availableCards = cards[typeKey].filter(
			(card) => matchesCondition(card, condition) && !usedCards.has(card.name),
		);

		if (availableCards.length > 0) {
			const card = getRandomItemFromArray(availableCards);
			supply.push({
				...card,
				type: condition.type,
				position: index + 1,
				criteria: condition,
			});
			usedCards.add(card.name);
		}
	});

	const sorted: SupplyCard[] = [];
	(["gem", "relic", "spell"] as const).forEach((type) => {
		let cardsOfType = supply
			.filter((c) => c.type === type)
			.sort((a, b) => a.cost - b.cost);

		if (removeExcess) {
			const maxCount = marketConfig.filter((c) => c.type === type).length;
			if (cardsOfType.length > maxCount) {
				cardsOfType = cardsOfType.slice(0, maxCount);
			}
		}
		sorted.push(...cardsOfType);
	});

	return sorted.map((card, idx) => ({ ...card, position: idx + 1 }));
};

export const hasExcessCards = (
	battle: Battle,
	marketConfig: MarketCondition[],
): Record<string, boolean> => {
	if (!battle) return {};
	const result: Record<string, boolean> = {};

	(["gem", "relic", "spell"] as const).forEach((type) => {
		const cardsOfType = battle.supply.filter((c) => c.type === type);
		const maxCount = marketConfig.filter((c) => c.type === type).length;
		result[type] = cardsOfType.length > maxCount;
	});

	return result;
};

export const generateRandomInteger = (max: number): number => {
	const bytes = new Uint8Array(1);
	crypto.getRandomValues(bytes);
	return bytes[0] % max;
};

export const getRandomItemFromArray = <T>(arr: T[]): T => {
	const randomIndex = generateRandomInteger(arr.length);
	return arr[randomIndex];
};

export function shuffle<T>(array: T[]): T[] {
	const shuffledArray = [...array];
	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
	}
	return shuffledArray;
}

export function copyTuple<T extends unknown[]>(tuple: T): T {
	return tuple.slice() as T;
}
