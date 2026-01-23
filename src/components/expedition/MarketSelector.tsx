import { X } from "lucide-preact";
import { marketTemplates } from "../../data/marketTemplates";
import type { MarketCondition } from "../../types";
import { getCriteriaLabel, getTypeLabel } from "../../utils/helpers";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

interface MarketSelectorProps {
	selectedMarket: string;
	setSelectedMarket: (market: string) => void;
	showMarketConfig: boolean;
	setShowMarketConfig: (show: boolean) => void;
	customMarket: MarketCondition[];
	setCustomMarket: (market: MarketCondition[]) => void;
	onLoadTemplate: (key: string) => void;
	onResetCustom: () => void;
}

export const MarketSelector = ({
	selectedMarket,
	setSelectedMarket,
	showMarketConfig,
	setShowMarketConfig,
	customMarket,
	setCustomMarket,
	onLoadTemplate,
	onResetCustom,
}: MarketSelectorProps) => {
	return (
		<Card>
			<h2 className="text-lg font-bold mb-3 text-amber-200">Marché</h2>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
				{(["balanced", "pierced", "master"] as const).map((key) => (
					<button
						type="button"
						key={key}
						onClick={() => {
							setSelectedMarket(key);
							setShowMarketConfig(true);
						}}
						className={`p-2 rounded-lg border-2 transition-all ${
							selectedMarket === key
								? "border-amber-500 bg-amber-900/40 shadow-lg shadow-amber-900/30"
								: "border-slate-700 bg-slate-800/50 hover:border-amber-700/50"
						}`}
					>
						<div className="text-sm font-semibold">
							{marketTemplates[key].name.split(":")[0]}
						</div>
						<div className="text-xs text-gray-400">
							{marketTemplates[key].name.split(":")[1]}
						</div>
					</button>
				))}

				<button
					type="button"
					onClick={() => {
						setSelectedMarket("custom");
						setShowMarketConfig(true);
					}}
					className={`p-2 rounded-lg border-2 transition-all ${
						selectedMarket === "custom"
							? "border-amber-500 bg-amber-900/40 shadow-lg shadow-amber-900/30"
							: "border-slate-700 bg-slate-800/50 hover:border-amber-700/50"
					}`}
				>
					<div className="text-sm font-semibold">Marché #8</div>
					<div className="text-xs text-gray-400">Personnalisé</div>
				</button>
			</div>

			{showMarketConfig && (
				<div className="bg-gray-700/50 rounded-lg p-4 mb-4">
					<div className="flex justify-between items-center mb-3">
						<h3 className="font-bold">
							Configuration:{" "}
							{selectedMarket === "custom"
								? "Marché #8 Personnalisé"
								: marketTemplates[selectedMarket].name}
						</h3>
						<button
							type="button"
							onClick={() => setShowMarketConfig(false)}
							className="text-gray-400 hover:text-white"
						>
							<X className="w-5 h-5" />
						</button>
					</div>

					{selectedMarket === "custom" ? (
						<>
							<div className="flex justify-end mb-2">
								<Button variant="ghost" size="sm" onClick={onResetCustom}>
									Réinitialiser
								</Button>
							</div>
							<div className="grid grid-cols-3 md:grid-cols-9 gap-2">
								{customMarket.map((slot, idx) => (
									<div key={idx} className="bg-gray-600/50 rounded p-2">
										<select
											value={slot.type}
											onChange={(e) => {
												const newMarket = [...customMarket];
												newMarket[idx].type = e.currentTarget.value as
													| "gem"
													| "relic"
													| "spell";
												setCustomMarket(newMarket);
											}}
											className="w-full bg-gray-700 rounded px-1 py-1 text-xs mb-1"
										>
											<option value="gem">Gemme</option>
											<option value="relic">Relique</option>
											<option value="spell">Sort</option>
										</select>
										<div className="text-xs mb-1 text-center font-semibold">
											Coût en ⚡
										</div>
										<select
											value={slot.operator}
											onChange={(e) => {
												const newMarket = [...customMarket];
												newMarket[idx].operator = e.currentTarget.value as
													| "<="
													| ">="
													| "="
													| "any";
												if (e.currentTarget.value === "any")
													newMarket[idx].cost = null;
												setCustomMarket(newMarket);
											}}
											className="w-full bg-gray-700 rounded px-1 py-1 text-xs mb-1"
										>
											<option value="<=">≤</option>
											<option value=">=">≥</option>
											<option value="=">=</option>
											<option value="any">any</option>
										</select>
										{slot.operator !== "any" && (
											<input
												type="number"
												min="0"
												max="9"
												value={slot.cost || 0}
												onChange={(e) => {
													const newMarket = [...customMarket];
													newMarket[idx].cost =
														parseInt(e.currentTarget.value, 10) || 0;
													setCustomMarket(newMarket);
												}}
												className="w-full bg-gray-700 rounded px-1 py-1 text-xs text-center"
											/>
										)}
									</div>
								))}
							</div>
						</>
					) : (
						<>
							<div className="flex justify-end mb-2">
								<Button
									variant="secondary"
									size="sm"
									onClick={() => onLoadTemplate(selectedMarket)}
								>
									Modifier (copier vers Marché #8)
								</Button>
							</div>
							<div className="grid grid-cols-3 md:grid-cols-9 gap-2">
								{marketTemplates[selectedMarket].config.map((slot, idx) => (
									<div
										key={idx}
										className="bg-gray-600/30 rounded p-2 opacity-75"
									>
										<div className="text-xs text-center font-semibold mb-1">
											{slot.type === "gem"
												? "💎"
												: slot.type === "relic"
													? "🔮"
													: "✨"}
										</div>
										<div className="text-xs text-center mb-1">
											{getTypeLabel(slot.type)}
										</div>
										<div className="text-xs text-center font-bold">
											{getCriteriaLabel(slot)}
										</div>
									</div>
								))}
							</div>
						</>
					)}
				</div>
			)}
		</Card>
	);
};
