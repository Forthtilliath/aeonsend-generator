import { usePersistentState } from "@forthtilliath/react-kit/usePersistentState";
import { randomId } from "@forthtilliath/ts-kit";
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

export type MarketConfig = Tuple<MarketCondition, 9>;

const DEFAULT_MARKET = "balanced";
// Valeurs par défaut stables (constantes de module), exigé par usePersistentState.
const NO_PRESETS: MarketTemplate[] = [];

/**
 * Choix du marché : modèles fournis, presets perso, marché personnalisable.
 * Le choix et le marché personnalisé sont conservés d'une visite à l'autre.
 */
export const useMarket = () => {
	const { value: storedSelection, setValue: setSelectedMarket } =
		usePersistentState<string>("selectedMarket", DEFAULT_MARKET, {
			schema: selectedMarketSchema,
		});
	const { value: customMarket, setValue: setCustomMarket } =
		usePersistentState<MarketConfig>("customMarket", defaultCustomMarket, {
			schema: marketConfigSchema,
		});
	const { value: userPresets, setValue: setUserPresets } = usePersistentState<
		MarketTemplate[]
	>("userMarketPresets", NO_PRESETS, { schema: userPresetsSchema });

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
			// randomId : crypto.randomUUID n'existe qu'en HTTPS (pas sur le réseau local).
			{ id: randomId(), name: trimmed, config: [...customMarket] },
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
