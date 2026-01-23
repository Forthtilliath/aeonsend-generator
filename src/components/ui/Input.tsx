import type { InputHTMLAttributes } from "preact";

interface InputProps extends InputHTMLAttributes {
	label?: string;
	id: string;
}

export const Input = ({ label, id, className = "", ...props }: InputProps) => {
	return (
		<div>
			{label && (
				<label htmlFor={id} className="block text-sm mb-2">
					{label}
				</label>
			)}
			<input
				id={id}
				className={`w-full bg-slate-800 rounded px-3 py-2 border border-slate-700 focus:border-amber-500 focus:outline-none ${className}`}
				{...props}
			/>
		</div>
	);
};
