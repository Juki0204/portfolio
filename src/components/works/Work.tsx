// import React, { useState } from "react";
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
      {children}
      <div className="w-full ml-auto mb-3">
        <p className="text-right font-bold tracking-wide leading-relaxed pr-1">{productType}</p>
        <p className="text-right font-bold tracking-wide leading-relaxed border-b-tertiaryColor border-b pr-1 pb-1">{productName}</p>
        <p className="flex justify-end w-full font-bold text-xs pt-0.5 tracking-wide leading-relaxed pr-1">
          {environment.map((item, key) => (
            <span key={key} className="inline-block pl-2">#{item}</span>
          ))}
        </p>
      </div>
    </div>
  )
}