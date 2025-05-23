'use client';

import Image from "next/image";

import { useContext } from "react";
import { IsThemeContext } from "@/components/Common/ThemeProvider";

import Profile from "@/components/Common/Profile";
import Btn from "@/components/Common/Btn";
import SecTitle from "@/components/Common/SecTitle";
import Blog from "@/components/Blog/Blog";
import InfiniteSlide from "@/components/Common/InfinitSlide";
import ContactForm from "@/components/Contact/ContactForm";

import PageLoader from "@/components/Common/PageLoader";

import ScrollReveal from "@/components/Common/ScrollReveal";
import { Link } from 'next-view-transitions'
import ScrollParallax from "@/components/Common/ScrollParallax";

export default function Home() {
  let langState = useContext(IsThemeContext).isLang;

  return (
    <main className="w-full m-auto overflow-x-hidden">
      {/* <PageLoader /> */}
      <section className="max-w-[640px] mx-auto mt-[60px] pt-10 relative z-10 bg-primaryColor">
        <div className="absolute top-[30%] -left-[10%] rounded-[61%_39%_58%_42%_/_48%_62%_38%_52%] bg-tertiaryColor opacity-10 w-[200px] aspect-square animate-[rolling_20s_linear_0s_infinite] pointer-events-none"></div>
        <Profile />

        {langState === 'ja' ?
          <p className="text-center mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">
            「デザインはあまり好きじゃない。」<br />
            「でもコーディングは好き。」<br />
            「プログラムも得意じゃないけど好き。」</p>
          :
          <p className="text-center mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">
            &quot;I don&apos;t really like design.&quot;<br />
            &quot;but I like coding.&quot;<br />
            &quot;I&apos;m not good at programming either,<br />but I like it.&quot;</p>
        }

        {langState === 'ja' ?
          <p className="text-center mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">でも、仕事って<br />好き嫌いでするものじゃないから<br />&nbsp;私は「私に出来る事」をする。</p>
          :
          <p className="text-center mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">But work is not something<br />you do because you like it or not,<br />so I do “what I can do”.</p>
        }

        {langState === 'ja' ?
          <p className="text-center mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">だけど、嫌いだったものが<br />
            仕事の中で好きに変わったなら<br />
            &nbsp;それはそれで良い事なんじゃないかな。</p>
          :
          <p className="text-center mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">But if something I disliked turns<br />into something I like in my work,<br />that&apos;s a good thing.</p>
        }

        <InfiniteSlide elem={'source code means "designing"source code. Writing "beautiful"'} speed={60000} className="[&_.swiper-slide]:leading-[1.3] [&_.swiper-slide_p]:text-secondaryColor w-[110%] translate-x-[-5%] -mb-28 opacity-30" />
        <InfiniteSlide elem={'source code. Writing "beautiful"source code means "designing"'} speed={45000} className="[&_.swiper-slide]:leading-[1.3] w-[110%] translate-x-[-5%] opacity-30 " />

        <div className="w-full px-[10%] py-7 mt-8 mx-auto relative">
          <ScrollReveal move="right" delay={0} className="absolute top-0 bottom-0 -right-[10%] m-auto pointer-events-none">
            <div className="rounded-[61%_39%_58%_42%_/_48%_62%_38%_52%] bg-tertiaryColor opacity-15 w-[300px] aspect-square animate-[rolling_20s_linear_0s_infinite]"></div>
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
                  className="animate-[jumpInterval_5s_ease_0s_infinite]"
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
                  className="animate-[jumpInterval_4s_ease_4.5s_infinite]"
                />
              </li>
              <li className="w-10 aspect-square flex items-center">
                <Image
                  src="/img/about/css_icon.png"
                  alt="css"
                  width={50}
                  height={50}
                  className="animate-[jumpInterval_4.5s_ease_2s_infinite]"
                />
              </li>
              <li className="w-10 aspect-square flex items-center">
                <Image
                  src="/img/about/sass_icon.png"
                  alt="sass"
                  width={50}
                  height={50}
                  className="animate-[jumpInterval_5s_ease_6s_infinite]"
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
                  className="animate-[jumpInterval_5s_ease_2s_infinite]"
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
        <ScrollParallax className="mb-10">
          <div className="w-[300%] aspect-[1280/268] bg-blend-color-burn bg-primaryColor bg-[url('/img/main/section_bg1.png')] bg-[position:center_bottom] bg-repeat-x bg-[length:33.33333%_auto] -translate-x-1/4"></div>
        </ScrollParallax>
      </section>

      <section className="max-w-[640px] mx-auto w-full p-7 mb-5 pr-0 relative bg-primaryColor">
        <ScrollReveal move="left" delay={0} className="absolute top-0 bottom-0 -left-[20%] m-auto pointer-events-none">
          <div className="rounded-[61%_39%_58%_42%_/_48%_62%_38%_52%] bg-tertiaryColor opacity-10 w-[380px] aspect-square animate-[rolling_15s_linear_0s_infinite]"></div>
        </ScrollReveal>
        <ScrollReveal move="bottom" delay={200}>
          <SecTitle en="Blog" jp={langState === 'ja' ? "ぶろぐ" : "Weblogs"} />
        </ScrollReveal>
        <ScrollReveal move="bottom" delay={200}>
          <Blog />
        </ScrollReveal>
        <ScrollReveal move="bottom" delay={200} className="pr-7">
          <Btn link="https://naomaru-blog.vercel.app" target="_blank" text="and more" />
        </ScrollReveal>

        <ScrollParallax className="mt-10" posX="30%">
          <div className="w-[300%] aspect-[1280/262] bg-blend-color-burn bg-primaryColor bg-[url('/img/main/section_bg2.png')] bg-[position:center_bottom] bg-repeat-x bg-[length:33.33333%_auto] -translate-x-1/2"></div>
        </ScrollParallax>
      </section>

      <section className="max-w-[640px] mx-auto w-full p-7 mb-5 relative bg-primaryColor">
        <ScrollReveal move="right" delay={0} className="absolute top-[10%] -right-[20%] m-auto pointer-events-none">
          <div className="rounded-[61%_39%_58%_42%_/_48%_62%_38%_52%] bg-tertiaryColor opacity-15 w-[360px] aspect-square animate-[rolling_20s_linear_0s_infinite]"></div>
        </ScrollReveal>
        <ScrollReveal move="left" delay={0} className="absolute top-[55%] -left-[20%] m-auto pointer-events-none">
          <div className="rounded-[61%_39%_58%_42%_/_48%_62%_38%_52%] bg-tertiaryColor opacity-10 w-[320px] aspect-square animate-[rolling_20s_linear_0s_infinite]"></div>
        </ScrollReveal>
        <ScrollReveal move="bottom" delay={200}>
          <SecTitle en="Works" jp={langState === 'ja' ? "つくったもの" : "Productions"} />
        </ScrollReveal>
        <ul className="pb-3">
          <li className="w-full mb-10 duration-300 hover:scale-[0.97]">
            <ScrollReveal move="bottom" delay={200} className="mb-2 rounded-xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
              <Link href="/works/attendance-manager" className="block relative w-full aspect-[16/9]">
                <Image
                  src="/img/works/attendance-manager.jpg"
                  alt="勤怠管理アプリ"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Link>
            </ScrollReveal>
            <ScrollReveal move="bottom" delay={200} className="w-4/6 ml-auto">
              <div className="">
                <p className="text-right font-bold tracking-wide leading-relaxed pr-1">Web Apprication</p>
                <p className="text-right font-bold tracking-wide leading-relaxed border-b-tertiaryColor border-b pr-1">勤怠管理アプリ</p>
                <p className="text-right font-bold text-xs pt-0.5 tracking-wide leading-relaxed pr-1">Design & Programing</p>
              </div>
            </ScrollReveal>
          </li>
          <li className="w-full mb-10 duration-300 hover:scale-[0.97]">
            <ScrollReveal move="bottom" delay={200} className="mb-2 rounded-xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
              <Link href="/works/hakuryusha-oshibori" className="block relative w-full aspect-[16/9]">
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
                <p className="text-right font-bold text-xs pt-0.5 tracking-wide leading-relaxed pr-1">Design & Coding & Programing</p>
              </div>
            </ScrollReveal>
          </li>
          <li className="w-full mb-10 duration-300 hover:scale-[0.97]">
            <ScrollReveal move="bottom" delay={200} className="mb-2 rounded-xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
              <Link href="/works/naomorphosis" className="block relative w-full aspect-[16/9]">
                <Image
                  src="/img/common/og_image.jpg"
                  alt="ポートフォリオサイト"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Link>
            </ScrollReveal>
            <ScrollReveal move="bottom" delay={200} className="w-4/6 ml-auto">
              <div className="">
                <p className="text-right font-bold tracking-wide leading-relaxed pr-1">Portfolio Site</p>
                <p className="text-right font-bold tracking-wide leading-relaxed border-b-tertiaryColor border-b pr-1">ポートフォリオ</p>
                <p className="text-right font-bold text-xs pt-0.5 tracking-wide leading-relaxed pr-1">Design & Programing</p>
              </div>
            </ScrollReveal>
          </li>
          {/* <li className="w-full duration-300 hover:scale-[0.97]">
            <ScrollReveal move="bottom" delay={200} className="mb-2 rounded-xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
              <Link href="/works/#blog" className="block relative w-full aspect-[16/9]">
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
                <p className="text-right font-bold tracking-wide leading-relaxed border-b-tertiaryColor border-b pr-1">ブログ</p>
                <p className="text-right font-bold text-xs pt-0.5 tracking-wide leading-relaxed pr-1">Design & Programing</p>
              </div>
            </ScrollReveal>
          </li> */}
        </ul>
        <ScrollReveal move="bottom" delay={200}>
          <Btn link="/works" text="and more" />
        </ScrollReveal>

        <ScrollParallax className="mt-16">
          <div className="w-[300%] aspect-[1280/164] bg-blend-color-burn bg-primaryColor bg-[url('/img/main/section_bg3.png')] bg-[position:center_bottom] bg-repeat-x bg-[length:33.33333%_auto] -translate-x-1/4"></div>
        </ScrollParallax>
      </section>

      <section className="max-w-[640px] mx-auto w-full p-7 pb-[20%] relative overflow-hidden">
        <ScrollReveal move="right" delay={0} className="absolute top-[10%] left-1/2 -translate-x-1/2 m-auto pointer-events-none">
          <div className="rounded-[61%_39%_58%_42%_/_48%_62%_38%_52%] bg-tertiaryColor opacity-15 w-[160vw] max-w-[700px] aspect-square animate-[rolling_20s_linear_0s_infinite]"></div>
        </ScrollReveal>
        <ScrollReveal move="bottom" delay={200}>
          <SecTitle en="Contact" jp={langState === 'ja' ? "おといあわせ" : "Contact me"} />
        </ScrollReveal>
        {/* <Btn link="/contact" text="Go To Contact" /> */}
        <ScrollReveal move="bottom" delay={200} className="relative z-10">
          <ContactForm />
        </ScrollReveal>
      </section>

    </main>
  );
}
