import { FileText } from "lucide-react";
import { Fragment } from "react";
import type { useExpedition } from "../../hooks/useExpedition";
import type { Expedition, SupplyCard } from "../../types";
import { buildExpeditionText, downloadText } from "../../utils/exportTxt";
import { getExcessBySlotType } from "../../utils/supply";
import { Button } from "../ui/Button";
import { BattleCard } from "./BattleCard";
import { StoryBlock } from "./StoryBlock";

type ExpeditionActions = Pick<
	ReturnType<typeof useExpedition>,
	"resetMarket" | "rerollCard" | "removeCard"
>;

interface ExpeditionResultsProps {
	expedition: Expedition;
	actions: ExpeditionActions;
	replaceOnReroll: boolean;
	onCardClick: (card: SupplyCard) => void;
}

export const ExpeditionResults = ({
	expedition,
	actions,
	replaceOnReroll,
	onCardClick,
}: ExpeditionResultsProps) => {
	const { battles, story } = expedition;
	const isCampaign = battles.length > 1;

	return (
		<div className="space-y-4" id="expedition-results">
			<Button
				onClick={() =>
					downloadText(
						"aeons-end-campagne.txt",
						buildExpeditionText(expedition),
					)
				}
				variant="secondary"
				className="w-full"
			>
				<FileText className="w-5 h-5" />
				Télécharger en TXT
			</Button>

			<StoryBlock title="Prologue" text={story.intro} />

			{battles.map((battle, idx) => (
				<Fragment key={battle.number}>
					{idx > 0 && (
						<StoryBlock
							title={`Avant l'affrontement ${battle.number}`}
							text={story.transitions[idx - 1]}
						/>
					)}
					<BattleCard
						battle={battle}
						numPlayers={expedition.numPlayers}
						excessBySlotType={getExcessBySlotType(
							battle.supply,
							expedition.marketConfig,
						)}
						onResetMarket={() => actions.resetMarket(idx)}
						onCardClick={onCardClick}
						onRemoveCard={(position) => actions.removeCard(idx, position)}
						onRerollCard={(position) =>
							actions.rerollCard(idx, position, replaceOnReroll)
						}
					/>
				</Fragment>
			))}

			<StoryBlock
				title={isCampaign ? "Épilogue" : "Et ensuite ?"}
				text={story.epilogue}
			/>
		</div>
	);
};
