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
        <SecTitle en="Hakuryusha Co., Ltd." jp="" className="mb-5" />

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
        </ScrollReveal>

        <ScrollReveal move="bottom" delay={200} className="px-7">
          <WorkEnvironment details={
            [
              { 'title': 'Design', 'item': 'Photoshop' },
              { 'title': 'Cording', 'item': 'HTML, SCSS' },
              { 'title': 'Program', 'item': 'JavaScript' }
            ]
          }></WorkEnvironment>
        </ScrollReveal>

        <ScrollReveal move="bottom" delay={200} className="px-7">
          <WorkInfo paragraph={`
            貸おしぼり業者様よりコーポレートサイトの制作依頼を頂き、デザインからコーディングまで全工程の作業を担当させていただきました。
            サイト全体を和のイメージで、企業理念の「おもてなしの心」が伝わるデザイン、おしぼりの清潔感のイメージが伝わるよう全体を白ベースで明朝体を主軸としたデザインに仕上げました。
            また、クライアント様からは「シンプルなデザインで」とのご依頼でしたので、やや余白を多く取り各項目ごとの内容が見やすくなるよう構成を意識しました。
          `}></WorkInfo>

          <Btn link="https://www.hakuryusha-oshibori.com/" target="_blank" text="サイトを見る" />
        </ScrollReveal>
      </section>
    </main>
  );
}
