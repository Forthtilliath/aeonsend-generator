import type { SupplyCard } from "../../types";
import { getTypeColor } from "../../utils/helpers";
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
				className={`bg-linear-to-br ${getTypeColor(card.type)} rounded-xl p-8 border-4 border-white/20 shadow-2xl`}
			>
				<div className="text-6xl text-center mb-4">{card.image}</div>
				<h3 id="modal-title" className="text-3xl font-bold text-center mb-2">
					{card.name}
				</h3>
				<div className="text-center text-xl mb-4">
					{card.type.charAt(0).toUpperCase() + card.type.slice(1)}
				</div>
				<div className="text-center text-xl mb-4">
					{card.description}
				</div>
				<div className="text-center text-4xl font-bold">
					Coût: {card.cost}
					<AetherIcon />
				</div>
			</div>
		</Modal>
	);
};
