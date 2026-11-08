import { useState } from "react";
import type { z } from "zod";

/**
 * État persistant dans le localStorage. La valeur relue est validée par
 * `schema` : au moindre écart, elle est ignorée en entier (rien n'est
 * appliqué) et la valeur par défaut est utilisée.
 */
export function useLocalStorage<T>(
	key: string,
	initialValue: T,
	schema: z.ZodType<T>,
): [T, (value: T | ((prev: T) => T)) => void] {
	const [value, setValue] = useState<T>(() => {
		try {
			const stored = window.localStorage.getItem(key);
			if (stored === null) return initialValue;
			const result = schema.safeParse(JSON.parse(stored));
			if (result.success) return result.data;
			console.warn(
				`Donnée locale « ${key} » invalide, valeur par défaut utilisée.`,
			);
			return initialValue;
		} catch {
			return initialValue;
		}
	});

	const setStoredValue = (next: T | ((prev: T) => T)) => {
		setValue((prev) => {
			const resolved =
				next instanceof Function ? (next as (prev: T) => T)(prev) : next;
			try {
				window.localStorage.setItem(key, JSON.stringify(resolved));
			} catch {
				// localStorage indisponible (navigation privée, quota…) : état en mémoire seulement.
			}
			return resolved;
		});
	};

	return [value, setStoredValue];
}
