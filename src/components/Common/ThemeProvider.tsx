"use client";

import { useLocalStrage } from "@/functions/useLocalStrage";
import React, { useState, createContext, useContext, Dispatch, SetStateAction } from "react";

type Props = {
  children: React.ReactNode,
}

type Context = {
  isTheme: "nature" | "sky" | "girly",
  setIsTheme: Dispatch<SetStateAction<"nature" | "sky" | "girly">>,
}

export const IsThemeContext = createContext({
  isTheme: "nature",
  setIsTheme: (theme: any) => theme,
});

export const ThemeProvider = ({ children }: Props) => {
  // const [isTheme, setIsTheme] = useState<Context['isTheme']>('nature');
  const [isTheme, setIsTheme] = useLocalStrage('isTheme', 'nature');

  return (
    <IsThemeContext.Provider value={{ isTheme, setIsTheme }}>
      {children}
    </IsThemeContext.Provider>
  )
}