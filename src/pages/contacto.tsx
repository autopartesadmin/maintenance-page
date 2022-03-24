import * as React from "react";
import { BrandCards, Layout, Banner } from "@/components";
import type { NextLayoutPage } from "next";
import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";

const BrandCardsData = [
  {
    title: "AUTOPARTESMARKET",
    phone: "+582122087687",
    email: "soporte@autopartesmarket.com",
    whatsApp: "+584241264755",
    url: "",
    image: "/APM_A_CMYK-01.png",
  },
  {
    title: "BUSCOMIAUTO",
    phone: "+582122087677",
    email: "soporte@buscomiauto.com",
    whatsApp: "+584142666967",
    url: "",
    image: "/BMA  Imagotipo.png",
  },
  {
    title: "LOS PALOS GRANDES",
    phone: "+582122087677",
    email: "Info@Garciatunon.com",
    whatsApp: "+584241347437",
    url: "",
    image: "/CAR_0058.png",
    address: {
      address: "Avenida Francisco de Miranda, Caracas 1060, Miranda",
      url: "https://www.google.com/maps/place/Concesionario+Garc%C3%ADa+Tu%C3%B1on/@10.4966106,-66.8467397,17z/data=!3m1!4b1!4m5!3m4!1s0x8c2a59ad92a0f4cb:0xfcac088ea65014cf!8m2!3d10.4966106!4d-66.844551?hl=es",
    },
  },
  {
    title: "CHACAO",
    phone: " +582129188800",
    email: "Info@Garciatunon.com",
    whatsApp: "+584241347437",
    url: "",
    image: "/_DSC0665.png",
    address: {
      address: "Av. Andrés Galarraga, Caracas 1060, Miranda",
      url: "https://www.google.com/maps/place/Garc%C3%ADa-Tu%C3%B1%C3%B3n+Chacao,+C.A./@10.4874282,-66.8657014,15z/data=!4m9!1m2!2m1!1sConcesionario+Garc%C3%ADa+tu%C3%B1on+chacao+av+andres+galarraga+!3m5!1s0x8c2a58f8b0bfd1db:0x401dd271cdad9356!8m2!3d10.4874282!4d-66.8569467!15sCjdDb25jZXNpb25hcmlvIEdhcmPDrWEgdHXDsW9uIGNoYWNhbyBhdiBhbmRyZXMgZ2FsYXJyYWdhWjkiN2NvbmNlc2lvbmFyaW8gZ2FyY8OtYSB0dcOxb24gY2hhY2FvIGF2IGFuZHJlcyBnYWxhcnJhZ2GSARBjaGV2cm9sZXRfZGVhbGVy?hl=es",
    },
  },
];

const Contacto: NextLayoutPage = () => {
  useHubspotForm({
    portalId: "19669407",
    formId: "d5166919-8d8f-43bf-8aec-e63c16aea559",
    target: "#my-hubspot-form",
  });

  return (
    <div>
      <section className="mb-36">
        <div className="w-full max-w-6xl p-4 m-auto rounded-md shadow-lg lg:p-10">
          <h1 className="mb-10 text-3xl font-semibold text-center">
            Nuestros canales de atención a tu disposición
          </h1>
          <div id="my-hubspot-form" className="max-w-4xl mx-auto mt-20"></div>
        </div>
      </section>
      <section>
        <h4 className="mb-10 text-3xl font-semibold text-center">
          El vehículo de tus sueños, un servicio garantizado y los mejores
          repuestos originales; todo lo encuentras aquí.
        </h4>
        <div className="grid grid-cols-1 gap-8 mb-48 md:grid-cols-2 lg:grid-cols-4 ">
          {BrandCardsData.map((item) => (
            <BrandCards key={item.title} data={item} />
          ))}
        </div>
      </section>
    </div>
  );
};
Contacto.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout
      colorText="white"
      remderBanner={() => {
        return (
          <Banner
            image={"/Rectangle 75 (1).jpg"}
            content={
              "Nuestra atención al cliente te respalda en todos los caminos"
            }
            colorText="white"
          />
        );
      }}
    >
      {page}
    </Layout>
  );
};
export default Contacto;
