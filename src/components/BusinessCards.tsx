import React from "react";
import { Link } from "@/components";
import type { job } from "@/types/job";

type IProps = {
  data: job;
};

const BusinessCards: React.FC<IProps> = ({ data }) => {
  return (
    <Link href={`/ofertas-de-empleo/${data.attributes.slug}`}>
      <div className="p-8 rounded-lg shadow-md">
        <div className="flex items-center">
          <div className="w-1/5 text-red-500">Icono</div>
          <div className="w-4/5">
            <h4 className="mb-4 text-2xl text-red-500">
              {data.attributes.departamento}
            </h4>
            <p className="text-lg font-semibold">{data.attributes.cargo}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default BusinessCards;
