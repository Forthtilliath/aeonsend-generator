import { RotateCcw } from "lucide-react";
import type { ReactNode } from "react";
import type { Battle, SupplyCard } from "../../types";
import { SupplyCard as SupplyCardComponent } from "./SupplyCard";

interface BattleCardProps {
	battle: Battle;
	excessBySlotType: Record<string, boolean>;
	onResetMarket: () => void;
	onCardClick: (card: SupplyCard) => void;
	onRemoveCard: (cardPosition: number) => void;
	onRerollCard: (cardPosition: number) => void;
}

const Badge = ({ children }: { children: ReactNode }) => (
	<span className="bg-red-600/30 px-2 py-1 rounded border border-red-500/50">
		{children}
	</span>
);

export const BattleCard = ({
	battle,
	excessBySlotType,
	onResetMarket,
	onCardClick,
	onRemoveCard,
	onRerollCard,
}: BattleCardProps) => {
	const { nemesis } = battle;
	const canReroll = battle.remainingRerolls > 0;

	return (
		<div className="bg-slate-900/90 rounded-lg p-4 border border-red-700/40 shadow-lg shadow-red-900/20">
			<h2 className="text-xl font-bold mb-1">
				Affrontement {battle.number}
				<span className="ml-2 text-sm font-normal text-gray-400">
					Palier {battle.tier}
				</span>
			</h2>
			<div className="text-2xl font-bold text-red-400 mb-1">{nemesis.name}</div>
			<div className="text-sm text-gray-400 mb-2">{nemesis.description}</div>
			<div className="flex gap-2 flex-wrap text-sm mb-2">
				<Badge>Difficulté : {nemesis.difficulty}</Badge>
				<Badge>Vie : {nemesis.hp}</Badge>
				<Badge>{nemesis.expansion}</Badge>
			</div>
			<p className="text-xs italic text-gray-400 mb-4">{nemesis.lore}</p>

			<div className="flex flex-wrap items-center justify-between gap-2 mb-2">
				<h3 className="font-bold">Votre marché :</h3>
				<div className="flex flex-wrap gap-2 text-sm">
					{canReroll && (
						<span className="bg-purple-600/30 px-3 py-1 rounded-full border border-purple-500/50">
							{battle.remainingRerolls} relance(s) de carte
						</span>
					)}
					<button
						type="button"
						onClick={onResetMarket}
						disabled={battle.remainingResets <= 0}
						className="flex items-center gap-1 bg-purple-600 hover:bg-purple-700 disabled:bg-slate-700 disabled:text-gray-400 px-3 py-1 rounded-full transition-all"
						title="Retirer entièrement le marché"
					>
						<RotateCcw className="w-4 h-4" />
						Réinitialiser ({battle.remainingResets})
					</button>
				</div>
			</div>
			<div className="grid gap-2 grid-cols-3">
				{battle.supply.map((card) => (
					<SupplyCardComponent
						key={card.id}
						card={card}
						canReroll={canReroll}
						showRemove={excessBySlotType[card.criteria.type] ?? false}
						onCardClick={() => onCardClick(card)}
						onRemove={() => onRemoveCard(card.position)}
						onReroll={() => onRerollCard(card.position)}
					/>
				))}
			</div>
		</div>
	);
};
