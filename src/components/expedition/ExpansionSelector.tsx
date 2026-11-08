import { ALL_EXPANSIONS } from "../../data/expansions";
import type { Expansion } from "../../types";
import { Card } from "../ui/Card";
import { SectionTitle } from "../ui/SectionTitle";

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
			<SectionTitle>Boîtes possédées</SectionTitle>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-2">
				{ALL_EXPANSIONS.map((expansion) => {
					const isOwned = ownedExpansions.has(expansion);
					return (
						<button
							type="button"
							key={expansion}
							onClick={() => onToggle(expansion)}
							aria-pressed={isOwned}
							className="rune-toggle p-2 text-sm font-semibold"
						>
							{expansion}
						</button>
					);
				})}
			</div>
		</Card>
	);
};
