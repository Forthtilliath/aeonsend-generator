import type { SupplyCard } from "../../types";
import { getTypeLabel } from "../../utils/helpers";
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
				<div className="text-6xl mb-4 drop-shadow-[0_0_16px_var(--type)]">
					{card.image}
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
					Coût : {card.cost}
					<AetherIcon />
				</div>
			</div>
		</Modal>
	);
};
