import { FileText, Shuffle } from "lucide-preact";
import { Fragment, type FunctionComponent } from "preact";
import { useRef, useState } from "preact/hooks";
import { cards } from "../../data/cards";
import { mages } from "../../data/mages";
import {
	defaultCustomMarket,
	marketTemplates,
} from "../../data/marketTemplates";
import { nemeses } from "../../data/nemeses";
import type {
	Battle,
	Expedition,
	MarketCondition,
	Nemesis,
	PlayerConfig,
	RerollConfig,
	SupplyCard,
} from "../../types";
import type { Tuple } from "../../types/helpers";
import {
	generateSupply,
	getRandomItemFromArray,
	getTypeLabel,
	hasExcessCards,
	matchesCondition,
	shuffle,
} from "../../utils/helpers";
import { Button } from "../ui/Button";
import { BattleCard } from "./BattleCard";
import { CardModal } from "./CardModal";
import { MarketSelector } from "./MarketSelector";
import { PlayerConfig as PlayerConfigComponent } from "./PlayerConfig";

const FormExpedition: FunctionComponent = () => {
	const [expedition, setExpedition] = useState<Expedition | null>(null);
	const [selectedCard, setSelectedCard] = useState<SupplyCard | null>(null);
	const [selectedMarket, setSelectedMarket] = useState<string>("custom");
	const [showMarketConfig, setShowMarketConfig] = useState<boolean>(false);
	const expeditionRef = useRef<HTMLDivElement>(null);

	const [customMarket, setCustomMarket] = useState<Tuple<MarketCondition, 9>>([
		...defaultCustomMarket,
	]);

	const [playerConfig, setPlayerConfig] = useState<PlayerConfig>({
		mode: "perPlayer",
		numPlayers: 2,
		magesPerPlayer: 2,
		totalMages: 4,
	});

	const [rerollConfig, setRerollConfig] = useState<RerollConfig>({
		type: "individual",
		maxIndividualRerolls: 2,
		removeExcess: false,
	});

	const selectedMarketConfig =
		marketTemplates.get(selectedMarket)?.config ?? customMarket;

	const generateExpedition = (): void => {
		const selectedNemeses = [1, 2, 3, 4].map((tier) => {
			return getRandomItemFromArray(nemeses[tier]);
		}) as Tuple<Nemesis, 4>;

		const numMages =
			playerConfig.mode === "perPlayer"
				? playerConfig.numPlayers * playerConfig.magesPerPlayer
				: playerConfig.totalMages;

		const marketConfig =
			selectedMarket === "custom" ? customMarket : selectedMarketConfig;

		const allMages = [...mages];
		const battles = selectedNemeses.map((nemesis, index) => {
			const shuffledMages = shuffle(allMages);
			const selectedMages = shuffledMages.slice(
				0,
				Math.min(numMages, allMages.length),
			);

			return {
				number: index + 1,
				nemesis,
				mages: selectedMages,
				supply: generateSupply(marketConfig, [], rerollConfig.removeExcess),
				remainingRerolls: rerollConfig.maxIndividualRerolls,
			};
		}) as Tuple<Battle, 4>;

		setExpedition({
			battles,
			playerInfo: {
				mode: playerConfig.mode,
				numPlayers: playerConfig.numPlayers,
				magesPerPlayer: playerConfig.magesPerPlayer,
				totalMages: numMages,
			},
		});

		setTimeout(() => {
			const magesSection = document.getElementById("expedition-results");
			if (magesSection) {
				magesSection.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		}, 100);
	};

	const regenerateBattle = (battleIndex: number): void => {
		if (!expedition) return;
		const marketConfig =
			selectedMarket === "custom" ? customMarket : selectedMarketConfig;
		const newExpedition = { ...expedition };
		newExpedition.battles[battleIndex].supply = generateSupply(
			marketConfig,
			[],
			rerollConfig.removeExcess,
		);
		setExpedition(newExpedition);
	};

	const rerollCard = (battleIndex: number, cardPosition: number): void => {
		if (!expedition) return;
		const battle = expedition.battles[battleIndex];
		if (rerollConfig.type === "individual" && battle.remainingRerolls <= 0)
			return;

		const newExpedition = { ...expedition };
		const currentBattle = newExpedition.battles[battleIndex];

		const cardIndex = currentBattle.supply.findIndex(
			(c) => c.position === cardPosition,
		);
		if (cardIndex === -1) return;

		const oldCard = currentBattle.supply[cardIndex];
		const criteria = oldCard.criteria;

		const usedCards = new Set(currentBattle.supply.map((c) => c.name));

		const typeKey =
			criteria.type === "gem"
				? "gems"
				: criteria.type === "relic"
					? "relics"
					: criteria.type === "spell"
						? "spells"
						: getRandomItemFromArray<"gems" | "relics" | "spells">([
								"gems",
								"relics",
								"spells",
							]);
		const availableCards = cards[typeKey].filter(
			(card) => matchesCondition(card, criteria) && !usedCards.has(card.name),
		);

		if (availableCards.length > 0) {
			const newCard = getRandomItemFromArray(availableCards);

			currentBattle.supply.push({
				...newCard,
				type: criteria.type,
				position: currentBattle.supply.length + 1,
				criteria: criteria,
			});

			const sorted: SupplyCard[] = [];
			(["gem", "relic", "spell"] as const).forEach((type) => {
				let cardsOfType = currentBattle.supply
					.filter((c) => c.type === type)
					.sort((a, b) => a.cost - b.cost);

				if (rerollConfig.removeExcess) {
					const marketConfig =
						selectedMarket === "custom" ? customMarket : selectedMarketConfig;
					const maxCount = marketConfig.filter((c) => c.type === type).length;
					if (cardsOfType.length > maxCount) {
						cardsOfType = cardsOfType.slice(0, maxCount);
					}
				}
				sorted.push(...cardsOfType);
			});

			currentBattle.supply = sorted.map((card, idx) => ({
				...card,
				position: idx + 1,
			}));
			currentBattle.remainingRerolls -= 1;

			setExpedition(newExpedition);
		}
	};

	const removeCard = (battleIndex: number, cardPosition: number): void => {
		if (!expedition) return;
		const newExpedition = { ...expedition };
		const battle = newExpedition.battles[battleIndex];

		battle.supply = battle.supply.filter((c) => c.position !== cardPosition);

		const sorted: SupplyCard[] = [];
		(["gem", "relic", "spell"] as const).forEach((type) => {
			const cardsOfType = battle.supply
				.filter((c) => c.type === type)
				.sort((a, b) => a.cost - b.cost);
			sorted.push(...cardsOfType);
		});

		battle.supply = sorted.map((card, idx) => ({ ...card, position: idx + 1 }));
		setExpedition(newExpedition);
	};

	const loadMarketTemplate = (templateKey: string): void => {
		const template = marketTemplates.get(templateKey);
		if (!template) return;
		setCustomMarket([...template.config]);
		setSelectedMarket("custom");
	};

	const resetCustomMarket = (): void => {
		setCustomMarket([...defaultCustomMarket]);
	};

	const generatePDF = (): void => {
		if (!expedition) return;

		let content = `AEON'S END - CAMPAGNE DE 4 AFFRONTEMENTS
=====================================

Configuration: ${expedition.playerInfo.numPlayers} joueur(s) x ${expedition.playerInfo.magesPerPlayer} mage(s)

`;

		expedition.battles.forEach((battle) => {
			content += `
===============================================================
  AFFRONTEMENT ${battle.number}: ${battle.nemesis.name.toUpperCase()}
===============================================================

${battle.nemesis.description}
Difficulte: ${battle.nemesis.difficulty} | Vie: ${battle.nemesis.hp}

MAGES:
${battle.mages.map((m) => `  - ${m.name} (${m.title})`).join("\n")}

MARCHE:
${battle.supply.map((c) => `  - ${c.name} - ${c.cost} Aether (${getTypeLabel(c.type)})`).join("\n")}

`;
		});

		const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = "aeons-end-campagne.txt";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	};

	return (
		<div className="min-h-screen bg-linear-to-br from-indigo-950 via-purple-950 to-slate-900 text-white p-3 md:p-6">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-6">
					<h1 className="text-3xl md:text-4xl font-bold mb-2 text-amber-100 drop-shadow-lg">
						Aeon's End - Générateur de rencontres
					</h1>
				</div>

				<PlayerConfigComponent
					playerConfig={playerConfig}
					setPlayerConfig={setPlayerConfig}
					rerollConfig={rerollConfig}
					setRerollConfig={setRerollConfig}
				/>

				<div className="mb-4" />

				<MarketSelector
					selectedMarket={selectedMarket}
					setSelectedMarket={setSelectedMarket}
					showMarketConfig={showMarketConfig}
					setShowMarketConfig={setShowMarketConfig}
					customMarket={customMarket}
					setCustomMarket={setCustomMarket}
					onLoadTemplate={loadMarketTemplate}
					onResetCustom={resetCustomMarket}
				/>

				<Button
					onClick={generateExpedition}
					variant="primary"
					size="lg"
					className="w-full mb-4"
				>
					<Shuffle className="w-5 h-5" />
					Générer une campagne de 4 affrontements
				</Button>

				{expedition && (
					<>
						<div className="flex gap-2 mb-4">
							<Button
								onClick={generatePDF}
								variant="secondary"
								className="flex-1"
							>
								<FileText className="w-5 h-5" />
								Télécharger en TXT
							</Button>
						</div>

						<div
							className="space-y-4"
							id="expedition-results"
							ref={expeditionRef}
						>
							{expedition.battles.map((battle, idx) => {
								const marketConfig =
									selectedMarket === "custom"
										? customMarket
										: selectedMarketConfig;
								const excessByType = hasExcessCards(battle, marketConfig);

								return (
									<Fragment key={battle.number}>
										<BattleCard
											battle={battle}
											rerollConfig={rerollConfig}
											excessByType={excessByType}
											onRegenerate={() => regenerateBattle(idx)}
											onCardClick={setSelectedCard}
											onRemoveCard={(position) => removeCard(idx, position)}
											onRerollCard={(position) => rerollCard(idx, position)}
										/>
									</Fragment>
								);
							})}
						</div>
					</>
				)}

				<CardModal card={selectedCard} onClose={() => setSelectedCard(null)} />
			</div>
		</div>
	);
};

export default FormExpedition;
