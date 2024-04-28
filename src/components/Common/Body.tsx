"use client";

import { useContext } from "react";
import { IsThemeContext } from "@/components/Common/ThemeProvider";

import { ReactNode } from "react";

export default function Body({ font, children }: { font: string, children: ReactNode }) {
  let themeState = useContext(IsThemeContext);

  return (
    <body className={`${font} ${themeState.isTheme} relative z-0 bg-primaryColor text-tertiaryColor sm:bg-secondaryColor duration-500`}>
      <div className="contain-inline-size sm:w-[640px] shadow-[0_0_30px_rgba(0,0,0,0.2)] mx-auto sm:bg-primaryColor duration-500">
        <div className="overflow-auto">
          {children}
        </div>
      </div>
    </body>
  )
}