"use client";

import { useLocalStrage } from "@/functions/useLocalStrage";
import React, { useState, createContext, useContext, Dispatch, SetStateAction } from "react";

type Props = {
  children: React.ReactNode,
}

type Context = {
  isTheme: "natural" | "skyblue" | "girly",
  setIsTheme: Dispatch<SetStateAction<"natural" | "skyblue" | "girly">>,
}

export const IsThemeContext = createContext({
  isTheme: "natural",
  setIsTheme: (theme: any) => theme,
});

export const ThemeProvider = ({ children }: Props) => {
  // const [isTheme, setIsTheme] = useState<Context['isTheme']>('natural');
  const [isTheme, setIsTheme] = useLocalStrage('isTheme', 'natural');

  return (
    <IsThemeContext.Provider value={{ isTheme, setIsTheme }}>
      {children}
    </IsThemeContext.Provider>
  )
}