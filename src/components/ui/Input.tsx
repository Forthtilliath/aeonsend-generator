import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	id: string;
}

export const Input = ({ label, id, className = "", ...props }: InputProps) => {
	return (
		<div>
			{label && (
				<label htmlFor={id} className="block text-sm mb-2 text-bone-300">
					{label}
				</label>
			)}
			<input
				id={id}
				className={`rune-field w-full px-3 py-1.5 ${className}`}
				{...props}
			/>
		</div>
	);
};
