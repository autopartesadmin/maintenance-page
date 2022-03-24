import React from "react";
import { PrimaryButtomWrapper } from "./";
import Image from "next/image";

interface RedirectCardsProps {
  data: {
    title: string;
    subTitle: string;
    btnText: string;
    image: string;
    url: string;
  };
}

const RedirectCards: React.FC<RedirectCardsProps> = ({ data }) => {
  return (
    <div className="bg-[#E8ECF0] rounded-sm p-4 flex flex-col">
      <h3 className="mb-2 text-3xl font-bold text-center font-yaldevi">
        {data.title}
      </h3>
      <p className="mb-2 text-center">{data.subTitle}</p>
      {data.url && (
        <PrimaryButtomWrapper className="justify-center my-4" url={data.url}>
          {data.btnText}
        </PrimaryButtomWrapper>
      )}
      <div className="relative flex justify-center mt-auto h-[250px]">
        <Image
          alt="banner"
          className="z-10"
          src={data.image}
          layout="fill"
          objectFit="contain"
          quality={100}
        />
      </div>
    </div>
  );
};
export default RedirectCards;
