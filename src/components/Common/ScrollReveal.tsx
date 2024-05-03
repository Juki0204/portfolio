"use client";

import { useRef, useEffect, ReactNode } from "react";
import { NextPage } from "next";

type Props = {
  children: ReactNode,
  move: string,
  delay: number,
  className?: string
  id?: string
}

const ScrollReveal: NextPage<Props> = ({ children, move, delay, className, id }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    async function animate() {
      if (sectionRef.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(sectionRef.current, {
          delay: delay,
          duration: 1000,
          easing: "ease-in-out",
          opacity: 0,
          origin: move,
          distance: "30px",
          viewFactor: 0.2,
          afterReveal: function () {
            sectionRef.current !== null ? sectionRef.current.setAttribute("style", "") : false;
          }
        });
      }
    }

    animate();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionRef]);

  return <div id={`${id}`} className={`${className}`} ref={sectionRef}>{children}</div>;
}

export default ScrollReveal;