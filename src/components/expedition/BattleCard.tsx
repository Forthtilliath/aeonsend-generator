import { useIntersectionObserver } from "@forthtilliath/react-kit/useIntersectionObserver";
import { RotateCcw } from "lucide-react";
import { useState } from "react";
import type { Battle, Mage, SupplyCard } from "../../types";
import { plural } from "../../utils/helpers";
import { Card } from "../ui/Card";
import { MagesPanel } from "./MagesPanel";
import { NemesisHeader } from "./NemesisHeader";
import { SupplyCard as SupplyCardComponent } from "./SupplyCard";

interface BattleCardProps {
	battle: Battle;
	numPlayers: number;
	excessBySlotType: Record<string, boolean>;
	onResetMarket: () => void;
	onCardClick: (card: SupplyCard) => void;
	onMageClick: (mage: Mage) => void;
	onRemoveCard: (cardPosition: number) => void;
	onRerollCard: (cardPosition: number) => void;
}

/** Les cartes du premier tirage arrivent après la Némésis et les mages, une à une. */
const FIRST_DEAL_DELAY = 0.9;
const DEAL_STEP = 0.07;

const HAS_OBSERVER = typeof IntersectionObserver !== "undefined";

export const BattleCard = ({
	battle,
	numPlayers,
	excessBySlotType,
	onResetMarket,
	onCardClick,
	onMageClick,
	onRemoveCard,
	onRerollCard,
}: BattleCardProps) => {
	const canReroll = battle.remainingRerolls > 0;
	// Les animations démarrent quand l'affrontement entre à l'écran.
	const [revealRef, isVisible] = useIntersectionObserver<HTMLDivElement>({
		once: true,
		threshold: 0.05,
	});
	const revealed = isVisible || !HAS_OBSERVER;
	// Cartes du premier tirage : distribuées en cascade. Une carte relancée
	// ensuite arrive tout de suite.
	const [firstDeal] = useState(
		() => new Set(battle.supply.map((card) => card.id)),
	);

	return (
		<div
			ref={revealRef}
			className="anim-rise"
			data-revealed={revealed ? "" : undefined}
		>
			<Card tone="ember">
				<NemesisHeader battle={battle} />

				<MagesPanel
					mages={battle.mages}
					numPlayers={numPlayers}
					onMageClick={onMageClick}
				/>

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
				<div className="grid gap-3 grid-cols-2 sm:grid-cols-3">
					{battle.supply.map((card, idx) => (
						<SupplyCardComponent
							key={card.id}
							card={card}
							canReroll={canReroll}
							showRemove={excessBySlotType[card.criteria.type] ?? false}
							dealDelay={
								firstDeal.has(card.id) ? FIRST_DEAL_DELAY + idx * DEAL_STEP : 0
							}
							onCardClick={() => onCardClick(card)}
							onRemove={() => onRemoveCard(card.position)}
							onReroll={() => onRerollCard(card.position)}
						/>
					))}
				</div>
			</Card>
		</div>
	);
};
