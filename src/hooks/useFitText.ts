import { useLayoutEffect, useRef } from "react";

/** Plus grand agrandissement : un texte court remplit mieux son cadre. */
const MAX_FIT = 1.4;
/** Plus petite réduction du texte : en dessous, il devient illisible. */
const MIN_FIT = 0.7;
const STEP = 0.05;

/**
 * Ajuste le texte à un cadre de hauteur fixe (une carte au format imposé) :
 * part de la plus grande taille et réduit jusqu'à ce qu'il tienne. Pose
 * `--fit` (1 = taille normale) sur l'élément, que le CSS applique à la taille
 * de police. Si le texte ne tient toujours pas à la plus petite taille, pose
 * `data-overflow` (le cadre défile).
 * Recalculé quand le cadre change de taille ou que `content` change.
 */
export const useFitText = <T extends HTMLElement>(content: unknown) => {
	const ref = useRef<T>(null);

	// biome-ignore lint/correctness/useExhaustiveDependencies: `content` sert seulement à relancer le calcul
	useLayoutEffect(() => {
		const el = ref.current;
		if (!el) return;

		const overflows = () => el.scrollHeight > el.clientHeight + 1;
		const fit = () => {
			let scale = MAX_FIT;
			el.style.setProperty("--fit", String(scale));
			while (overflows() && scale - STEP >= MIN_FIT) {
				scale -= STEP;
				el.style.setProperty("--fit", scale.toFixed(2));
			}
			el.toggleAttribute("data-overflow", overflows());
		};

		fit();
		if (typeof ResizeObserver === "undefined") return;
		// Seule la taille du cadre compte : changer la police ne la modifie pas.
		const observer = new ResizeObserver(fit);
		observer.observe(el);
		return () => observer.disconnect();
	}, [content]);

	return ref;
};
