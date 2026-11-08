import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "danger" | "ghost";
	size?: "sm" | "md" | "lg";
	children: ReactNode;
}

const BASE =
	"rounded-[3px] font-semibold transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-40 disabled:pointer-events-none";

const VARIANTS = {
	primary: "btn-breach font-display",
	secondary:
		"bg-abyss-800 text-aether-200 border border-aether-600/70 hover:border-aether-400 hover:bg-aether-900/60",
	danger:
		"bg-ember-800/70 text-ember-200 border border-ember-500/60 hover:bg-ember-600/70",
	ghost:
		"bg-transparent text-bone-300 border border-abyss-500 hover:border-bone-400 hover:text-bone-50",
};

const SIZES = {
	sm: "px-3 py-1 text-sm",
	md: "px-4 py-2",
	lg: "px-6 py-3.5 text-lg",
};

export const Button = ({
	variant = "primary",
	size = "md",
	className = "",
	children,
	...props
}: ButtonProps) => (
	<button
		type="button"
		className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
		{...props}
	>
		{children}
	</button>
);
