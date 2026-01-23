import { Camera, FileText, Shuffle, Users, X } from "lucide-preact";
import { Fragment, type FunctionComponent } from "preact";
import { useRef, useState } from "preact/hooks";
import { cards } from "../data/cards";
import { mages } from "../data/mages";
import { defaultCustomMarket, marketTemplates } from "../data/marketTemplates";
import { nemeses } from "../data/nemeses";
import type {
	Battle,
	Expedition,
	MarketCondition,
	PlayerConfig,
	RerollConfig,
	SupplyCard,
} from "../types";
import {
	generateSupply,
	getCriteriaLabel,
	getTypeBgColor,
	getTypeColor,
	getTypeLabel,
	hasExcessCards,
	matchesCondition,
} from "../utils/helpers";

const AeonsEndExpedition: FunctionComponent = () => {
	const [expedition, setExpedition] = useState<Expedition | null>(null);
	const [selectedCard, setSelectedCard] = useState<SupplyCard | null>(null);
	const [selectedMarket, setSelectedMarket] = useState<string>("custom");
	const [showMarketConfig, setShowMarketConfig] = useState<boolean>(false);
	const [isExporting, setIsExporting] = useState<boolean>(false);
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

	// const generateImage = async (): Promise<void> => {
	// 	if (!expedition || !expeditionRef.current) return;

	// 	setIsExporting(true);

	// 	try {
	// 		if (typeof (window as any).html2canvas === "undefined") {
	// 			const script = document.createElement("script");
	// 			script.src =
	// 				"https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";

	// 			await new Promise((resolve, reject) => {
	// 				script.onload = resolve;
	// 				script.onerror = reject;
	// 				document.head.appendChild(script);
	// 			});
	// 		}

	// 		if (typeof (window as any).html2canvas === "undefined") {
	// 			throw new Error("html2canvas not loaded");
	// 		}

	// 		await new Promise((resolve) => setTimeout(resolve, 200));

	// 		const element = expeditionRef.current;

	// 		const canvas = await (window as any).html2canvas(element, {
	// 			backgroundColor: "#1e1b4b",
	// 			scale: 2,
	// 			logging: false,
	// 			useCORS: true,
	// 			allowTaint: true,
	// 			scrollX: 0,
	// 			scrollY: -window.scrollY,
	// 			windowWidth: element.scrollWidth,
	// 			windowHeight: element.scrollHeight,
	// 			width: element.offsetWidth,
	// 			height: element.offsetHeight,
	// 		});

	// 		canvas.toBlob((blob: Blob | null) => {
	// 			if (!blob) return;
	// 			const url = URL.createObjectURL(blob);
	// 			const link = document.createElement("a");
	// 			link.href = url;
	// 			link.download = "aeons-end-campagne.png";
	// 			document.body.appendChild(link);
	// 			link.click();
	// 			document.body.removeChild(link);
	// 			URL.revokeObjectURL(url);
	// 			setIsExporting(false);
	// 		});
	// 	} catch (error) {
	// 		console.error("Erreur lors de la génération de l'image:", error);
	// 		alert("Erreur lors de la génération de l'image. Veuillez réessayer.");
	// 		setIsExporting(false);
	// 	}
	// };

	return (
		<div className="min-h-screen bg-linear-to-br from-indigo-950 via-purple-950 to-slate-900 text-white p-3 md:p-6">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-6">
					<h1 className="text-3xl md:text-4xl font-bold mb-2 text-amber-100 drop-shadow-lg">
						Aeon's End - Générateur de rencontres
					</h1>
				</div>

				{/* Configuration des joueurs */}
				<div className="bg-slate-900/90 rounded-lg p-4 mb-4 border border-amber-700/30 shadow-lg shadow-amber-900/20">
					<h2 className="text-lg font-bold mb-3 flex items-center gap-2 text-amber-200">
						<Users className="w-5 h-5" />
						Configuration
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
						<div>
							<label htmlFor="numPlayers" className="block text-sm mb-2">
								Nombre de joueurs
							</label>
							<input
								id="numPlayers"
								type="number"
								min="1"
								max="4"
								value={playerConfig.numPlayers}
								onChange={(e) =>
									setPlayerConfig({
										...playerConfig,
										numPlayers: parseInt(e.currentTarget.value, 10) || 1,
									})
								}
								className="w-full bg-slate-800 rounded px-3 py-2 border border-slate-700 focus:border-amber-500 focus:outline-none"
							/>
						</div>
						<div>
							<label htmlFor="magesPerPlayer" className="block text-sm mb-2">
								Mages par joueur
							</label>
							<input
								id="magesPerPlayer"
								type="number"
								min="1"
								max="4"
								value={playerConfig.magesPerPlayer}
								onChange={(e) =>
									setPlayerConfig({
										...playerConfig,
										magesPerPlayer: parseInt(e.currentTarget.value, 10) || 1,
									})
								}
								className="w-full bg-slate-800 rounded px-3 py-2 border border-slate-700 focus:border-amber-500 focus:outline-none"
							/>
						</div>
						<div className="flex items-end">
							<div className="bg-indigo-900/30 rounded p-3 text-sm border border-indigo-700/30 w-full">
								Total de mages :{" "}
								{playerConfig.numPlayers * playerConfig.magesPerPlayer}
							</div>
						</div>
					</div>

					<div className="border-t border-gray-700 pt-4">
						<h3 className="text-md font-bold mb-3">Relances</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="flex items-center gap-2 cursor-pointer mb-2">
									<input
										type="radio"
										checked={rerollConfig.type === "global"}
										onChange={() =>
											setRerollConfig({ ...rerollConfig, type: "global" })
										}
										className="w-4 h-4"
									/>
									<span>Relance globale (toutes les cartes)</span>
								</label>
								<label className="flex items-center gap-2 cursor-pointer">
									<input
										type="radio"
										checked={rerollConfig.type === "individual"}
										onChange={() =>
											setRerollConfig({ ...rerollConfig, type: "individual" })
										}
										className="w-4 h-4"
									/>
									<span>Relances individuelles (pool global)</span>
								</label>
							</div>
							{rerollConfig.type === "individual" && (
								<div>
									<label
										htmlFor="maxIndividualRerolls"
										className="block text-sm mb-2"
									>
										Nombre total de relances
									</label>
									<input
										id="maxIndividualRerolls"
										type="number"
										min="0"
										max="20"
										value={rerollConfig.maxIndividualRerolls}
										onChange={(e) =>
											setRerollConfig({
												...rerollConfig,
												maxIndividualRerolls:
													parseInt(e.currentTarget.value, 10) || 0,
											})
										}
										className="w-full bg-slate-800 rounded px-3 py-2 border border-slate-700 focus:border-amber-500 focus:outline-none"
									/>
								</div>
							)}
						</div>
						<div className="mt-3">
							<label className="flex items-center gap-2 cursor-pointer">
								<input
									type="checkbox"
									checked={rerollConfig.removeExcess}
									onChange={(e) =>
										setRerollConfig({
											...rerollConfig,
											removeExcess: e.currentTarget.checked,
										})
									}
									className="w-4 h-4"
								/>
								<span>Supprimer l'excédent de cartes par catégorie</span>
							</label>
							<p className="text-xs text-gray-400 mt-1 ml-6">
								Si activé, garde uniquement le nombre de cartes configuré par
								type
							</p>
						</div>
					</div>
				</div>

				{/* Sélection du marché */}
				<div className="bg-slate-900/90 rounded-lg p-4 mb-4 border border-amber-700/30 shadow-lg shadow-amber-900/20">
					<h2 className="text-lg font-bold mb-3 text-amber-200">Marché</h2>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
						{(["balanced", "pierced", "master"] as const).map((key) => (
							<button
								type="button"
								key={key}
								onClick={() => {
									setSelectedMarket(key);
									setShowMarketConfig(true);
								}}
								className={`p-2 rounded-lg border-2 transition-all ${
									selectedMarket === key
										? "border-amber-500 bg-amber-900/40 shadow-lg shadow-amber-900/30"
										: "border-slate-700 bg-slate-800/50 hover:border-amber-700/50"
								}`}
							>
								<div className="text-sm font-semibold">
									{marketTemplates[key].name.split(":")[0]}
								</div>
								<div className="text-xs text-gray-400">
									{marketTemplates[key].name.split(":")[1]}
								</div>
							</button>
						))}

						<button
							type="button"
							onClick={() => {
								setSelectedMarket("custom");
								setShowMarketConfig(true);
							}}
							className={`p-2 rounded-lg border-2 transition-all ${
								selectedMarket === "custom"
									? "border-amber-500 bg-amber-900/40 shadow-lg shadow-amber-900/30"
									: "border-slate-700 bg-slate-800/50 hover:border-amber-700/50"
							}`}
						>
							<div className="text-sm font-semibold">Marché #8</div>
							<div className="text-xs text-gray-400">Personnalisé</div>
						</button>
					</div>

					{showMarketConfig && (
						<div className="bg-gray-700/50 rounded-lg p-4 mb-4">
							<div className="flex justify-between items-center mb-3">
								<h3 className="font-bold">
									Configuration :{" "}
									{selectedMarket === "custom"
										? "Marché #8 Personnalisé"
										: marketTemplates[selectedMarket].name}
								</h3>
								<button
									type="button"
									onClick={() => setShowMarketConfig(false)}
									className="text-gray-400 hover:text-white"
								>
									<X className="w-5 h-5" />
								</button>
							</div>

							{selectedMarket === "custom" ? (
								<>
									<div className="flex justify-end mb-2">
										<button
											type="button"
											onClick={resetCustomMarket}
											className="text-sm bg-gray-600 hover:bg-gray-500 px-3 py-1 rounded transition-all"
										>
											Réinitialiser
										</button>
									</div>
									<div className="grid grid-cols-3 md:grid-cols-9 gap-2">
										{customMarket.map((slot, idx) => (
											<div key={idx} className="bg-gray-600/50 rounded p-2">
												<select
													value={slot.type}
													onChange={(e) => {
														const newMarket = [...customMarket];
														newMarket[idx].type = e.currentTarget.value as
															| "gem"
															| "relic"
															| "spell";
														setCustomMarket(newMarket);
													}}
													className="w-full bg-gray-700 rounded px-1 py-1 text-xs mb-1"
												>
													<option value="gem">Gemme</option>
													<option value="relic">Relique</option>
													<option value="spell">Sort</option>
												</select>
												<div className="text-xs mb-1 text-center font-semibold">
													Coût en ⚡
												</div>
												<select
													value={slot.operator}
													onChange={(e) => {
														const newMarket = [...customMarket];
														newMarket[idx].operator = e.currentTarget.value as
															| "<="
															| ">="
															| "="
															| "any";
														if (e.currentTarget.value === "any")
															newMarket[idx].cost = null;
														setCustomMarket(newMarket);
													}}
													className="w-full bg-gray-700 rounded px-1 py-1 text-xs mb-1"
												>
													<option value="<=">≤</option>
													<option value=">=">≥</option>
													<option value="=">=</option>
													<option value="any">any</option>
												</select>
												{slot.operator !== "any" && (
													<input
														type="number"
														min="0"
														max="9"
														value={slot.cost || 0}
														onChange={(e) => {
															const newMarket = [...customMarket];
															newMarket[idx].cost =
																parseInt(e.currentTarget.value, 10) || 0;
															setCustomMarket(newMarket);
														}}
														className="w-full bg-gray-700 rounded px-1 py-1 text-xs text-center"
													/>
												)}
											</div>
										))}
									</div>
								</>
							) : (
								<>
									<div className="flex justify-end mb-2">
										<button
											type="button"
											onClick={() => loadMarketTemplate(selectedMarket)}
											className="text-sm bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded transition-all"
										>
											Modifier (copier vers Marché #8)
										</button>
									</div>
									<div className="grid grid-cols-3 md:grid-cols-9 gap-2">
										{marketTemplates[selectedMarket].config.map((slot, idx) => (
											<div
												key={idx}
												className="bg-gray-600/30 rounded p-2 opacity-75"
											>
												<div className="text-xs text-center font-semibold mb-1">
													{slot.type === "gem"
														? "💎"
														: slot.type === "relic"
															? "🔮"
															: "✨"}
												</div>
												<div className="text-xs text-center mb-1">
													{getTypeLabel(slot.type)}
												</div>
												<div className="text-xs text-center font-bold">
													{getCriteriaLabel(slot)}
												</div>
											</div>
										))}
									</div>
								</>
							)}
						</div>
					)}
				</div>

				<button
					type="button"
					onClick={generateExpedition}
					className="w-full bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 py-3 rounded-lg font-bold text-lg mb-4 flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-amber-900/30"
				>
					<Shuffle className="w-5 h-5" />
					Générer une campagne de 4 affrontements
				</button>

				{expedition && (
					<>
						{/* Boutons d'export */}
						<div className="flex gap-2 mb-4">
							<button
								type="button"
								onClick={generatePDF}
								className="flex-1 bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all shadow-md"
							>
								<FileText className="w-5 h-5" />
								Télécharger en TXT
							</button>
							{/* <button
								type="button"
								onClick={generateImage}
								className="flex-1 bg-emerald-600 hover:bg-emerald-700 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all shadow-md"
							>
								<Camera className="w-5 h-5" />
								Télécharger en PNG
							</button> */}
						</div>

						<div
							className="space-y-4"
							id="expedition-results"
							ref={expeditionRef}
							style={isExporting ? { width: "1400px", maxWidth: "none" } : {}}
						>
							{expedition.battles.map((battle, idx) => {
								const marketConfig =
									selectedMarket === "custom"
										? customMarket
										: marketTemplates[selectedMarket].config;
								const excessByType = hasExcessCards(battle, marketConfig);

								return (
									<Fragment key={idx}>
										<div
											className="bg-slate-900/90 rounded-lg p-4 border border-red-700/40 shadow-lg shadow-red-900/20"
											style={isExporting ? { breakInside: "avoid" } : {}}
										>
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
												{rerollConfig.type === "global" && !isExporting && (
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
												<div
													className={`grid gap-2 ${isExporting ? "grid-cols-4" : "grid-cols-2 md:grid-cols-4"}`}
												>
													{battle.mages.map((mage, mageIdx) => (
														<div
															key={mageIdx}
															className="bg-linear-to-br from-indigo-800/30 to-purple-800/30 rounded-lg p-2 border border-indigo-500/40 text-center shadow-md"
														>
															<div className="font-bold text-sm">
																{mage.name}
															</div>
															<div className="text-xs text-blue-300">
																{mage.specialty}
															</div>
														</div>
													))}
												</div>
											</div>

											<h3 className="font-bold mb-2 flex items-center justify-between">
												<span>Votre marché :</span>
												{rerollConfig.type === "individual" && !isExporting && (
													<span className="text-sm bg-purple-600/30 px-3 py-1 rounded-full border border-purple-500/50">
														{battle.remainingRerolls} relance(s) restante(s)
													</span>
												)}
											</h3>
											<div
												className={`grid gap-2 ${isExporting ? "grid-cols-9" : "grid-cols-3 md:grid-cols-9"}`}
											>
												{battle.supply.map((card, cardIdx) => {
													const canReroll =
														rerollConfig.type === "individual" &&
														battle.remainingRerolls > 0;
													const showRemove = excessByType[card.type];

													return (
														<div key={cardIdx} className="relative">
															<button
																type="button"
																onClick={() => setSelectedCard(card)}
																className={`w-full rounded-lg p-2 border-2 transition-all hover:scale-105 ${getTypeBgColor(card.type)}`}
															>
																<div
																	className={`text-xs text-gray-400 mb-1 ${isExporting ? "hidden" : ""}`}
																>
																	{getTypeLabel(card.type)}
																</div>
																<div
																	className={`text-xs font-semibold text-blue-300 mb-1 ${isExporting ? "hidden" : ""}`}
																>
																	{getCriteriaLabel(card.criteria)}
																</div>
																<div className="text-2xl mb-1">
																	{card.image}
																</div>
																<div className="text-xs font-bold">
																	{card.name}
																</div>
																<div className="text-xs mt-1">
																	{card.cost}⚡
																</div>
															</button>

															{showRemove && !isExporting && (
																<button
																	type="button"
																	onClick={() => removeCard(idx, card.position)}
																	className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold border-2 border-gray-800 transition-all hover:scale-110"
																	title="Supprimer cette carte"
																>
																	✕
																</button>
															)}

															{canReroll && !isExporting && (
																<button
																	type="button"
																	onClick={() => rerollCard(idx, card.position)}
																	className="absolute -bottom-2 -right-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold border-2 border-gray-800 transition-all hover:scale-110"
																	title="Relancer cette carte"
																>
																	🔄
																</button>
															)}
														</div>
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

				{/* Modal carte */}
				{selectedCard && (
					<div
						className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
						onClick={() => setSelectedCard(null)}
						onKeyDown={(e) => {
							if (e.key === "Escape") setSelectedCard(null);
						}}
						role="button"
						tabIndex={0}
					>
						<div
							className="relative max-w-md w-full"
							onClick={(e) => e.stopPropagation()}
							onKeyDown={(e) => e.stopPropagation()}
							role="dialog"
							aria-modal="true"
							aria-labelledby="card-title"
						>
							<button
								onClick={() => setSelectedCard(null)}
								className="absolute -top-10 right-0 text-white hover:text-gray-300"
								aria-label="Fermer"
							>
								<X className="w-8 h-8" />
							</button>
							<div
								className={`bg-gradient-to-br ${getTypeColor(selectedCard.type)} rounded-xl p-8 border-4 border-white/20 shadow-2xl`}
							>
								<div className="text-6xl text-center mb-4">
									{selectedCard.image}
								</div>
								<h3
									id="card-title"
									className="text-3xl font-bold text-center mb-2"
								>
									{selectedCard.name}
								</h3>
								<div className="text-center text-xl mb-4">
									{selectedCard.type.charAt(0).toUpperCase() +
										selectedCard.type.slice(1)}
								</div>
								<div className="text-center text-4xl font-bold">
									Coût: {selectedCard.cost}⚡
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default AeonsEndExpedition;
