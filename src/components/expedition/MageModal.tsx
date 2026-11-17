import { getMageBoard } from "../../data/artwork";
import { PHASE_LABELS } from "../../data/phases";
import type { Mage } from "../../types";
import { Modal } from "../ui/Modal";
import { BreachIcons } from "./BreachIcons";

interface MageModalProps {
	mage: Mage | null;
	onClose: () => void;
}

const MAX_COMPLEXITY = 10;

/** Fiche d'un mage : plateau (si scanné), brèches, pouvoir et complexité. */
export const MageModal = ({ mage, onClose }: MageModalProps) => {
	if (!mage) return null;
	const board = getMageBoard(mage.name);

	return (
		<Modal
			isOpen={!!mage}
			onClose={onClose}
			title={mage.name}
			widthClassName="max-w-lg"
		>
			<div className="rune-panel">
				<div className="max-h-[85dvh] overflow-y-auto rune-scroll p-5 md:p-6 space-y-5">
					{board && (
						<img
							src={board}
							alt={`Plateau de ${mage.name}`}
							className="w-full rounded-[4px]"
						/>
					)}

					<header className="text-center">
						<h3
							id="modal-title"
							className="font-display text-3xl text-bone-50 tracking-wide"
						>
							{mage.name}
						</h3>
						<p className="font-lore italic text-aether-300">{mage.title}</p>
						<p className="mt-2 text-xs uppercase tracking-[0.2em] text-bone-500">
							{mage.expansion}
						</p>
					</header>

					<section>
						<h4 className="rune-title text-sm mb-3">Brèches</h4>
						<BreachIcons breachs={mage.breachs} size="lg" />
					</section>

					<section className="rune-panel rune-panel--sunken p-4 text-center">
						<h4 className="font-display text-xl text-aether-200">
							{mage.abilityTitle}
						</h4>
						<p className="text-xs italic text-bone-400 mb-3">
							{PHASE_LABELS[mage.abilityPhase]}
						</p>
						<p className="font-lore text-bone-100 leading-relaxed mb-4">
							{mage.abilityDescription}
						</p>
						<div
							className="flex items-center justify-center gap-2 text-sm text-aether-300"
							role="img"
							aria-label={`${mage.abilityCharge} charges pour activer le pouvoir`}
						>
							{Array.from({ length: mage.abilityCharge }, (_, i) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: pastilles identiques
								<span key={i} className="charge-pip" />
							))}
							<span className="ml-1">{mage.abilityCharge} charges</span>
						</div>
					</section>

					<section>
						<div className="flex justify-between text-sm mb-1">
							<span className="text-bone-400">Complexité</span>
							<span className="text-bone-100 font-semibold">
								{mage.complexity} / {MAX_COMPLEXITY}
							</span>
						</div>
						<div className="h-1.5 rounded-full bg-abyss-700 overflow-hidden">
							<div
								className="h-full rounded-full bg-linear-to-r from-aether-500 to-ember-500"
								style={{
									width: `${(mage.complexity / MAX_COMPLEXITY) * 100}%`,
								}}
							/>
						</div>
					</section>
				</div>
			</div>
		</Modal>
	);
};
