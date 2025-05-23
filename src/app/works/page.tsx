import Image from "next/image";
import { Link } from 'next-view-transitions'

import SecTitle from "@/components/Common/SecTitle";
import Btn from "@/components/Common/Btn";
import Work from "@/components/works/Work";

import ScrollReveal from "@/components/Common/ScrollReveal";

export default function Works() {

  return (
    <main className="max-w-[640px] w-full m-auto overflow-x-hidden">
      <section className="mt-[60px] mb-5 pt-10 pb-5 relative z-10 text-center overflow-hidden">
        <SecTitle en="Works" jp="つくったもの" className="mb-5" />

        <ScrollReveal move="bottom" delay={0} className="p-7">
          <Work productType="Web Apprication" productName="勤怠管理アプリ" environment={['Figma', 'TypeScript', 'Next.js', 'Tailwind']}>
            <Link href="/works/attendance-manager" className="block relative mb-3 w-full aspect-[16/9] rounded-lg overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
              <Image
                src="/img/works/attendance-manager.jpg"
                alt="勤怠管理アプリ"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Link>
          </Work>
          {/* <Btn link="/works/" text="and more" /> */}

          <Btn link="/works/attendance-manager" text="詳細を見る" />
        </ScrollReveal>

        <ScrollReveal move="bottom" delay={200} className="p-7">
          <Work productType="Corporate Site" productName="有限会社 白龍社 様" environment={['Photoshop', 'HTML', 'CSS', 'JavaScript']}>
            <Link href="/works/hakuryusha-oshibori" className="block relative mb-3 w-full aspect-[16/9] rounded-lg overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
              <Image
                src="/img/works/hakuryusha.jpg"
                alt="有限会社 白龍社 様"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Link>
          </Work>
          {/* <Btn link="/works/" text="and more" /> */}

          <Btn link="/works/hakuryusha-oshibori" text="詳細を見る" />
        </ScrollReveal>

        <ScrollReveal move="bottom" delay={200} className="p-7">
          <Work productType="Portfolio Site" productName="ポートフォリオ" environment={['TypeScript', 'Next.js', 'Tailwind']}>
            <Link href="/works/naomorphosis" className="block relative mb-3 w-full aspect-[16/9] rounded-lg overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
              <Image
                src="/img/common/og_image.jpg"
                alt="ポートフォリオサイト"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Link>
          </Work>
          {/* <Btn link="/works/" text="and more" /> */}

          <Btn link="/works/naomorphosis" text="詳細を見る" />
        </ScrollReveal>

        <ScrollReveal move="bottom" delay={200} className="p-7">
          <Work productType="Blog Site" productName="個人ブログ" environment={['JavaScript', 'Next.js', 'microCMS']}>
            <Link href="/works/naomaru-blog" className="block relative mb-3 w-full aspect-[16/9] rounded-lg overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
              <Image
                src="/img/works/naomaru-blog.jpg"
                alt="なおまるブログ"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Link>
          </Work>
          {/* <Btn link="/works/" text="and more" /> */}

          <Btn link="/works/naomaru-blog" text="詳細を見る" />
        </ScrollReveal>
      </section>
    </main>
  );
}
