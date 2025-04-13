"use client";

import { useState } from "react";

import { Link } from 'next-view-transitions'
import Image from "next/image";

export default function Footer() {
  const [anim, setAnim] = useState<string>('');

  const returnTop = () => {
    setAnim("animate-[jump_0.5s_linear_0s_forwards]");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setAnim("");
    }, 500);
  }

  return (
    <footer className="bg-tertiaryColor p-7 pb-1 rounded-[30px_30px_0_0] flex flex-wrap justify-center bg-[url('/img/common/footer_bg.png')] bg-[position:center_bottom_24px] bg-no-repeat bg-[length:98%_auto] bg-blend-luminosity">
      <ul className="pl-4 pb-4 w-min">
        <li className="mb-1">
          <Link href={"/"} className="tracking-widest font-bold text-primaryColor">
            TOP
          </Link>
        </li>
        <li className="mb-1">
          <Link href={"/about"} className="tracking-widest font-bold text-primaryColor">
            ABOUT
          </Link>
        </li>
        <li className="mb-1">
          <Link href={"/works"} className="tracking-widest font-bold text-primaryColor">
            WORKS
          </Link>
        </li>
        <li className="mb-1">
          <Link href={"/games"} className="tracking-widest font-bold text-primaryColor">
            GAMES
          </Link>
        </li>
        <li className="mb-1">
          <Link href={"https://naomaru-blog.vercel.app"} target="_blank" className="tracking-widest font-bold text-primaryColor">
            BLOG
          </Link>
        </li>
        <li>
          <Link href={"/contact"} className="tracking-widest font-bold text-primaryColor">
            CONTACT
          </Link>
        </li>
      </ul>
      <div onClick={returnTop} className="relative h-[160px] w-[160px] aspect-[1/1] opacity-90
        before:content-['JUMP'] before:text-xs before:tracking-widest before:text-primaryColor before:leading-normal before:font-bold before:pl-5 before:w-15 before:inline-block before:border-b-primaryColor before:border-b-2 before:rotate-90 before:absolute before:bottom-5 before:right-0
        after:w-2 after:h-4 after:[clip-path:polygon(0%_0%,0%_100%,100%_100%)] after:block after:bg-primaryColor after:absolute after:bottom-[44px] after:right-[29px]">
        <Image
          src="/img/common/profile.png"
          alt="なおまる"
          width={320}
          height={320}
          className={`h-full w-auto ${anim}`}
        />
      </div>
      <p className="w-full mt-[15%] text-center text-sm text-primaryColor bg-tertiaryColor">&copy; Naomaru All rights reserved.</p>
    </footer>
  );
}