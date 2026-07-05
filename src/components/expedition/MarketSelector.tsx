import { X } from "lucide-react";
import { marketTemplates } from "../../data/marketTemplates";
import type { MarketCondition } from "../../types";
import type { Tuple } from "../../types/helpers";
import { clamp, copyTuple, getTypeLabel } from "../../utils/helpers";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { AetherIcon } from "../ui/Icons";
import { CriteriaLabel } from "./CriteriaLabel";

interface MarketSelectorProps {
	selectedMarket: string;
	setSelectedMarket: (market: string) => void;
	showMarketConfig: boolean;
	setShowMarketConfig: (show: boolean) => void;
	customMarket: Tuple<MarketCondition, 9>;
	setCustomMarket: (market: Tuple<MarketCondition, 9>) => void;
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
				{Array.from(marketTemplates.entries()).map(([id, market]) => (
					<button
						type="button"
						key={id}
						onClick={() => {
							setSelectedMarket(id);
							setShowMarketConfig(true);
						}}
						className={`p-2 rounded-lg border-2 transition-all ${
							selectedMarket === id
								? "border-amber-500 bg-amber-900/40 shadow-lg shadow-amber-900/30"
								: "border-slate-700 bg-slate-800/50 hover:border-amber-700/50"
						}`}
					>
						<div className="text-sm font-semibold">
							{market.name.split(":")[0]}
						</div>
						<div className="text-xs text-gray-400">
							{market.name.split(":")[1]}
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
					<div className="text-sm font-semibold">Marché Personnalisable</div>
					<div className="text-xs text-gray-400">Personnalisé</div>
				</button>
			</div>

			{showMarketConfig && (
				<div className="bg-gray-700/50 rounded-lg p-4 mb-4">
					<div className="flex justify-between items-center mb-3">
						<h3 className="font-bold">
							Configuration:{" "}
							{selectedMarket === "custom"
								? "Marché Personnalisable"
								: marketTemplates.get(selectedMarket)?.name}
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
							<div className="grid grid-cols-3 gap-2">
								{customMarket.map((slot, idx) => (
									<div
										// biome-ignore lint/suspicious/noArrayIndexKey: can't use anything else here
										key={idx}
										className={`rounded p-2 opacity-75 border text-gray-800 ${
											slot.type === "gem"
												? "bg-purple-400/80"
												: slot.type === "relic"
													? "bg-blue-400/80"
													: slot.type === "spell"
														? "bg-yellow-400/90"
														: "bg-gray-600/30"
										}`}
									>
										<select
											value={slot.type}
											onChange={(e) => {
												const newMarket = copyTuple(customMarket);
												const newType = e.currentTarget.value as
													| "gem"
													| "relic"
													| "spell"
													| "any";
												// Préserver la structure existante en changeant juste le type
												newMarket[idx] = { ...newMarket[idx], type: newType };
												setCustomMarket(newMarket);
											}}
											className="w-full bg-gray-300 rounded px-1 py-1 text-xs mb-1"
										>
											<option value="gem">Gemme</option>
											<option value="relic">Relique</option>
											<option value="spell">Sort</option>
											<option value="any">Tout</option>
										</select>
										<div className="text-xs mb-1 text-center font-semibold">
											Coût en <AetherIcon />
										</div>
										<select
											value={slot.operator}
											onChange={(e) => {
												const newMarket = copyTuple(customMarket);
												const newOperator = e.currentTarget.value as
													| "any"
													| "<="
													| ">="
													| "="
													| "range";

												// Créer une nouvelle condition avec le bon type
												if (newOperator === "any") {
													newMarket[idx] = {
														type: slot.type,
														operator: "any",
														cost: null,
													};
												} else if (newOperator === "range") {
													newMarket[idx] = {
														type: slot.type,
														operator: "range",
														cost: slot.operator !== "any" ? slot.cost : 4,
														costMax:
															slot.operator === "range" ? slot.costMax : 5,
													};
												} else {
													newMarket[idx] = {
														type: slot.type,
														operator: newOperator,
														cost: slot.operator !== "any" ? slot.cost : 4,
													};
												}
												setCustomMarket(newMarket);
											}}
											className="w-full bg-gray-300 rounded px-1 py-1 text-xs mb-1"
										>
											<option value="<=">≤</option>
											<option value=">=">≥</option>
											<option value="=">=</option>
											<option value="range">Range</option>
											<option value="any">Tout</option>
										</select>
										{slot.operator === "range" ? (
											<div className="flex gap-1">
												<input
													type="number"
													min="0"
													max="9"
													value={slot.cost}
													onChange={(e) => {
														const newMarket = copyTuple(customMarket);
														newMarket[idx] = {
															...slot,
															cost: clamp(
																parseInt(e.currentTarget.value, 10),
																0,
																9,
															),
														};
														setCustomMarket(newMarket);
													}}
													className="w-full bg-gray-300 rounded px-1 py-1 text-xs text-center"
													placeholder="Min"
												/>
												<input
													type="number"
													min="0"
													max="9"
													value={slot.costMax}
													onChange={(e) => {
														const newMarket = copyTuple(customMarket);
														newMarket[idx] = {
															...slot,
															costMax: clamp(
																parseInt(e.currentTarget.value, 10),
																0,
																9,
															),
														};
														setCustomMarket(newMarket);
													}}
													className="w-full bg-gray-300 rounded px-1 py-1 text-xs text-center"
													placeholder="Max"
												/>
											</div>
										) : slot.operator !== "any" ? (
											<input
												type="number"
												min="0"
												max="9"
												value={slot.cost}
												onChange={(e) => {
													const newMarket = copyTuple(customMarket);
													newMarket[idx] = {
														...slot,
														cost: clamp(
															parseInt(e.currentTarget.value, 10),
															0,
															9,
														),
													};
													setCustomMarket(newMarket);
												}}
												className="w-full bg-gray-300 rounded px-1 py-1 text-xs text-center"
											/>
										) : null}
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
									Modifier (copier vers Marché Personnalisable)
								</Button>
							</div>
							<div className="grid grid-cols-3 gap-2">
								{marketTemplates
									.get(selectedMarket)
									?.config.map((slot, idx) => (
										<div
											// biome-ignore lint/suspicious/noArrayIndexKey: can't use anything else here
											key={idx}
											className={`rounded p-2 opacity-75 border ${
												slot.type === "gem"
													? "bg-purple-800/40 border-purple-400/70"
													: slot.type === "relic"
														? "bg-blue-800/40 border-blue-400/70"
														: slot.type === "spell"
															? "bg-yellow-800/40 border-yellow-400/70"
															: "bg-gray-600/30 border-gray-500/50"
											}`}
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
												<CriteriaLabel criteria={slot} />
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
