import { ALL_EXPANSIONS } from "../../data/expansions";
import type { Expansion } from "../../types";
import { Card } from "../ui/Card";

interface ExpansionSelectorProps {
	ownedExpansions: ReadonlySet<Expansion>;
	onToggle: (expansion: Expansion) => void;
}

export const ExpansionSelector = ({
	ownedExpansions,
	onToggle,
}: ExpansionSelectorProps) => {
	return (
		<Card>
			<h2 className="text-lg font-bold mb-3 text-amber-200">
				Boîtes possédées
			</h2>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-2">
				{ALL_EXPANSIONS.map((expansion) => {
					const isOwned = ownedExpansions.has(expansion);
					return (
						<button
							type="button"
							key={expansion}
							onClick={() => onToggle(expansion)}
							aria-pressed={isOwned}
							className={`p-2 rounded-lg border-2 transition-all text-sm font-semibold ${
								isOwned
									? "border-amber-500 bg-amber-900/40 shadow-lg shadow-amber-900/30"
									: "border-slate-700 bg-slate-800/50 opacity-60 hover:border-amber-700/50"
							}`}
						>
							{expansion}
						</button>
					);
				})}
			</div>
		</Card>
	);
};
