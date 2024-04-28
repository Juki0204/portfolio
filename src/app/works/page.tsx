import Image from "next/image";
import Link from "next/link";

import SecTitle from "@/components/Common/SecTitle";

import ScrollReveal from "@/components/Common/ScrollReveal";

export default function Home() {

  return (
    <main className="max-w-[640px] w-full m-auto overflow-x-hidden">
      <section className="mt-[60px] mb-5 pt-10 pb-5 relative z-10 text-center overflow-hidden">
        <SecTitle en="Works" jp="つくったもの" className="mb-5" />
        <ScrollReveal move="bottom" delay={200} className="p-7">
          <div className="mb-3 rounded-lg overflow-hidden">
            <Link href="http://hakuryusha.starfree.jp" target="_blank" className="block relative w-full aspect-[16/9]">
              <Image
                src="/img/works/hakuryusha.jpg"
                alt="有限会社 白龍社 様"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Link>
          </div>
          <div className="w-4/6 ml-auto mb-3">
            <p className="text-right font-bold tracking-wide leading-relaxed pr-1">Corporate Site</p>
            <p className="text-right font-bold tracking-wide leading-relaxed border-b-tertiaryColor border-b pr-1">有限会社 白龍社 様</p>
            <p className="text-right font-bold text-xs pt-0.5 tracking-wide leading-relaxed pr-1">Design & Coding</p>
          </div>
          <ul>
            <li>
              <h3 className="mb-2 text-base leading-loose font-bold bg-tertiaryColor text-primaryColor rounded-full">制作環境 / ソフトウェア</h3>
              <dl className="flex flex-wrap mb-4 w-11/12 mx-auto">
                <dt className="w-2/5 text-sm leading-loose tracking-wide font-bold">【 Design 】</dt><dd className="w-3/5 text-sm leading-loose tracking-wide font-bold">Photoshop</dd>
                <dt className="w-2/5 text-sm leading-loose tracking-wide font-bold">【 Coding 】</dt><dd className="w-3/5 text-sm leading-loose tracking-wide font-bold">HTML, SCSS</dd>
                <dt className="w-2/5 text-sm leading-loose tracking-wide font-bold">【 Program 】</dt><dd className="w-3/5 text-sm leading-loose tracking-wide font-bold">JavaScript</dd>
              </dl>
            </li>
            <li>
              <h3 className="mb-2 text-base leading-loose font-bold bg-tertiaryColor text-primaryColor rounded-full">コンセプト / 詳細</h3>
              <div className="w-11/12 mx-auto">
                <p className="text-justify mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">サイト全体を和のイメージで、企業理念の「おもてなしの心」が伝わるデザイン、おしぼりの清潔感のイメージが伝わるよう全体を白ベースで明朝体を主軸としたデザインに仕上げました。</p>
                <p className="text-justify mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">また、クライアント様からは「シンプルなデザインで」とのご依頼でしたので、やや余白を多く取り各項目ごとの内容が見やすいようデザインしています。</p>
              </div>
            </li>
          </ul>
        </ScrollReveal>
        <ScrollReveal move="bottom" delay={600} className="p-7">
          <div className="mb-3 rounded-lg overflow-hidden">
            <Link href="https://naomaru-blog.vercel.app" target="_blank" className="block relative w-full aspect-[16/9]">
              <Image
                src="/img/works/naomaru-blog.jpg"
                alt="なおまるブログ"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Link>
          </div>
          <div className="w-4/6 ml-auto mb-3">
            <p className="text-right font-bold tracking-wide leading-relaxed pr-1">Blog Site</p>
            <p className="text-right font-bold tracking-wide leading-relaxed border-b-tertiaryColor border-b pr-1">自主制作</p>
            <p className="text-right font-bold text-xs pt-0.5 tracking-wide leading-relaxed pr-1">Programing</p>
          </div>
          <ul>
            <li>
              <h3 className="mb-2 text-base leading-loose font-bold bg-tertiaryColor text-primaryColor rounded-full">制作環境 / ソフトウェア</h3>
              <dl className="flex flex-wrap mb-4 w-11/12 mx-auto">
                <dt className="w-2/5 text-sm leading-loose tracking-wide font-bold">【 Program 】</dt><dd className="w-3/5 text-sm leading-loose tracking-wide font-bold">JavaScript</dd>
                <dt className="w-2/5 text-sm leading-loose tracking-wide font-bold">【 Framework 】</dt><dd className="w-3/5 text-sm leading-loose tracking-wide font-bold">Next.js v13</dd>
                <dt className="w-2/5 text-sm leading-loose tracking-wide font-bold">【 Library 】</dt><dd className="w-3/5 text-sm leading-loose tracking-wide font-bold">Emotion, Material UI</dd>
                <dt className="w-2/5 text-sm leading-loose tracking-wide font-bold">【 Others 】</dt><dd className="w-3/5 text-sm leading-loose tracking-wide font-bold">microCMS</dd>
              </dl>
            </li>
            <li>
              <h3 className="mb-2 text-base leading-loose font-bold bg-tertiaryColor text-primaryColor rounded-full">コンセプト / 詳細</h3>
              <div className="w-11/12 mx-auto">
                <p className="text-justify mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">Next.jsの学習の為に制作したブログ。<br />実用性をある程度重視して制作していたので、現在も記事は少しずつ更新しています。</p>
                <p className="text-justify mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">当サイトのBlogの記事もこのブログで書いたものになります。</p>
                <p className="text-justify mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">デザイン部分の設計は事前にせず、基本的にMaterial UIのコンポーネントを組み合わせてソースコード上で考えながら組み立てています。</p>
                <p className="text-justify mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">また、Next.jsのバージョンは13で開発していますが、当時はjamstackブログの参考記事にapp routerのものがまだそれほど多くなかった事もあり、page routerで開発しています。</p>
              </div>
            </li>
          </ul>
        </ScrollReveal>
      </section>
    </main>
  );
}
