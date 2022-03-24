import * as React from "react";
import {
  AiOutlinePhone,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import Image from "next/image";

interface BrandCardsProps {
  data: {
    title: string;
    phone: string;
    email: string;
    whatsApp: string;
    url: string;
    image: string;
    address?: {
      address: string;
      url: string;
    };
  };
}

const BrandCards: React.FC<BrandCardsProps> = ({ data }) => {
  return (
    <div className="relative frounded-sm group">
      <div className="bg-[#E8ECF0] p-8 flex flex-col items-center">
        <figure className="flex items-center w-40 h-40 mb-4 overflow-hidden bg-gray-300 rounded-full">
          <Image
            src={data.image}
            className="z-10"
            width={160}
            height={160}
            alt="image"
          />
        </figure>
        <h3 className="mb-4 text-2xl text-center transform translate-y-4">
          {data.title}
        </h3>
      </div>
      <div className=" group-hover:bg-[#E8ECF0] px-8 roup-hover:pb-8 lg:absolute pt-0 h-0 overflow-hidden bg-[#E8ECF0] transition-all duration-300 transform group-hover:h-40 w-full flex flex-col">
        <a
          className="flex justify-center mb-2 text-sm text-center"
          href={`tel:+${data.phone}`}
        >
          <span>
            <AiOutlinePhone color="#01395E" className="mr-2 text-2xl" />
          </span>
          {data.phone}
        </a>
        <a
          className="flex justify-center mb-2 text-sm text-center"
          href={`mailto:${data.email}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <AiOutlineMail color="#01395E" className="mr-2 text-2xl" />
          </span>
          {data.email}
        </a>
        <a
          className="flex justify-center mb-2 text-sm text-center"
          href={`https://api.whatsapp.com/send?phone=${data.whatsApp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <AiOutlineWhatsApp color="#01395E" className="mr-2 text-2xl" />
          </span>
          {data.whatsApp}
        </a>
        {data.address && (
          <a
            className="flex justify-center mb-2 text-sm text-center"
            href={`${data.address?.url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <BiMap color="#01395E" className="text-2xl" />
            </span>
            {data.address?.address}
          </a>
        )}
      </div>
    </div>
  );
};
export default BrandCards;
