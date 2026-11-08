import type { MarketCondition } from "../../types";
import { getTypeLabel } from "../../utils/helpers";
import { TYPE_SYMBOL } from "../../utils/supply";
import { CriteriaLabel } from "./CriteriaLabel";

/** Aperçu en lecture seule des 9 emplacements d'un marché. */
export const MarketPreview = ({ config }: { config: MarketCondition[] }) => (
	<div className="grid grid-cols-3 gap-2">
		{config.map((slot, idx) => (
			<div
				// biome-ignore lint/suspicious/noArrayIndexKey: les 9 emplacements sont fixes
				key={idx}
				data-type={slot.type}
				className="type-tile p-2 text-center text-xs"
			>
				<div className="font-semibold mb-1">{TYPE_SYMBOL[slot.type]}</div>
				<div className="mb-1 text-(--type-soft) font-display tracking-wide">
					{getTypeLabel(slot.type)}
				</div>
				<div className="font-bold text-bone-100">
					<CriteriaLabel criteria={slot} />
				</div>
			</div>
		))}
	</div>
);
