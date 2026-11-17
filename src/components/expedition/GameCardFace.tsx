import { useFitText } from "../../hooks/useFitText";
import type { SupplyCard } from "../../types";
import { formatCost, getTypeLabel } from "../../utils/helpers";
import { CardText } from "./CardText";
import { CriteriaLabel } from "./CriteriaLabel";

interface GameCardFaceProps {
	card: SupplyCard;
	/** Id du nom de la carte, quand il sert de titre à une fenêtre. */
	titleId?: string;
	/** Fiche agrandie : explique aussi l'astérisque d'un coût conditionnel. */
	detailed?: boolean;
}

/** Coût dans son fanion, et coût pour développer en dessous s'il existe. */
const CostBanner = ({ card }: { card: SupplyCard }) => (
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

/**
 * Contenu d'une carte du marché (à placer dans un élément `.game-card`).
 * En haut, à la place de l'illustration : l'emplacement du marché qui a tiré
 * la carte, et le coût. Dessous, le cadre de texte avec le nom, comme sur les
 * vraies cartes, puis la plaque du type.
 */
export const GameCardFace = ({
	card,
	titleId,
	detailed = false,
}: GameCardFaceProps) => {
	const { criteria } = card;
	const textRef = useFitText<HTMLSpanElement>(card.description);
	return (
		<>
			<CostBanner card={card} />

			<span className="game-card__head">
				<span
					className="game-card__slot"
					data-type={criteria.type}
					title="Emplacement du marché qui a tiré cette carte"
				>
					<span className="sr-only">Tirée pour l'emplacement :</span>
					<span className="game-card__slot-type">
						{criteria.type === "any"
							? "Tout type"
							: getTypeLabel(criteria.type)}
					</span>
					{criteria.operator !== "any" && (
						<span className="game-card__slot-cost">
							<CriteriaLabel criteria={criteria} />
						</span>
					)}
				</span>
			</span>

			<span className="game-card__panel">
				<span id={titleId} className="game-card__name">
					{card.name}
				</span>
				<span ref={textRef} className="game-card__text">
					<CardText description={card.description} />
				</span>
				{detailed && card.conditionalCost && (
					<span className="game-card__note">
						* 1 Ether de moins si la condition de la carte est remplie.
					</span>
				)}
			</span>

			<span className="game-card__type">{getTypeLabel(card.type)}</span>
		</>
	);
};
