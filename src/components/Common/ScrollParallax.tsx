"use client";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

import { useEffect, useRef, ReactNode } from "react";
import { NextPage } from "next";

type Props = {
  children: ReactNode,
  className?: string,
  posX?: string,
  posY?: string,
}

const ScrollParallax: NextPage<Props> = ({ children, className, posX, posY }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(sectionRef.current, {
      x: posX ? posX : "-12%",
      y: posY ? posY : "",
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        start: 'top bottom',
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${className}`} ref={sectionRef}>
      {children}
    </div>
  )
}

export default ScrollParallax;