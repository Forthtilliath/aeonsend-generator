import { RotateCcw } from "lucide-react";
import type { ReactNode } from "react";
import type { Battle, SupplyCard } from "../../types";
import { plural } from "../../utils/helpers";
import { Card } from "../ui/Card";
import { MagesPanel } from "./MagesPanel";
import { SupplyCard as SupplyCardComponent } from "./SupplyCard";

const ROMAN = ["I", "II", "III", "IV"];

interface BattleCardProps {
	battle: Battle;
	numPlayers: number;
	excessBySlotType: Record<string, boolean>;
	onResetMarket: () => void;
	onCardClick: (card: SupplyCard) => void;
	onRemoveCard: (cardPosition: number) => void;
	onRerollCard: (cardPosition: number) => void;
}

const Badge = ({ children }: { children: ReactNode }) => (
	<span className="px-2 py-0.5 rounded-[3px] border border-ember-600/50 bg-ember-950/70 text-ember-200">
		{children}
	</span>
);

export const BattleCard = ({
	battle,
	numPlayers,
	excessBySlotType,
	onResetMarket,
	onCardClick,
	onRemoveCard,
	onRerollCard,
}: BattleCardProps) => {
	const { nemesis } = battle;
	const canReroll = battle.remainingRerolls > 0;

	return (
		<Card tone="ember" className="animate-rise">
			<div className="flex items-start gap-4 mb-3">
				<div
					className="shrink-0 w-14 h-14 rounded-full border-2 border-ember-500/70 bg-radial from-ember-800 to-ember-950 flex items-center justify-center font-display text-xl text-ember-200 shadow-[0_0_20px_-6px_var(--color-ember-500)]"
					aria-hidden="true"
				>
					{ROMAN[battle.number - 1] ?? battle.number}
				</div>
				<div className="min-w-0">
					<h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-ember-300/80">
						Affrontement {battle.number} · Palier {battle.tier}
					</h2>
					<div className="font-display text-2xl md:text-3xl text-ember-200 leading-tight">
						{nemesis.name}
					</div>
					<div className="text-sm text-bone-400">{nemesis.description}</div>
				</div>
			</div>
			<div className="flex gap-2 flex-wrap text-sm mb-2">
				<Badge>Difficulté : {nemesis.difficulty}</Badge>
				<Badge>Vie : {nemesis.hp}</Badge>
				<Badge>{nemesis.expansion}</Badge>
			</div>
			<p className="font-lore text-sm italic text-bone-400 mb-4">
				{nemesis.lore}
			</p>

			<MagesPanel mages={battle.mages} numPlayers={numPlayers} />

			<div className="flex flex-wrap items-center justify-between gap-2 mb-3">
				<h3 className="rune-title text-base">Votre marché</h3>
				<div className="flex flex-wrap gap-2 text-sm">
					{canReroll && (
						<span className="px-3 py-1 rounded-full border border-aether-600/60 bg-aether-900/60 text-aether-200">
							{battle.remainingRerolls}{" "}
							{plural(battle.remainingRerolls, "relance")} de carte
						</span>
					)}
					<button
						type="button"
						onClick={onResetMarket}
						disabled={battle.remainingResets <= 0}
						className="flex items-center gap-1 px-3 py-1 rounded-full border border-aether-500/70 text-aether-200 hover:bg-aether-900/70 disabled:border-abyss-600 disabled:text-bone-500 disabled:hover:bg-transparent transition-all"
						title="Retirer entièrement le marché"
					>
						<RotateCcw className="w-4 h-4" />
						Réinitialiser ({battle.remainingResets})
					</button>
				</div>
			</div>
			<div className="grid gap-2.5 grid-cols-3">
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
		</Card>
	);
};
