import { Users } from "lucide-react";
import type { PlayerConfig as PlayerConfigType, RerollConfig } from "../../types";
import { clamp } from "../../utils/helpers";
import { Card } from "../ui/Card";
import { Input } from "../ui/Input";

interface PlayerConfigProps {
	playerConfig: PlayerConfigType;
	setPlayerConfig: (config: PlayerConfigType) => void;
	rerollConfig: RerollConfig;
	setRerollConfig: (config: RerollConfig) => void;
}

export const PlayerConfig = ({
	playerConfig,
	setPlayerConfig,
	rerollConfig,
	setRerollConfig,
}: PlayerConfigProps) => {
	return (
		<Card>
			<h2 className="text-lg font-bold mb-3 flex items-center gap-2 text-amber-200">
				<Users className="w-5 h-5" />
				Configuration
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
				<Input
					id="numPlayers"
					label="Nombre de joueurs"
					type="number"
					min="1"
					max="4"
					value={playerConfig.numPlayers}
					onChange={(e) =>
						setPlayerConfig({
							...playerConfig,
							numPlayers: clamp(parseInt(e.currentTarget.value, 10), 1, 4),
						})
					}
				/>

				<Input
					id="magesPerPlayer"
					label="Mages par joueur"
					type="number"
					min="1"
					max="4"
					value={playerConfig.magesPerPlayer}
					onChange={(e) =>
						setPlayerConfig({
							...playerConfig,
							magesPerPlayer: clamp(parseInt(e.currentTarget.value, 10), 1, 4),
						})
					}
				/>

				<div className="flex items-end">
					<div className="bg-indigo-900/30 rounded p-3 text-sm border border-indigo-700/30 w-full">
						Total de mages: {playerConfig.numPlayers * playerConfig.magesPerPlayer}
					</div>
				</div>
			</div>

			<div className="border-t border-gray-700 pt-4">
				<h3 className="text-md font-bold mb-3">Relances</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<label className="flex items-center gap-2 cursor-pointer mb-2">
							<input
								type="radio"
								checked={rerollConfig.type === "global"}
								onChange={() => setRerollConfig({ ...rerollConfig, type: "global" })}
								className="w-4 h-4"
							/>
							<span>Relance globale (toutes les cartes)</span>
						</label>
						<label className="flex items-center gap-2 cursor-pointer">
							<input
								type="radio"
								checked={rerollConfig.type === "individual"}
								onChange={() =>
									setRerollConfig({ ...rerollConfig, type: "individual" })
								}
								className="w-4 h-4"
							/>
							<span>Relances individuelles (pool global)</span>
						</label>
					</div>

					{rerollConfig.type === "individual" && (
						<Input
							id="maxIndividualRerolls"
							label="Nombre total de relances"
							type="number"
							min="0"
							max="20"
							value={rerollConfig.maxIndividualRerolls}
							onChange={(e) =>
								setRerollConfig({
									...rerollConfig,
									maxIndividualRerolls: clamp(
										parseInt(e.currentTarget.value, 10),
										0,
										20,
									),
								})
							}
						/>
					)}
				</div>

				<div className="mt-3">
					<label className="flex items-center gap-2 cursor-pointer">
						<input
							type="checkbox"
							checked={rerollConfig.removeExcess}
							onChange={(e) =>
								setRerollConfig({
									...rerollConfig,
									removeExcess: e.currentTarget.checked,
								})
							}
							className="w-4 h-4"
						/>
						<span>Supprimer l'excédent de cartes par catégorie</span>
					</label>
					<p className="text-xs text-gray-400 mt-1 ml-6">
						Si activé, garde uniquement le nombre de cartes configuré par type
					</p>
				</div>
			</div>
		</Card>
	);
};