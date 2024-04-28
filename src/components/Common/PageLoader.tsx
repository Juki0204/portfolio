"use client";

import { useState, useEffect } from "react";

export default function PageLoader() {
  // const [loadingState, setLoadingState] = useState<string>("loading");
  const [isClass, setIsClass] = useState<string>("grid");

  useEffect(() => {
    const keyValue: string | null = localStorage.getItem('loadingState');
    if (keyValue == 'loaded') {
      setIsClass("hidden");
    }

    setTimeout(() => {
      setIsClass("hidden");
      localStorage.setItem('loadingState', 'loaded');
    }, 5500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`w-full max-w-[640px] h-lvh fixed top-0 left-0 right-0 m-auto bg-primaryColor place-content-center z-50 animate-[fadeout_1s_ease_5s_forwards] ${isClass}`}>
      <div className="relative w-[140px] mx-auto h-[60px] mb-4">
        <div className="w-5 h-5 absolute rounded-full bg-tertiaryColor left-[15%] z-[1] [transform-origin:50%] animate-[circle_.5s_ease_0s_alternate_infinite]"></div>
        <div className="w-5 h-5 absolute rounded-full bg-tertiaryColor left-[calc(50%-10px)] z-[1] [transform-origin:50%] animate-[circle_.5s_ease_.2s_alternate_infinite]"></div>
        <div className="w-5 h-5 absolute rounded-full bg-tertiaryColor right-[15%] z-[1] [transform-origin:50%] animate-[circle_.5s_ease_.5s_alternate_infinite]"></div>
        <div className="w-5 h-1 absolute rounded-full bg-[rgba(0,0,0,0.2)] top-[62px] [transform-origin:50%] left-[15%] blur-[1px] animate-[shadow_.5s_ease_.1s_alternate_infinite]"></div>
        <div className="w-5 h-1 absolute rounded-full bg-[rgba(0,0,0,0.2)] top-[62px] [transform-origin:50%] left-[calc(50%-10px)] blur-[1px] animate-[shadow_.5s_ease_.3s_alternate_infinite]"></div>
        <div className="w-5 h-1 absolute rounded-full bg-[rgba(0,0,0,0.2)] top-[62px] [transform-origin:50%] right-[15%] blur-[1px] animate-[shadow_.5s_ease_.6s_alternate_infinite]"></div>
      </div>
      <p className="overflow-hidden text-center">
        <span className="text-2xl mx-0.5 font-bold inline-block -translate-y-8 [transform-origin:bottom] animate-[textEntering_2.5s_ease-in-out_0s_infinite]">L</span>
        <span className="text-2xl mx-0.5 font-bold inline-block -translate-y-8 [transform-origin:bottom] animate-[textEntering_2.5s_ease-in-out_0.15s_infinite]">o</span>
        <span className="text-2xl mx-0.5 font-bold inline-block -translate-y-8 [transform-origin:bottom] animate-[textEntering_2.5s_ease-in-out_0.3s_infinite]">a</span>
        <span className="text-2xl mx-0.5 font-bold inline-block -translate-y-8 [transform-origin:bottom] animate-[textEntering_2.5s_ease-in-out_0.45s_infinite]">d</span>
        <span className="text-2xl mx-0.5 font-bold inline-block -translate-y-8 [transform-origin:bottom] animate-[textEntering_2.5s_ease-in-out_0.6s_infinite]">i</span>
        <span className="text-2xl mx-0.5 font-bold inline-block -translate-y-8 [transform-origin:bottom] animate-[textEntering_2.5s_ease-in-out_0.75s_infinite]">n</span>
        <span className="text-2xl mx-0.5 font-bold inline-block -translate-y-8 [transform-origin:bottom] animate-[textEntering_2.5s_ease-in-out_0.9s_infinite]">g</span>
        <span className="text-2xl mx-0.5 font-bold inline-block -translate-y-8 [transform-origin:bottom] animate-[textEntering_2.5s_ease-in-out_1.05s_infinite]">.</span>
        <span className="text-2xl mx-0.5 font-bold inline-block -translate-y-8 [transform-origin:bottom] animate-[textEntering_2.5s_ease-in-out_1.2s_infinite]">.</span>
        <span className="text-2xl mx-0.5 font-bold inline-block -translate-y-8 [transform-origin:bottom] animate-[textEntering_2.5s_ease-in-out_1.35s_infinite]">.</span>
      </p>
    </div>
  );
}