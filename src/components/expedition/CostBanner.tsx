import type { Card } from "../../types";
import { formatCost } from "../../utils/helpers";

/**
 * Coût dans son fanion, et coût pour développer en dessous s'il existe.
 * À placer dans un parent positionné (le fanion pend de son bord haut).
 */
export const CostBanner = ({ card }: { card: Card }) => (
	<span
		className="cost-banner"
		title={
			card.developCost === undefined
				? "Coût"
				: "Coût, puis coût pour développer la carte"
		}
	>
		<span className="sr-only">
			Coût : {formatCost(card, card.cost)}
			{card.developCost !== undefined &&
				`, développer : ${formatCost(card, card.developCost)}`}
		</span>
		<span className="cost-banner__hex" aria-hidden="true">
			<span>{formatCost(card, card.cost)}</span>
		</span>
		{card.developCost !== undefined && (
			<span className="cost-banner__develop" aria-hidden="true">
				{formatCost(card, card.developCost)}
			</span>
		)}
	</span>
);
