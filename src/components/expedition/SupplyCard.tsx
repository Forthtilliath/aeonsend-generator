import { RefreshCw, X } from "lucide-react";
import type { SupplyCard as SupplyCardType } from "../../types";
import { getTypeLabel } from "../../utils/helpers";
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

const CORNER_BUTTON =
	"absolute -right-2 rounded-full w-6 h-6 flex items-center justify-center border-2 border-abyss-900 transition-all hover:scale-110";

export const SupplyCard = ({
	card,
	canReroll,
	showRemove,
	onCardClick,
	onRemove,
	onReroll,
}: SupplyCardProps) => (
	<div className="relative">
		<button
			type="button"
			onClick={onCardClick}
			data-type={card.type}
			className="type-tile w-full h-full p-2 flex flex-col items-center text-center"
		>
			<div className="font-display text-[0.65rem] uppercase tracking-[0.2em] text-(--type-soft)">
				{getTypeLabel(card.type)}
			</div>
			<div className="text-[0.65rem] text-bone-500 mb-1">
				<CriteriaLabel criteria={card.criteria} />
			</div>
			<div className="text-2xl my-1 drop-shadow-[0_0_8px_var(--type)]">
				{card.image}
			</div>
			<div className="text-xs font-bold text-bone-50 leading-tight mb-1.5">
				{card.name}
			</div>
			<div className="aether-coin text-xs mt-auto">
				{card.cost}
				<AetherIcon />
			</div>
		</button>

		{showRemove && (
			<button
				type="button"
				onClick={onRemove}
				className={`${CORNER_BUTTON} -top-2 bg-ember-600 hover:bg-ember-500 text-bone-50`}
				title="Supprimer cette carte"
				aria-label={`Supprimer ${card.name}`}
			>
				<X className="w-3.5 h-3.5" />
			</button>
		)}

		{canReroll && (
			<button
				type="button"
				onClick={onReroll}
				className={`${CORNER_BUTTON} -bottom-2 bg-aether-500 hover:bg-aether-400 text-abyss-950`}
				title="Relancer cette carte"
				aria-label={`Relancer ${card.name}`}
			>
				<RefreshCw className="w-3.5 h-3.5" />
			</button>
		)}
	</div>
);
