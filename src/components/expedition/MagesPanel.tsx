import type { Mage } from "../../types";
import { BreachIcons } from "./BreachIcons";

interface MagesPanelProps {
	mages: Mage[];
	numPlayers: number;
}

/** Mages tirés pour un affrontement, affichés dans sa carte. */
export const MagesPanel = ({ mages, numPlayers }: MagesPanelProps) => (
	<section className="mb-5">
		<h3 className="rune-title text-base mb-1">Vos mages ({mages.length})</h3>
		<p className="text-sm text-bone-400 font-lore italic mb-3">
			{mages.length > numPlayers
				? "Plus de mages que de joueurs : composez votre équipe parmi ce tirage."
				: "Votre équipe pour cet affrontement."}
		</p>
		<div className="grid gap-2 grid-cols-2 md:grid-cols-4">
			{mages.map((mage) => (
				<div
					key={mage.id}
					className="rune-panel rune-panel--sunken p-3 text-center"
				>
					<div className="font-display text-base text-bone-50 tracking-wide">
						{mage.name}
					</div>
					<div className="text-xs font-lore italic text-aether-300/90 mb-3">
						{mage.title}
					</div>
					<BreachIcons breachs={mage.breachs} />
					<div className="text-xs text-bone-400 mt-3">
						{mage.abilityTitle}
						<span className="text-aether-300">
							{" "}
							· {mage.abilityCharge} charges
						</span>
					</div>
				</div>
			))}
		</div>
	</section>
);
