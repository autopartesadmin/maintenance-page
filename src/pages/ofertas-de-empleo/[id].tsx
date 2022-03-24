import { Title, Toggle } from "@/components";
import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Markdown from "react-markdown";

import React from "react";
import axios from "axios";
import type { jobAll } from "@/types/job";
type IProps = {
  job: {
    data: Array<jobAll>;
  };
};

const Empleo: NextPage<IProps> = ({ job }) => {
  return (
    <div>
      {job.data.map((ele) => (
        <section className="mb-36" key={ele.id}>
          {ele.attributes.tituloContenido.map((ele) => (
            <React.Fragment key={ele.id}>
              <h2 className="mb-10 text-4xl font-bold">{ele.titulo}</h2>
              <Markdown className="prose-lg md:px-5 prose-ul:list-disc prose-ol:list-decimal">
                {ele.contenido}
              </Markdown>
            </React.Fragment>
          ))}
        </section>
      ))}

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
export default Empleo;

export const getStaticPaths: GetStaticPaths = async () => {
  const url = `${process.env.BACKEND_URL}/cargos-disponibles`;
  const response = await axios.get(url);
  return {
    paths: response.data.data.map(
      (ele: jobAll) => `/ofertas-de-empleo/${ele.attributes.slug}`
    ),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const url = `${process.env.BACKEND_URL}/cargos-disponibles?filters[slug]$eq=${params?.id}&populate=tituloContenido&populate=seo.imagen`;
  const response = await axios.get(url);
  return {
    props: {
      job: response.data,
    },
  };
};
