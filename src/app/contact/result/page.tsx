import SecTitle from "@/components/Common/SecTitle";
import Btn from "@/components/Common/Btn";

export default function Home() {

  return (
    <main className="max-w-[640px] w-full m-auto overflow-x-hidden">
      <section className="min-h-lvh mt-[60px] p-7 mb-5 relative z-10 text-center overflow-hidden">
        <SecTitle en="Contact" jp="おといあわせ" className="mb-5" />
        <div className="grid w-full h-[calc(100lvh-184px)] place-content-center">
          <p className="font-bold mb-2">送信完了しました。</p>
          <p className="font-bold mb-32">Thank you for sending mail.</p>
          <Btn link="/" text="トップページへ" />
        </div>
      </section>
    </main>
  );
}
