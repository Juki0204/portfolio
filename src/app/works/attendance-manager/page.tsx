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
        <SecTitle en="Attendance Manager" jp="" className="mb-5" />

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
        </ScrollReveal>

        <ScrollReveal move="bottom" delay={200} className="px-7">
          <WorkEnvironment details={
            [
              { 'title': 'Design', 'item': 'Figma' },
              { 'title': 'Program', 'item': 'TypeScript' },
              { 'title': 'Framework', 'item': 'Next.js v14.1.4, TailwindCSS' },
              { 'title': 'Database', 'item': 'supabase' }
            ]
          }></WorkEnvironment>
        </ScrollReveal>

        <ScrollReveal move="bottom" delay={200} className="px-7">
          <WorkInfo paragraph={`
            自社スタッフの勤怠状況管理・共有を目的として作成したWEBアプリです。
            テレワーカーと勤務状況の共有がしづらい環境で、離席や出退勤のタイミングなどを把握出来ていなかったので、分かりやすく円滑に管理・共有出来るような仕組みを目指しました。
            ・Auth認証<br />・勤怠管理<br />・同一所属メンバーの勤怠状況の共有<br />・同一所属メンバーの行動通知<br />・月間勤務時間の確認<br />・個人用メモ<br />などなど、項目内容は自社に寄っている部分はありますが、勤怠管理アプリとして一通り必要な機能は揃っているかと思います。
            もし個人で利用されたいという稀有な方がいらっしゃいましたら、他者と被らないような所属先を指定してユーザー登録していただければ一通りの機能をお試しいただけます。
            閲覧のみされたい方は下記のテストアカウントをご利用下さい。
            テストアカウント<br />【MAIL】mini2154@ruru.be<br />【PASS】test1234
          `}></WorkInfo>

          <Btn link="https://attendance-manager-pi.vercel.app" target="_blank" text="アプリを使ってみる" />
        </ScrollReveal>
      </section>
    </main>
  );
}
