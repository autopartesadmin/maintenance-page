/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Img from "next/image";
import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";
import Slider from "react-slick";
import { AiOutlineWhatsApp } from "react-icons/ai";
const dataCars = [
  {
    name: "AVEO DESDE",
    mount: 45,
    id: "01",
  },
  {
    name: "CRUZE DESDE",
    mount: 50,
    id: "02",
  },
  {
    name: "OPTRA DESDE",
    mount: 55,
    id: "03",
  },
  {
    name: "SPARK DESDE",
    mount: 45,
    id: "04",
  },
  {
    name: "SILVERADO DESDE",
    mount: 55,
    id: "05",
  },
  {
    name: "ORLANDO DESDE",
    mount: 45,
    id: "06",
  },
  {
    name: "TAHOE DESDE",
    mount: 55,
    id: "07",
  },
  {
    name: "LUV D-MAX DESDE",
    mount: 55,
    id: "08",
  },
  {
    name: "EPICA DESDE",
    mount: 55,
    id: "09",
  },
  {
    name: "CAPTIVA DESDE",
    mount: 60,
    id: "10",
  },
  {
    name: "GRAND VITARA DESDE",
    mount: 55,
    id: "11",
  },
  {
    name: "GRAND VITARA DESDE J3",
    mount: 55,
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
            className="object-cover object-top w-full h-[80vh]  opacity-60"
            alt="banner"
            src="/_DSC0341.jpeg"
          />

          <div className="container absolute inset-0 flex items-center py-20 mx-auto">
            <h1 className="text-4xl font-semibold text-white font-montserrat ">
              CAMBIO DE ACEITE Y FILTRO
            </h1>
          </div>
        </div>
        <div className="container px-5 mx-auto md:px-0">
          <section className="py-20">
            <div className="max-w-5xl mx-auto">
              <h2 className="mb-10 text-3xl font-semibold text-center font-montserrat">
                Aproveche nuestra Promoción Navideña y obtenga 10% de descuento
                en su próximo servicio
              </h2>
              <p className="mb-3 text-lg text-center">
                ¿Va a viajar en estas navidades o para recibir el año nuevo?
                Realice el cambio de aceite y filtro, y viaje con la seguridad
                de tener su vehículo al día.
              </p>
              <p className="mb-10 text-lg text-center">
                Sea un Cliente García-Tuñón y disfrute de todos los beneficios
                que tenemos para usted, ya son 58 años de experiencia apoyando a
                cada venezolano a mantener su vehículo al día.
              </p>
            </div>

            <Slider {...settings}>
              {dataCars.map((ele) => (
                <div className="relative p-6" key={ele.id}>
                  <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                    <h5 className="text-3xl font-bold text-right font-montserrat">
                      {ele.name}
                    </h5>
                    <h6 className="font-montserrat text-3xl font-bold text-right text-[#E7B864]">
                      ${ele.mount}
                    </h6>
                    <div className="relative">
                      <Img
                        src={`/Sin-título-1_${ele.id}.png`}
                        width={300}
                        height={300}
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
                Agende su cita para realizar el cambio de Aceite y Filtro
              </h2>
              <p className="mb-3 text-lg text-center">
                Llene el formulario, escríbanos al whatsapp o llámenos al
                <a href="tel:+582122087607"> 0212-2087601. </a>
                Tiene hasta el 22 de diciembre para asistir a la jornada ¡Los
                esperamos!
              </p>
            </div>

            <div id="my-hubspot-form" className="max-w-4xl mx-auto mt-20"></div>
          </section>
        </div>
        <a
          href="https://wa.link/oyf5f0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineWhatsApp className="fixed w-16 h-16 p-2 text-3xl text-white bg-green-600 rounded-full lg:w-20 lg:h-20 bottom-10 right-10" />
        </a>
      </main>
    </div>
  );
};

export default CambioAceite;
