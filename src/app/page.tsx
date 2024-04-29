import Image from "next/image";

import Profile from "@/components/Common/Profile";
import Btn from "@/components/Common/Btn";
import SecTitle from "@/components/Common/SecTitle";
import Blog from "@/components/Blog/Blog";
import InfiniteSlide from "@/components/Common/InfinitSlide";
// import Contact from "@/components/Contact/Contact";

import PageLoader from "@/components/Common/PageLoader";

import ScrollReveal from "@/components/Common/ScrollReveal";
import Link from "next/link";

export default function Home() {

  return (
    <main className="max-w-[640px] w-full m-auto overflow-x-hidden">
      <PageLoader />
      <section className="mt-[60px] pt-10 relative z-10">
        <Profile />
        <p className="text-center mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">「デザインはあまり好きじゃない。」<br />
          「でもコーディングは好き。」<br />
          「プログラムも苦手だけど好き。」</p>
        <p className="text-center mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">でも、仕事って<br />
          好き嫌いでするものじゃないから<br />
          &nbsp;私は「私に出来る事」をする。</p>
        <p className="text-center mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">だけど、嫌いだったものが<br />
          仕事の中で好きに変わったなら<br />
          &nbsp;それはそれで良い事なんじゃないかな。</p>

        <div className="w-full px-[10%] py-7 relative mt-8 mx-auto">
          <ScrollReveal move="right" delay={0} className="absolute top-0 bottom-0 -right-[10%] m-auto">
            <div className="rounded-[61%_39%_58%_42%_/_48%_62%_38%_52%] bg-tertiaryColor opacity-10 w-[330px] aspect-square animate-[rolling_20s_linear_0s_infinite]"></div>
          </ScrollReveal>

          <ScrollReveal move="left" delay={0}>
            <ul className="border-b-2 border-tertiaryColor w-full mx-auto mb-5 pb-1 px-2 flex gap-3">
              <li className="font-bold text-lg flex items-end w-2/5 tracking-wider">Design</li>
              <li className="w-10 aspect-square flex items-center">
                <Image
                  src="/img/about/photoshop_icon.png"
                  alt="photoshop"
                  width={50}
                  height={50}
                />
              </li>
              <li className="w-10 aspect-square flex items-center">
                <Image
                  src="/img/about/figma_icon.png"
                  alt="figma"
                  width={50}
                  height={50}
                />
              </li>
            </ul>
            <ul className="border-b-2 border-tertiaryColor w-full mx-auto mb-5 pb-1 px-2 flex gap-3">
              <li className="font-bold text-lg flex items-end w-2/5 tracking-wider">Coding</li>
              <li className="w-10 aspect-square flex items-center">
                <Image
                  src="/img/about/html_icon.png"
                  alt="html"
                  width={50}
                  height={50}
                />
              </li>
              <li className="w-10 aspect-square flex items-center">
                <Image
                  src="/img/about/css_icon.png"
                  alt="css"
                  width={50}
                  height={50}
                />
              </li>
              <li className="w-10 aspect-square flex items-center">
                <Image
                  src="/img/about/sass_icon.png"
                  alt="sass"
                  width={50}
                  height={50}
                />
              </li>
            </ul>
            <ul className="border-b-2 border-tertiaryColor w-full mx-auto mb-5 pb-1 px-2 flex gap-3">
              <li className="font-bold text-lg flex items-end w-2/5 tracking-wider">Programing</li>
              <li className="w-10 aspect-square flex items-center">
                <Image
                  src="/img/about/js_icon.png"
                  alt="javascript"
                  width={50}
                  height={50}
                />
              </li>
              <li className="w-10 aspect-square flex items-center">
                <Image
                  src="/img/about/ts_icon.png"
                  alt="typescript"
                  width={50}
                  height={50}
                />
              </li>
              <li className="w-10 aspect-square flex items-center">
                <Image
                  src="/img/about/react_icon.png"
                  alt="react"
                  width={50}
                  height={50}
                />
              </li>
            </ul>
            <Btn link="/about" text="and more" />
          </ScrollReveal>
        </div>
      </section>

      <InfiniteSlide elem={'source code means "designing"source code. Writing "beautiful"'} speed={50000} className="[&_.swiper-slide]:leading-[1.3] [&_.swiper-slide_p]:text-secondaryColor w-[110%] translate-x-[-5%] -mb-28 opacity-30" />
      <InfiniteSlide elem={'source code. Writing "beautiful"source code means "designing"'} speed={35000} className="[&_.swiper-slide]:leading-[1.3] w-[110%] translate-x-[-5%] opacity-30 !pb-5" />

      <section className="w-full p-7 mb-5 pr-0 relative">
        <ScrollReveal move="left" delay={0} className="absolute top-0 bottom-0 -left-[20%] m-auto">
          <div className="rounded-[61%_39%_58%_42%_/_48%_62%_38%_52%] bg-tertiaryColor opacity-10 w-[410px] aspect-square animate-[rolling_15s_linear_0s_infinite]"></div>
        </ScrollReveal>
        <ScrollReveal move="bottom" delay={200}>
          <SecTitle en="Blog" jp="ぶろぐ" />
        </ScrollReveal>
        <ScrollReveal move="bottom" delay={200}>
          <Blog />
        </ScrollReveal>
        <ScrollReveal move="bottom" delay={200} className="pr-7">
          <Btn link="https://naomaru-blog.vercel.app" target="_blank" text="and more" />
        </ScrollReveal>
      </section>

      <section className="w-full p-7 mb-5 relative">
        <ScrollReveal move="right" delay={0} className="absolute top-0 bottom-0 -right-[20%] m-auto">
          <div className="rounded-[61%_39%_58%_42%_/_48%_62%_38%_52%] bg-tertiaryColor opacity-10 w-[410px] aspect-square animate-[rolling_20s_linear_0s_infinite]"></div>
        </ScrollReveal>
        <ScrollReveal move="bottom" delay={200}>
          <SecTitle en="Works" jp="つくったもの" />
        </ScrollReveal>
        <ul className="pb-3">
          <li className="w-full mb-10">
            <ScrollReveal move="bottom" delay={200} className="mb-2 rounded-xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
              <Link href="/works/#site1" className="block relative w-full aspect-[16/9]">
                <Image
                  src="/img/works/hakuryusha.jpg"
                  alt="有限会社 白龍社 様"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Link>
            </ScrollReveal>
            <ScrollReveal move="bottom" delay={200} className="w-4/6 ml-auto">
              <div className="">
                <p className="text-right font-bold tracking-wide leading-relaxed pr-1">Corporate Site</p>
                <p className="text-right font-bold tracking-wide leading-relaxed border-b-tertiaryColor border-b pr-1">有限会社 白龍社 様</p>
                <p className="text-right font-bold text-xs pt-0.5 tracking-wide leading-relaxed pr-1">Design & Coding</p>
              </div>
            </ScrollReveal>
          </li>
          <li className="w-full mb-10">
            <ScrollReveal move="bottom" delay={200} className="mb-2 rounded-xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
              <Link href="/works/#site2" className="block relative w-full aspect-[16/9]">
                <Image
                  src="/img/works/naomaru.web.jpg"
                  alt="ポートフォリオサイト"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Link>
            </ScrollReveal>
            <ScrollReveal move="bottom" delay={200} className="w-4/6 ml-auto">
              <div className="">
                <p className="text-right font-bold tracking-wide leading-relaxed pr-1">Portfolio Site</p>
                <p className="text-right font-bold tracking-wide leading-relaxed border-b-tertiaryColor border-b pr-1">自主制作</p>
                <p className="text-right font-bold text-xs pt-0.5 tracking-wide leading-relaxed pr-1">Design & Programing</p>
              </div>
            </ScrollReveal>
          </li>
          <li className="w-full">
            <ScrollReveal move="bottom" delay={200} className="mb-2 rounded-xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
              <Link href="/works/#site3" className="block relative w-full aspect-[16/9]">
                <Image
                  src="/img/works/naomaru-blog.jpg"
                  alt="なおまるブログ"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Link>
            </ScrollReveal>
            <ScrollReveal move="bottom" delay={200} className="w-4/6 ml-auto">
              <div className="">
                <p className="text-right font-bold tracking-wide leading-relaxed pr-1">Blog Site</p>
                <p className="text-right font-bold tracking-wide leading-relaxed border-b-tertiaryColor border-b pr-1">自主制作</p>
                <p className="text-right font-bold text-xs pt-0.5 tracking-wide leading-relaxed pr-1">Programing</p>
              </div>
            </ScrollReveal>
          </li>
        </ul>
        <ScrollReveal move="bottom" delay={200}>
          <Btn link="/works" text="and more" />
        </ScrollReveal>
      </section>

      <section className="w-full p-7 mb-5">
        <ScrollReveal move="bottom" delay={200}>
          <SecTitle en="Contact" jp="おといあわせ" />
        </ScrollReveal>
        <ScrollReveal move="bottom" delay={200}>
          <p className="py-10 text-center">準備中です</p>
        </ScrollReveal>
      </section>

    </main>
  );
}
