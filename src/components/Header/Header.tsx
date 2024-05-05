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
    <header className="fixed top-0 left-0 right-0 m-auto h-[60px] pl-8 pr-5 lg:px-0 flex justify-between items-center bg-opacity-70 z-50 lg:bg-secondaryColor lg:h-0 duration-500">
      <nav className={
        isOpen ? "fixed bg-primaryColor w-full pt-[60px] top-0 left-0 opacity-100 h-lvh duration-500 ease-in"
          : `fixed bg-primaryColor w-full pt-[60px] top-0 left-0 opacity-0 h-lvh duration-500 ease-in pointer-events-none 
              lg:pointer-events-auto lg:opacity-100 lg:bg-[transparent] lg:w-80 lg:top-auto lg:bottom-[300px] lg:h-auto lg:left-[calc(50vw+(640px/2)+30px)]`
      }>
        <ul className="p-5 relative flex flex-wrap font-bold lg:bg-primaryColor lg:rounded-[20px] lg:pt-16 lg:pl-10 lg:after:content-['MENU'] lg:after:text-quaternaryColor lg:after:block lg:after:text-2xl lg:after:tracking-widest lg:after:absolute lg:after:top-6 lg:after:left-0 lg:after:right-0 lg:after:m-auto lg:after:text-center">
          <li className={isOpen ? "p-5 w-full h-min transition-all duration-1000 delay-[300ms] opacity-100"
            : "p-5 w-full h-min transition-all duration-500 opacity-0 -translate-x-5 lg:opacity-100 lg:hover:scale-[1.04] lg:duration-300"}>
            <Link onClick={() => setIsOpen(false)} href="/" className="text-xl text-quaternaryColor tracking-wider">
              TOP <span className="text-sm">とっぷぺーじ</span>
            </Link>
          </li>
          <li className={isOpen ? "p-5 w-full h-min transition-all duration-1000 delay-[500ms] opacity-100"
            : "p-5 w-full h-min transition-all duration-500 opacity-0 -translate-x-5 lg:opacity-100 lg:hover:scale-[1.04] lg:duration-300"}>
            <Link onClick={() => setIsOpen(false)} href="/about/" className="text-xl text-quaternaryColor tracking-wider">
              ABOUT <span className="text-sm">なおまるについて</span>
            </Link>
          </li>
          <li className={isOpen ? "p-5 w-full h-min transition-all duration-1000 delay-[700ms] opacity-100"
            : "p-5 w-full h-min transition-all duration-500 opacity-0 -translate-x-5 lg:opacity-100 lg:hover:scale-[1.04] lg:duration-300"}>
            <Link onClick={() => setIsOpen(false)} href="/works/" className="text-xl text-quaternaryColor tracking-wider">
              WORKS <span className="text-sm">つくったもの</span>
            </Link>
          </li>
          <li className={isOpen ? "p-5 w-full h-min transition-all duration-1000 delay-[900ms] opacity-100"
            : "p-5 w-full h-min transition-all duration-500 opacity-0 -translate-x-5 lg:opacity-100 lg:hover:scale-[1.04] lg:duration-300"}>
            <Link onClick={() => setIsOpen(false)} href="https://naomaru-blog.vercel.app/" target="_blank" className="text-xl text-quaternaryColor tracking-wider">
              BLOG <span className="text-sm">ぶろぐ</span>
            </Link>
          </li>
          <li className={isOpen ? "p-5 w-full h-min transition-all duration-1000 delay-[1100ms] opacity-100"
            : "p-5 w-full h-min transition-all duration-500 opacity-0 -translate-x-5 lg:opacity-100 lg:hover:scale-[1.04] lg:duration-300"}>
            <Link onClick={() => setIsOpen(false)} href="/contact/" className="text-xl text-quaternaryColor tracking-wider">
              CONTACT <span className="text-sm">おといあわせ</span>
            </Link>
          </li>
        </ul>
      </nav>
      <Link onClick={() => setIsOpen(false)} href="/" className="lg:block lg:w-80 lg:fixed lg:bottom-[160px] lg:right-[calc(50%+320px)] lg:-rotate-90">
        <h1 className="font-bold text-2xl text-quaternaryColor relative tracking-wider w-full lg:text-[240px] lg:opacity-70">Naomaru.web</h1>
      </Link>
      <button onClick={handleMenuOpen} className="flex flex-wrap flex-col justify-between w-[30px] h-[16px] lg:hidden">
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
            lg:opacity-100 lg:pointer-events-auto lg:fixed lg:w-90 lg:top-auto lg:bottom-[100px] lg:left-[calc(50vw+(640px/2)+20px)]`}>
        <li className="p-5 w-full h-min">
          <p className="text-xl text-quaternaryColor tracking-wider">
            THEME COLOR <span className="text-sm">テーマカラー</span><br />
            <span className="text-xs">サイトのテーマカラーを変更できます</span>
          </p>
        </li>
        <li className="px-5 w-full h-min flex gap-6">

          <div onClick={() => setIsTheme('natural')}>
            <div className="w-8 h-8 rounded-full bg-[#9F8772] mx-auto my-1 duration-300 lg:hover:scale-110"></div>
            <p className="text-center text-quaternaryColor">Natural</p>
          </div>

          <div onClick={() => setIsTheme('skyblue')}>
            <div className="w-8 h-8 rounded-full bg-[#749BC2] mx-auto my-1 duration-300 lg:hover:scale-110"></div>
            <p className="text-center text-quaternaryColor">SkyBlue</p>
          </div>

          <div onClick={() => setIsTheme('girly')}>
            <div className="w-8 h-8 rounded-full bg-[#E17A9B] mx-auto my-1 duration-300 lg:hover:scale-110"></div>
            <p className="text-center text-quaternaryColor">Girly</p>
          </div>

        </li>
      </ul>
    </header>
  );
}