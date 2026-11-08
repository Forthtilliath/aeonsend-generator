import { useKeyListener } from "@forthtilliath/react-kit/useKeyListener";
import { X } from "lucide-react";
import {
	type MouseEvent,
	type PointerEvent,
	type ReactNode,
	useEffect,
	useRef,
} from "react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	title?: string;
	/** `false` quand le contenu affiche lui-même sa croix de fermeture. */
	showCloseButton?: boolean;
	/** Largeur maximale de la boîte de dialogue. */
	widthClassName?: string;
}

const FOCUSABLE_SELECTOR =
	'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** Éléments atteignables au clavier (exclut les `tabindex="-1"`, ex. onglets inactifs). */
const getFocusable = (root: HTMLElement): HTMLElement[] =>
	Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
		(el) => el.tabIndex >= 0,
	);

export const Modal = ({
	isOpen,
	onClose,
	children,
	title,
	showCloseButton = true,
	widthClassName = "max-w-md",
}: ModalProps) => {
	const dialogRef = useRef<HTMLDivElement>(null);
	const previouslyFocused = useRef<HTMLElement | null>(null);
	const pressedOnBackdrop = useRef(false);

	// `useKeyListener` lit toujours le dernier gestionnaire : un `onClose`
	// recréé à chaque rendu du parent ne réattache pas l'écouteur.
	useKeyListener({ key: "Escape" }, () => {
		if (isOpen) onClose();
	});

	// Piège du focus : Tab / Maj+Tab bouclent dans la modale.
	useKeyListener({ key: "Tab" }, (e) => {
		if (!isOpen || !dialogRef.current) return;
		const focusableEls = getFocusable(dialogRef.current);
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
	});

	useEffect(() => {
		if (!isOpen) return;

		previouslyFocused.current = document.activeElement as HTMLElement | null;
		if (dialogRef.current) getFocusable(dialogRef.current)[0]?.focus();

		// Bloque le défilement de la page derrière la modale. La marge compense
		// la barre de défilement qui disparaît, pour que la page ne saute pas.
		const root = document.documentElement;
		const { overflow, paddingRight } = root.style;
		const scrollbarWidth = window.innerWidth - root.clientWidth;
		root.style.overflow = "hidden";
		if (scrollbarWidth > 0) root.style.paddingRight = `${scrollbarWidth}px`;

		return () => {
			root.style.overflow = overflow;
			root.style.paddingRight = paddingRight;
			previouslyFocused.current?.focus();
		};
	}, [isOpen]);

	if (!isOpen) return null;

	// Ferme seulement si le clic commence ET finit sur le fond : une sélection
	// de texte commencée dans la modale et relâchée dehors ne la ferme pas.
	const handleBackdropPointerDown = (e: PointerEvent<HTMLDivElement>) => {
		pressedOnBackdrop.current = e.target === e.currentTarget;
	};
	const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
		if (pressedOnBackdrop.current && e.target === e.currentTarget) onClose();
		pressedOnBackdrop.current = false;
	};

	return (
		// Le clavier a déjà son équivalent : Échap (écouteur sur `window`).
		// Pas de stopPropagation dans la boîte : il couperait aussi l'événement
		// natif, et Échap / Tab n'atteindraient plus l'écouteur.
		// biome-ignore lint/a11y/useKeyWithClickEvents: fermeture au clavier par Échap
		// biome-ignore lint/a11y/noStaticElementInteractions: fond cliquable de la modale
		<div
			className="fixed inset-0 bg-abyss-950/85 backdrop-blur-sm flex items-center justify-center z-50 p-4"
			onPointerDown={handleBackdropPointerDown}
			onClick={handleBackdropClick}
		>
			<div
				ref={dialogRef}
				className={`relative w-full ${widthClassName}`}
				role="dialog"
				aria-modal="true"
				aria-labelledby={title ? "modal-title" : undefined}
			>
				{showCloseButton && (
					<button
						type="button"
						onClick={onClose}
						className="absolute -top-10 right-0 text-bone-300 hover:text-aether-300 transition-colors"
						aria-label="Fermer"
					>
						<X className="w-8 h-8" />
					</button>
				)}
				{children}
			</div>
		</div>
	);
};
