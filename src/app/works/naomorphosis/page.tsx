import Image from "next/image";
import { Link } from 'next-view-transitions'

import SecTitle from "@/components/Common/SecTitle";
import Btn from "@/components/Common/Btn";

import Work from "@/components/works/Work";
import WorkEnvironment from "@/components/works/WorkEnvironment";
import WorkInfo from "@/components/works/WorkInfo";

import ScrollReveal from "@/components/Common/ScrollReveal";

export default function AttendanceManager() {

  return (
    <main className="max-w-[640px] w-full m-auto overflow-x-hidden">
      <section className="mt-[60px] mb-5 pt-10 pb-5 relative z-10 text-center overflow-hidden">
        <SecTitle en="Naomorphosis" jp="" className="mb-5" />

        <ScrollReveal move="bottom" delay={0} className="p-7">
          <Work productType="Portfolio Site" productName="ポートフォリオ" environment={['TypeScript', 'Next.js', 'Tailwind']}>
            <Link href="https://naomaru-design.vercel.app" target="_blank" className="block relative mb-3 w-full aspect-[16/9] rounded-lg overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
              <Image
                src="/img/common/og_image.jpg"
                alt="ポートフォリオサイト"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Link>
          </Work>
        </ScrollReveal>

        <ScrollReveal move="bottom" delay={200} className="px-7">
          <WorkEnvironment details={
            [
              { 'title': 'Program', 'item': 'TypeScript' },
              { 'title': 'Framework', 'item': 'Next.js v14.1.4, TailwindCSS' },
              { 'title': 'Library', 'item': 'rss-parser, Swiper, nodemailer, GSAP' }
            ]
          }></WorkEnvironment>
        </ScrollReveal>

        <ScrollReveal move="bottom" delay={200} className="px-7">
          <WorkInfo paragraph={`
            Next.js制作第二弾。<br />TypeScriptの学習も兼ねて作成しています。
            こちらはブログとは違い、App Routerでの開発。ページ遷移の方法やサーバーコンポーネントになった事など、前回の環境から変更点も多い環境での制作でしたが、Page Routerに比べ書き方もそれほど難しくなく、慣れればこちらの方がコンポーネント毎の記述もコンパクトに、スムーズに制作を進められる。
            ページ全体の構成は事前にFigmaで作成、当初はカッコいい寄りのデザインでカンプを作成していましたが、ページを構築していく中で&quot;自分らしくないな&quot;と思い路線変更、デザイン変更をしながら制作を進め、自分らしさを表現した結果現在のデザインにたどり着きました。
            下手の横好きでもいい、自分らしさを表現した内容でこそ意味のあるもの。
          `}></WorkInfo>

          <Btn link="https://naomaru-design.vercel.app" text="サイトを見る" />
        </ScrollReveal>
      </section>
    </main>
  );
}
