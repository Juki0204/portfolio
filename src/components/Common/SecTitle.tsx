type Props = {
  en: string,
  jp: string,
  className?: string
}

export default function SecTitle(props: Props) {
  return (
    <h2 className={`text-sm font-bold pb-4 ${props.className}`}>
      <span className="inline-block pr-1 font-bold text-2xl tracking-wider">
        {props.en}
      </span>
      {props.jp}
    </h2>
  );
};