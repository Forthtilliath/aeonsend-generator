import { Users } from "lucide-react";
import { SETUP_LIMITS } from "../../schemas/storage";
import type { SetupConfig, Tier } from "../../types";
import { ALL_TIERS } from "../../utils/expedition";
import { Card } from "../ui/Card";
import { SectionTitle } from "../ui/SectionTitle";
import { Segmented } from "../ui/Segmented";
import { Switch } from "../ui/Switch";

/** Une option par entier de la plage [min, max]. */
const rangeOptions = ([min, max]: readonly [number, number]) =>
	Array.from({ length: max - min + 1 }, (_, i) => ({
		value: min + i,
		label: String(min + i),
	}));

interface SetupFormProps {
	setup: SetupConfig;
	onChange: (setup: SetupConfig) => void;
}

export const SetupForm = ({ setup, onChange }: SetupFormProps) => {
	const update = (patch: Partial<SetupConfig>) =>
		onChange({ ...setup, ...patch });
	const totalMages = setup.numPlayers + setup.extraMages;

	return (
		<Card>
			<SectionTitle>
				Configuration
				<Users className="w-4 h-4 text-aether-300/70" />
			</SectionTitle>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<Segmented
					label="Nombre de joueurs"
					value={setup.numPlayers}
					options={rangeOptions(SETUP_LIMITS.numPlayers)}
					onChange={(numPlayers) => update({ numPlayers })}
				/>
				<Segmented
					label="Mages supplémentaires au tirage"
					value={setup.extraMages}
					options={rangeOptions(SETUP_LIMITS.extraMages)}
					onChange={(extraMages) => update({ extraMages })}
					hint={`${totalMages} mage${totalMages > 1 ? "s" : ""} tiré${totalMages > 1 ? "s" : ""} au sort`}
				/>

				<Segmented
					label="Nombre d'affrontements"
					value={setup.battleCount}
					options={[
						{ value: 1, label: "1 affrontement" },
						{ value: 4, label: "Campagne de 4" },
					]}
					onChange={(battleCount) => update({ battleCount })}
				/>
				{setup.battleCount === 1 ? (
					<Segmented<Tier>
						label="Palier de la némésis"
						value={setup.tier}
						options={ALL_TIERS.map((tier) => ({
							value: tier,
							label: `Palier ${tier}`,
						}))}
						onChange={(tier) => update({ tier })}
					/>
				) : (
					<p className="text-sm text-bone-400 font-lore italic self-end pb-2">
						Une némésis de chaque palier, du 1 au 4.
					</p>
				)}

				<Segmented
					label="Réinitialisations du marché"
					value={setup.marketResets}
					options={rangeOptions(SETUP_LIMITS.marketResets)}
					onChange={(marketResets) => update({ marketResets })}
					hint="Par affrontement : retire tout le marché."
				/>
				<Segmented
					label="Relances de carte"
					value={setup.cardRerolls}
					options={rangeOptions(SETUP_LIMITS.cardRerolls)}
					onChange={(cardRerolls) => update({ cardRerolls })}
					hint="Par affrontement : retire une seule carte."
				/>
			</div>

			{setup.cardRerolls > 0 && (
				<Switch
					className="mt-4"
					checked={setup.removeExcess}
					onChange={(removeExcess) => update({ removeExcess })}
					label="La carte relancée remplace l'ancienne"
					hint="Sinon, la nouvelle carte s'ajoute et vous retirez celle que vous ne gardez pas."
				/>
			)}
		</Card>
	);
};
