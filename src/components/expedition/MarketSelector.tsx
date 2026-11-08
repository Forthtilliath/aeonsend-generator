import { marketTemplates } from "../../data/marketTemplates";
import type { useMarket } from "../../hooks/useMarket";
import type { MarketCondition } from "../../types";
import { getMarketComposition } from "../../utils/supply";
import { Button } from "../ui/Button";
import { CustomMarketEditor } from "./CustomMarketEditor";
import { MarketPreview } from "./MarketPreview";

export type MarketState = ReturnType<typeof useMarket>;

interface MarketButtonProps {
	title: string;
	subtitle: string;
	config: MarketCondition[];
	selected: boolean;
	onSelect: () => void;
}

const MarketButton = ({
	title,
	subtitle,
	config,
	selected,
	onSelect,
}: MarketButtonProps) => (
	<button
		type="button"
		onClick={onSelect}
		aria-pressed={selected}
		className="rune-toggle w-full h-full p-2"
	>
		<div className="text-sm font-semibold">{title}</div>
		<div className="text-xs text-bone-500">{subtitle}</div>
		<div className="text-xs mt-1 text-aether-300/90">
			{getMarketComposition(config)}
		</div>
	</button>
);

export const MarketSelector = ({ market }: { market: MarketState }) => {
	const {
		selectedMarket,
		setSelectedMarket,
		customMarket,
		userPresets,
		marketConfig,
	} = market;
	const isCustom = selectedMarket === "custom";

	return (
		// Seule la liste des marchés défile : le détail reste toujours visible
		// dessous. Si la place manque (petit écran), le panneau entier défile.
		<section aria-label="Type de marché" className="flex h-full flex-col">
			<div className="rune-scroll -mx-1 min-h-32 flex-1 overflow-y-auto overscroll-contain px-2 py-2">
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
					{Array.from(marketTemplates.values()).map((template) => {
						const [title, subtitle] = template.name.split(":");
						return (
							<MarketButton
								key={template.id}
								title={title.trim()}
								subtitle={subtitle?.trim() ?? ""}
								config={template.config}
								selected={selectedMarket === template.id}
								onSelect={() => setSelectedMarket(template.id)}
							/>
						);
					})}

					{userPresets.map((preset) => (
						<div key={preset.id} className="relative">
							<MarketButton
								title={preset.name}
								subtitle="Preset perso"
								config={preset.config}
								selected={selectedMarket === preset.id}
								onSelect={() => setSelectedMarket(preset.id)}
							/>
							<button
								type="button"
								onClick={() => market.deletePreset(preset.id)}
								className="absolute -top-2 -right-2 bg-ember-600 hover:bg-ember-500 text-bone-50 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold border-2 border-abyss-900"
								title="Supprimer ce preset"
								aria-label={`Supprimer le preset ${preset.name}`}
							>
								✕
							</button>
						</div>
					))}

					<MarketButton
						title="Personnalisable"
						subtitle="À composer vous-même"
						config={customMarket}
						selected={isCustom}
						onSelect={() => setSelectedMarket("custom")}
					/>
				</div>
			</div>

			<div className="shrink-0 pt-3">
				<h3 className="rune-title text-sm mb-2">
					{isCustom ? "Composer le marché" : "Détail des emplacements"}
				</h3>
				<div className="rune-panel rune-panel--sunken p-4">
					{isCustom ? (
						<CustomMarketEditor
							market={customMarket}
							onChange={market.setCustomMarket}
							onReset={market.resetCustom}
							onSavePreset={market.savePreset}
						/>
					) : (
						<>
							<div className="flex justify-end mb-2">
								<Button
									variant="secondary"
									size="sm"
									onClick={() => market.copyToCustom(selectedMarket)}
								>
									Modifier (copier vers Personnalisable)
								</Button>
							</div>
							<MarketPreview config={marketConfig} />
						</>
					)}
				</div>
			</div>
		</section>
	);
};
