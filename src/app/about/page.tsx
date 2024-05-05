import Image from "next/image";

import Profile from "@/components/Common/Profile";
import SecTitle from "@/components/Common/SecTitle";

import ScrollReveal from "@/components/Common/ScrollReveal";

export default function Home() {

  return (
    <main className="max-w-[640px] w-full m-auto overflow-x-hidden">
      <section className="mt-[60px] mb-5 pt-10 pb-5 relative z-10 text-center overflow-hidden">
        <SecTitle en="About" jp="なおまるについて" className="mb-5" />
        <Profile />
        <ScrollReveal move="bottom" delay={0}>
          <p className="text-center mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">1992年2月生まれ<br />大阪生まれ、大阪育ち</p>
        </ScrollReveal>
        <ScrollReveal move="bottom" delay={200}>
          <p className="text-center mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">ゲームクリエイターを目指して大学に<br />
            進学するも、遊ぶことに全力を注いだ結果<br />
            圧倒的技術力不足により、業界への<br />
            就職を諦めることを余儀なくされる。</p>
        </ScrollReveal>
        <ScrollReveal move="bottom" delay={400}>
          <p className="text-center mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">大学を出てからはパチンコ店に勤務。<br />
            マネージャー(店舗責任者)まで昇進するも<br />
            やりがいも特に見つからず<br />
            このまま30代を迎える事に危機感を覚え<br />
            4年目の夏、一念発起して転職を決意。</p>
          <div className="w-6 h-px bg-tertiaryColor inline-block my-5"></div>
        </ScrollReveal>
        <ScrollReveal move="bottom" delay={600}>
          <p className="text-center mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">ポートフォリオも持たずに手当たり次第に<br />
            面接を繰り返す。20社ぐらい落ちる。<br />
            それでも懲りずに就職活動を続ける。</p>
        </ScrollReveal>
        <ScrollReveal move="bottom" delay={200}>
          <p className="text-center mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">最後の最後の最後で今の会社に<br />
            ポテンシャル採用していただく。</p>
        </ScrollReveal>
        <ScrollReveal move="bottom" delay={200}>
          <p className="text-center mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">インハウスだけど何でもさせてもらえます。</p>
          <div className="w-6 h-px bg-tertiaryColor inline-block my-5"></div>
        </ScrollReveal>
        <ScrollReveal move="bottom" delay={200}>
          <p className="text-center mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">それからは現在も在職中<br />
            今はデザインもコーディングも<br />
            フロントエンドも<br />
            技術面以外でも新人育成からご意見番まで<br />
            なんでもやってる。</p>
        </ScrollReveal>
        <ScrollReveal move="bottom" delay={200}>
          <p className="text-center mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">面倒事はめっぽう嫌いだけど<br />
            奉仕精神なのか何なのか、頼まれると<br />
            何かと色々請け負いがち。</p>
        </ScrollReveal>
        <ScrollReveal move="bottom" delay={200}>
          <p className="text-center mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">請け負った仕事はキチンとやる。<br />
            自分の意見は曲げない。<br />
            やることはやって、休む時は休む。</p>
          <div className="w-6 h-px bg-tertiaryColor inline-block my-5"></div>
        </ScrollReveal>
        <ScrollReveal move="bottom" delay={200}>
          <p className="text-center mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">今日も明日も明後日も。<br />
            無理せず自分のペースで。</p>
        </ScrollReveal>
      </section>

      <section className="w-full px-[10%] py-7 relative my-8 mx-auto overflow-hidden">
        <ScrollReveal move="bottom" delay={200}>
          <SecTitle en="Skill" jp="できること" />
        </ScrollReveal>

        <ScrollReveal move="right" delay={0} className="absolute top-[3%] bottom-0 -right-[6%] m-auto">
          <div className="rounded-[61%_39%_58%_42%_/_48%_62%_38%_52%] bg-tertiaryColor opacity-10 w-[250px] aspect-square animate-[rolling_20s_linear_0s_infinite]"></div>
        </ScrollReveal>

        <ScrollReveal move="left" delay={200}>
          <ul className="border-b-2 border-tertiaryColor w-full mx-auto mb-3 pb-1 px-2 flex gap-3">
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
        </ScrollReveal>

        <ScrollReveal move="left" delay={200} className="px-2 mb-10">
          <p className="mb-4 tracking-[0.2rem] text-sm leading-loose font-bold text-justify">メインは基本的にPhotoshop一択。<br />
            バナーデザインからポスター制作までPhotoshop一つで全部やります。</p>
          <p className="mb-4 tracking-[0.2rem] text-sm leading-loose font-bold text-justify">サイトデザイン時はFigmaを使います。<br />
            ピクセルパーフェクト前提のデザインはあまり作らず、コーディングしながら適宜調整する前提でベースデザインのみ作成します。</p>
        </ScrollReveal>

        <ScrollReveal move="right" delay={0} className="absolute top-[30%] bottom-0 -left-[10%] m-auto">
          <div className="rounded-[61%_39%_58%_42%_/_48%_62%_38%_52%] bg-tertiaryColor opacity-10 w-[290px] aspect-square animate-[rolling_20s_linear_0s_infinite]"></div>
        </ScrollReveal>

        <ScrollReveal move="left" delay={200}>
          <ul className="border-b-2 border-tertiaryColor w-full mx-auto mb-3 pb-1 px-2 flex gap-3">
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
        </ScrollReveal>

        <ScrollReveal move="left" delay={200} className="px-2 mb-10">
          <p className="mb-4 tracking-[0.2rem] text-sm leading-loose font-bold text-justify">開発時たまにPug使います。<br />
            cssはSass(SCSS)で書く事がほとんど。<br />
            実務ではSCSSにBEM記法のセットを起用する事が多い為自然とその形に。</p>
          <p className="mb-4 tracking-[0.2rem] text-sm leading-loose font-bold text-justify">階層構造、コンテンツモデルは最大限意識して書いてるつもり。SEO周りは最低限意識して書きますが知識量としてはやや弱め。</p>
          <p>WordPressは使えなくはないですが普段は殆ど使っていません。指定あればハードコーディングしてからオリジナルテーマでの実装程度は可能です。</p>
        </ScrollReveal>

        <ScrollReveal move="right" delay={0} className="absolute top-[70%] bottom-0 -right-[10%] m-auto">
          <div className="rounded-[61%_39%_58%_42%_/_48%_62%_38%_52%] bg-tertiaryColor opacity-10 w-[330px] aspect-square animate-[rolling_20s_linear_0s_infinite]"></div>
        </ScrollReveal>

        <ScrollReveal move="left" delay={200}>
          <ul className="border-b-2 border-tertiaryColor w-full mx-auto mb-3 pb-1 px-2 flex gap-3">
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
        </ScrollReveal>

        <ScrollReveal move="left" delay={200} className="px-2 mb-10">
          <p className="mb-4 tracking-[0.2rem] text-sm leading-loose font-bold text-justify">実務ではJavaScriptのみ。<br />
            脱jQueryの民なので基本的に新規ではjQuery書きません。指定があれば技術力的にはバニラと同じぐらいは書けますので対応可能です。</p>
          <p className="mb-4 tracking-[0.2rem] text-sm leading-loose font-bold text-justify">あとは趣味でReactやNext.js書いたり。<br />
            実務ではTypeScriptは使わないので、React/Next.jsの時だけ。まだまだ勉強中。<br />
            このサイトもNext.js&amp;TypeScriptで制作しています。</p>
        </ScrollReveal>

        <ScrollReveal move="left" delay={200}>
          <ul className="border-b-2 border-tertiaryColor w-full mx-auto mb-3 pb-1 px-2 flex gap-3">
            <li className="font-bold text-lg flex items-end w-2/5 tracking-wider">Qualification</li>
            <li className="w-10 aspect-square flex items-center">
              <Image
                src="/img/about/technician_icon.png"
                alt="WEBデザイン技能士"
                width={50}
                height={50}
              />
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal move="left" delay={200} className="px-2 mb-10">
          <p className="mb-4 tracking-[0.2rem] text-sm leading-loose font-bold text-justify">2023年6月28日<br />
            WEBデザイン技能検定2級　取得</p>
          <p className="mb-4 tracking-[0.2rem] text-sm leading-loose font-bold text-justify">Web業界唯一の国家資格。<br />
            界隈は資格より実績・技能の方が評価されがちだけど、自分の腕試しという意味でも何か資格持っておきたいと思い挑戦。</p>
          <p className="mb-4 tracking-[0.2rem] text-sm leading-loose font-bold text-justify">実務メイン故に公開可能な実績が少ない為、技術力の指標になればと。</p>
        </ScrollReveal>

      </section>
    </main>
  );
}
