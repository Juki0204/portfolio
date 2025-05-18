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
            <Link href="https://attendance-manager-pi.vercel.app" target="_blank" className="block relative mb-3 w-full aspect-[16/9] rounded-lg overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
              <Image
                src="/img/works/attendance-manager.jpg"
                alt="勤怠管理アプリ"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Link>
          </Work>
          {/* <Btn link="/works/" text="and more" /> */}

          <ul>
            <li>
              <h3 className="mb-2 text-base leading-loose font-bold bg-tertiaryColor text-primaryColor rounded-full">制作環境 / ソフトウェア</h3>
              <dl className="flex flex-wrap mb-4 w-11/12 mx-auto">
                <dt className="w-2/5 text-sm leading-loose tracking-wide py-1 font-bold grid place-content-center border-b border-secondaryColor">【 Design 】</dt>
                <dd className="w-3/5 py-1 text-sm leading-loose tracking-wide font-bold border-b border-secondaryColor">Figma</dd>
                <dt className="w-2/5 text-sm leading-loose py-1 tracking-wide font-bold grid place-content-center border-b border-secondaryColor">【 Program 】</dt>
                <dd className="w-3/5 py-1 text-sm leading-loose tracking-wide font-bold border-b border-secondaryColor">TypeScript</dd>
                <dt className="w-2/5 text-sm leading-loose py-1 tracking-wide font-bold grid place-content-center border-b border-secondaryColor">【 Framework 】</dt>
                <dd className="w-3/5 py-1 text-sm leading-loose tracking-wide font-bold border-b border-secondaryColor">Next.js v14.1.4, TailwindCSS</dd>
                <dt className="w-2/5 text-sm leading-loose py-1 tracking-wide font-bold grid place-content-center">【 Database 】</dt>
                <dd className="w-3/5 py-1 text-sm leading-loose tracking-wide font-bold">supabase</dd>
              </dl>
            </li>
            <li>
              <h3 className="mb-2 text-base leading-loose font-bold bg-tertiaryColor text-primaryColor rounded-full">コンセプト / 詳細</h3>
              <div className="w-11/12 mx-auto">
                <p className="text-justify mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">自社スタッフの勤怠状況管理・共有を目的として作成したWEBアプリです。</p>
                <p className="text-justify mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">テレワーカーと勤務状況の共有がしづらい環境で、離席や出退勤のタイミングなどを把握出来ていなかったので、分かりやすく円滑に管理・共有出来るような仕組みを目指しました。</p>
                <p className="text-justify mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">・Auth認証<br />・勤怠管理<br />・同一所属メンバーの勤怠状況の共有<br />・同一所属メンバーの行動通知<br />・月間勤務時間の確認<br />・個人用メモ<br />などなど、項目内容は自社に寄っている部分はありますが、勤怠管理アプリとして一通り必要な機能は揃っているかと思います。</p>
                <p className="text-justify mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">もし個人で利用されたいという稀有な方がいらっしゃいましたら、他者と被らないような所属先を指定してユーザー登録していただければ一通りの機能をお試しいただけます。</p>
                <p className="text-justify mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">閲覧のみされたい方は下記のテストアカウントをご利用下さい。</p>
                <p className="text-justify mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">テストアカウント<br />【MAIL】mini2154@ruru.be<br />【PASS】test1234</p>
              </div>
            </li>
          </ul>
          <Btn link="https://attendance-manager-pi.vercel.app" text="アプリを使ってみる" />
        </ScrollReveal>

        <ScrollReveal move="bottom" delay={0} className="p-7">
          <Work productType="Corporate Site" productName="有限会社 白龍社 様" environment={['Photoshop', 'HTML', 'CSS', 'JavaScript']}>
            <Link href="https://hakuryusha-oshibori.com/" target="_blank" className="block relative mb-3 w-full aspect-[16/9] rounded-lg overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
              <Image
                src="/img/works/hakuryusha.jpg"
                alt="有限会社 白龍社 様"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Link>
          </Work>
          {/* <Btn link="/works/" text="and more" /> */}

          <ul>
            <li>
              <h3 className="mb-2 text-base leading-loose font-bold bg-tertiaryColor text-primaryColor rounded-full">制作環境 / ソフトウェア</h3>
              <dl className="flex flex-wrap mb-4 w-11/12 mx-auto">
                <dt className="w-2/5 text-sm leading-loose tracking-wide py-1 font-bold grid place-content-center border-b border-secondaryColor">【 Design 】</dt>
                <dd className="w-3/5 py-1 text-sm leading-loose tracking-wide font-bold border-b border-secondaryColor">Photoshop</dd>
                <dt className="w-2/5 text-sm leading-loose tracking-wide py-1 font-bold grid place-content-center border-b border-secondaryColor">【 Coding 】</dt>
                <dd className="w-3/5 py-1 text-sm leading-loose tracking-wide font-bold border-b border-secondaryColor">HTML, SCSS</dd>
                <dt className="w-2/5 text-sm leading-loose tracking-wide py-1 font-bold grid place-content-center">【 Program 】</dt>
                <dd className="w-3/5 py-1 text-sm leading-loose tracking-wide font-bold">JavaScript</dd>
              </dl>
            </li>
            <li>
              <h3 className="mb-2 text-base leading-loose font-bold bg-tertiaryColor text-primaryColor rounded-full">コンセプト / 詳細</h3>
              <div className="w-11/12 mx-auto">
                <p className="text-justify mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">貸おしぼり業者様よりコーポレートサイトの制作依頼を頂き、デザインからコーディングまで全工程の作業を担当させていただきました。</p>
                <p className="text-justify mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">サイト全体を和のイメージで、企業理念の「おもてなしの心」が伝わるデザイン、おしぼりの清潔感のイメージが伝わるよう全体を白ベースで明朝体を主軸としたデザインに仕上げました。</p>
                <p className="text-justify mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">また、クライアント様からは「シンプルなデザインで」とのご依頼でしたので、やや余白を多く取り各項目ごとの内容が見やすくなるよう構成を意識しました。</p>
              </div>
            </li>
          </ul>
          <Btn link="http://hakuryusha.starfree.jp" text="サイトを見る" />
        </ScrollReveal>

        <ScrollReveal move="bottom" delay={200} className="p-7">
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
          {/* <Btn link="/works/" text="and more" /> */}

          <ul>
            <li>
              <h3 className="mb-2 text-base leading-loose font-bold bg-tertiaryColor text-primaryColor rounded-full">制作環境 / ソフトウェア</h3>
              <dl className="flex flex-wrap mb-4 w-11/12 mx-auto">
                <dt className="w-2/5 text-sm leading-loose py-1 tracking-wide font-bold grid place-content-center border-b border-secondaryColor">【 Program 】</dt>
                <dd className="w-3/5 py-1 text-sm leading-loose tracking-wide font-bold border-b border-secondaryColor">TypeScript</dd>
                <dt className="w-2/5 text-sm leading-loose py-1 tracking-wide font-bold grid place-content-center border-b border-secondaryColor">【 Framework 】</dt>
                <dd className="w-3/5 py-1 text-sm leading-loose tracking-wide font-bold border-b border-secondaryColor">Next.js v14.1.4, TailwindCSS</dd>
                <dt className="w-2/5 text-sm leading-loose py-1 tracking-wide font-bold grid place-content-center">【 Library 】</dt>
                <dd className="w-3/5 py-1 text-sm leading-loose tracking-wide font-bold">rss-parser, Swiper, nodemailer, GSAP</dd>
              </dl>
            </li>
            <li>
              <h3 className="mb-2 text-base leading-loose font-bold bg-tertiaryColor text-primaryColor rounded-full">コンセプト / 詳細</h3>
              <div className="w-11/12 mx-auto">
                <p className="text-justify mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">Next.js制作第二弾。<br />TypeScriptの学習も兼ねて作成しています。</p>
                <p className="text-justify mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">こちらはブログとは違い、App Routerでの開発。ページ遷移の方法やサーバーコンポーネントになった事など、前回の環境から変更点も多い環境での制作でしたが、Page Routerに比べ書き方もそれほど難しくなく、慣れればこちらの方がコンポーネント毎の記述もコンパクトに、スムーズに制作を進められる。</p>
                <p className="text-justify mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">ページ全体の構成は事前にFigmaで作成、当初はカッコいい寄りのデザインでカンプを作成していましたが、ページを構築していく中で&quot;自分らしくないな&quot;と思い路線変更、デザイン変更をしながら制作を進め、自分らしさを表現した結果現在のデザインにたどり着きました。</p>
                <p className="text-justify mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">下手の横好きでもいい、自分らしさを表現した内容でこそ意味のあるもの。</p>
              </div>
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal move="bottom" delay={200} className="p-7">
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
          {/* <Btn link="/works/" text="and more" /> */}

          <ul>
            <li>
              <h3 className="mb-2 text-base leading-loose font-bold bg-tertiaryColor text-primaryColor rounded-full">制作環境 / ソフトウェア</h3>
              <dl className="flex flex-wrap mb-4 w-11/12 mx-auto">
                <dt className="w-2/5 text-sm leading-loose py-1 tracking-wide font-bold grid place-content-center border-b border-secondaryColor">【 Program 】</dt>
                <dd className="w-3/5 py-1 text-sm leading-loose tracking-wide font-bold border-b border-secondaryColor">JavaScript</dd>
                <dt className="w-2/5 text-sm leading-loose py-1 tracking-wide font-bold grid place-content-center border-b border-secondaryColor">【 Framework 】</dt>
                <dd className="w-3/5 py-1 text-sm leading-loose tracking-wide font-bold border-b border-secondaryColor">Next.js v13.2.3</dd>
                <dt className="w-2/5 text-sm leading-loose py-1 tracking-wide font-bold grid place-content-center border-b border-secondaryColor">【 Library 】</dt>
                <dd className="w-3/5 py-1 text-sm leading-loose tracking-wide font-bold border-b border-secondaryColor">Emotion, Material UI</dd>
                <dt className="w-2/5 text-sm leading-loose py-1 tracking-wide font-bold grid place-content-center">【 Others 】</dt>
                <dd className="w-3/5 py-1 text-sm leading-loose tracking-wide font-bold">microCMS</dd>
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
          <Btn link="https://naomaru-blog.vercel.app" text="サイトを見る" />
        </ScrollReveal>
      </section>
    </main>
  );
}
