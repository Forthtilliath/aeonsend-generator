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
		<div className="flex justify-center gap-1">
			{breachs.map((breach, idx) => {
				if (breach === "none") {
					return (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: fixed 4-slot tuple, never reordered
							key={idx}
							className="w-6 h-6 rounded border border-slate-700 bg-slate-800/30"
							title="Pas de brèche"
						/>
					);
				}

				if (breach === "open") {
					return (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: fixed 4-slot tuple, never reordered
							key={idx}
							className="w-6 h-6 rounded bg-amber-500/80 border border-amber-300 flex items-center justify-center"
							title="Brèche ouverte"
						>
							<LockOpen className="w-3.5 h-3.5 text-amber-950" />
						</div>
					);
				}

				const Arrow = DIRECTION_ARROWS[breach];
				return (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: fixed 4-slot tuple, never reordered
						key={idx}
						className="w-6 h-6 rounded bg-slate-700/60 border border-slate-500 flex items-center justify-center relative"
						title={`Brèche fermée (icône ${DIRECTION_LABELS[breach]})`}
					>
						<Lock className="w-3 h-3 text-slate-300" />
						{Arrow && (
							<Arrow className="w-2.5 h-2.5 text-slate-300 absolute -bottom-0.5 -right-0.5" />
						)}
					</div>
				);
			})}
		</div>
	);
};
