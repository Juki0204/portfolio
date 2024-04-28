"use client";

import { useEffect, useState } from "react";

export default function BgMovie() {
  const [windowSize, setWindowSize] = useState<{ width: number, height: number }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        }
        );
      };

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    } else {
      return;
    };
  }, []);

  const deviceStyles: string[] = [];

  (windowSize.width / windowSize.height) * 100 < 56.25
    ? deviceStyles.push("h-full w-auto")
    : deviceStyles.push("h-auto w-full")

  return (
    <div className="h-lvh w-full overflow-hidden opacity-50 fixed -z-10 top-0 left-0 right-0 m-auto">
      <video className={`max-w-none max-h-none m-auto ${deviceStyles.join(' ')}`} src="/img/main/main_bg_movie2.mp4" autoPlay loop muted></video>
    </div>
  );
};