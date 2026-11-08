import type { ReactNode } from "react";

interface CardProps {
	children: ReactNode;
	className?: string;
	tone?: "aether" | "ember";
}

/** Tablette de pierre biseautée. `ember` pour ce qui touche aux némésis. */
export const Card = ({
	children,
	className = "",
	tone = "aether",
}: CardProps) => (
	<div
		className={`rune-panel p-4 md:p-5 ${tone === "ember" ? "rune-panel--ember" : ""} ${className}`}
	>
		{children}
	</div>
);
