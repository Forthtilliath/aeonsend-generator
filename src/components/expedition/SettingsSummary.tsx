import { type LucideIcon, Package, Pencil, Store } from "lucide-react";
import type { ReactNode } from "react";
import { ALL_EXPANSIONS } from "../../data/expansions";
import type { SettingsTab } from "./SettingsModal";

interface SettingsSummaryProps {
	ownedCount: number;
	marketName: string;
	onOpen: (tab: SettingsTab) => void;
}

interface SummaryChipProps {
	icon: LucideIcon;
	label: string;
	ariaLabel: string;
	warn?: boolean;
	onClick: () => void;
	children: ReactNode;
}

/** Pastille cliquable : libellé, valeur en cours et accès à l'onglet. */
const SummaryChip = ({
	icon: Icon,
	label,
	ariaLabel,
	warn = false,
	onClick,
	children,
}: SummaryChipProps) => (
	<button
		type="button"
		onClick={onClick}
		aria-label={ariaLabel}
		className={`summary-chip group ${warn ? "summary-chip--warn" : ""}`}
	>
		<Icon className="w-4 h-4 shrink-0 summary-chip__icon" aria-hidden="true" />
		<span className="summary-chip__label">{label}</span>
		<span className="summary-chip__value">{children}</span>
		<Pencil
			className="w-3.5 h-3.5 shrink-0 opacity-50 group-hover:opacity-100 transition-opacity"
			aria-hidden="true"
		/>
	</button>
);

/** Rappel des réglages en cours, chacun avec un accès direct à son onglet. */
export const SettingsSummary = ({
	ownedCount,
	marketName,
	onOpen,
}: SettingsSummaryProps) => (
	<div className="flex flex-wrap justify-center gap-2">
		<SummaryChip
			icon={Package}
			label="Boîtes"
			ariaLabel={`Boîtes possédées : ${ownedCount} sur ${ALL_EXPANSIONS.length}. Modifier`}
			warn={ownedCount === 0}
			onClick={() => onOpen("boxes")}
		>
			{ownedCount === 0 ? (
				"Aucune"
			) : (
				<>
					{ownedCount}
					<span className="text-bone-500"> / {ALL_EXPANSIONS.length}</span>
				</>
			)}
		</SummaryChip>
		<SummaryChip
			icon={Store}
			label="Marché"
			ariaLabel={`Marché : ${marketName}. Modifier`}
			onClick={() => onOpen("market")}
		>
			{marketName}
		</SummaryChip>
	</div>
);
