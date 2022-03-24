import React from "react";
import { PrimaryButtomWrapper, Title, SectionTitleVideo } from "../components";
const Concesionarios = () => {
  return (
    <div>
      <section className="mb-36">
        <Title
          title="Et tortor ultricies posuere eget sit cras."
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac sit elit vitae pretium ut urna neque non. Purus egestas morbi aliquet arcu tortor ut in. Urna aliquam vestibulum viverra aenean erat mi"
        />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {[1, 2, 3].map((el) => (
            <div
              key={el}
              className="flex flex-wrap items-center w-full p-8 transition duration-300 hover:shadow-lg"
            >
              <div>
                <h3 className="mb-5 text-2xl font-semibold text-center">
                  Arcu tempus eros.
                </h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                  iaculis lorem dui nunc. Mi morbi ut aliquet turpis accumsan
                  nec tortor fames. Laoreet sit donec eu nunc interdum.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-36">
        <SectionTitleVideo title="" url="" />
      </section>
      <section className="mb-36">
        <SectionTitleVideo title="" url="" />
      </section>
      <section className="mb-36">
        <Title
          title="Et tortor ultricies posuere eget sit cras."
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id donec ut diam duis enim consectetur convallis non. Pharetra, diam ultricies."
        />
        <div className="grid grid-cols-1 mb-20 sm:grid-cols-2 xl:grid-cols-4 xl:gap-20">
          <div className="p-8 shadow-md">
            <span className="flex items-center justify-center mb-4 border-2 rounded-full border-primary h-14 w-14">
              <small className="text-primary">01</small>
            </span>
            <h3 className="mb-4 text-2xl font-bold">
              Inspección técnica del vehículo
            </h3>
            <p className="mb-4 font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. id donec
            </p>
            <PrimaryButtomWrapper className="mt-auto" url="/contacto">
              Solicitar cita
            </PrimaryButtomWrapper>
          </div>
          <div className="p-8 shadow-md">
            <span className="flex items-center justify-center mb-4 border-2 rounded-full border-primary h-14 w-14">
              <small className="text-primary">02</small>
            </span>
            <h3 className="mb-4 text-2xl font-bold">
              Cambio de aceite y filtro
            </h3>
            <p className="mb-4 font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. id donec
            </p>
            <PrimaryButtomWrapper className="mt-auto" url="/contacto">
              Solicitar cita
            </PrimaryButtomWrapper>
          </div>
          <div className="p-8 shadow-md">
            <span className="flex items-center justify-center mb-4 border-2 rounded-full border-primary h-14 w-14">
              <small className="text-primary">03</small>
            </span>
            <h3 className="mb-4 text-2xl font-bold">Entonación de motor</h3>
            <p className="mb-4 font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. id donec
            </p>
            <PrimaryButtomWrapper className="mt-auto" url="/contacto">
              Solicitar cita
            </PrimaryButtomWrapper>
          </div>
          <div className="p-8 shadow-md">
            <span className="flex items-center justify-center mb-4 border-2 rounded-full border-primary h-14 w-14">
              <small className="text-primary">04</small>
            </span>
            <h3 className="mb-4 text-2xl font-bold">Cambio de kit de tiempo</h3>
            <p className="mb-4 font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. id donec
            </p>
            <PrimaryButtomWrapper className="mt-auto" url="/contacto">
              Solicitar cita
            </PrimaryButtomWrapper>
          </div>
        </div>
      </section>
      <section className="mb-36">
        <Title title="Et tortor ultricies posuere eget sit cras." />
        <div className="container flex flex-wrap px-5 py-10 mx-auto">
          <div className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              {[1, 2, 3, 4].map((el) => (
                <div key={el} className="relative flex pb-12">
                  <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                    <div className="w-1 h-full bg-[#01395E] pointer-events-none"></div>
                  </div>
                  <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-[#01395E] rounded-full"></div>
                  <div className="flex-grow pl-4">
                    <h2 className="mb-1 text-2xl font-bold tracking-wider ">
                      Lacus duis vitae vel vulputate.
                    </h2>
                    <p className="leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc, interdum at sollicitudin velit integer aliquet.
                      Amet.
                    </p>
                  </div>
                </div>
              ))}

              <div className="relative flex">
                <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-[#01395E] rounded-full"></div>
                <div className="flex items-center pl-4">
                  <PrimaryButtomWrapper url="/contacto">
                    Solicitar cita
                  </PrimaryButtomWrapper>
                </div>
              </div>
            </div>
            <div className="object-cover object-center h-full mt-12 bg-gray-300 rounded-lg lg:w-3/5 md:w-1/2 md:mt-0"></div>
          </div>
        </div>
      </section>
      <section className="mb-36">
        <Title
          title="Et tortor ultricies posuere eget sit cras."
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac sit elit vitae pretium ut urna neque non. Purus egestas morbi aliquet arcu tortor ut in. Urna aliquam vestibulum viverra aenean erat mi"
        />
        <div className="flex flex-wrap justify-center">
          {[1, 2, 3, 4, 5].map((el) => (
            <div
              key={el}
              className="relative flex justify-center p-10 lg:w-1/3"
            >
              <div className="p-10 pb-20 shadow-lg">
                <picture className="flex justify-center mb-5">
                  <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
                </picture>
                <p className="text-xl font-semibold text-center">
                  Tincidunt tellus condimentum duis duis.
                </p>
              </div>
              <div className="absolute bottom-0 bg-[#01395E] rounded-full h-20 w-20 flex justify-center items-center text-white">
                0{el}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Concesionarios;
