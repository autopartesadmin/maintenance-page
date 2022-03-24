import React from "react";
import type { NextPage } from "next";
import { Title, SectionTitleVideo, Toggle, BusinessCards } from "@/components";
import axios from "axios";
import type { job } from "@/types/job";

type IProps = {
  jobs: {
    data: Array<job>;
  };
};

const OfertasDeEmpleo: NextPage<IProps> = ({ jobs }) => {
  return (
    <div>
      <section className="mb-36">
        <SectionTitleVideo title="" url="" />
      </section>
      {jobs.data.length >= 1 && (
        <section className="pb-36">
          <Title title="Et tortor ultricies posuere eget sit cras." />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {jobs.data.map((ele) => (
              <BusinessCards data={ele} key={ele.id} />
            ))}
          </div>
        </section>
      )}
      <section className="pb-36">
        <Title title="Porta etiam augue id tellus pellentes" />
        <div className="grid grid-rows-2 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="h-full col-span-2 bg-gray-300 md:col-span-1 lg:row-span-2"></div>
          <div className="col-span-2 bg-gray-300 md:col-span-1 lg:col-span-1 h-72"></div>
          <div className="col-span-2 bg-gray-300 md:col-span-1 lg:col-span-1 h-72"></div>
          <div className="col-span-2 bg-gray-300 md:col-span-1 lg:col-span-1 h-72"></div>
          <div className="col-span-2 bg-gray-300 md:col-span-1 lg:col-span-1 h-72"></div>
        </div>
      </section>
      <section className="pb-36">
        <Title title="Lorem ipsum dolor sit amet." />
        {[1, 2, 3, 4].map((el) => (
          <Toggle
            question="¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            response="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum facilis similique nulla quas deserunt itaque eius nostrum illo, consequatur reiciendis."
            key={el}
          />
        ))}
      </section>
    </div>
  );
};
export default OfertasDeEmpleo;

export async function getStaticProps() {
  const url = `${process.env.BACKEND_URL}/cargos-disponibles`;
  const response = await axios.get(url);
  return {
    props: {
      jobs: response.data,
    },
  };
}
