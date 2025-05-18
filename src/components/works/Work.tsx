import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

interface Props {
  children: React.ReactNode;
  productType: string;
  productName: string;
  environment: string[];
}

export default function Work({ children, productType, productName, environment }: Props) {

  return (
    <div id="blog" className="pt-16 -mt-16">
      {/* <Link href="https://naomaru-blog.vercel.app" target="_blank" className="block relative mb-3 w-full aspect-[16/9] rounded-lg overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
        <Image
          src="/img/works/naomaru-blog.jpg"
          alt="なおまるブログ"
          fill
          style={{ objectFit: 'cover' }}
        />
      </Link> */}
      {children}
      <div className="w-full ml-auto mb-3">
        <p className="text-right font-bold tracking-wide leading-relaxed pr-1">{productType}</p>
        <p className="text-right font-bold tracking-wide leading-relaxed border-b-tertiaryColor border-b pr-1 pb-1">{productName}</p>
        <p className="flex justify-end w-full font-bold text-xs pt-0.5 tracking-wide leading-relaxed pr-1">
          {environment.map(item => (
            <span className="inline-block pl-2">#{item}</span>
          ))}
        </p>
      </div>
    </div>
  )
}