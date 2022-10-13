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
    mount: 139.07,
    id: "01",
  },
  {
    name: "AVEO",
    mount: 139.07,
    id: "02",
  },
  {
    name: "OPTRA",
    mount: 139.07,
    id: "03",
  },
  {
    name: "CRUZE",
    mount: 114.03,
    id: "04",
  },
  {
    name: "ORLANDO",
    mount: 156.54,
    id: "05",
  },
  {
    name: "SILVERADO",
    mount: 277.6,
    id: "06",
  },
  {
    name: "LUV D-MAX",
    mount: 192.97,
    id: "08",
  },
  {
    name: "GRAND VITARA",
    mount: 203.41,
    id: "11",
  },
  {
    name: "GRAND VITARA J3",
    mount: 178.12,
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
            src="/revisionyescaneo.jpg"
          />

          <div className="container absolute inset-0 flex items-center py-20 mx-auto">
            <h1 className="text-4xl pl-[36px] font-semibold text-white font-montserrat">
              REVISIÓN Y ESCANEO GRATIS
            </h1>
          </div>
        </div>
        <div className="container px-5 mx-auto md:px-0">
          <section className="pt-20">
            <div className="max-w-5xl mx-auto">
              <h2 className="mb-10 text-3xl font-semibold text-center font-montserrat">
                ¡En nuestro aniversario 59 el regalo es para ti!
              </h2>
              <p className="mb-3 text-lg text-center">
                Queremos celebrar nuestro aniversario junto a ti, por eso
                durante todo el mes de octubre te obsequiamos la revisión y
                escaneo de tu vehículo, valorado en ref. 50 y por este mes
                totalmente GRATIS
              </p>
              <p className="mb-1 text-lg text-center">
                ¿Qué incluye la revisión y escaneo?
              </p>
              <p className="mb-1 text-lg text-center">
                <strong>Revisión 25 puntos, donde se valida:</strong>
              </p>
              <p className="mb-1 text-lg text-center">
                - Cauchos (desgaste, desalineación, partes dañadas).
              </p>
              <p className="mb-1 text-lg text-center">
                - Tren motriz, para descartar fugas de aceite y refrigerante.
              </p>
              <p className="mb-1 text-lg text-center">
                - Visualización de embrague, frenos, pastillas, bandas, discos y
                tambores.
              </p>
              <p className="mb-1 text-lg text-center">
                - Condición de los amortiguadores delanteros y traseros.
              </p>
              <p className="mb-3 text-lg text-center">
                - Inspección del sistema de escape, entre otros
              </p>
              <p className="mb-1 text-lg text-center">
                <strong>Escaneo:</strong>
              </p>
              <p className="mb-3 text-lg text-center">
                - Sistema eléctrico del vehículo: luces de tablero, sensores,
                transmisión.
              </p>
              <p className="mb-6 text-lg text-center">
                Acércate a nuestras sedes en octubre y vive la experiencia de
                ser un cliente García-Tuñón. 59 años contigo en el camino.
              </p>
            </div>
          </section>
          <section className="py-20">
            <div className="max-w-5xl mx-auto">
              <h2 className="mb-10 text-3xl font-semibold text-center font-montserrat">
                Agenda tu cita para revisión y escaneo
              </h2>
              <p className="mb-3 text-lg text-center">
                Puedes contactarnos por cualquiera de estas vías. Tienes{" "}
                <strong>hasta el 31 de octubre</strong> para asistir a la
                jornada <strong>¡Te esperamos!</strong>
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
