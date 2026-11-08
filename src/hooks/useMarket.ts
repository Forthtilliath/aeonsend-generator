import {
	defaultCustomMarket,
	findMarketTemplate,
	marketTemplates,
} from "../data/marketTemplates";
import {
	marketConfigSchema,
	selectedMarketSchema,
	userPresetsSchema,
} from "../schemas/storage";
import type { MarketCondition, MarketTemplate } from "../types";
import type { Tuple } from "../types/helpers";
import { useLocalStorage } from "./useLocalStorage";

export type MarketConfig = Tuple<MarketCondition, 9>;

const DEFAULT_MARKET = "balanced";

/**
 * Choix du marché : modèles fournis, presets perso, marché personnalisable.
 * Le choix et le marché personnalisé sont conservés d'une visite à l'autre.
 */
export const useMarket = () => {
	const [storedSelection, setSelectedMarket] = useLocalStorage<string>(
		"selectedMarket",
		DEFAULT_MARKET,
		selectedMarketSchema,
	);
	const [customMarket, setCustomMarket] = useLocalStorage<MarketConfig>(
		"customMarket",
		[...defaultCustomMarket],
		marketConfigSchema,
	);
	const [userPresets, setUserPresets] = useLocalStorage<MarketTemplate[]>(
		"userMarketPresets",
		[],
		userPresetsSchema,
	);

	// Un identifiant enregistré qui ne correspond plus à rien (preset supprimé,
	// modèle renommé) retombe sur le marché par défaut.
	const selectedMarket =
		storedSelection === "custom" ||
		findMarketTemplate(storedSelection, userPresets)
			? storedSelection
			: DEFAULT_MARKET;

	const selectedTemplate =
		selectedMarket === "custom"
			? undefined
			: findMarketTemplate(selectedMarket, userPresets);
	const marketConfig: MarketConfig = selectedTemplate?.config ?? customMarket;
	// Les modèles fournis sont nommés « Titre : précision » : seul le titre sert.
	// Un preset perso garde son nom entier (il peut contenir « : »).
	const selectedMarketName = !selectedTemplate
		? "Personnalisable"
		: marketTemplates.has(selectedTemplate.id)
			? (selectedTemplate.name.split(":")[0]?.trim() ?? selectedTemplate.name)
			: selectedTemplate.name;

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
		selectedMarketName,
		copyToCustom,
		resetCustom,
		savePreset,
		deletePreset,
	};
};
