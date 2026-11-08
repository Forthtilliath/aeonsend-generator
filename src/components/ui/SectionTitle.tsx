import type { ReactNode } from "react";

interface SectionTitleProps {
	children: ReactNode;
	tone?: "aether" | "ember";
	className?: string;
}

/** Titre de section gravé, précédé d'un losange lumineux. */
export const SectionTitle = ({
	children,
	tone = "aether",
	className = "",
}: SectionTitleProps) => (
	<h2
		className={`rune-title text-lg mb-3 ${tone === "ember" ? "rune-title--ember" : ""} ${className}`}
	>
		{children}
	</h2>
);
