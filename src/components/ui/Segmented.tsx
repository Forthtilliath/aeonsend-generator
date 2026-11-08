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
		<legend className="block text-sm mb-2 text-bone-300">{label}</legend>
		<div className="flex gap-1 p-1 rounded-[3px] border border-abyss-600 bg-abyss-900">
			{options.map((option) => {
				const selected = option.value === value;
				return (
					<button
						type="button"
						key={option.value}
						onClick={() => onChange(option.value)}
						aria-pressed={selected}
						className={`flex-1 h-9 px-2 text-sm font-semibold rounded-[2px] transition-all ${
							selected
								? "bg-aether-500 text-abyss-950 shadow-[0_0_14px_-4px_var(--color-aether-400)]"
								: "text-bone-400 hover:text-bone-50 hover:bg-abyss-700"
						}`}
					>
						{option.label}
					</button>
				);
			})}
		</div>
	</fieldset>
);
