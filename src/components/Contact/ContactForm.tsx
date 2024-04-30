"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("メール送信");

    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="">
        <ul className="w-full text-left max-w-[400px] mx-auto">
          <li className="mb-5">
            <label className="inline-block font-bold ml-3 mb-1 relative
              after:content-['必須'] after:bg-tertiaryColor after:inline-block after:w-10 after:ml-1 after:py-px after:text-center after:rounded-md after:text-[#fff] after:text-xs
              after:absolute after:left-full after:top-[50%] after:-translate-y-[50%]">お名前</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full h-10 rounded-full px-4 font-bold"
            />
          </li>
          <li className="mb-5">
            <label className="inline-block font-bold ml-3 mb-1 relative
              after:content-['必須'] after:bg-tertiaryColor after:inline-block after:w-10 after:ml-1 after:py-px after:text-center after:rounded-md after:text-[#fff] after:text-xs
              after:absolute after:left-full after:top-[50%] after:-translate-y-[50%]">メールアドレス</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-10 rounded-full px-4 font-bold"
            />
          </li>
          <li>
            <label className="inline-block font-bold ml-3 mb-1 relative
              after:content-['必須'] after:bg-tertiaryColor after:inline-block after:w-10 after:ml-1 after:py-px after:text-center after:rounded-md after:text-[#fff] after:text-xs
              after:absolute after:left-full after:top-[50%] after:-translate-y-[50%]">お問い合わせ内容</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full h-80 rounded-[20px] text-sm px-4 py-3 font-bold text-justify"
            ></textarea>
          </li>
        </ul>
        <button type="submit" onClick={() => router.push("/contact/result")} className="block mx-auto my-5 p-px border-none h-9 bg-tertiaryColor rounded-full cursor-pointer">
          <span className="flex text-base font-extralight text-primaryColor leading-none px-14 pb-1 relative
            after:content-[''] after:w-2 after:h-2 after:rotate-45 after:absolute after:right-3 after:top-0 after:bottom-0 after:m-auto after:border-white after:border-t after:border-r
            ">
            送信
          </span>
        </button>
      </form>
    </div>
  );
}