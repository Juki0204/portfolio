import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-tertiaryColor p-7 pb-1 rounded-[30px_30px_0_0] flex flex-wrap justify-center bg-[url('/img/common/footer_bg.png')] bg-[position:center_bottom_24px] bg-no-repeat bg-[length:98%_auto] bg-blend-luminosity">
      <ul className="pl-4 pb-4 w-min">
        <li className="mb-1">
          <Link href={"/"} className="tracking-widest font-bold text-primaryColor">
            TOP
          </Link>
        </li>
        <li className="mb-1">
          <Link href={"/about"} className="tracking-widest font-bold text-primaryColor">
            ABOUT
          </Link>
        </li>
        <li className="mb-1">
          <Link href={"/works"} className="tracking-widest font-bold text-primaryColor">
            WORKS
          </Link>
        </li>
        <li className="mb-1">
          <Link href={"https://naomaru-blog.vercel.app"} target="_blank" className="tracking-widest font-bold text-primaryColor">
            BLOG
          </Link>
        </li>
        <li>
          <Link href={"/contact"} className="tracking-widest font-bold text-primaryColor">
            CONTACT
          </Link>
        </li>
      </ul>
      <div className="relative pb-4 h-[150px] w-[150px] aspect-[1/1] opacity-90 overflow-hidden">
        <Image
          src="/img/common/profile.png"
          alt="なおまる"
          width={320}
          height={320}
          className="h-full w-auto"
        />
      </div>
      <p className="w-full mt-[15%] text-center text-sm text-primaryColor bg-tertiaryColor">&copy; Naomaru All rights reserved.</p>
    </footer>
  );
}