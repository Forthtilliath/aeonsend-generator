import {
	ArrowDown,
	ArrowLeft,
	ArrowRight,
	ArrowUp,
	Lock,
	LockOpen,
} from "lucide-react";
import type { Breach } from "../../types";

const DIRECTION_ARROWS: Partial<Record<Breach, typeof ArrowUp>> = {
	top: ArrowUp,
	bottom: ArrowDown,
	left: ArrowLeft,
	right: ArrowRight,
};

const DIRECTION_LABELS: Partial<Record<Breach, string>> = {
	top: "haut",
	bottom: "bas",
	left: "gauche",
	right: "droite",
};

interface BreachIconsProps {
	breachs: [Breach, Breach, Breach, Breach];
	/** `lg` : brèches agrandies (fiche du mage). */
	size?: "md" | "lg";
}

export const BreachIcons = ({ breachs, size = "md" }: BreachIconsProps) => {
	const sized = size === "lg" ? " breach--lg" : "";
	return (
		<span
			className={`flex justify-center ${size === "lg" ? "gap-3" : "gap-1.5"}`}
		>
			{breachs.map((breach, idx) => {
				if (breach === "none") {
					return (
						<span
							// biome-ignore lint/suspicious/noArrayIndexKey: fixed 4-slot tuple, never reordered
							key={idx}
							className={`breach breach--none${sized}`}
							title="Pas de brèche"
						/>
					);
				}

				if (breach === "open") {
					return (
						<span
							// biome-ignore lint/suspicious/noArrayIndexKey: fixed 4-slot tuple, never reordered
							key={idx}
							className={`breach breach--open${sized}`}
							title="Brèche ouverte"
						>
							<LockOpen className="w-3.5 h-3.5" />
						</span>
					);
				}

				const Arrow = DIRECTION_ARROWS[breach];
				return (
					<span
						// biome-ignore lint/suspicious/noArrayIndexKey: fixed 4-slot tuple, never reordered
						key={idx}
						className={`breach breach--closed${sized}`}
						title={`Brèche fermée (icône ${DIRECTION_LABELS[breach]})`}
					>
						<Lock className="w-3 h-3" />
						{Arrow && (
							<Arrow className="w-3 h-3 p-px rounded-full bg-abyss-900 text-aether-300 absolute -bottom-1 -right-1" />
						)}
					</span>
				);
			})}
		</span>
	);
};
