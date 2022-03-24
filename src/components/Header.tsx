import * as React from "react";
import { Navbar } from "./";
import { Burguer } from "../icons";
import { document } from "browser-monads-ts";
import { Link } from "@/components";
import Image from "next/image";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  React.useMemo(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  return (
    <>
      <div className="container relative hidden mx-auto lg:flex">
        <div className="absolute inset-x-0 z-50 flex">
          <div className="w-1/5 p-4">
            <Link href="/" className="relative block h-28">
              <Image
                alt="logo"
                className="z-10"
                src="/Logo GT.png"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </Link>
          </div>
          <div className="flex items-center justify-end w-4/5 p-4">
            <Navbar />
          </div>
        </div>
      </div>

      <div className="fixed flex z-40 bg-[#27272B] lg:hidden inset-x-0 top-0 p-2">
        <div className="w-1/3">
          <Link href="/" className="relative block w-full h-20">
            <Image
              alt="logo"
              className="z-10"
              src="/Logo-GT-new blanco.png"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </Link>
        </div>
        <div className="flex items-center justify-end w-2/3 mr-5 sm:mr-20">
          <button onClick={() => setOpen(!open)}>
            <Burguer className="w-10 h-10 sm:w-12 sm:h-12" />
          </button>
        </div>
      </div>

      <div
        className={`${
          open ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 w-4/5 bg-[#151516] lg:hidden trasition duration-300`}
      >
        <div className="flex items-center justify-center h-full p-4">
          <Navbar />
        </div>
      </div>

      <div
        onClick={() => setOpen(!open)}
        className={`inset-0 bg-black opacity-25 z-40 ${
          open ? "fixed" : "hidden"
        }`}
      />
    </>
  );
};
export default Header;
