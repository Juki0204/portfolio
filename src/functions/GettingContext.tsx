"use client";

import { useContext } from "react";
import { IsThemeContext } from "@/components/Common/ThemeProvider";

export const GettingContext = () => {
  let themeState = useContext(IsThemeContext);
  return themeState.isTheme;
}