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
        <SecTitle en="Naomaru Blog" jp="" className="mb-5" />

        <ScrollReveal move="bottom" delay={0} className="p-7">
          <Work productType="Blog Site" productName="個人ブログ" environment={['JavaScript', 'Next.js', 'microCMS']}>
            <Link href="https://naomaru-blog.vercel.app" target="_blank" className="block relative mb-3 w-full aspect-[16/9] rounded-lg overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
              <Image
                src="/img/works/naomaru-blog.jpg"
                alt="なおまるブログ"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Link>
          </Work>
        </ScrollReveal>

        <ScrollReveal move="bottom" delay={200} className="px-7">
          <WorkEnvironment details={
            [
              { 'title': 'Program', 'item': 'JavaScript' },
              { 'title': 'Framework', 'item': 'Next.js v13.2.3' },
              { 'title': 'Library', 'item': 'Emotion, Material UI' },
              { 'title': 'Others', 'item': 'microCMS' }
            ]
          }></WorkEnvironment>
        </ScrollReveal>

        <ScrollReveal move="bottom" delay={200} className="px-7">
          <WorkInfo paragraph={`
            Next.jsの学習の為に制作したブログ。<br />実用性をある程度重視して制作していたので、現在も記事は少しずつ更新しています。
            当サイトのBlogの記事もこのブログで書いたものになります。
            デザイン部分の設計は事前にせず、基本的にMaterial UIのコンポーネントを組み合わせてソースコード上で考えながら組み立てています。
            また、Next.jsのバージョンは13で開発していますが、当時はjamstackブログの参考記事にapp routerのものがまだそれほど多くなかった事もあり、page routerで開発しています。
          `}></WorkInfo>

          <Btn link="https://naomaru-blog.vercel.app" target="_blank" text="サイトを見る" />
        </ScrollReveal>
      </section>
    </main>
  );
}
