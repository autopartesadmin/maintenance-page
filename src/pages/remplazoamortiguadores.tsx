/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Img from "next/image";
import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";
import Slider from "react-slick";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsWhatsapp, BsTelephoneForward, BsChevronRight } from "react-icons/bs";
import { CgList } from "react-icons/cg";

const dataCars = [
  {
    name: "SPARK",
    id: "01",
  },
  {
    name: "AVEO",
    id: "02",
  },
  {
    name: "OPTRA",
    id: "03",
  },
  {
    name: "CRUZE",
    id: "04",
  },
  {
    name: "SILVERADO",
    id: "05",
  },
  {
    name: "ORLANDO",
    id: "06",
  },
  {
    name: "TAHOE",
    id: "07",
  },
  {
    name: "LUV D-MAX",
    id: "08",
  },
  {
    name: "EPICA",
    id: "09",
  },
  {
    name: "CAPTIVA",
    id: "10",
  },
  {
    name: "GRAND VITARA",
    id: "11",
  },
  {
    name: "GRAND VITARA J3",
    id: "12",
  },
];

const CambioAceite: NextPage = () => {
  useHubspotForm({
    portalId: "19669407",
    formId: "dca10e00-d207-4cc3-8de4-8b961d14b0d9",
    target: "#my-hubspot-form",
  });
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClickBtnWhatsapp = () => {
    // @ts-expect-error
    return window.gtag_report_conversion("https://wa.link/oyf5f0");
  };

  return (
    <div className="relative overflow-x-hidden">
      <Head>
        <title>Garcia Tuñon</title>
      </Head>
      <header className="absolute top-0 left-0 right-0 z-30 h-20">
        <Img src="/logo-gt.png" height={"200px"} width={"200px"} className="" />
      </header>
      <main className="relative z-10 font-yaldevi">
        <div className="relative bg-black">
          <img
            className="object-cover  w-full h-[80vh]  opacity-60 object-center"
            alt="banner"
            src="/remplazoamortiguadores.jpg"
          />

          <div className="container absolute inset-0 flex items-center py-20 mx-auto">
            <h1 className="text-4xl pl-[36px] font-semibold text-white font-montserrat">
              SUSPENSIÓN Y TREN DELANTERO
            </h1>
          </div>
        </div>
        <div className="container px-5 mx-auto md:px-0">
          <section className="py-20">
            <div className="max-w-5xl mx-auto">
              <h2 className="mb-10 text-3xl font-semibold text-center font-montserrat">
                Septiembre de Reemplazo de amortiguadores y ajuste de tren
                delantero
              </h2>
              <p className="mb-6 text-lg text-center">
                Durante el mes de septiembre podrás disfrutar de la jornada de{" "}
                <strong>
                  Reemplazo de Amortiguadores y ajuste de Tren Delantero
                </strong>{" "}
                a un precio especial para que pongas tu Chevrolet al día.
              </p>
              <p className="text-lg text-center">
                Ven este mes y obtén totalmente <strong>GRATIS</strong> la
                revisión mecánica de 25 puntos al hacer cualquiera de estos
                servicios:
              </p>
              <p className="mb-1 text-lg text-center">
                - Reemplazar amortiguadores delanteros y base de amortiguadores.
              </p>
              <p className="mb-1 text-lg text-center">
                - Reemplazar amortiguadores traseros.
              </p>
              <p className="mb-6 text-lg text-center">
                - Ajuste de tren delantero y visualización técnica de sus
                componentes: (Muñones, bujes, terminales y mesetas, tripoides,
                cajetines de dirección, puntas de eje).
              </p>

              <p className="text-lg text-center">Nuestro servicio incluye:</p>
              <p className="mb-1 text-lg text-center">- Repuestos Originales</p>
              <p className="mb-1 text-lg text-center">
                - Mano de obra calificada, técnicos especializados Chevrolet.
              </p>
              <p className="mb-1 text-lg text-center">
                - Asesor de servicio personalizado que te atenderá durante todo
                el servicio.
              </p>
              <p className="mb-1 text-lg text-center">
                - Entrega de repuestos cambiados.
              </p>
              <p className="mb-1 text-lg text-center">- Garantía de 1 mes.</p>
              <p className="mb-6 text-lg text-center">
                - Lavado y acondicionado de cortesía.
              </p>

              <p className="mb-10 text-lg text-center">
                Acércate a nuestras dos sedes, en Chacao y Los Palos Grandes y
                vive la experiencia de ser un cliente García-Tuñón. Ya son 58
                años cuidando tu Chevrolet.
              </p>
            </div>

            <Slider {...settings}>
              {dataCars.map((ele) => (
                <div className="relative p-6" key={ele.id}>
                  <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                    <h5 className="text-3xl font-bold text-right font-montserrat">
                      {ele.name}
                    </h5>
                    <h6 className="text-3xl font-bold text-right font-montserrat text-[#FF3D00]">
                      Consultar Precio
                    </h6>
                    <div className="relative">
                      <Img
                        src={`/car_${ele.name
                          .replace(/ /g, "_")
                          .toLowerCase()}.png`}
                        width={350}
                        height={350}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </section>
          <section className="py-20">
            <div className="max-w-5xl mx-auto">
              <h2 className="mb-10 text-3xl font-semibold text-center font-montserrat">
                Contáctanos para consultar precios y agendar tu cita para
                realizar el servicio.
              </h2>
              <p className="mb-3 text-lg text-center">
                Puedes contactarnos por cualquiera de estas vías. Tienes hasta
                el <span className="font-extrabold">30 de septiembre</span> para
                asistir a la jornada{" "}
                <span className="font-extrabold">¡Te esperamos!</span>
              </p>
            </div>
            <div className="grid max-w-6xl grid-cols-1 gap-10 py-10 mx-auto lg:grid-cols-3 md:grid-cols-2">
              <a
                href="https://wa.link/oyf5f0"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:scale-110"
              >
                <div className="p-8 shadow-md">
                  <span className="flex items-center justify-center mb-4 border-2 rounded-full border-[#01395E] h-14 w-14">
                    <small className="text-[#01395E]">
                      <BsWhatsapp className="text-2xl" />
                    </small>
                  </span>
                  <h3 className="mb-4 text-2xl font-bold">Escríbenos</h3>

                  <div className="flex items-center text-center text-[#01395E]">
                    <p className="flex items-center">
                      Solicitar cita
                      <span className="flex bg-[#01395E] rounded-full text-white p-1 ml-4 ">
                        <BsChevronRight className="text-lg" />
                      </span>
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="tel:+582122087607"
                className="transition duration-300 hover:scale-110"
              >
                <div className="p-8 shadow-md">
                  <span className="flex items-center justify-center mb-4 border-2 rounded-full border-[#01395E] h-14 w-14">
                    <small className="text-[#01395E]">
                      <BsTelephoneForward className="text-2xl" />
                    </small>
                  </span>
                  <h3 className="mb-4 text-2xl font-bold">Llámanos </h3>

                  <div className="flex items-center text-center text-[#01395E]">
                    <p className="flex items-center">
                      Solicitar cita
                      <span className="flex bg-[#01395E] rounded-full text-white p-1 ml-4 ">
                        <BsChevronRight className="text-lg" />
                      </span>
                    </p>
                  </div>
                </div>
              </a>
              <a
                className="transition duration-300 hover:scale-110"
                href="#my-hubspot-form"
              >
                <div className="p-8 shadow-md">
                  <span className="flex items-center justify-center mb-4 border-2 rounded-full border-[#01395E] h-14 w-14">
                    <small className="text-[#01395E]">
                      <CgList className="text-2xl" />
                    </small>
                  </span>
                  <h3 className="mb-4 text-2xl font-bold">
                    Llena el formulario
                  </h3>

                  <div className="flex items-center text-center text-[#01395E]">
                    <p className="flex items-center">
                      Solicitar cita
                      <span className="flex bg-[#01395E] rounded-full text-white p-1 ml-4 ">
                        <BsChevronRight className="text-lg" />
                      </span>
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div id="my-hubspot-form" className="max-w-4xl mx-auto mt-20"></div>
          </section>
        </div>
        <a
          href="https://wa.link/oyf5f0"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClickBtnWhatsapp}
        >
          <AiOutlineWhatsApp className="fixed w-16 h-16 p-2 text-3xl text-white bg-green-600 rounded-full lg:w-20 lg:h-20 bottom-10 right-10" />
        </a>
      </main>
    </div>
  );
};

export default CambioAceite;
