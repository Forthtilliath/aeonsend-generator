import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { marketTemplates } from "../../data/marketTemplates";
import type { useMarket } from "../../hooks/useMarket";
import type { MarketCondition } from "../../types";
import { getMarketComposition } from "../../utils/supply";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { CustomMarketEditor } from "./CustomMarketEditor";
import { MarketPreview } from "./MarketPreview";

type MarketState = ReturnType<typeof useMarket>;

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
		className={`w-full h-full p-2 rounded-lg border-2 transition-all ${
			selected
				? "border-amber-500 bg-amber-900/40 shadow-lg shadow-amber-900/30"
				: "border-slate-700 bg-slate-800/50 hover:border-amber-700/50"
		}`}
	>
		<div className="text-sm font-semibold">{title}</div>
		<div className="text-xs text-gray-400">{subtitle}</div>
		<div className="text-xs mt-1 text-amber-100/80">
			{getMarketComposition(config)}
		</div>
	</button>
);

export const MarketSelector = ({ market }: { market: MarketState }) => {
	const [showDetails, setShowDetails] = useState(false);
	const {
		selectedMarket,
		setSelectedMarket,
		customMarket,
		userPresets,
		marketConfig,
	} = market;
	const isCustom = selectedMarket === "custom";

	return (
		<Card>
			<h2 className="text-lg font-bold mb-3 text-amber-200">Type de marché</h2>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
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
							className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold border-2 border-gray-800"
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
					onSelect={() => {
						setSelectedMarket("custom");
						setShowDetails(true);
					}}
				/>
			</div>

			<button
				type="button"
				onClick={() => setShowDetails((v) => !v)}
				className="text-sm text-amber-200/80 hover:text-amber-100 flex items-center gap-1"
				aria-expanded={showDetails}
			>
				{showDetails ? (
					<ChevronUp className="w-4 h-4" />
				) : (
					<ChevronDown className="w-4 h-4" />
				)}
				{isCustom ? "Composer le marché" : "Voir le détail des emplacements"}
			</button>

			{showDetails && (
				<div className="bg-gray-700/50 rounded-lg p-4 mt-3">
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
			)}
		</Card>
	);
};
