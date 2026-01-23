import type { ComponentChildren } from "preact";

interface CardProps {
	children: ComponentChildren;
	className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => {
	return (
		<div
			className={`bg-slate-900/90 rounded-lg p-4 border border-amber-700/30 shadow-lg shadow-amber-900/20 ${className}`}
		>
			{children}
		</div>
	);
};
