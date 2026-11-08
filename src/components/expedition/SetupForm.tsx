import { Users } from "lucide-react";
import { SETUP_LIMITS } from "../../schemas/storage";
import type { SetupConfig, Tier } from "../../types";
import { ALL_TIERS } from "../../utils/expedition";
import { Card } from "../ui/Card";
import { SectionTitle } from "../ui/SectionTitle";
import { Segmented } from "../ui/Segmented";
import { Stepper } from "../ui/Stepper";

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
				<Stepper
					id="numPlayers"
					label="Nombre de joueurs"
					value={setup.numPlayers}
					min={SETUP_LIMITS.numPlayers[0]}
					max={SETUP_LIMITS.numPlayers[1]}
					onChange={(numPlayers) => update({ numPlayers })}
				/>
				<Stepper
					id="extraMages"
					label="Mages supplémentaires au tirage"
					value={setup.extraMages}
					min={SETUP_LIMITS.extraMages[0]}
					max={SETUP_LIMITS.extraMages[1]}
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

				<Stepper
					id="marketResets"
					label="Réinitialisations du marché"
					value={setup.marketResets}
					min={SETUP_LIMITS.marketResets[0]}
					max={SETUP_LIMITS.marketResets[1]}
					onChange={(marketResets) => update({ marketResets })}
					hint="Par affrontement : retire tout le marché."
				/>
				<Stepper
					id="cardRerolls"
					label="Relances de carte"
					value={setup.cardRerolls}
					min={SETUP_LIMITS.cardRerolls[0]}
					max={SETUP_LIMITS.cardRerolls[1]}
					onChange={(cardRerolls) => update({ cardRerolls })}
					hint="Par affrontement : retire une seule carte."
				/>
			</div>

			{setup.cardRerolls > 0 && (
				<label className="flex items-start gap-2 cursor-pointer mt-4">
					<input
						type="checkbox"
						checked={setup.removeExcess}
						onChange={(e) => update({ removeExcess: e.currentTarget.checked })}
						className="w-4 h-4 mt-1"
					/>
					<span>
						La carte relancée remplace l'ancienne
						<span className="block text-xs text-bone-500">
							Sinon, la nouvelle carte s'ajoute et vous retirez celle que vous
							ne gardez pas.
						</span>
					</span>
				</label>
			)}
		</Card>
	);
};
