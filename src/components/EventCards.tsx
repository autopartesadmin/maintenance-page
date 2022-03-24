import React from "react";
import { PrimaryButtomWrapper } from "./";
import type { event } from "@/types/event";
import Img from "next/image";
import { Link } from "@/components";

type IProps = {
  data: event;
};

const EventCards: React.FC<IProps> = ({ data }) => {
  return (
    <Link href={data.attributes.url}>
      <div className="grid items-center gap-4 px-4 cursor-pointer sm:grid-cols-2">
        <div className="relative bg-gray-300 aspect-video">
          <Img
            src={data.attributes.imagen.data.attributes.url}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div>
          <h3 className="mb-4 text-xl font-bold">{data.attributes.titulo}</h3>
          <p className="mb-4">{data.attributes.descripcion}</p>
          <PrimaryButtomWrapper className="justify-start mb-4">
            Conocer más
          </PrimaryButtomWrapper>
        </div>
      </div>
    </Link>
  );
};
export default EventCards;
