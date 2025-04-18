import Image from "next/image";
import { Link } from 'next-view-transitions'

export default function Profile() {
  return (
    <div className="mb-5">
      <div className="w-[180px] h-[180px] mx-auto rounded-3xl overflow-hidden">
        <Image
          src="/img/common/profile.png"
          alt="なおまる"
          width={320}
          height={320}
        />
      </div>
      <p className="text-center text-3xl leading-none mt-2 mb-5">Naomaru</p>
      <ul className="flex justify-center gap-3">
        <li className="w-10 aspect-square">
          <Link href="https://github.com/Juki0204">
            <Image
              src="/img/common/github_icon.png"
              alt="github"
              width={50}
              height={50}
            />
          </Link>
        </li>
        <li className="w-10 aspect-square">
          <Link href="https://bskyblue.app/profile/naomaru0204.bskyblue.social">
            <Image
              src="/img/common/bluesky_icon.png"
              alt="blueskyblue"
              width={50}
              height={55}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}