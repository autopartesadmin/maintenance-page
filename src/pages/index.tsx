import type { NextPage } from "next";
import Head from "next/head";
import Img from "next/image";
import {
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlinePhone,
} from "react-icons/ai";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Garcia Tuñon</title>
      </Head>
      <div className="relative w-screen h-screen overflow-hidden bg-black">
        <Img
          className="object-cover w-full h-full opacity-60"
          alt="background"
          src="/_DSC0005.jpg"
          layout="fill"
        />
        <div className="container absolute inset-0 flex flex-col items-center justify-center mx-auto">
          <Img
            className=""
            alt="background"
            src="/logo-gt.png"
            width={250}
            height={250}
          />
          <div className="transform -translate-y-12">
            <h1 className="font-mono text-2xl text-center text-white uppercase">
              Grupo Empresarial García-Tuñón
            </h1>
            <h3 className="mt-4 text-2xl text-center text-white">
              Así como tu vehículo, nosotros también necesitamos mantenimiento
            </h3>

            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-center text-white"
            >
              Estamos renovando nuestro sitio web, mientras te invitamos a
              seguirnos de cerca en
            </a>
            <div className="flex justify-center gap-8 mt-8 text-white">
              <a
                href="https://api.whatsapp.com/send?phone=584241347437"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center"
              >
                <AiOutlineWhatsApp className="text-5xl" />
                +58 424-1347437
              </a>
              <a
                href="https://www.instagram.com/garcia_tunon/?hl=es-la"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center"
              >
                <AiOutlineInstagram className="text-5xl" />
                @Garcia_Tunon
              </a>
              <a
                href="tel:+582122087601"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center"
              >
                <AiOutlinePhone className="text-5xl" />
                +58 2122087601
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
