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
	PlayerConfig,
	RerollConfig,
	SupplyCard,
} from "../../types";

import {
	generateSupply,
	getTypeLabel,
	hasExcessCards,
	matchesCondition,
} from "../../utils/helpers";
import { Button } from "../ui/Button";
import { CardModal } from "./CardModal";
import { MarketSelector } from "./MarketSelector";
import { PlayerConfig as PlayerConfigComponent } from "./PlayerConfig";
import { SupplyCard as SupplyCardComponent } from "./SupplyCard";

const FormExpedition: FunctionComponent = () => {
	const [expedition, setExpedition] = useState<Expedition | null>(null);
	const [selectedCard, setSelectedCard] = useState<SupplyCard | null>(null);
	const [selectedMarket, setSelectedMarket] = useState<string>("custom");
	const [showMarketConfig, setShowMarketConfig] = useState<boolean>(false);
	const expeditionRef = useRef<HTMLDivElement>(null);

	const [customMarket, setCustomMarket] = useState<MarketCondition[]>([
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

	const generateExpedition = (): void => {
		const selectedNemeses = [1, 2, 3, 4].map((tier) => {
			const tierNemeses = nemeses[tier];
			return tierNemeses[Math.floor(Math.random() * tierNemeses.length)];
		});

		const numMages =
			playerConfig.mode === "perPlayer"
				? playerConfig.numPlayers * playerConfig.magesPerPlayer
				: playerConfig.totalMages;

		const marketConfig =
			selectedMarket === "custom"
				? customMarket
				: marketTemplates[selectedMarket].config;

		const allMages = [...mages];
		const battles: Battle[] = selectedNemeses.map((nemesis, index) => {
			const shuffledMages = [...allMages].sort(() => Math.random() - 0.5);
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
		});

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
			selectedMarket === "custom"
				? customMarket
				: marketTemplates[selectedMarket].config;
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
					: "spells";
		const availableCards = cards[typeKey].filter(
			(card) => matchesCondition(card, criteria) && !usedCards.has(card.name),
		);

		if (availableCards.length > 0) {
			const newCard =
				availableCards[Math.floor(Math.random() * availableCards.length)];

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
						selectedMarket === "custom"
							? customMarket
							: marketTemplates[selectedMarket].config;
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
		setCustomMarket([...marketTemplates[templateKey].config]);
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
${battle.mages.map((m) => `  - ${m.name} (${m.specialty})`).join("\n")}

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
										: marketTemplates[selectedMarket].config;
								const excessByType = hasExcessCards(battle, marketConfig);

								return (
									<Fragment key={idx}>
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
														onClick={() => regenerateBattle(idx)}
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
													{battle.mages.map((mage, mageIdx) => (
														<div
															key={mageIdx}
															className="bg-linear-to-br from-indigo-800/30 to-purple-800/30 rounded-lg p-2 border border-indigo-500/40 text-center shadow-md"
														>
															<div className="font-bold text-sm">
																{mage.name}
															</div>
															<div className="text-xs text-blue-300">
																{mage.title}
															</div>
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
											<div className="grid gap-2 grid-cols-3 md:grid-cols-9">
												{battle.supply.map((card, cardIdx) => {
													const canReroll =
														rerollConfig.type === "individual" &&
														battle.remainingRerolls > 0;
													const showRemove = excessByType[card.type];

													return (
														<SupplyCardComponent
															key={card.id ?? cardIdx}
															card={card}
															canReroll={canReroll}
															showRemove={showRemove}
															onCardClick={() => setSelectedCard(card)}
															onRemove={() => removeCard(idx, card.position)}
															onReroll={() => rerollCard(idx, card.position)}
														/>
													);
												})}
											</div>
										</div>
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
