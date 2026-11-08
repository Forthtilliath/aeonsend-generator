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
}

export const BreachIcons = ({ breachs }: BreachIconsProps) => {
	return (
		<div className="flex justify-center gap-1.5">
			{breachs.map((breach, idx) => {
				if (breach === "none") {
					return (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: fixed 4-slot tuple, never reordered
							key={idx}
							className="breach breach--none"
							title="Pas de brèche"
						/>
					);
				}

				if (breach === "open") {
					return (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: fixed 4-slot tuple, never reordered
							key={idx}
							className="breach breach--open"
							title="Brèche ouverte"
						>
							<LockOpen className="w-3.5 h-3.5" />
						</div>
					);
				}

				const Arrow = DIRECTION_ARROWS[breach];
				return (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: fixed 4-slot tuple, never reordered
						key={idx}
						className="breach breach--closed"
						title={`Brèche fermée (icône ${DIRECTION_LABELS[breach]})`}
					>
						<Lock className="w-3 h-3" />
						{Arrow && (
							<Arrow className="w-3 h-3 p-px rounded-full bg-abyss-900 text-aether-300 absolute -bottom-1 -right-1" />
						)}
					</div>
				);
			})}
		</div>
	);
};
