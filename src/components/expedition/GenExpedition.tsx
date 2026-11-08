import { usePersistentState } from "@forthtilliath/react-kit/usePersistentState";
import { Sparkles } from "lucide-react";
import { type FC, useMemo, useState } from "react";
import { ALL_EXPANSIONS } from "../../data/expansions";
import { useExpedition } from "../../hooks/useExpedition";
import { useMarket } from "../../hooks/useMarket";
import {
	ownedExpansionsSchema,
	setupConfigSchema,
} from "../../schemas/storage";
import type { Expansion, SetupConfig, SupplyCard } from "../../types";
import { Button } from "../ui/Button";
import { AppHeader } from "./AppHeader";
import { CardModal } from "./CardModal";
import { ExpeditionResults } from "./ExpeditionResults";
import { SettingsModal, type SettingsTab } from "./SettingsModal";
import { SettingsSummary } from "./SettingsSummary";
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
	const { value: setup, setValue: setSetup } = usePersistentState<SetupConfig>(
		"setupConfig",
		DEFAULT_SETUP,
		{ schema: setupConfigSchema },
	);

	const { value: ownedExpansionsList, setValue: setOwnedExpansionsList } =
		usePersistentState<Expansion[]>("ownedExpansions", ALL_EXPANSIONS, {
			schema: ownedExpansionsSchema,
		});
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
	const setAllExpansions = (owned: boolean): void =>
		setOwnedExpansionsList(owned ? [...ALL_EXPANSIONS] : []);
	const [settingsTab, setSettingsTab] = useState<SettingsTab | null>(null);

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
		<div className="min-h-dvh text-bone-100 px-4 pb-10 md:px-6">
			<div className="cavern" aria-hidden="true" />
			<div className="max-w-5xl mx-auto space-y-5">
				<AppHeader onOpenSettings={() => setSettingsTab("boxes")} />

				<SettingsSummary
					ownedCount={ownedExpansions.size}
					marketName={market.selectedMarketName}
					onOpen={setSettingsTab}
				/>

				<SetupForm setup={setup} onChange={setSetup} />

				<Button
					onClick={handleGenerate}
					variant="primary"
					size="lg"
					className="w-full"
				>
					<Sparkles className="w-5 h-5" />
					{setup.battleCount === 4
						? "Générer une campagne de 4 affrontements"
						: `Générer un affrontement de palier ${setup.tier}`}
				</Button>

				{warnings.length > 0 && (
					<div
						role="alert"
						className="bg-ember-950/80 border border-ember-600/60 rounded-[3px] p-3 text-sm text-ember-200 flex items-start justify-between gap-3"
					>
						<ul className="space-y-1">
							{warnings.map((w) => (
								<li key={w}>{w}</li>
							))}
						</ul>
						<button
							type="button"
							onClick={dismissWarnings}
							className="text-ember-300 hover:text-bone-50 shrink-0"
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
				<SettingsModal
					tab={settingsTab}
					onTabChange={setSettingsTab}
					onClose={() => setSettingsTab(null)}
					ownedExpansions={ownedExpansions}
					onToggleExpansion={toggleExpansion}
					onSetAllExpansions={setAllExpansions}
					market={market}
				/>
			</div>
		</div>
	);
};

export default FormExpedition;
