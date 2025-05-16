"use client";

import { useContext } from "react";
import { IsThemeContext } from "@/components/Common/ThemeProvider";

import { ReactNode } from "react";

export default function Body({ font, children }: { font: string, children: ReactNode }) {
  let themeState = useContext(IsThemeContext).isTheme;

  return (
    <body className={`${font} ${themeState} relative z-0 bg-primaryColor text-tertiaryColor lg:bg-secondaryColor duration-500`}>
      <div className="contain-inline-size min-w-[375px] lg:w-[640px] shadow-[0_0_30px_rgba(0,0,0,0.2)] mx-auto lg:bg-primaryColor duration-500">
        <div className="overflow-auto">
          {children}
        </div>
      </div>
    </body>
  )
}