import Image from "next/image";
import Link from "next/link";

import SecTitle from "@/components/Common/SecTitle";
import Btn from "@/components/Common/Btn";

import ScrollReveal from "@/components/Common/ScrollReveal";

export default function Home() {

  return (
    <main className="max-w-[640px] w-full m-auto overflow-x-hidden">
      <section className="mt-[60px] mb-5 pt-10 pb-5 relative z-10 text-center overflow-hidden">
        <SecTitle en="Games" jp="つくったゲーム" className="mb-5" />
        <ScrollReveal move="bottom" delay={0} className="p-7">
          <div id="site1" className="pt-16 -mt-16 mb-3">
            <Link href="https://juki0204.github.io/fast-burger-kitchen/" target="_blank" className="block relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
              <Image
                src="/img/games/fast_burger_kitchen.jpg"
                alt="FAST BURGER KITCHEN"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Link>
          </div>
          <div className="w-4/6 ml-auto mb-3">
            <p className="text-right font-bold tracking-wide leading-relaxed pr-1">Brouser Game</p>
            <p className="text-right font-bold tracking-wide leading-relaxed border-b-tertiaryColor border-b pr-1">自主制作</p>
            <p className="text-right font-bold text-xs pt-0.5 tracking-wide leading-relaxed pr-1">Design & Programing</p>
          </div>
          <ul>
            <li>
              <h3 className="mb-2 text-base leading-loose font-bold bg-tertiaryColor text-primaryColor rounded-full">制作環境 / ソフトウェア</h3>
              <dl className="flex flex-wrap mb-4 w-11/12 mx-auto">
                <dt className="w-2/5 text-sm leading-loose tracking-wide py-1 font-bold grid place-content-center border-b border-secondaryColor">【 Design 】</dt>
                <dd className="w-3/5 py-1 text-sm leading-loose tracking-wide font-bold border-b border-secondaryColor">Photoshop, Figma</dd>
                <dt className="w-2/5 text-sm leading-loose tracking-wide py-1 font-bold grid place-content-center border-b border-secondaryColor">【 Program 】</dt>
                <dd className="w-3/5 py-1 text-sm leading-loose tracking-wide font-bold border-b border-secondaryColor">TypeScript</dd>
                <dt className="w-2/5 text-sm leading-loose py-1 tracking-wide font-bold grid place-content-center border-b border-secondaryColor">【 Framework 】</dt>
                <dd className="w-3/5 py-1 text-sm leading-loose tracking-wide font-bold border-b border-secondaryColor">Phaser3.js</dd>
              </dl>
            </li>
            <li>
              <h3 className="mb-2 text-base leading-loose font-bold bg-tertiaryColor text-primaryColor rounded-full">コンセプト / 詳細</h3>
              <div className="w-11/12 mx-auto">
                <p className="text-justify mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">Phaser3.jsの基本的な使い方を学びながら開発したオリジナルゲーム第一弾。</p>
                <p className="text-justify mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">注文リストの内容に沿って制限時間内にハンバーガーを作って提供、作って提供し、売上（スコア）を稼ぐゲームです。</p>
                <p className="text-justify mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">作ったバーガーの評価でタイムボーナスが加算・減算されるので、素早く・間違わずに作るのがスコアアップの近道です。</p>
                <p className="text-justify mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">ブラウザゲームですが、スマホで遊ぶ事を前提に制作しているので、スマホ推奨です。（マウス操作も可能ですがタップ操作より難しいと思います）</p>
              </div>
            </li>
          </ul>
          <Btn link="https://juki0204.github.io/fast-burger-kitchen/" text="ゲームで遊ぶ" />
          <div className="flex justify-center">
            <Link href="https://github.com/Juki0204">
              <Image
                src="/img/common/github_icon.png"
                alt="github"
                width={50}
                height={50}
              />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
