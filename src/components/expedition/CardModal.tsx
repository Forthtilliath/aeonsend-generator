import type { SupplyCard } from "../../types";
import { formatCost, getTypeLabel } from "../../utils/helpers";
import { AetherIcon } from "../ui/Icons";
import { Modal } from "../ui/Modal";

interface CardModalProps {
	card: SupplyCard | null;
	onClose: () => void;
}

export const CardModal = ({ card, onClose }: CardModalProps) => {
	if (!card) return null;

	return (
		<Modal isOpen={!!card} onClose={onClose} title={card.name}>
			<div
				data-type={card.type}
				className="type-tile p-8 text-center shadow-[0_0_60px_-20px_var(--type)]"
			>
				<div className="font-display text-sm uppercase tracking-[0.3em] text-(--type-soft) mb-4">
					{getTypeLabel(card.type)}
				</div>
				<h3
					id="modal-title"
					className="font-display text-3xl text-bone-50 mb-4"
				>
					{card.name}
				</h3>
				<p className="font-lore text-lg text-bone-100 mb-6">
					{card.description}
				</p>
				<div className="aether-coin text-2xl px-4 py-1">
					Coût : {formatCost(card, card.cost)}
					<AetherIcon />
				</div>
				{card.developCost !== undefined && (
					<div className="text-lg text-bone-200 mt-3">
						Développer : {formatCost(card, card.developCost)}
						<AetherIcon />
					</div>
				)}
				{card.conditionalCost && (
					<p className="text-sm text-bone-400 mt-3">
						* 1 Ether de moins si la condition de la carte est remplie.
					</p>
				)}
			</div>
		</Modal>
	);
};
