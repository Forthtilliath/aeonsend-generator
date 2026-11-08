import { useId } from "react";

const TICKS = Array.from({ length: 72 }, (_, i) => i * 5);
const BREACHES = [0, 90, 180, 270];

interface BreachSigilProps {
	className?: string;
}

/**
 * Sceau décoratif : anneau gradué, quatre brèches cardinales
 * et une faille d'éther au centre. Purement visuel (aria-hidden).
 */
export const BreachSigil = ({ className = "" }: BreachSigilProps) => {
	const riftId = useId();
	const haloId = useId();

	return (
		<svg viewBox="0 0 200 200" className={className} aria-hidden="true">
			<defs>
				<radialGradient id={haloId}>
					<stop offset="0%" style={{ stopColor: "var(--color-aether-400)" }} />
					<stop
						offset="100%"
						style={{ stopColor: "var(--color-aether-400)", stopOpacity: 0 }}
					/>
				</radialGradient>
				<linearGradient id={riftId} x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" style={{ stopColor: "var(--color-aether-200)" }} />
					<stop offset="50%" style={{ stopColor: "var(--color-aether-400)" }} />
					<stop offset="100%" style={{ stopColor: "var(--color-ember-400)" }} />
				</linearGradient>
			</defs>

			<g
				className="animate-sigil origin-center"
				style={{ transformBox: "fill-box" }}
				fill="none"
				stroke="currentColor"
			>
				<circle cx="100" cy="100" r="97" strokeWidth="0.6" />
				{TICKS.map((angle) => (
					<line
						key={angle}
						x1="100"
						y1={angle % 30 === 0 ? 5 : 8}
						x2="100"
						y2="12"
						strokeWidth={angle % 30 === 0 ? 1.2 : 0.5}
						transform={`rotate(${angle} 100 100)`}
					/>
				))}
				<circle
					cx="100"
					cy="100"
					r="84"
					strokeWidth="0.4"
					strokeDasharray="2 4"
				/>
			</g>

			<g
				className="animate-sigil-reverse origin-center"
				style={{ transformBox: "fill-box" }}
				fill="none"
				stroke="currentColor"
			>
				<circle cx="100" cy="100" r="66" strokeWidth="0.8" />
				<rect
					x="62"
					y="62"
					width="76"
					height="76"
					strokeWidth="0.5"
					transform="rotate(45 100 100)"
				/>
				{BREACHES.map((angle) => (
					<g key={angle} transform={`rotate(${angle} 100 100)`}>
						<circle
							cx="100"
							cy="34"
							r="9"
							strokeWidth="1"
							className="fill-abyss-900"
						/>
						<circle cx="100" cy="34" r="3" className="fill-current" />
					</g>
				))}
			</g>

			<circle
				cx="100"
				cy="100"
				r="34"
				fill={`url(#${haloId})`}
				opacity="0.35"
			/>
			<path
				d="M100 64 C112 84 112 116 100 136 C88 116 88 84 100 64 Z"
				fill={`url(#${riftId})`}
			/>
		</svg>
	);
};
