import { useState } from "react";
import type {
	Battle,
	Expansion,
	Expedition,
	MarketCondition,
	SetupConfig,
} from "../types";
import { buildExpedition } from "../utils/expedition";
import {
	generateSupply,
	removeSupplyCard,
	rerollSupplyCard,
} from "../utils/supply";

/** Campagne tirée et actions sur les marchés de chaque affrontement. */
export const useExpedition = (ownedExpansions: ReadonlySet<Expansion>) => {
	const [expedition, setExpedition] = useState<Expedition | null>(null);
	const [warnings, setWarnings] = useState<string[]>([]);

	const updateBattle = (
		index: number,
		update: (battle: Battle, expedition: Expedition) => Battle | null,
	): void => {
		setExpedition((prev) => {
			const battle = prev?.battles[index];
			if (!prev || !battle) return prev;
			const next = update(battle, prev);
			if (!next) return prev;
			const battles = prev.battles.map((b, i) => (i === index ? next : b));
			return { ...prev, battles };
		});
	};

	const generate = (setup: SetupConfig, marketConfig: MarketCondition[]) => {
		const result = buildExpedition(setup, marketConfig, ownedExpansions);
		setExpedition(result.expedition);
		setWarnings(result.warnings);
	};

	const resetMarket = (index: number) =>
		updateBattle(index, (battle, { marketConfig }) =>
			battle.remainingResets > 0
				? {
						...battle,
						supply: generateSupply(marketConfig, ownedExpansions),
						remainingResets: battle.remainingResets - 1,
					}
				: null,
		);

	const rerollCard = (index: number, position: number, replace: boolean) =>
		updateBattle(index, (battle) => {
			if (battle.remainingRerolls <= 0) return null;
			const supply = rerollSupplyCard(
				battle.supply,
				position,
				replace,
				ownedExpansions,
			);
			return supply
				? { ...battle, supply, remainingRerolls: battle.remainingRerolls - 1 }
				: null;
		});

	const removeCard = (index: number, position: number) =>
		updateBattle(index, (battle) => ({
			...battle,
			supply: removeSupplyCard(battle.supply, position),
		}));

	return {
		expedition,
		warnings,
		dismissWarnings: () => setWarnings([]),
		generate,
		resetMarket,
		rerollCard,
		removeCard,
	};
};
