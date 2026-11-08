import { useState } from "react";
import {
	defaultCustomMarket,
	findMarketTemplate,
} from "../data/marketTemplates";
import { userPresetsSchema } from "../schemas/storage";
import type { MarketCondition, MarketTemplate } from "../types";
import type { Tuple } from "../types/helpers";
import { useLocalStorage } from "./useLocalStorage";

export type MarketConfig = Tuple<MarketCondition, 9>;

/** Choix du marché : modèles fournis, presets perso, marché personnalisable. */
export const useMarket = () => {
	const [selectedMarket, setSelectedMarket] = useState("balanced");
	const [customMarket, setCustomMarket] = useState<MarketConfig>([
		...defaultCustomMarket,
	]);
	const [userPresets, setUserPresets] = useLocalStorage<MarketTemplate[]>(
		"userMarketPresets",
		[],
		userPresetsSchema,
	);

	const marketConfig: MarketConfig =
		selectedMarket === "custom"
			? customMarket
			: (findMarketTemplate(selectedMarket, userPresets)?.config ??
				customMarket);

	const copyToCustom = (templateId: string): void => {
		const template = findMarketTemplate(templateId, userPresets);
		if (!template) return;
		setCustomMarket([...template.config]);
		setSelectedMarket("custom");
	};

	const resetCustom = (): void => setCustomMarket([...defaultCustomMarket]);

	const savePreset = (name: string): void => {
		const trimmed = name.trim().slice(0, 40);
		if (!trimmed) return;
		setUserPresets((prev) => [
			...prev,
			{ id: crypto.randomUUID(), name: trimmed, config: [...customMarket] },
		]);
	};

	const deletePreset = (id: string): void => {
		setUserPresets((prev) => prev.filter((preset) => preset.id !== id));
		if (selectedMarket === id) setSelectedMarket("custom");
	};

	return {
		selectedMarket,
		setSelectedMarket,
		customMarket,
		setCustomMarket,
		userPresets,
		marketConfig,
		copyToCustom,
		resetCustom,
		savePreset,
		deletePreset,
	};
};
