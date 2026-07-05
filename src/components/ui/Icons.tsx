export const AetherSvg = ({ className }: { className?: string }) => (
	<svg
		version="1.0"
		xmlns="http://www.w3.org/2000/svg"
		width="14pt"
		height="14pt"
		viewBox="0 0 14 14"
		preserveAspectRatio="xMidYMid meet"
		className={className}
	>
		<title>Éther</title>
		<g
			transform="translate(0,14) scale(0.1,-0.1)"
			fill="currentColor"
			stroke="none"
		>
			<path
				d="M37 129 c-45 -26 -40 -101 8 -119 35 -13 70 3 82 37 22 62 -35 114
-90 82z m81 -40 c3 -9 -2 -8 -17 5 l-21 19 0 -46 c0 -39 -3 -47 -18 -47 -19 0
-42 18 -42 34 0 5 8 2 18 -7 24 -21 33 -13 25 24 -3 16 -3 36 1 45 6 14 9 15
28 2 12 -8 24 -21 26 -29z"
			/>
		</g>
	</svg>
);

export const AetherIcon = () => <AetherSvg className="inline w-3.5 h-3.5" />;
