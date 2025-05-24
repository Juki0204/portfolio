import React, { ReactNode } from "react";

export default function Skills({ title, children }: { title: string, children: ReactNode }) {
  return (
    <ul className="border-b-2 border-tertiaryColor w-full mx-auto mb-5 pb-1 px-2 flex gap-3">
      <li className="font-bold text-lg flex items-end w-2/5 tracking-wider">{title}</li>

      {React.Children.toArray(children).map((child, index) => (
        <li key={index} className="w-10 aspect-square flex items-center">
          {child}
        </li>
      ))}
    </ul>
  )
}