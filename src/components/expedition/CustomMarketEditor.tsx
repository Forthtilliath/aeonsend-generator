import { useState } from "react";
import type { MarketConfig } from "../../hooks/useMarket";
import { copyTuple } from "../../utils/helpers";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { MarketSlotEditor } from "./MarketSlotEditor";

interface CustomMarketEditorProps {
	market: MarketConfig;
	onChange: (market: MarketConfig) => void;
	onReset: () => void;
	onSavePreset: (name: string) => void;
}

export const CustomMarketEditor = ({
	market,
	onChange,
	onReset,
	onSavePreset,
}: CustomMarketEditorProps) => {
	const [presetName, setPresetName] = useState("");

	const save = () => {
		onSavePreset(presetName);
		setPresetName("");
	};

	return (
		<>
			<div className="flex flex-wrap justify-end items-center gap-2 mb-2">
				<Input
					id="newPresetName"
					placeholder="Nom du preset"
					maxLength={40}
					value={presetName}
					onChange={(e) => setPresetName(e.currentTarget.value)}
					className="w-40"
				/>
				<Button
					variant="secondary"
					size="sm"
					onClick={save}
					disabled={!presetName.trim()}
				>
					Sauvegarder comme preset
				</Button>
				<Button variant="ghost" size="sm" onClick={onReset}>
					Réinitialiser
				</Button>
			</div>
			<div className="grid grid-cols-3 gap-2">
				{market.map((slot, idx) => (
					<MarketSlotEditor
						// biome-ignore lint/suspicious/noArrayIndexKey: les 9 emplacements sont fixes
						key={idx}
						slot={slot}
						onChange={(nextSlot) => {
							const next = copyTuple(market);
							next[idx] = nextSlot;
							onChange(next);
						}}
					/>
				))}
			</div>
		</>
	);
};
