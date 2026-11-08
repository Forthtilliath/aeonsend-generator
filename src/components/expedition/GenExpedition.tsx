import { Shuffle } from "lucide-react";
import { type FC, useMemo, useState } from "react";
import { ALL_EXPANSIONS } from "../../data/expansions";
import { useExpedition } from "../../hooks/useExpedition";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useMarket } from "../../hooks/useMarket";
import {
	ownedExpansionsSchema,
	setupConfigSchema,
} from "../../schemas/storage";
import type { Expansion, SetupConfig, SupplyCard } from "../../types";
import { Button } from "../ui/Button";
import { CardModal } from "./CardModal";
import { ExpansionSelector } from "./ExpansionSelector";
import { ExpeditionResults } from "./ExpeditionResults";
import { MarketSelector } from "./MarketSelector";
import { SetupForm } from "./SetupForm";

const DEFAULT_SETUP: SetupConfig = {
	numPlayers: 2,
	extraMages: 2,
	battleCount: 4,
	tier: 1,
	marketResets: 1,
	cardRerolls: 2,
	removeExcess: true,
};

const FormExpedition: FC = () => {
	const [selectedCard, setSelectedCard] = useState<SupplyCard | null>(null);
	const [setup, setSetup] = useLocalStorage<SetupConfig>(
		"setupConfig",
		DEFAULT_SETUP,
		setupConfigSchema,
	);

	const [ownedExpansionsList, setOwnedExpansionsList] = useLocalStorage<
		Expansion[]
	>("ownedExpansions", ALL_EXPANSIONS, ownedExpansionsSchema);
	const ownedExpansions = useMemo(
		() => new Set(ownedExpansionsList),
		[ownedExpansionsList],
	);
	const toggleExpansion = (expansion: Expansion): void => {
		setOwnedExpansionsList((prev) =>
			prev.includes(expansion)
				? prev.filter((e) => e !== expansion)
				: [...prev, expansion],
		);
	};

	const market = useMarket();
	const { expedition, warnings, dismissWarnings, generate, ...actions } =
		useExpedition(ownedExpansions);

	const handleGenerate = (): void => {
		generate(setup, market.marketConfig);
		setTimeout(() => {
			document
				.getElementById("expedition-results")
				?.scrollIntoView({ behavior: "smooth", block: "start" });
		}, 100);
	};

	return (
		<div className="min-h-screen bg-linear-to-br from-indigo-950 via-purple-950 to-slate-900 text-white p-3 md:p-6">
			<div className="max-w-7xl mx-auto space-y-4">
				<h1 className="text-center text-3xl md:text-4xl font-bold mb-6 text-amber-100 drop-shadow-lg">
					Aeon's End - Générateur de rencontres
				</h1>

				<ExpansionSelector
					ownedExpansions={ownedExpansions}
					onToggle={toggleExpansion}
				/>
				<SetupForm setup={setup} onChange={setSetup} />
				<MarketSelector market={market} />

				<Button
					onClick={handleGenerate}
					variant="primary"
					size="lg"
					className="w-full"
				>
					<Shuffle className="w-5 h-5" />
					{setup.battleCount === 4
						? "Générer une campagne de 4 affrontements"
						: `Générer un affrontement de palier ${setup.tier}`}
				</Button>

				{warnings.length > 0 && (
					<div className="bg-red-950/60 border border-red-700/50 rounded-lg p-3 text-sm text-red-200 flex items-start justify-between gap-3">
						<ul className="space-y-1">
							{warnings.map((w) => (
								<li key={w}>{w}</li>
							))}
						</ul>
						<button
							type="button"
							onClick={dismissWarnings}
							className="text-red-300 hover:text-white shrink-0"
							aria-label="Fermer l'avertissement"
						>
							✕
						</button>
					</div>
				)}

				{expedition && (
					<ExpeditionResults
						expedition={expedition}
						actions={actions}
						replaceOnReroll={setup.removeExcess}
						onCardClick={setSelectedCard}
					/>
				)}

				<CardModal card={selectedCard} onClose={() => setSelectedCard(null)} />
			</div>
		</div>
	);
};

export default FormExpedition;
