import SecTitle from "@/components/Common/SecTitle";
import ContactForm from "@/components/Contact/ContactForm";

export default function Home() {

  return (
    <main className="max-w-[640px] w-full m-auto overflow-x-hidden">
      <section className="min-h-lvh mt-[60px] p-7 mb-5 relative z-10 text-center overflow-hidden">
        <SecTitle en="Contact" jp="おといあわせ" className="mb-5" />
        <ContactForm />
      </section>
    </main>
  );
}
