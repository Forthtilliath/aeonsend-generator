import { Minus, Plus } from "lucide-react";
import { clamp } from "../../utils/helpers";

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
		"w-10 h-10 shrink-0 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center hover:border-amber-500 disabled:opacity-40 disabled:hover:border-slate-700";

	return (
		<div>
			<label htmlFor={id} className="block text-sm mb-2">
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
					onChange={(e) => set(Number.parseInt(e.currentTarget.value, 10))}
					className="w-full min-w-0 h-10 text-center bg-slate-800 rounded-lg border border-slate-700 focus:border-amber-500 focus:outline-none"
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
			{hint && <p className="text-xs text-gray-400 mt-1">{hint}</p>}
		</div>
	);
};
