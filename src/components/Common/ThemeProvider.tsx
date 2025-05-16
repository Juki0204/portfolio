"use client";

// import { useLocalStorage } from "@/functions/useLocalStorage";
import { useSessionStorage } from "@/functions/useSessionStorage";
import React, { useState, createContext, useContext, Dispatch, SetStateAction } from "react";

type Props = {
  children: React.ReactNode,
}

type Context = {
  isTheme: "natural" | "skyblue" | "girly",
  setIsTheme: Dispatch<SetStateAction<"natural" | "skyblue" | "girly">>,
  isLang: 'ja' | 'en',
  setIsLang: Dispatch<SetStateAction<'ja' | 'en'>>,
}

export const IsThemeContext = createContext({
  isTheme: "natural",
  setIsTheme: (theme: any) => theme,
  isLang: "ja",
  setIsLang: (lang: any) => lang,
});

export const ThemeProvider = ({ children }: Props) => {
  // const [isTheme, setIsTheme] = useState<Context['isTheme']>('natural');
  const [isTheme, setIsTheme] = useSessionStorage('isTheme', 'natural');
  const [isLang, setIsLang] = useSessionStorage('isLang', 'ja');

  return (
    <IsThemeContext.Provider value={{ isTheme, setIsTheme, isLang, setIsLang }}>
      {children}
    </IsThemeContext.Provider>
  )
}