import { X } from "lucide-react";
import type { Expansion } from "../../types";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Modal } from "../ui/Modal";
import { Tabs } from "../ui/Tabs";
import { ExpansionSelector } from "./ExpansionSelector";
import { MarketSelector, type MarketState } from "./MarketSelector";

export type SettingsTab = "boxes" | "market";

interface SettingsModalProps {
	/** Onglet affiché ; `null` quand la modale est fermée. */
	tab: SettingsTab | null;
	onTabChange: (tab: SettingsTab) => void;
	onClose: () => void;
	ownedExpansions: ReadonlySet<Expansion>;
	onToggleExpansion: (expansion: Expansion) => void;
	onSetAllExpansions: (owned: boolean) => void;
	market: MarketState;
}

/** Réglages rarement modifiés : la collection du joueur et le type de marché. */
export const SettingsModal = ({
	tab,
	onTabChange,
	onClose,
	ownedExpansions,
	onToggleExpansion,
	onSetAllExpansions,
	market,
}: SettingsModalProps) => (
	<Modal
		isOpen={tab !== null}
		onClose={onClose}
		title="Réglages"
		showCloseButton={false}
		widthClassName="max-w-2xl"
	>
		{/* Le défilement reste à l'intérieur : le fond et le liseré de la carte
		    sont des pseudo-éléments qui ne suivraient pas un contenu qui défile.
		    Hauteur fixe : la modale ne change pas de taille d'un onglet à l'autre. */}
		<Card className="flex h-[min(60rem,calc(100dvh-2rem))] flex-col">
			<div className="relative mb-4">
				<h2
					id="modal-title"
					className="font-display text-2xl text-bone-50 text-center"
				>
					Réglages
				</h2>
				<button
					type="button"
					onClick={onClose}
					className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-bone-300 transition-colors hover:text-aether-300"
					aria-label="Fermer"
				>
					<X className="h-6 w-6" />
				</button>
			</div>
			<Tabs
				label="Catégories de réglages"
				value={tab ?? "boxes"}
				onChange={onTabChange}
				panelClassName="rune-scroll -mx-1 min-h-0 flex-1 overflow-y-auto overscroll-contain px-1"
				tabs={[
					{
						value: "boxes",
						label: "Boîtes",
						content: (
							<ExpansionSelector
								ownedExpansions={ownedExpansions}
								onToggle={onToggleExpansion}
								onSetAll={onSetAllExpansions}
							/>
						),
					},
					{
						value: "market",
						label: "Marché",
						content: <MarketSelector market={market} />,
					},
				]}
			/>
			<Button variant="secondary" className="w-full mt-4" onClick={onClose}>
				Fermer
			</Button>
		</Card>
	</Modal>
);
