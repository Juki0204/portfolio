import { useState, useEffect, Dispatch, SetStateAction } from "react";

export const useSessionStorage = (
  key: string,
  initialValue: string
): [string, Dispatch<SetStateAction<string>>] => {
  const [value, setValue] = useState<string>(initialValue);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const stored = sessionStorage.getItem(key);
      if (stored !== null) {
        setValue(JSON.parse(stored));
      }
    } catch (err) {
      console.warn(`Failed to read ${key} from sessionStorage:`, err);
    }
  }, [key]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.warn(`Failed to write ${key} to sessionStorage:`, err);
    }
  }, [key, value]);

  return [value, setValue];
};