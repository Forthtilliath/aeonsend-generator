import type { MarketCondition } from "../../types";
import { getTypeBgColor, getTypeLabel } from "../../utils/helpers";
import { TYPE_SYMBOL } from "../../utils/supply";
import { CriteriaLabel } from "./CriteriaLabel";

/** Aperçu en lecture seule des 9 emplacements d'un marché. */
export const MarketPreview = ({ config }: { config: MarketCondition[] }) => (
	<div className="grid grid-cols-3 gap-2">
		{config.map((slot, idx) => (
			<div
				// biome-ignore lint/suspicious/noArrayIndexKey: les 9 emplacements sont fixes
				key={idx}
				className={`rounded p-2 opacity-75 border text-center text-xs ${
					slot.type === "any"
						? "bg-gray-600/30 border-gray-500/50"
						: getTypeBgColor(slot.type)
				}`}
			>
				<div className="font-semibold mb-1">{TYPE_SYMBOL[slot.type]}</div>
				<div className="mb-1">{getTypeLabel(slot.type)}</div>
				<div className="font-bold">
					<CriteriaLabel criteria={slot} />
				</div>
			</div>
		))}
	</div>
);
