import type { MarketCondition } from "../../types";
import { AetherIcon } from "../ui/Icons";

export function CriteriaLabel({ criteria }: { criteria: MarketCondition }) {
	if (!criteria) return null;
	if (criteria.operator === "any") return "Tout";
	if (criteria.operator === "range") {
		return (
			<p className="flex items-center justify-center gap-1">
				Entre {criteria.cost}
				<AetherIcon /> et {criteria.costMax}
				<AetherIcon />
			</p>
		);
	}
	if (criteria.operator === "<=") {
		return (
			<p className="flex items-center justify-center gap-1">
				≤ {criteria.cost}
				<AetherIcon />
			</p>
		);
	}
	if (criteria.operator === ">=") {
		return (
			<p className="flex items-center justify-center gap-1">
				≥ {criteria.cost} <AetherIcon />
			</p>
		);
	}
	return (
		<p className="flex items-center justify-center gap-1">
			{criteria.cost} <AetherIcon />
		</p>
	);
}
