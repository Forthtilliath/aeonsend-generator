import { X } from "lucide-react";
import { type ReactNode, useEffect, useRef } from "react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	title?: string;
}

const FOCUSABLE_SELECTOR =
	'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
	const dialogRef = useRef<HTMLDivElement>(null);
	const previouslyFocused = useRef<HTMLElement | null>(null);

	useEffect(() => {
		if (!isOpen) return;

		previouslyFocused.current = document.activeElement as HTMLElement | null;
		const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
			FOCUSABLE_SELECTOR,
		);
		focusable?.[0]?.focus();

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onClose();
				return;
			}
			if (e.key !== "Tab" || !dialogRef.current) return;

			const focusableEls = Array.from(
				dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
			);
			if (focusableEls.length === 0) return;

			const first = focusableEls[0];
			const last = focusableEls[focusableEls.length - 1];

			if (e.shiftKey && document.activeElement === first) {
				e.preventDefault();
				last.focus();
			} else if (!e.shiftKey && document.activeElement === last) {
				e.preventDefault();
				first.focus();
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			previouslyFocused.current?.focus();
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
			<div
				ref={dialogRef}
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
