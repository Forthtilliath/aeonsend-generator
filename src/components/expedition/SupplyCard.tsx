import type { SupplyCard as SupplyCardType } from "../../types";
import {
	getTypeBgColor,
	getTypeLabel,
} from "../../utils/helpers";
import { AetherIcon } from "../ui/Icons";
import { CriteriaLabel } from "./CriteriaLabel";

interface SupplyCardProps {
	card: SupplyCardType;
	canReroll: boolean;
	showRemove: boolean;
	onCardClick: () => void;
	onRemove: () => void;
	onReroll: () => void;
}

export const SupplyCard = ({
	card,
	canReroll,
	showRemove,
	onCardClick,
	onRemove,
	onReroll,
}: SupplyCardProps) => {
	return (
		<div className="relative">
			<button
				type="button"
				onClick={onCardClick}
				className={`w-full rounded-lg p-2 border-2 transition-all hover:scale-105 ${getTypeBgColor(card.type)}`}
			>
				<div className="text-xs text-gray-400 mb-1">
					{getTypeLabel(card.type)}
				</div>
				<div className="text-xs font-semibold text-blue-300 mb-1">
					<CriteriaLabel criteria={card.criteria} />
				</div>
				<div className="text-2xl mb-1">{card.image}</div>
				<div className="text-xs font-bold">{card.name}</div>
				<div className="text-xs mt-1 flex items-center justify-center gap-1">
					{card.cost}
					<AetherIcon />
				</div>
			</button>

			{showRemove && (
				<button
					type="button"
					onClick={onRemove}
					className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold border-2 border-gray-800 transition-all hover:scale-110"
					title="Supprimer cette carte"
				>
					✕
				</button>
			)}

			{canReroll && (
				<button
					type="button"
					onClick={onReroll}
					className="absolute -bottom-2 -right-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold border-2 border-gray-800 transition-all hover:scale-110"
					title="Relancer cette carte"
				>
					🔄
				</button>
			)}
		</div>
	);
};
