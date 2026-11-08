import type { ReactNode } from "react";

interface SwitchProps {
	checked: boolean;
	onChange: (checked: boolean) => void;
	label: ReactNode;
	hint?: ReactNode;
	className?: string;
}

/**
 * Interrupteur marche/arrêt. Repose sur une vraie case à cocher (`role="switch"`)
 * masquée visuellement : clavier, lecteurs d'écran et clic sur le libellé
 * fonctionnent sans code supplémentaire.
 */
export const Switch = ({
	checked,
	onChange,
	label,
	hint,
	className = "",
}: SwitchProps) => (
	<label className={`flex items-start gap-3 cursor-pointer ${className}`}>
		<input
			type="checkbox"
			role="switch"
			aria-checked={checked}
			checked={checked}
			onChange={(e) => onChange(e.currentTarget.checked)}
			className="peer sr-only"
		/>
		<span
			aria-hidden="true"
			className="relative mt-0.5 h-6 w-11 shrink-0 rounded-full border border-abyss-600 bg-abyss-800 transition-all peer-checked:border-aether-400 peer-checked:bg-aether-500 peer-checked:shadow-[0_0_12px_-4px_var(--color-aether-400)] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-aether-400 peer-checked:[&>span]:translate-x-5 peer-checked:[&>span]:bg-abyss-950"
		>
			<span className="absolute left-0.5 top-0.5 h-[1.125rem] w-[1.125rem] rounded-full bg-bone-300 transition-transform" />
		</span>
		<span>
			{label}
			{hint && <span className="block text-xs text-bone-500">{hint}</span>}
		</span>
	</label>
);
