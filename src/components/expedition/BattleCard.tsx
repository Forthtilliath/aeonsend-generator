import { Shuffle } from "lucide-preact";
import type { Battle, RerollConfig, SupplyCard } from "../../types";
import { SupplyCard as SupplyCardComponent } from "./SupplyCard";

interface BattleCardProps {
	battle: Battle;
	rerollConfig: RerollConfig;
	excessByType: Record<string, boolean>;
	onRegenerate: () => void;
	onCardClick: (card: SupplyCard) => void;
	onRemoveCard: (cardPosition: number) => void;
	onRerollCard: (cardPosition: number) => void;
}

export const BattleCard = ({
	battle,
	rerollConfig,
	excessByType,
	onRegenerate,
	onCardClick,
	onRemoveCard,
	onRerollCard,
}: BattleCardProps) => {
	return (
		<div className="bg-slate-900/90 rounded-lg p-4 border border-red-700/40 shadow-lg shadow-red-900/20">
			<div className="flex justify-between items-start mb-3">
				<div>
					<h2 className="text-xl font-bold mb-1">
						Affrontement {battle.number}
					</h2>
					<div className="text-2xl font-bold text-red-400 mb-1">
						{battle.nemesis.name}
					</div>
					<div className="text-sm text-gray-400 mb-2">
						{battle.nemesis.description}
					</div>
					<div className="flex gap-2 flex-wrap text-sm">
						<span className="bg-red-600/30 px-2 py-1 rounded border border-red-500/50">
							Difficulté: {battle.nemesis.difficulty}
						</span>
						<span className="bg-red-600/30 px-2 py-1 rounded border border-red-500/50">
							Vie: {battle.nemesis.hp}
						</span>
					</div>
				</div>
				{rerollConfig.type === "global" && (
					<button
						type="button"
						onClick={onRegenerate}
						className="bg-purple-600 hover:bg-purple-700 p-2 rounded transition-all"
						title="Relancer tout le marché"
					>
						<Shuffle className="w-5 h-5" />
					</button>
				)}
			</div>

			<div className="mb-4">
				<h3 className="text-lg font-bold mb-2">
					Vos {battle.mages.length} mages :
				</h3>
				<div className="grid gap-2 grid-cols-2 md:grid-cols-4">
					{battle.mages.map((mage) => (
						<div
							key={mage.id}
							className="bg-linear-to-br from-indigo-800/30 to-purple-800/30 rounded-lg p-2 border border-indigo-500/40 text-center shadow-md"
						>
							<div className="font-bold text-sm">{mage.name}</div>
							<div className="text-xs text-blue-300">{mage.title}</div>
						</div>
					))}
				</div>
			</div>

			<h3 className="font-bold mb-2 flex items-center justify-between">
				<span>Votre marché :</span>
				{rerollConfig.type === "individual" && (
					<span className="text-sm bg-purple-600/30 px-3 py-1 rounded-full border border-purple-500/50">
						{battle.remainingRerolls} relance(s) restante(s)
					</span>
				)}
			</h3>
			<div className="grid gap-2 grid-cols-3">
				{battle.supply.map((card) => {
					const canReroll =
						rerollConfig.type === "individual" && battle.remainingRerolls > 0;
					const showRemove = excessByType[card.type];

					return (
						<SupplyCardComponent
							key={card.id}
							card={card}
							canReroll={canReroll}
							showRemove={showRemove}
							onCardClick={() => onCardClick(card)}
							onRemove={() => onRemoveCard(card.position)}
							onReroll={() => onRerollCard(card.position)}
						/>
					);
				})}
			</div>
		</div>
	);
};
