import { Sparkles } from "lucide-react";
import type { Mage } from "../../types";
import { BreachIcons } from "./BreachIcons";

interface MagesPanelProps {
	mages: Mage[];
	numPlayers: number;
}

export const MagesPanel = ({ mages, numPlayers }: MagesPanelProps) => (
	<div className="bg-slate-900/90 rounded-lg p-4 border border-indigo-500/40 shadow-lg">
		<h2 className="text-lg font-bold mb-1 flex items-center gap-2 text-indigo-200">
			<Sparkles className="w-5 h-5" />
			Mages tirés au sort ({mages.length})
		</h2>
		<p className="text-sm text-gray-400 mb-3">
			{mages.length > numPlayers
				? "Plus de mages que de joueurs : composez votre équipe parmi ce tirage."
				: "Votre équipe pour toute la partie."}
		</p>
		<div className="grid gap-2 grid-cols-2 md:grid-cols-4">
			{mages.map((mage) => (
				<div
					key={mage.id}
					className="bg-linear-to-br from-indigo-800/30 to-purple-800/30 rounded-lg p-2 border border-indigo-500/40 text-center shadow-md"
				>
					<div className="font-bold text-sm">{mage.name}</div>
					<div className="text-xs text-blue-300 mb-2">{mage.title}</div>
					<BreachIcons breachs={mage.breachs} />
					<div className="text-xs text-gray-300 mt-2">
						{mage.abilityTitle} · {mage.abilityCharge} charges
					</div>
				</div>
			))}
		</div>
	</div>
);
