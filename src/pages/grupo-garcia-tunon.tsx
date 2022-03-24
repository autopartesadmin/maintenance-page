import React from "react";
import Image from "next/image";
import { Title, PrimaryButtomWrapper } from "../components";
const GrupoGarciaTunon = () => {
  return (
    <div>
      <section className="mb-36">
        <Title
          title="Et tortor ultricies posuere eget sit cras."
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id donec ut diam duis enim consectetur convallis non. Pharetra, diam ultricies neque viverra eu in ornare eget. Cursus sed ullamcorper. Lorem ipsum dolor sit amet."
        >
          <p className="max-w-4xl mx-auto mb-10 text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
            donec ut diam duis enim consectetur convallis non. Pharetra, diam
            ultricies neque viverra eu in ornare eget. Cursus sed ullamcorper.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Title>
        <picture>
          <div className="w-full bg-gray-300 h-[600px]"></div>
        </picture>
      </section>
      <section className="mb-36">
        <Title title="Et tortor ultricies posuere eget sit cras." />
        <div className="flex flex-wrap items-stretch">
          <div className="w-full p-4 lg:w-2/5">
            <div className="flex flex-wrap items-center w-full p-8 transition duration-300 hover:shadow-lg h-1/2">
              <div>
                <h3 className="mb-5 text-2xl font-semibold">Misión</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                  iaculis lorem dui nunc. Mi morbi ut aliquet turpis accumsan
                  nec tortor fames. Laoreet sit donec eu nunc interdum.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center w-full p-8 transition duration-300 hover:shadow-lg h-1/2">
              <div>
                <h3 className="mb-5 text-2xl font-semibold">Visión</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                  iaculis lorem dui nunc. Mi morbi ut aliquet turpis accumsan
                  nec tortor fames. Laoreet sit donec eu nunc interdum.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:p-4 lg:w-3/5">
            <picture>
              <div className="w-full bg-gray-300 h-[600px]"></div>
            </picture>
          </div>
        </div>
      </section>
      <section className="mb-36 bg-[#E8ECF0] px-4 py-8">
        <Title title="Nuestros valores" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {[1, 2, 3, 4].map((el) => (
            <div key={el} className="p-5">
              <picture className="flex justify-center mb-5">
                <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
              </picture>
              <p className="text-xl font-semibold text-center">
                Tincidunt tellus condimentum duis duis.
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-36">
        <Title title="Et tortor ultricies posuere eget sit cras." />
        <div className="grid grid-cols-1 gap-4 lg:gap-8 md:grid-cols-2">
          <div className="flex items-center p-4 shadow-xl lg:p-20 rounded-xl">
            <div>
              <h3 className="mb-8 text-3xl font-semibold">
                Et tortor ultricies posuere eget sit cras.
              </h3>
              <p className="mb-4 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                lorem nisi, amet dignissim blandit proin nulla. Velit sed mauris
                interdum morbi adipiscing arcu. Et quis quis nisl nisl vulputate
                lacus mauris, at.
              </p>
              <PrimaryButtomWrapper className="mb-4 " url="/contacto">
                Conocer las iniciativas
              </PrimaryButtomWrapper>
            </div>
          </div>
          <div className="">
            <div className="w-full bg-gray-300 h-[500px] rounded-xl"></div>
          </div>
        </div>
      </section>
      <section className="pb-36">
        <div className="flex flex-col items-center justify-center py-40 bg-gray-300 mb-36">
          <div className="max-w-4xl text-center">
            <h3 className="mb-8 text-5xl text-white">
              Tristique turpis egestas metus.
            </h3>
            <p className="mb-6 text-2xl text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
              donec ut diam duis enim consectetur.
            </p>
            <form className="flex gap-4 px-2 lg:gap-8">
              <input
                type="text"
                className="w-full px-4 rounded-md"
                placeholder="Ingresa tu correo electrónico"
              />
              <button
                type="submit"
                className="bg-[#01395E] text-white rounded-full w-40 px-6 py-3"
              >
                Ser aliado
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default GrupoGarciaTunon;
