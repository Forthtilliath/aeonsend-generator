import type { ReactNode } from "react";
import type { MarketCondition } from "../../types";
import { AetherIcon } from "../ui/Icons";

// En ligne (span) : le libellé se place aussi dans un bouton.
const Inline = ({ children }: { children: ReactNode }) => (
	<span className="inline-flex items-center justify-center gap-1">
		{children}
	</span>
);

export function CriteriaLabel({ criteria }: { criteria: MarketCondition }) {
	if (!criteria) return null;
	if (criteria.operator === "any") return "Tout";
	if (criteria.operator === "range") {
		return (
			<Inline>
				Entre {criteria.cost}
				<AetherIcon /> et {criteria.costMax}
				<AetherIcon />
			</Inline>
		);
	}
	if (criteria.operator === "<=") {
		return (
			<Inline>
				≤ {criteria.cost}
				<AetherIcon />
			</Inline>
		);
	}
	if (criteria.operator === ">=") {
		return (
			<Inline>
				≥ {criteria.cost} <AetherIcon />
			</Inline>
		);
	}
	return (
		<Inline>
			{criteria.cost} <AetherIcon />
		</Inline>
	);
}
