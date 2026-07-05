import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "danger" | "ghost";
	size?: "sm" | "md" | "lg";
	children: ReactNode;
}

export const Button = ({
	variant = "primary",
	size = "md",
	className = "",
	children,
	...props
}: ButtonProps) => {
	const baseClasses =
		"rounded-lg font-semibold transition-all active:scale-95 flex items-center justify-center gap-2";

	const variantClasses = {
		primary:
			"bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 shadow-lg shadow-amber-900/30",
		secondary: "bg-indigo-600 hover:bg-indigo-700 shadow-md",
		danger: "bg-red-600 hover:bg-red-700",
		ghost: "bg-gray-600 hover:bg-gray-500",
	};

	const sizeClasses = {
		sm: "px-3 py-1 text-sm",
		md: "px-4 py-2",
		lg: "px-6 py-3 text-lg",
	};

	return (
		<button
			type="button"
			className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};
