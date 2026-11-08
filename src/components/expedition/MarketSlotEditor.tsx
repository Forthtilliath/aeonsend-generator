import type { MarketCondition } from "../../types";
import { clamp } from "../../utils/helpers";
import { AetherIcon } from "../ui/Icons";

type Operator = MarketCondition["operator"];

const FIELD = "rune-field w-full px-1 py-1 text-xs";

/** Change d'opérateur en conservant les coûts déjà saisis quand c'est possible. */
const withOperator = (
	slot: MarketCondition,
	operator: Operator,
): MarketCondition => {
	const cost = slot.operator !== "any" ? slot.cost : 4;
	if (operator === "any") return { type: slot.type, operator, cost: null };
	if (operator === "range") {
		const costMax = slot.operator === "range" ? slot.costMax : 5;
		return {
			type: slot.type,
			operator,
			cost,
			costMax: Math.max(cost, costMax),
		};
	}
	return { type: slot.type, operator, cost };
};

interface CostInputProps {
	value: number;
	label: string;
	onChange: (value: number) => void;
}

const CostInput = ({ value, label, onChange }: CostInputProps) => (
	<input
		type="number"
		inputMode="numeric"
		min="0"
		max="9"
		value={value}
		aria-label={label}
		placeholder={label}
		onChange={(e) =>
			onChange(clamp(Number.parseInt(e.currentTarget.value, 10), 0, 9))
		}
		className={`${FIELD} text-center`}
	/>
);

interface MarketSlotEditorProps {
	slot: MarketCondition;
	onChange: (slot: MarketCondition) => void;
}

export const MarketSlotEditor = ({ slot, onChange }: MarketSlotEditorProps) => (
	<div data-type={slot.type} className="type-tile p-2">
		<select
			value={slot.type}
			aria-label="Type de carte"
			onChange={(e) =>
				onChange({
					...slot,
					type: e.currentTarget.value as MarketCondition["type"],
				})
			}
			className={`${FIELD} mb-1`}
		>
			<option value="gem">Gemme</option>
			<option value="relic">Relique</option>
			<option value="spell">Sort</option>
			<option value="any">Tout</option>
		</select>
		<div className="text-xs mb-1 text-center font-semibold text-(--type-soft)">
			Coût en <AetherIcon />
		</div>
		<select
			value={slot.operator}
			aria-label="Condition de coût"
			onChange={(e) =>
				onChange(withOperator(slot, e.currentTarget.value as Operator))
			}
			className={`${FIELD} mb-1`}
		>
			<option value="<=">≤</option>
			<option value=">=">≥</option>
			<option value="=">=</option>
			<option value="range">Entre</option>
			<option value="any">Tout</option>
		</select>
		{slot.operator === "range" ? (
			<div className="flex gap-1">
				<CostInput
					value={slot.cost}
					label="Min"
					onChange={(cost) =>
						onChange({ ...slot, cost, costMax: Math.max(cost, slot.costMax) })
					}
				/>
				<CostInput
					value={slot.costMax}
					label="Max"
					onChange={(costMax) =>
						onChange({ ...slot, costMax, cost: Math.min(slot.cost, costMax) })
					}
				/>
			</div>
		) : slot.operator !== "any" ? (
			<CostInput
				value={slot.cost}
				label="Coût"
				onChange={(cost) => onChange({ ...slot, cost })}
			/>
		) : null}
	</div>
);
