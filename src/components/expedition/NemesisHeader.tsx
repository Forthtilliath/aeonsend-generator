import type { CSSProperties, ReactNode } from "react";
import { getNemesisArt } from "../../data/artwork";
import type { Battle } from "../../types";

const ROMAN = ["I", "II", "III", "IV"];

const Badge = ({ children }: { children: ReactNode }) => (
	<span className="px-2 py-0.5 rounded-[3px] border border-ember-600/50 bg-ember-950/70 text-ember-200">
		{children}
	</span>
);

const delay = (seconds: number) =>
	({ "--delay": `${seconds}s` }) as CSSProperties;

/**
 * En-tête d'un affrontement : l'illustration de la Némésis en fond (quand le
 * wiki en a une), son nom, ses caractéristiques et son histoire.
 */
export const NemesisHeader = ({
	battle,
}: {
	battle: Pick<Battle, "number" | "tier" | "nemesis">;
}) => {
	const { nemesis } = battle;
	const art = getNemesisArt(nemesis.name);

	return (
		<>
			{art && (
				<img
					src={art}
					alt=""
					className="nemesis-art anim-nemesis-art"
					decoding="async"
				/>
			)}
			<div className={`nemesis-header ${art ? "pt-24 md:pt-36" : ""}`}>
				<div className="flex items-start gap-4 mb-3">
					<div
						className="anim-seal shrink-0 w-14 h-14 rounded-full border-2 border-ember-500/70 bg-radial from-ember-800 to-ember-950 flex items-center justify-center font-display text-xl text-ember-200 shadow-[0_0_20px_-6px_var(--color-ember-500)]"
						style={delay(0.15)}
						aria-hidden="true"
					>
						{ROMAN[battle.number - 1] ?? battle.number}
					</div>
					<div className="min-w-0">
						<h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-ember-300">
							Affrontement {battle.number} · Palier {battle.tier}
						</h2>
						<div
							className="anim-name font-display text-2xl md:text-3xl text-ember-200 leading-tight"
							style={delay(0.3)}
						>
							{nemesis.name}
						</div>
						<div className="text-sm text-bone-300">{nemesis.description}</div>
					</div>
				</div>
				<div
					className="anim-rise flex gap-2 flex-wrap text-sm mb-2"
					style={delay(0.45)}
				>
					<Badge>Difficulté : {nemesis.difficulty}</Badge>
					<Badge>Vie : {nemesis.hp}</Badge>
					<Badge>{nemesis.expansion}</Badge>
				</div>
				<p
					className="anim-rise font-lore text-sm italic text-bone-300 mb-4"
					style={delay(0.55)}
				>
					{nemesis.lore}
				</p>
			</div>
		</>
	);
};
