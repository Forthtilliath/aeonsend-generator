import { type KeyboardEvent, type ReactNode, useId, useRef } from "react";

export interface TabItem<T extends string> {
	value: T;
	label: string;
	content: ReactNode;
}

interface TabsProps<T extends string> {
	label: string;
	tabs: TabItem<T>[];
	value: T;
	onChange: (value: T) => void;
	/** Classes du panneau actif (ex. zone qui défile). */
	panelClassName?: string;
}

/**
 * Onglets accessibles (motif ARIA « tabs ») : flèches gauche/droite, Début et
 * Fin pour passer d'un onglet à l'autre ; seul l'onglet actif est tabulable.
 */
export const Tabs = <T extends string>({
	label,
	tabs,
	value,
	onChange,
	panelClassName = "",
}: TabsProps<T>) => {
	const baseId = useId();
	const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
	const activeIndex = Math.max(
		0,
		tabs.findIndex((tab) => tab.value === value),
	);
	const active = tabs[activeIndex];

	const select = (index: number): void => {
		const target = tabs[index];
		if (!target) return;
		onChange(target.value);
		tabRefs.current[index]?.focus();
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>): void => {
		const last = tabs.length - 1;
		const moves: Record<string, number> = {
			ArrowRight: activeIndex === last ? 0 : activeIndex + 1,
			ArrowLeft: activeIndex === 0 ? last : activeIndex - 1,
			Home: 0,
			End: last,
		};
		const next = moves[e.key];
		if (next === undefined) return;
		e.preventDefault();
		select(next);
	};

	return (
		<div className="flex min-h-0 flex-1 flex-col">
			<div
				role="tablist"
				aria-label={label}
				onKeyDown={handleKeyDown}
				className="mb-3 flex gap-1 p-1 rounded-[3px] border border-abyss-600 bg-abyss-900"
			>
				{tabs.map((tab, index) => {
					const selected = index === activeIndex;
					return (
						<button
							type="button"
							role="tab"
							key={tab.value}
							ref={(el) => {
								tabRefs.current[index] = el;
							}}
							id={`${baseId}-tab-${tab.value}`}
							aria-selected={selected}
							aria-controls={`${baseId}-panel-${tab.value}`}
							tabIndex={selected ? 0 : -1}
							onClick={() => onChange(tab.value)}
							className={`flex-1 h-9 px-2 text-sm font-semibold rounded-[2px] transition-all ${
								selected
									? "bg-aether-500 text-abyss-950 shadow-[0_0_14px_-4px_var(--color-aether-400)]"
									: "text-bone-400 hover:text-bone-50 hover:bg-abyss-700"
							}`}
						>
							{tab.label}
						</button>
					);
				})}
			</div>
			{active && (
				<div
					role="tabpanel"
					id={`${baseId}-panel-${active.value}`}
					aria-labelledby={`${baseId}-tab-${active.value}`}
					className={panelClassName}
				>
					{active.content}
				</div>
			)}
		</div>
	);
};
