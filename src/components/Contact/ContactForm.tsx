"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameErr, setNameErr] = useState<string>('hidden');
  const [emailErr, setEmailErr] = useState<string>('hidden');
  const [messageErr, setMessageErr] = useState<string>('hidden');
  const pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";

  const [modalState, setModalState] = useState<string>('opacity-30');

  const confirmName = () => {
    name !== ''
      ? setNameErr("hidden")
      : setNameErr("block");
  }

  const confirmEmail = () => {
    email.match(pattern) !== null
      ? setEmailErr("hidden")
      : setEmailErr("block");
    console.log(email.match(pattern));
  }

  const confirmMessage = () => {
    message !== ''
      ? setMessageErr("hidden")
      : setMessageErr("block");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("メール送信");

    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    });
  };

  const router = useRouter();

  const [isModal, setIsModal] = useState<boolean>(false);

  const handleModal = () => {
    if (name !== '' && email !== '' && message !== '') {
      setIsModal(!isModal);
    } else {
      return false;
    }
  }

  useEffect(() => {
    if (name !== '' && email.match(pattern) !== null && message !== '') {
      setModalState('opacity-100')
    }
  }, [name, email, message]);

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
              placeholder="田中 太郎"
              onChange={(e) => setName(e.target.value)}
              onBlur={confirmName}
              required
              className="w-full h-10 rounded-full px-4 font-bold placeholder:text-[#ccc]"
            />
            <span className={`inline-block ml-3 text-[#f33] text-xs ${nameErr}`}>お名前を入力して下さい。</span>
          </li>
          <li className="mb-5">
            <label className="inline-block font-bold ml-3 mb-1 relative
              after:content-['必須'] after:bg-tertiaryColor after:inline-block after:w-10 after:ml-1 after:py-px after:text-center after:rounded-md after:text-[#fff] after:text-xs
              after:absolute after:left-full after:top-[50%] after:-translate-y-[50%]">メールアドレス</label>
            <input
              type="email"
              value={email}
              placeholder="example@example.jp"
              onChange={(e) => setEmail(e.target.value)}
              onBlur={confirmEmail}
              required
              className="w-full h-10 rounded-full px-4 font-bold placeholder:text-[#ccc]"
            />
            <span className={`inline-block ml-3 text-[#f33] text-xs ${emailErr}`}>メールアドレスを正しく入力して下さい。</span>
          </li>
          <li>
            <label className="inline-block font-bold ml-3 mb-1 relative
              after:content-['必須'] after:bg-tertiaryColor after:inline-block after:w-10 after:ml-1 after:py-px after:text-center after:rounded-md after:text-[#fff] after:text-xs
              after:absolute after:left-full after:top-[50%] after:-translate-y-[50%]">お問い合わせ内容</label>
            <textarea
              value={message}
              placeholder="お問い合わせ内容を入力して下さい。"
              onChange={(e) => setMessage(e.target.value)}
              onBlur={confirmMessage}
              required
              className="w-full h-80 rounded-[20px] text-sm px-4 py-3 font-bold text-justify placeholder:text-[#ccc]"
            ></textarea>
            <span className={`inline-block ml-3 text-[#f33] text-xs ${messageErr}`}>お問い合わせ内容を入力して下さい。</span>
          </li>
        </ul>

        <div onClick={handleModal} className={`inline-block mx-auto my-5 p-px border-none h-9 bg-tertiaryColor rounded-full cursor-pointer ${modalState}`}>
          <span className="flex text-base font-extralight text-primaryColor leading-[30px] px-14 pb-1 relative
            after:content-[''] after:w-2 after:h-2 after:rotate-45 after:absolute after:right-3 after:top-0 after:bottom-0 after:m-auto after:border-white after:border-t after:border-r
            ">
            確認画面へ
          </span>
        </div>

        <div className={isModal ? "opacity-100 duration-500 pointer-events-auto w-full max-w-[640px] h-lvh fixed top-0 left-0 right-0 mx-auto bg-opacity-30 bg-[black] z-50" : "opacity-0 duration-500 pointer-events-none w-full max-w-[640px] h-lvh fixed top-0 left-0 right-0 mx-auto bg-opacity-30 bg-[black] -z-10"}>
          <div className="w-[88%] max-w-[400px] mt-20 p-[20px_24px_32px] mx-auto rounded-[20px] bg-primaryColor">
            <h2 className="font-bold text-xl mb-5">内容確認</h2>
            <ul className="w-full text-left">
              <li className="mb-5">
                <h3 className="inline-block font-bold mb-1">お名前</h3>
                <p className="min-h-5">{name}</p>
              </li>
              <li className="mb-5">
                <h3 className="inline-block font-bold mb-1">メールアドレス</h3>
                <p className="min-h-5">{email}</p>
              </li>
              <li>
                <h3 className="inline-block font-bold mb-1">お問い合わせ内容</h3>
                <div className="h-72 overflow-y-auto">{message}</div>
              </li>
            </ul>

            <p className="font-bold mb-5 text-xs">※情報が正しく入力されていない場合メールが届きません。記入内容をご確認の上、ご送信下さい。</p>

            <div className="flex justify-center">
              <div onClick={handleModal} className="inline-block w-[calc((100%-16px)/2)] p-px border-none h-9 bg-quaternaryColor rounded-[50px_0_0_50px] cursor-pointer">
                <span className="flex text-base font-extralight text-primaryColor leading-[30px] justify-center pb-1 pl-3 relative
                  after:content-[''] after:w-2 after:h-2 after:-rotate-[135deg] after:absolute after:left-3 after:top-0 after:bottom-0 after:m-auto after:border-white after:border-t after:border-r
                  ">
                  書き直す
                </span>
              </div>

              <button type="submit" onClick={() => router.push("/contact/result")} className="block w-[calc((100%-16px)/2)] p-px border-none h-9 bg-tertiaryColor rounded-[0_50px_50px_0] cursor-pointer">
                <span className="flex text-base font-extralight text-primaryColor leading-none justify-center pb-1 pr-3 relative
                  after:content-[''] after:w-2 after:h-2 after:rotate-45 after:absolute after:right-3 after:top-0 after:bottom-0 after:m-auto after:border-white after:border-t after:border-r
                  ">
                  送信する
                </span>
              </button>
            </div>
          </div>
        </div>

      </form>
    </div>
  );
}