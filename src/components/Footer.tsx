import React from "react";
import { Navbar } from "./";
import { useRouter } from "next/router";
import Image from "next/image";
import { Link } from "@/components";
import { AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  const router = useRouter();

  const dataAddress = [
    {
      title: "CHACAO",
      address: {
        address: "Av. Andrés Galarraga, Caracas 1060, Miranda",
        url: "https://www.google.com/maps/place/Garc%C3%ADa-Tu%C3%B1%C3%B3n+Chacao,+C.A./@10.4874282,-66.8657014,15z/data=!4m9!1m2!2m1!1sConcesionario+Garc%C3%ADa+tu%C3%B1on+chacao+av+andres+galarraga+!3m5!1s0x8c2a58f8b0bfd1db:0x401dd271cdad9356!8m2!3d10.4874282!4d-66.8569467!15sCjdDb25jZXNpb25hcmlvIEdhcmPDrWEgdHXDsW9uIGNoYWNhbyBhdiBhbmRyZXMgZ2FsYXJyYWdhWjkiN2NvbmNlc2lvbmFyaW8gZ2FyY8OtYSB0dcOxb24gY2hhY2FvIGF2IGFuZHJlcyBnYWxhcnJhZ2GSARBjaGV2cm9sZXRfZGVhbGVy?hl=es",
      },
    },
    {
      title: "LOS PALOS GRANDES",
      address: {
        address: "Avenida Francisco de Miranda, Caracas 1060, Miranda",
        url: "https://www.google.com/maps/place/Concesionario+Garc%C3%ADa+Tu%C3%B1on/@10.4966106,-66.8467397,17z/data=!3m1!4b1!4m5!3m4!1s0x8c2a59ad92a0f4cb:0xfcac088ea65014cf!8m2!3d10.4966106!4d-66.844551?hl=es",
      },
    },
  ];

  return (
    <div
      className={`relative ${
        router.asPath === "/" || router.asPath === "/grupo-garcia-tunon"
          ? "lg:mt-56"
          : null
      }`}
    >
      <div
        className={` hidden bg-[#27272B] ${
          router.asPath !== "/" && router.asPath !== "/grupo-garcia-tunon"
            ? "md:block"
            : "hidden"
        }`}
      >
        <div className="container hidden p-4 mx-auto text-white lg:block">
          <Navbar notBottom={false} />
        </div>
      </div>
      <div
        className={`lg:absolute inset-x-0 max-w-7xl mx-auto z-30 p-2 md:p-10 lg:rounded-3xl text-white -top-1/2 relative overflow-hidden ${
          router.asPath !== "/" && router.asPath !== "/grupo-garcia-tunon"
            ? "hidden"
            : "block"
        }`}
      >
        <Image
          src={"/Rectangle 24 (1).png"}
          layout="fill"
          className="z-10"
          objectFit="cover"
          quality={100}
          alt="image"
        />
        <div className="relative z-20">
          <h3 className="text-5xl text-center text-white">
            Hablemos de lo que nos apasiona{" "}
          </h3>
          <p className="max-w-3xl mx-auto my-8 text-xl text-center text-white">
            ¿Amas el sector automotriz tanto como nosotros? Suscríbete y recibe
            toda las ofertas y promociones disponibles
          </p>
          <label className="block w-full max-w-2xl mx-auto mt-4">
            <input
              className="p-4 bg-[#151516] placeholder-white bg-opacity-60 w-3/6 md:w-3/5"
              placeholder="Ingresa tu correo electrónico"
              type="text"
            />
            <button className="rounded-r-full bg-[#E7B864] p-4 md:w-2/5 w-3/6 text-sm whitespace-nowrap	truncate">
              Quiero recibir información
            </button>
          </label>
        </div>
      </div>
      <div className="bg-[#151516]">
        <div
          className={`container py-10 mx-auto text-white ${
            router.asPath === "/" || router.asPath === "/grupo-garcia-tunon"
              ? "lg:pt-32"
              : null
          }`}
        >
          <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <h3 className="text-[#E7B864] text-2xl font-semibold">
                Dirección
              </h3>
              {dataAddress.map((item) => (
                <React.Fragment key={item.title}>
                  <p className="mt-4 text-lg font-bold">{item.title}</p>
                  <Link href={item.address.url}>{item.address.address}</Link>
                </React.Fragment>
              ))}
            </div>
            <div className="">
              <h3 className="text-[#E7B864] text-2xl font-semibold">
                Horarios
              </h3>
              <p className="mt-4 text-lg font-bold">Lunes a viernes</p>
              <p>8:00 a.m a 5:00 p.m</p>
            </div>
            <div className="">
              <h3 className="text-[#E7B864] text-2xl font-semibold">
                Medios de contacto
              </h3>
              {/* <p className="mt-4 text-lg font-bold">Teléfono</p>
              <p>Lorem ipsum dolor sit amet</p>
              <p className="mt-4 text-lg font-bold">WhatsApp</p>
              <p>Lorem ipsum dolor sit amet</p> */}
              <p className="mt-4 text-lg font-bold">Correo</p>
              <a href="mailto:info@garciatunon.com">info@garciatunon.com</a>
            </div>
            <div className="">
              <h3 className="text-[#E7B864] text-2xl font-semibold">
                Acelera con nosotros
              </h3>
              <ul className="flex flex-row gap-4 mt-4">
                <li>
                  <Link href="https://www.instagram.com/garcia_tunon/">
                    <AiOutlineInstagram className="text-3xl" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com/Garc%C3%ADa-Tu%C3%B1%C3%B3n-265563940869088/">
                    <AiFillFacebook className="text-3xl" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
