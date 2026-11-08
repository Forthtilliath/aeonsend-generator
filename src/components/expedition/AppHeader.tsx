import { BreachSigil } from "../ui/BreachSigil";

/** En-tête : le sceau des brèches, en emblème au-dessus du titre. */
export const AppHeader = () => (
	<header className="text-center pt-6 pb-2 md:pt-10">
		<BreachSigil className="mx-auto w-24 h-24 md:w-28 md:h-28 text-aether-400/60 drop-shadow-[0_0_18px_color-mix(in_oklab,var(--color-aether-400)_35%,transparent)]" />
		<p className="mt-3 font-display text-xs md:text-sm tracking-[0.4em] uppercase text-aether-300/80">
			Registre de Gravehold
		</p>
		<h1 className="font-display text-5xl md:text-7xl text-bone-50 my-2 drop-shadow-[0_0_24px_color-mix(in_oklab,var(--color-aether-400)_45%,transparent)]">
			Aeon's End
		</h1>
		<div className="rune-divider max-w-sm mx-auto">
			<span className="font-lore italic text-bone-300 text-sm md:text-base whitespace-nowrap">
				Générateur de rencontres
			</span>
		</div>
	</header>
);
