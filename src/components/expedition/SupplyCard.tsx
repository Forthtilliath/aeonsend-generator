import { RefreshCw, X } from "lucide-react";
import type { CSSProperties } from "react";
import type { SupplyCard as SupplyCardType } from "../../types";
import { GameCardFace } from "./GameCardFace";

interface SupplyCardProps {
	card: SupplyCardType;
	canReroll: boolean;
	showRemove: boolean;
	/** Délai avant que la carte soit distribuée (en secondes). */
	dealDelay: number;
	onCardClick: () => void;
	onRemove: () => void;
	onReroll: () => void;
}

export const SupplyCard = ({
	card,
	canReroll,
	showRemove,
	dealDelay,
	onCardClick,
	onRemove,
	onReroll,
}: SupplyCardProps) => (
	<div
		className="relative anim-deal"
		style={{ "--delay": `${dealDelay}s` } as CSSProperties}
	>
		<button
			type="button"
			onClick={onCardClick}
			data-type={card.type}
			className="game-card"
			aria-label={`${card.name} : voir la carte`}
		>
			<GameCardFace card={card} />
		</button>

		{/* En haut à gauche, à côté de la carte et non dedans : un bouton ne peut pas en contenir un autre. */}
		{(canReroll || showRemove) && (
			<div className="card-actions">
				{canReroll && (
					<button
						type="button"
						onClick={onReroll}
						className="card-action card-action--reroll"
						title="Relancer cette carte"
						aria-label={`Relancer ${card.name}`}
					>
						<RefreshCw />
					</button>
				)}
				{showRemove && (
					<button
						type="button"
						onClick={onRemove}
						className="card-action card-action--remove"
						title="Retirer cette carte"
						aria-label={`Retirer ${card.name}`}
					>
						<X />
					</button>
				)}
			</div>
		)}
	</div>
);
