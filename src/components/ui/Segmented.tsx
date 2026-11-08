interface SegmentedProps<T extends string | number> {
	label: string;
	options: { value: T; label: string }[];
	value: T;
	onChange: (value: T) => void;
}

/** Choix exclusif parmi quelques options, présenté en boutons accolés. */
export const Segmented = <T extends string | number>({
	label,
	options,
	value,
	onChange,
}: SegmentedProps<T>) => (
	<fieldset>
		<legend className="block text-sm mb-2">{label}</legend>
		<div className="flex rounded-lg border border-slate-700 overflow-hidden">
			{options.map((option) => {
				const selected = option.value === value;
				return (
					<button
						type="button"
						key={option.value}
						onClick={() => onChange(option.value)}
						aria-pressed={selected}
						className={`flex-1 h-10 px-2 text-sm font-semibold transition-all border-l border-slate-700 first:border-l-0 ${
							selected
								? "bg-amber-700/60 text-white"
								: "bg-slate-800 text-gray-300 hover:bg-slate-700"
						}`}
					>
						{option.label}
					</button>
				);
			})}
		</div>
	</fieldset>
);
