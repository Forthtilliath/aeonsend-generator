import {
	ALL_EXPANSIONS,
	EXPANSION_WAVES,
	waveBoxes,
} from "../../data/expansions";
import type { Expansion } from "../../types";

interface ExpansionSelectorProps {
	ownedExpansions: ReadonlySet<Expansion>;
	onToggle: (expansion: Expansion) => void;
	onSetAll: (owned: boolean) => void;
}

const LINK = "text-aether-300/90 hover:text-aether-200 disabled:opacity-40";
const STANDALONE_MARK = "text-aether-400";
const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export const ExpansionSelector = ({
	ownedExpansions,
	onToggle,
	onSetAll,
}: ExpansionSelectorProps) => {
	const count = ownedExpansions.size;
	return (
		<section aria-label="Boîtes possédées">
			<div className="flex items-center justify-between gap-2 mb-2 text-sm">
				<span className={count === 0 ? "text-ember-300" : "text-bone-400"}>
					{count} / {ALL_EXPANSIONS.length} sélectionnée{count > 1 ? "s" : ""}
				</span>
				<span className="flex gap-3">
					<button
						type="button"
						className={LINK}
						onClick={() => onSetAll(true)}
						disabled={count === ALL_EXPANSIONS.length}
					>
						Tout cocher
					</button>
					<button
						type="button"
						className={LINK}
						onClick={() => onSetAll(false)}
						disabled={count === 0}
					>
						Tout décocher
					</button>
				</span>
			</div>
			<ul className="divide-y divide-abyss-700/70">
				{EXPANSION_WAVES.map((wave, index) => (
					<li
						key={wave.label}
						className="grid grid-cols-[2rem_1fr] items-start gap-2 py-2"
					>
						<span
							aria-hidden="true"
							className="pt-1.5 text-center font-display text-sm text-aether-300/80"
						>
							{ROMAN[index] ?? index + 1}
						</span>
						<fieldset className="min-w-0">
							<legend className="sr-only">{wave.label}</legend>
							<div className="flex flex-wrap gap-1.5">
								{waveBoxes(wave).map((expansion) => {
									const standalone = expansion === wave.standalone;
									return (
										<button
											type="button"
											key={expansion}
											onClick={() => onToggle(expansion)}
											aria-pressed={ownedExpansions.has(expansion)}
											className={`rune-toggle min-h-8 px-2 py-1 text-xs ${standalone ? "font-bold" : "font-semibold"}`}
										>
											{standalone && (
												<span aria-hidden="true" className={STANDALONE_MARK}>
													◆{" "}
												</span>
											)}
											{expansion}
											{standalone && (
												<span className="sr-only"> (autonome)</span>
											)}
										</button>
									);
								})}
							</div>
						</fieldset>
					</li>
				))}
			</ul>
			<p className="mt-1 text-xs text-bone-500">
				<span aria-hidden="true" className={STANDALONE_MARK}>
					◆
				</span>{" "}
				boîte autonome, jouable seule. Chiffres romains : vague de sortie.
			</p>
		</section>
	);
};
