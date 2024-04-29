import Image from "next/image";
import Link from "next/link";

import SecTitle from "@/components/Common/SecTitle";

import ScrollReveal from "@/components/Common/ScrollReveal";

export default function Home() {

  return (
    <main className="max-w-[640px] w-full m-auto overflow-x-hidden">
      <section className="mt-[60px] mb-5 pt-10 pb-5 relative z-10 text-center overflow-hidden">
        <SecTitle en="Contact" jp="おといあわせ" className="mb-5" />
        <div className="grid w-full h-[calc(100lvh-184px)] place-content-center">
          <p className="font-bold mb-2">準備中です</p>
          <p className="font-bold mb-40">Sorry. Please wait for the release.</p>
        </div>
      </section>
    </main>
  );
}
