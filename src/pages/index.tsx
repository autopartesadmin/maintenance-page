import * as React from "react";
import type { NextLayoutPage } from "next";
import Image from "next/image";
import {
  RedirectCards,
  Title,
  PrimaryButtomWrapper,
  EventCards,
  SectionTitleVideo,
  BusinessCards,
  Layout,
  Banner,
  Link,
} from "@/components";
import axios from "axios";
import type { job } from "@/types/job";
import type { event } from "@/types/event";

type IProps = {
  jobs: {
    data: Array<job>;
  };
  eventsJob: {
    data: Array<event>;
  };
};

const dataRedirectCards = [
  {
    title: "Los Palos Grandes",
    subTitle:
      "Estamos a tu disposición en nuestra sede Los Palos Grandes. Encuentranos en la Av. Francisco de Miranda.",
    btnText: "Visita nuestra sede en Chacao",
    image: "/CAR_0058.png",
    url: "",
  },
  {
    title: "Chacao",
    subTitle:
      "Tenemos todo lo necesario para cuidar tu Chevrolet en nuestra sede Chacao. Encuentranos en la Av. Andrés Galarraga.",
    btnText: "Conoce nuestra sede en LPG",
    image: "/_DSC0665.png",
    url: "",
  },
  {
    title: "Buscomiauto",
    subTitle: "La manera segura de vender o comprar tu vehículo online.",
    btnText: "Tu carro nuevo a un clic",
    image: "/01__1_-removebg-preview.png",
    url: "https://buscomiauto.com/",
  },
  {
    title: "Autopartes Market",
    subTitle:
      "Mantén tu vehículo en movimiento con nuestra Tienda Online de Repuestos Originales Chevrolet",
    btnText: "Busco repuestos para mi auto",
    image: "/20-10-21_03 2.png",
    url: "https://autopartesmarket.com/",
  },
];
const dataAfterVideo = [
  {
    title: "58 años",
    url: "/",
    content:
      "brindándole a toda Venezuela la mejor experiencia en el cuidado y mantenimiento de vehículos.",
  },
  {
    title: "+3000",
    url: "/",
    content: "Clientes atendidos satisfactoriamente en el 2021.",
  },
  {
    title: "14200 mt2",
    url: "/",
    content:
      "Amplios espacios para la atención de hasta 3000 vehículos al mes.",
  },
];
const Home: NextLayoutPage<IProps> = ({ jobs, eventsJob }) => {
  return (
    <div>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-36">
        {dataRedirectCards.map((item) => (
          <RedirectCards data={item} key={item.title} />
        ))}
      </section>
      <section className="mb-36">
        <SectionTitleVideo
          title="Seguimos construyendo camino en Venezuela"
          url="https://www.youtube.com/watch?v=FBe-T24GTIs"
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-36">
          {dataAfterVideo.map((item) => {
            return (
              <div key={item.title} className="">
                <h2 className="mb-4 text-5xl font-semibold text-center">
                  {item.title}
                </h2>
                <p className="mb-5 text-center">{item.content}</p>
                <PrimaryButtomWrapper
                  className="justify-center mb-4"
                  url={`${item.url}`}
                >
                  Conocer más
                </PrimaryButtomWrapper>
              </div>
            );
          })}
        </div>
      </section>
      <section className="px-2">
        <div className="mx-2">
          <Title
            title="Somos más que un concesionario"
            subtitle="Convertimos la venta de vehículos en procesos confiables, rápidos  y seguros con Buscomiauto. Mantén tu vehículo en movimiento con Repuestos Originales en Autopartes Market ."
          />
        </div>
        <div className="bg-[#E8ECF0] grid grid-cols-1 md:grid-cols-2 gap-8 my-8 p-4 rounded-sm">
          <div className="order-2 md:order-1 w-full  h-[400px] relative">
            <Image
              alt="image"
              src="/01__1_-removebg-preview.png"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
          <div className="flex flex-col justify-center order-1 gap-8 md:order-2">
            <h4 className="text-2xl font-semibold text-[#E7B864] text-center">
              Integrante del Grupo García-Tuñón
            </h4>
            <figure className="relative w-full h-36">
              <Image
                alt="image"
                src="/BMA Grupo GT1 negro.png"
                layout="fill"
                objectFit="contain"
                quality={100}
                className="inset-x-0 w-full"
              />
            </figure>

            <p className="text-2xl text-center">
              Un mejor vehículo te llevará <br /> más lejos
            </p>
            <PrimaryButtomWrapper
              className="justify-center mb-4"
              url="https://buscomiauto.com/"
            >
              Compra tu vehículo ideal
            </PrimaryButtomWrapper>
          </div>
        </div>
        <div className="bg-[#E8ECF0] grid grid-cols-1 md:grid-cols-2 gap-8 my-8 p-4 rounded-sm">
          <div className="flex flex-col justify-center gap-8">
            <h4 className="text-2xl font-semibold text-[#E7B864] text-center">
              Integrante del Grupo García-Tuñón
            </h4>
            <figure className="relative w-full h-36">
              <Image
                alt="image"
                src="/APM_MONO_NEGgt.png"
                layout="fill"
                objectFit="contain"
                quality={100}
                className="inset-x-0 w-full"
              />
            </figure>
            <p className="text-2xl text-center">
              Impulsamos la fuerza de tu <br /> vehículo con Repuestos
              Originales
            </p>
            <PrimaryButtomWrapper
              className="justify-center mb-4"
              url="https://autopartesmarket.com/"
            >
              Encuentra los mejores repuestos para tu vehículo
            </PrimaryButtomWrapper>
          </div>
          <div className="w-full  h-[400px] relative">
            <Image
              alt="image"
              src="/20-10-21_03 2.png"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
        </div>
      </section>
      <section className="relative flex flex-col items-center justify-center py-40 bg-gray-300 mb-36">
        <Image
          src={"/Rectangle 30.png"}
          layout="fill"
          className="z-10"
          objectFit="cover"
          quality={100}
          alt="image"
        />
        <div className="z-20 max-w-5xl text-center">
          <h3 className="mb-8 text-5xl text-white">
            Nuestro compromiso no es solo con tu vehículo, también con nuestro
            país
          </h3>
          <p className="mb-6 text-2xl text-white">
            Desarrollamos programas sociales para beneficio de las comunidades.
            Nuestro compromiso se ha extendido desde el sector automotor al
            sector social.
          </p>
          <div className="flex flex-col text-xl text-white">
            <Link className="justify-center mb-4 hover:underline" href="/">
              Pupitres sobre Ruedas
            </Link>
            <Link className="justify-center mb-4 hover:underline" href="/">
              Autismo en voz alta
            </Link>
          </div>
        </div>
      </section>
      {eventsJob.data.length >= 1 && (
        <section className="mb-36">
          <Title title="Tenemos buenas noticias para ti" />
          <hr className="mb-12 border-2" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {eventsJob.data.map((item) => (
              <EventCards data={item} key={item.id} />
            ))}
          </div>
        </section>
      )}
      {jobs.data.length >= 1 && (
        <section className="pb-36">
          <Title
            title="Seguimos recorriendo caminos, ¿vienes con nosotros?"
            subtitle="Si compartes nuestra pasión por el mundo automotriz, tenemos un espacio ideal para ti."
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {jobs.data.map((ele) => (
              <BusinessCards data={ele} key={ele.id} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export async function getStaticProps() {
  const urlJobs = `${process.env.BACKEND_URL}/cargos-disponibles`;
  const jobs = await axios.get(urlJobs);

  const urlEvents = `${process.env.BACKEND_URL}/eventos?populate=imagen`;
  const events = await axios.get(urlEvents);
  return {
    props: {
      jobs: jobs.data,
      eventsJob: events.data,
    },
  };
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout
      colorText="white"
      remderBanner={() => {
        return (
          <Banner
            image={"/Rectangle 75.jpg"}
            content={
              "Trayectoria, honestidad y pasión por lo que hacemos <br/> Grupo García-Tuñón, 58 años en Venezuela"
            }
            size="large"
            colorText="white"
          />
        );
      }}
    >
      {page}
    </Layout>
  );
};
export default Home;
