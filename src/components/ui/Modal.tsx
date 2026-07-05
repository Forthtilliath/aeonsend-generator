import { X } from "lucide-preact";
import type { ComponentChildren } from "preact";
import { useEffect } from "preact/hooks";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ComponentChildren;
	title?: string;
}

export const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
			<div
				className="relative max-w-md w-full"
				onClick={(e) => e.stopPropagation()}
				onKeyDown={(e) => e.stopPropagation()}
				role="dialog"
				aria-modal="true"
				aria-labelledby={title ? "modal-title" : undefined}
			>
				<button
					type="button"
					onClick={onClose}
					className="absolute -top-10 right-0 text-white hover:text-gray-300"
					aria-label="Fermer"
				>
					<X className="w-8 h-8" />
				</button>
				{children}
			</div>
		</div>
	);
};
