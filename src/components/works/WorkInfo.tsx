interface Props {
  paragraph: string;
}

export default function WorkInfo({ paragraph }: Props) {
  const paragraphArray = paragraph.trim().split('\n');

  return (
    <>
      <h3 className="mb-2 text-base leading-loose font-bold bg-tertiaryColor text-primaryColor rounded-full">コンセプト / 詳細</h3>
      <div className="w-11/12 mx-auto">
        {
          paragraphArray.map((text, key) => (
            text.split('<br />').map((line, index) => (
              <p key={key} className="text-justify mb-4 tracking-[0.2rem] text-sm leading-loose font-bold">
                {line}
                {index !== text.split('<br />').length - 1 && <br />}
              </p>
            ))
          ))
        }
      </div>
    </>
  );
}