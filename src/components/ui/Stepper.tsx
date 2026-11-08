import { clamp, parseIntegerInput } from "@forthtilliath/ts-kit";
import { Minus, Plus } from "lucide-react";

interface StepperProps {
	id: string;
	label: string;
	value: number;
	min: number;
	max: number;
	onChange: (value: number) => void;
	hint?: string;
}

/** Champ numérique borné avec boutons −/+. */
export const Stepper = ({
	id,
	label,
	value,
	min,
	max,
	onChange,
	hint,
}: StepperProps) => {
	const set = (next: number) => onChange(clamp(next, min, max));
	const buttonClass =
		"w-10 h-10 shrink-0 rounded-full bg-abyss-800 border border-abyss-600 text-aether-300 flex items-center justify-center hover:border-aether-400 hover:shadow-[0_0_12px_-4px_var(--color-aether-400)] transition-all disabled:opacity-30 disabled:hover:border-abyss-600 disabled:hover:shadow-none";

	return (
		<div>
			<label htmlFor={id} className="block text-sm mb-2 text-bone-300">
				{label}
			</label>
			<div className="flex items-center gap-2">
				<button
					type="button"
					className={buttonClass}
					onClick={() => set(value - 1)}
					disabled={value <= min}
					aria-label={`${label} : diminuer`}
				>
					<Minus className="w-4 h-4" />
				</button>
				<input
					id={id}
					type="number"
					inputMode="numeric"
					min={min}
					max={max}
					value={value}
					// Champ vidé ou incomplet : la dernière valeur valide est gardée.
					onChange={(e) => {
						const next = parseIntegerInput(e.currentTarget.value);
						if (next !== null) set(next);
					}}
					// Flèches natives masquées : les boutons −/+ font déjà ce travail.
					className="rune-field w-full min-w-0 h-10 text-center text-lg font-semibold tabular-nums [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
				/>
				<button
					type="button"
					className={buttonClass}
					onClick={() => set(value + 1)}
					disabled={value >= max}
					aria-label={`${label} : augmenter`}
				>
					<Plus className="w-4 h-4" />
				</button>
			</div>
			{hint && <p className="text-xs text-bone-500 mt-1">{hint}</p>}
		</div>
	);
};
