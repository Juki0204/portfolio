import { Link } from 'next-view-transitions'

type Props = {
  link: string,
  text: string,
  target?: "_blank"
}

export default function Btn(props: Props) {
  return (
    <button className="block mx-auto my-5 p-px border-none h-9 bg-tertiaryColor rounded-full cursor-pointer duration-300 hover:scale-105">
      <Link href={props.link} target={props.target} className="block rounded-full bg-transparent">
        <span className="flex text-base font-extralight text-primaryColor leading-none px-14 pb-1 relative
          after:content-[''] after:w-2 after:h-2 after:rotate-45 after:absolute after:right-3 after:top-0 after:bottom-0 after:m-auto after:border-white after:border-t after:border-r
          ">
          {props.text}
        </span>
      </Link>
    </button>
  );
};