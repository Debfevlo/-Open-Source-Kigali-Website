import { useState } from "react";

/**
 * useState that syncs with localStorage.
 * Falls back to initialValue if the key doesn't exist yet.
 *
 * Usage:
 *   const [saved, setSaved] = useLocalStorage<number[]>("saved-resources", []);
 */
export function useLocalStorage<T>(
  key:          string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T | ((prev: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.error(`useLocalStorage: could not save key "${key}"`, err);
    }
  };

  return [storedValue, setValue];
}