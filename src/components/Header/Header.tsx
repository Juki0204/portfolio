"use client";
import React, { useState, useContext } from "react";
import { IsThemeContext } from "@/components/Common/ThemeProvider";

import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  const { isTheme, setIsTheme } = useContext(IsThemeContext);

  return (
    <header className="fixed top-0 left-0 right-0 m-auto h-[60px] pl-8 pr-5 sm:px-0 flex justify-between items-center bg-opacity-70 z-50 sm:bg-secondaryColor sm:h-0 duration-500">
      <nav className={
        isOpen ? "fixed bg-primaryColor w-full pt-[60px] top-0 left-0 opacity-100 h-lvh duration-500 ease-in"
          : `fixed bg-primaryColor w-full pt-[60px] top-0 left-0 opacity-0 h-lvh duration-500 ease-in pointer-events-none 
              sm:pointer-events-auto sm:opacity-100 sm:bg-[transparent] sm:w-80 sm:top-auto sm:bottom-[300px] sm:h-auto sm:left-[calc(50vw+(640px/2)+20px)]`
      }>
        <ul className="p-5 flex flex-wrap font-bold">
          <li className={isOpen ? "p-5 w-full h-min transition-all duration-1000 delay-[300ms] opacity-100"
            : "p-5 w-full h-min transition-all duration-500 opacity-0 -translate-x-5 sm:opacity-100"}>
            <Link onClick={() => setIsOpen(false)} href="/" className="text-xl text-quaternaryColor tracking-wider">
              TOP <span className="text-sm">とっぷぺーじ</span>
            </Link>
          </li>
          <li className={isOpen ? "p-5 w-full h-min transition-all duration-1000 delay-[500ms] opacity-100"
            : "p-5 w-full h-min transition-all duration-500 opacity-0 -translate-x-5 sm:opacity-100"}>
            <Link onClick={() => setIsOpen(false)} href="/about/" className="text-xl text-quaternaryColor tracking-wider">
              ABOUT <span className="text-sm">なおまるについて</span>
            </Link>
          </li>
          <li className={isOpen ? "p-5 w-full h-min transition-all duration-1000 delay-[700ms] opacity-100"
            : "p-5 w-full h-min transition-all duration-500 opacity-0 -translate-x-5 sm:opacity-100"}>
            <Link onClick={() => setIsOpen(false)} href="/works/" className="text-xl text-quaternaryColor tracking-wider">
              WORKS <span className="text-sm">つくったもの</span>
            </Link>
          </li>
          <li className={isOpen ? "p-5 w-full h-min transition-all duration-1000 delay-[900ms] opacity-100"
            : "p-5 w-full h-min transition-all duration-500 opacity-0 -translate-x-5 sm:opacity-100"}>
            <Link onClick={() => setIsOpen(false)} href="https://naomaru-blog.vercel.app/" target="_blank" className="text-xl text-quaternaryColor tracking-wider">
              BLOG <span className="text-sm">ぶろぐ</span>
            </Link>
          </li>
          <li className={isOpen ? "p-5 w-full h-min transition-all duration-1000 delay-[1100ms] opacity-100"
            : "p-5 w-full h-min transition-all duration-500 opacity-0 -translate-x-5 sm:opacity-100"}>
            <Link onClick={() => setIsOpen(false)} href="/contact/" className="text-xl text-quaternaryColor tracking-wider">
              CONTACT <span className="text-sm">おといあわせ</span>
            </Link>
          </li>
        </ul>
      </nav>
      <Link onClick={() => setIsOpen(false)} href="/" className="sm:block sm:w-80 sm:fixed sm:bottom-[160px] sm:right-[calc(50%+320px)] sm:-rotate-90">
        <h1 className="font-bold text-2xl text-quaternaryColor relative tracking-wider w-full sm:text-[240px] sm:opacity-70">Naomaru.web</h1>
      </Link>
      <button onClick={handleMenuOpen} className="flex flex-wrap flex-col justify-between w-[30px] h-[16px] sm:hidden">
        <span className={
          isOpen ? "rounded-sm h-0.5 w-full bg-quaternaryColor rotate-[495deg] duration-1000 translate-y-2"
            : "rounded-sm h-0.5 w-full bg-quaternaryColor duration-1000"
        }></span>

        <span className={
          isOpen ? "rounded-sm h-0.5 w-full bg-quaternaryColor rotate-[405deg] duration-1000"
            : "rounded-sm h-0.5 w-full bg-quaternaryColor duration-1000"
        }></span>

        <span className={
          isOpen ? "rounded-sm h-0.5 w-0 bg-quaternaryColor duration-300 ease-out"
            : "rounded-sm h-0.5 w-5 bg-quaternaryColor duration-300 delay-500 ease-in"
        }></span>
      </button>

      <ul className={isOpen ? "absolute top-[440px] left-0 w-full p-5 flex flex-wrap font-bold transition-all ease-in duration-1000 delay-[1300ms] opacity-100"
        : `pointer-events-none absolute top-[440px] left-0 w-full p-5 font-bold transition-all duration-500 ease-in opacity-0 -translate-x-5 
            sm:opacity-100 sm:pointer-events-auto sm:fixed sm:w-90 sm:top-auto sm:bottom-[100px] sm:left-[calc(50vw+(640px/2)+20px)]`}>
        <li className="p-5 w-full h-min">
          <p className="text-xl text-quaternaryColor tracking-wider">
            THEME COLOR <span className="text-sm">テーマカラー</span><br />
            <span className="text-xs">サイトのテーマカラーを変更できます</span>
          </p>
        </li>
        <li className="px-5 w-full h-min flex gap-6">

          <div onClick={() => setIsTheme('nature')}>
            <div className="w-8 h-8 rounded-full bg-[#9F8772] mx-auto my-1"></div>
            <p className="text-center text-quaternaryColor">Nature</p>
          </div>

          <div onClick={() => setIsTheme('sky')}>
            <div className="w-8 h-8 rounded-full bg-[#749BC2] mx-auto my-1"></div>
            <p className="text-center text-quaternaryColor">Sky</p>
          </div>

          <div onClick={() => setIsTheme('girly')}>
            <div className="w-8 h-8 rounded-full bg-[#E17A9B] mx-auto my-1"></div>
            <p className="text-center text-quaternaryColor">Girly</p>
          </div>

        </li>
      </ul>
    </header>
  );
}