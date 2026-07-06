import { useState } from "react";

export function useLocalStorage<T>(
	key: string,
	initialValue: T,
): [T, (value: T | ((prev: T) => T)) => void] {
	const [value, setValue] = useState<T>(() => {
		try {
			const stored = window.localStorage.getItem(key);
			return stored !== null ? (JSON.parse(stored) as T) : initialValue;
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
				// localStorage unavailable (private mode, quota, etc.) — keep in-memory state only.
			}
			return resolved;
		});
	};

	return [value, setStoredValue];
}
