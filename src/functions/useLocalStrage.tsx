import { useEffect, useState, Dispatch, SetStateAction } from "react";

export const useLocalStrage = (key: string, initialValue: string): [string, Dispatch<SetStateAction<string>>] => {

  // const [value, setValue] = useState(() => {
  //   const keyValue = localStorage.getItem(key);
  //   return keyValue ? JSON.parse(keyValue) : initialValue;
  // });
  const [value, setValue] = useState("nature");

  useEffect(() => {
    const keyValue: string | null = localStorage.getItem(key);
    const localStorageValue: string = keyValue ? JSON.parse(keyValue) : initialValue;
    setValue(localStorageValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // setTimeout(() => {
    localStorage.setItem(key, JSON.stringify(value));
    // }, 100);
  }, [key, value]);

  return [value, setValue];
};