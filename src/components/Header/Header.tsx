"use client";
import React, { useState, useContext } from "react";
import { IsThemeContext } from "@/components/Common/ThemeProvider";

import { Link } from 'next-view-transitions'

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  const { isTheme, setIsTheme } = useContext(IsThemeContext);
  const { isLang, setIsLang } = useContext(IsThemeContext);

  return (
    <header className="fixed top-0 left-0 right-0 m-auto h-[60px] pl-8 pr-5 lg:px-0 flex justify-between items-center bg-opacity-70 z-50 lg:bg-secondaryColor lg:h-0 duration-500">
      <nav className={
        isOpen ? "fixed bg-primaryColor w-full pt-[60px] top-0 left-0 opacity-100 h-lvh transition-all duration-500 ease-in"
          : `fixed bg-primaryColor w-full pt-[60px] top-0 left-0 opacity-0 h-lvh transition-all duration-500 ease-in pointer-events-none 
              lg:pointer-events-auto lg:opacity-100 lg:bg-[transparent] lg:w-80 lg:top-auto lg:bottom-[390px] lg:h-auto lg:transition-none lg:left-[calc(50vw+(640px/2)+30px)]`
      }>
        <ul className="p-5 relative flex flex-wrap font-bold lg:bg-primaryColor lg:rounded-[20px] lg:pt-16 lg:pl-10 lg:after:content-['MENU'] lg:after:text-quaternaryColor lg:after:block lg:after:text-2xl lg:after:tracking-widest lg:after:absolute lg:after:top-6 lg:after:left-0 lg:after:right-0 lg:after:m-auto lg:after:text-center">
          <li className={isOpen ? "px-5 py-4 w-full h-min transition-all duration-1000 delay-[300ms] opacity-100"
            : "px-5 py-4 w-full h-min transition-all duration-500 opacity-0 -translate-x-5 lg:opacity-100 lg:hover:scale-[1.04] lg:duration-300"}>
            <Link onClick={() => setIsOpen(false)} href="/" className="text-xl text-quaternaryColor tracking-wider">
              TOP {isLang === 'ja' ? <span className="text-sm">とっぷぺーじ</span> : <span className="text-sm">To Top Page</span>}
            </Link>
          </li>
          <li className={isOpen ? "px-5 py-4 w-full h-min transition-all duration-1000 delay-[500ms] opacity-100"
            : "px-5 py-4 w-full h-min transition-all duration-500 opacity-0 -translate-x-5 lg:opacity-100 lg:hover:scale-[1.04] lg:duration-300"}>
            <Link onClick={() => setIsOpen(false)} href="/about" className="text-xl text-quaternaryColor tracking-wider">
              ABOUT {isLang === 'ja' ? <span className="text-sm">なおまる に ついて</span> : <span className="text-sm">About Namaomaru</span>}
            </Link>
          </li>
          <li className={isOpen ? "px-5 py-4 w-full h-min transition-all duration-1000 delay-[700ms] opacity-100"
            : "px-5 py-4 w-full h-min transition-all duration-500 opacity-0 -translate-x-5 lg:opacity-100 lg:hover:scale-[1.04] lg:duration-300"}>
            <Link onClick={() => setIsOpen(false)} href="/works" className="text-xl text-quaternaryColor tracking-wider">
              WORKS {isLang === 'ja' ? <span className="text-sm">つくったもの</span> : <span className="text-sm">Productions</span>}
            </Link>
          </li>
          <li className={isOpen ? "px-5 py-4 w-full h-min transition-all duration-1000 delay-[700ms] opacity-100"
            : "px-5 py-4 w-full h-min transition-all duration-500 opacity-0 -translate-x-5 lg:opacity-100 lg:hover:scale-[1.04] lg:duration-300"}>
            <Link onClick={() => setIsOpen(false)} href="/games" className="text-xl text-quaternaryColor tracking-wider">
              GAMES {isLang === 'ja' ? <span className="text-sm">つくったゲーム</span> : <span className="text-sm">Games</span>}
            </Link>
          </li>
          <li className={isOpen ? "px-5 py-4 w-full h-min transition-all duration-1000 delay-[900ms] opacity-100"
            : "px-5 py-4 w-full h-min transition-all duration-500 opacity-0 -translate-x-5 lg:opacity-100 lg:hover:scale-[1.04] lg:duration-300"}>
            <Link onClick={() => setIsOpen(false)} href="https://naomaru-blog.vercel.app/" target="_blank" className="text-xl text-quaternaryColor tracking-wider">
              BLOG {isLang === 'ja' ? <span className="text-sm">ぶろぐ</span> : <span className="text-sm">Weblogs</span>}
            </Link>
          </li>
          <li className={isOpen ? "px-5 py-4 w-full h-min transition-all duration-1000 delay-[1100ms] opacity-100"
            : "px-5 py-4 w-full h-min transition-all duration-500 opacity-0 -translate-x-5 lg:opacity-100 lg:hover:scale-[1.04] lg:duration-300"}>
            <Link onClick={() => setIsOpen(false)} href="/contact" className="text-xl text-quaternaryColor tracking-wider">
              CONTACT {isLang === 'ja' ? <span className="text-sm">おといあわせ</span> : <span className="text-sm">Contact me</span>}
            </Link>
          </li>
        </ul>
        <ul className={isOpen ? "w-full px-5 flex flex-wrap font-bold transition-all ease-in duration-1000 delay-[1300ms] opacity-100"
          : `pointer-events-none w-full px-5 font-bold transition-all duration-500 ease-in opacity-0 -translate-x-5 
            lg:opacity-100 lg:pointer-events-auto lg:fixed lg:w-90 lg:top-auto lg:bottom-[100px] lg:transition-none lg:left-[calc(50vw+(640px/2)+20px)]`}>
          <li className="p-5 pb-3 w-full h-min">
            <p className="text-xl text-quaternaryColor tracking-wider">
              THEME COLOR {isLang === 'ja' ? <span className="text-sm">テーマカラー</span> : <span className="text-sm">Overall site color</span>}<br />
              {isLang === 'ja' ? <span className="text-xs">サイトのテーマカラーを変更できます</span> : <span className="text-xs">You can change the color of the entire site.</span>}
            </p>
          </li>
          <li className="px-5 w-full h-min flex gap-6">

            <div onClick={() => setIsTheme('natural')}>
              <div className={isTheme === 'natural' ? "w-8 h-8 rounded-full bg-[#9F8772] mx-auto my-1 duration-300 lg:hover:scale-110" : "w-8 h-8 rounded-full bg-[#9F8772] mx-auto my-1 duration-300 lg:hover:scale-110 opacity-30"}></div>
              <p className="text-center text-quaternaryColor">Natural</p>
            </div>

            <div onClick={() => setIsTheme('skyblue')}>
              <div className={isTheme === 'skyblue' ? "w-8 h-8 rounded-full bg-[#749BC2] mx-auto my-1 duration-300 lg:hover:scale-110" : "w-8 h-8 rounded-full bg-[#749BC2] mx-auto my-1 duration-300 lg:hover:scale-110 opacity-30"}></div>
              <p className="text-center text-quaternaryColor">SkyBlue</p>
            </div>

            <div onClick={() => setIsTheme('girly')}>
              <div className={isTheme === 'girly' ? "w-8 h-8 rounded-full bg-[#E17A9B] mx-auto my-1 duration-300 lg:hover:scale-110" : "w-8 h-8 rounded-full bg-[#E17A9B] mx-auto my-1 duration-300 lg:hover:scale-110 opacity-30"}></div>
              <p className="text-center text-quaternaryColor">Girly</p>
            </div>
          </li>

          <li className="p-5 pt-10 pb-4 w-full h-min">
            <p className="text-xl text-quaternaryColor tracking-wider">
              LANGUAGE {isLang === 'ja' ? <span className="text-sm">げんご せってい</span> : <span className="text-sm">Setting Language</span>}
            </p>
          </li>
          <li className="px-5 w-full h-min flex gap-4 justify-start">
            <div onClick={() => setIsLang('ja')} className={isLang === 'ja' ? "w-fit px-4 py-2 rounded-full bg-tertiaryColor duration-300 lg:hover:scale-110" : "w-fit px-4 py-2 rounded-full bg-tertiaryColor duration-300 lg:hover:scale-110 opacity-30"}>
              <p className="text-center text-[#fff]">JAPANESE</p>
            </div>

            <div onClick={() => setIsLang('en')} className={isLang === 'en' ? "w-fit px-4 py-2 rounded-full bg-tertiaryColor duration-300 lg:hover:scale-110" : "w-fit px-4 py-2 rounded-full bg-tertiaryColor duration-300 lg:hover:scale-110 opacity-30"}>
              <p className="text-center text-[#fff]">ENGLISH</p>
            </div>
          </li>
        </ul>
      </nav>
      <Link onClick={() => setIsOpen(false)} href="/" className="lg:block lg:w-fit lg:h-fit lg:fixed lg:bottom-[360px] lg:right-[calc(50%+20px)] lg:-rotate-90">
        <h1 className="font-bold text-2xl text-quaternaryColor relative tracking-wider w-full lg:text-[120px] lg:leading-none lg:opacity-70 lg:whitespace-nowrap">Naomorphosis</h1>
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
    </header>
  );
}