import type { SupplyCard } from "../../types";
import { Modal } from "../ui/Modal";
import { GameCardFace } from "./GameCardFace";

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
				className="game-card game-card--large shadow-[0_0_60px_-20px_var(--type)]"
			>
				<GameCardFace card={card} titleId="modal-title" detailed />
			</div>
		</Modal>
	);
};
