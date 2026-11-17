import { Info } from "lucide-react";
import type { CSSProperties } from "react";
import type { Mage } from "../../types";
import { BreachIcons } from "./BreachIcons";

interface MagesPanelProps {
	mages: Mage[];
	numPlayers: number;
	onMageClick: (mage: Mage) => void;
}

/** Mages tirés pour un affrontement, affichés dans sa carte. */
export const MagesPanel = ({
	mages,
	numPlayers,
	onMageClick,
}: MagesPanelProps) => (
	<section className="mb-5">
		<h3 className="rune-title text-base mb-1">Vos mages ({mages.length})</h3>
		<p className="text-sm text-bone-400 font-lore italic mb-3">
			{mages.length > numPlayers
				? "Plus de mages que de joueurs : composez votre équipe parmi ce tirage."
				: "Votre équipe pour cet affrontement."}
		</p>
		<div className="grid gap-2 grid-cols-2 md:grid-cols-4">
			{mages.map((mage, idx) => (
				<button
					key={mage.id}
					type="button"
					onClick={() => onMageClick(mage)}
					className="anim-rise group rune-panel rune-panel--sunken p-3 text-center transition-[filter] hover:brightness-125 focus-visible:brightness-125"
					style={{ "--delay": `${0.5 + idx * 0.1}s` } as CSSProperties}
					aria-label={`${mage.name} : voir la fiche du mage`}
				>
					<Info
						className="absolute top-2 right-2 w-3.5 h-3.5 text-bone-500 group-hover:text-aether-300 transition-colors"
						aria-hidden="true"
					/>
					<span className="block font-display text-base text-bone-50 tracking-wide">
						{mage.name}
					</span>
					<span className="block text-xs font-lore italic text-aether-300/90 mb-3">
						{mage.title}
					</span>
					<BreachIcons breachs={mage.breachs} />
					<span className="block text-xs text-bone-400 mt-3">
						{mage.abilityTitle}
						<span className="text-aether-300">
							{" "}
							· {mage.abilityCharge} charges
						</span>
					</span>
				</button>
			))}
		</div>
	</section>
);
