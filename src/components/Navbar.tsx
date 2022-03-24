import React from "react";
import Link from "next/link";

const Navbar = ({ notBottom = true }) => {
  return (
    <ul className="flex flex-col items-center gap-4 lg:flex-row">
      {/* <li className="text-lg ">
        <Link href="/grupo-garcia-tunon">
          <a>Grupo García-Tuñon</a>
        </Link>
      </li>
      <li className="text-lg ">
        <Link href="/nuestro-impacto">
          <a>Nuestro impacto</a>
        </Link>
      </li>
      <li className="text-lg ">
        <Link href="/concesionarios">
          <a>Servicios</a>
        </Link>
      </li>

      <li className="text-lg ">
        <Link href="/ofertas-de-empleo">
          <a>Ofertas de empleo</a>
        </Link>
      </li> */}
      <li
        className={` text-lg ${
          notBottom && " md:border-2  md:border-[#E7B864] md:rounded-3xl"
        }`}
      >
        <Link href="/contacto">
          <a href="#" className="block md:py-2 md:px-4">
            Contáctanos
          </a>
        </Link>
      </li>
    </ul>
  );
};
export default Navbar;
