
interface Props {
  details: {
    title: string;
    item: string;
  }[];
}

export default function WorkEnvironment({ details }: Props) {
  return (
    <>
      <h3 className="mb-2 text-base leading-loose font-bold bg-tertiaryColor text-primaryColor rounded-full">制作環境 / ソフトウェア</h3>
      <dl className="mb-4 w-11/12 mx-auto">
        {details.map((detail, key) => (
          <div key={key} className="flex flex-wrap mb-4 w-full mx-auto border-b border-secondaryColor last-of-type:border-none">
            <dt className="w-2/5 text-sm leading-loose tracking-wide py-1 font-bold grid place-content-center">【 {detail.title} 】</dt>
            <dd className="w-3/5 py-1 text-sm leading-loose tracking-wide font-bold">{detail.item}</dd>
          </div>
        ))}
      </dl>
    </>
  )
}