import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { Title, Toggle, Link } from "@/components";

const NuestroImpacto = () => {
  return (
    <div>
      <section className="mb-36">
        <h1 className="text-5xl font-bold text-center">
          Et tortor ultricies posuere eget sit cras.
        </h1>
        <p className="mt-10 text-2xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac sit elit
          vitae pretium ut urna neque non. Purus egestas morbi aliquet arcu
          tortor ut in. Urna aliquam vestibulum viverra aenean erat mi. Interdum
          faucibus egestas scelerisque cursus ipsum auctor. Erat laoreet
          ullamcorper in purus.
        </p>

        <h4 className="mt-6 text-2xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h4>

        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((el) => (
            <Link key={el} href={`/nuestro-impacto#one`}>
              <div className="flex flex-col items-center p-5">
                <picture className="flex justify-center mb-5">
                  <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
                </picture>
                <p className="text-xl font-semibold text-center">
                  Tincidunt tellus condimentum duis duis.
                </p>
                <AiOutlineDown className="mt-4" size={40} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center justify-center pb-10 bg-gray-300 pt-72 mb-36">
        <div className="max-w-4xl text-center">
          <h3 className="mb-8 text-5xl text-white">
            Nombre de la iniciativa a realizar{" "}
          </h3>
          <p className="mb-6 text-2xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
            adipiscing blandit rhoncus auctor quis massa urna laoreet sit.
            Lectus molestie nibh tempus mauris vel. Tincidunt egestas sed
            tristique eleifend eu id nec.
          </p>
        </div>
      </section>

      <section className="mb-36">
        <Title title="Nuestro objetivo o misión con la iniciativa" />
        <div className="flex flex-wrap justify-around">
          {[1, 2, 3, 4, 5, 6, 7].map((el) => (
            <div
              key={el}
              className="flex flex-col items-center w-full p-5 sm:w-1/2 lg:w-1/4"
            >
              <picture className="flex justify-center mb-5">
                <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
              </picture>
              <h5 className="text-2xl text-center text-primary ">
                Tincidunt tellus condimentum duis duis.
              </h5>
              <p className="mt-2 text-lg text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                purus sed eu pulvinar.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-36">
        <div className="flex flex-col items-center justify-center py-40 bg-gray-300 mb-36">
          <div className="max-w-4xl text-center">
            <h3 className="mb-8 text-5xl text-white">
              Lorem ipsum dolor sit amet.
            </h3>
            <p className="my-8 text-black text-7xl">
              <span className="inline-block w-16 py-6 mx-1 rounded-lg bg-gray-600/25">
                0
              </span>
              <span className="inline-block w-16 py-6 mx-1 rounded-lg bg-gray-600/25">
                1
              </span>
              <span className="inline-block w-16 py-6 mx-1 rounded-lg bg-gray-600/25">
                0
              </span>
              <span className="inline-block w-16 py-6 mx-1 rounded-lg bg-gray-600/25">
                3
              </span>
              <span className="inline-block w-16 py-6 mx-1 rounded-lg bg-gray-600/25">
                1
              </span>
              <span className="inline-block w-16 py-6 mx-1 rounded-lg bg-gray-600/25">
                6
              </span>
            </p>
            <p className="mb-6 text-2xl text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
              donec ut diam duis enim consecte.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-36">
        <h3 className="text-4xl font-bold text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
        <div
          id="one"
          className="grid grid-cols-1 mt-10 lg:grid-cols-2 bg-[#E8ECF0] p-6 gap-8"
        >
          <div className="flex items-center justify-center mb-10 lg:mb-0">
            <picture className="flex items-center justify-center w-full h-full">
              <div className="bg-gray-300 rounded-full h-96 w-96"></div>
            </picture>
          </div>
          <div>
            <h4 className="mb-10 text-3xl font-bold text-center">
              Tincidunt tellus condimentum duis duis.
            </h4>
            <p className="mb-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In proin
              vitae tortor pharetra lobortis morbi rhoncus blandit. Magna cum id
              curabitur eget aliquam molestie congue aliquam. Sed eu amet mi
              quis fermentum sed.
            </p>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              pellentesque elit gravida turpis sed quisque.{" "}
            </p>
            <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((el) => (
                <div key={el} className="flex flex-col items-center p-5">
                  <picture className="flex justify-center mb-5">
                    <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
                  </picture>
                  <p className="text-center">
                    Tincidunt tellus condimentum duis.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          id="two"
          className="grid grid-cols-1 gap-8 p-6 mt-10 lg:grid-cols-2"
        >
          <div className="flex items-center justify-center mb-10 lg:order-2 lg:mb-0">
            <picture className="flex items-center justify-center w-full h-full">
              <div className="bg-gray-300 rounded-full h-96 w-96"></div>
            </picture>
          </div>
          <div className="lg:order-1 ">
            <h4 className="mb-10 text-3xl font-bold text-center">
              Tincidunt tellus condimentum duis duis.
            </h4>
            <p className="mb-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In proin
              vitae tortor pharetra lobortis morbi rhoncus blandit. Magna cum id
              curabitur eget aliquam molestie congue aliquam. Sed eu amet mi
              quis fermentum sed.
            </p>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              pellentesque elit gravida turpis sed quisque.{" "}
            </p>
            <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((el) => (
                <div key={el} className="flex flex-col items-center p-5">
                  <picture className="flex justify-center mb-5">
                    <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
                  </picture>
                  <p className="text-center">
                    Tincidunt tellus condimentum duis.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          id="three"
          className="grid grid-cols-1 mt-10 lg:grid-cols-2 bg-[#E8ECF0] p-6 gap-8"
        >
          <div className="flex items-center justify-center mb-10 lg:mb-0">
            <picture className="flex items-center justify-center w-full h-full">
              <div className="bg-gray-300 rounded-full h-96 w-96"></div>
            </picture>
          </div>
          <div>
            <h4 className="mb-10 text-3xl font-bold text-center">
              Tincidunt tellus condimentum duis duis.
            </h4>
            <p className="mb-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In proin
              vitae tortor pharetra lobortis morbi rhoncus blandit. Magna cum id
              curabitur eget aliquam molestie congue aliquam. Sed eu amet mi
              quis fermentum sed.
            </p>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              pellentesque elit gravida turpis sed quisque.{" "}
            </p>
            <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((el) => (
                <div key={el} className="flex flex-col items-center p-5">
                  <picture className="flex justify-center mb-5">
                    <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
                  </picture>
                  <p className="text-center">
                    Tincidunt tellus condimentum duis.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-36">
        <div className="flex flex-col items-center justify-center py-40 bg-gray-300 mb-36">
          <div className="max-w-4xl text-center">
            <h3 className="mb-8 text-5xl text-white">
              Tristique turpis egestas metus.
            </h3>
            <p className="mb-6 text-2xl text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
              donec ut diam duis enim consectetur.
            </p>
            <form className="flex gap-4 px-2 lg:gap-8">
              <input
                type="text"
                className="w-full px-4 rounded-md"
                placeholder="Ingresa tu correo electrónico"
              />
              <button
                type="submit"
                className="bg-[#01395E] text-white rounded-full w-40 px-6 py-3"
              >
                Ser aliado
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="pb-36">
        <Title title="Lorem ipsum dolor sit amet." />
        {[1, 2, 3, 4].map((el) => (
          <Toggle
            question="¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            response="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum facilis similique nulla quas deserunt itaque eius nostrum illo, consequatur reiciendis."
            key={el}
          />
        ))}
      </section>
    </div>
  );
};
export default NuestroImpacto;
