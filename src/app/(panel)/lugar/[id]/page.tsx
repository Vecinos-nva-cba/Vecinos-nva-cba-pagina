import { getLugarById } from "@/actions";
import { MuestraLugar, MuestraLugarMobile } from "@/components";
import Link from "next/link";

import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitch,
  IoLogoWebComponent,
} from "react-icons/io5";

interface Props {
  params: {
    id: string;
  };
}

export default async function LugarPage({ params }: Props) {
  const { id } = params;
  const lugar = await getLugarById(id);

  console.log(lugar);

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2">
        {/* Desktop */}
        {lugar && (
          <MuestraLugar
            titulo={lugar.nombre}
            imagenes={lugar.imagenes.map((imagen) => imagen.url)}
            className="hidden md:block"
          />
        )}

        {/* Mobile */}
        {lugar && (
          <MuestraLugarMobile
            titulo={lugar.nombre}
            imagenes={lugar.imagenes.map((imagen) => imagen.url)}
            className="block md:hidden"
          />
        )}
      </div>
      <div className="flex flex-col items-start justify-center md:justify-start mx-auto md:mx-0 ml-5 px-2 pb-4 md:pr-5 md:mt-10 mr-5 ">
        <div className="mt-2">
          <h1 className="text-2xl md:text-3xl font-bold">{lugar?.nombre}</h1>
        </div>
        <div className="flex flex-row items-center mt-5">
          <h2 className="font-bold">Barrio o zona:</h2>
          <span className="ml-2">{lugar?.barrio}</span>
        </div>

        <h2 className=" md:text-xl font-bold mt-2 mb-3 md:mb-0 md:ml-0">
          Tipo de lugar:
        </h2>
        <div className="flex justify-start md:my-4">
          {lugar?.tipo.map((tipo, index) => (
            <span
              key={index}
              className="bg-gray-500 text-white py-1 px-2 rounded-md text-sm mr-2"
            >
              {tipo}
            </span>
          ))}
        </div>

        <div className="flex flex-row items-center mt-5 md:mt-0">
          <h1 className="font-bold">
            {Array.isArray(lugar?.direccion) && lugar.direccion.length > 1
              ? "Direcciones:"
              : "Direccion:"}
          </h1>
          {Array.isArray(lugar?.direccion) &&
            lugar.direccion.map((direccion, index) => (
              <span key={index} className="ml-2">
                {direccion.calle} {direccion.altura}
              </span>
            ))}
        </div>

        {lugar?.localizacion && (
          <div className="text-blue-500 hover:text-blue-700 mt-4 md:mt-2">
            <Link href={lugar.localizacion}>Ir a la ubicacion</Link>
          </div>
        )}

        {lugar?.redes && lugar.redes.length > 0 && (
          <div className="flex flex-row items-center mt-5">
            <h1 className="mr-3 font-bold">Mis redes:</h1>
            {lugar?.redes.map((red, index) => (
              <Link href={red.url} key={index} passHref>
                {red.tipo === "Instagram" && (
                  <IoLogoInstagram className="text-3xl md:text-4xl text-pink-500 hover:text-pink-700 cursor-pointer mr-2" />
                )}
                {red.tipo === "Twitter" && (
                  <IoLogoTwitch className="text-3xl md:text-4xl text-purple-500 hover:text-purple-700 cursor-pointer mr-2" />
                )}
                {red.tipo === "Linkedin" && (
                  <IoLogoLinkedin className="text-3xl md:text-4xl text-blue-500 hover:text-blue-700 cursor-pointer mr-2" />
                )}
                {red.tipo === "Facebook" && (
                  <IoLogoFacebook className="text-3xl md:text-4xl text-blue-500 hover:text-blue-700 cursor-pointer mr-2" />
                )}
                {red.tipo === "Web" && (
                  <IoLogoWebComponent className="text-3xl md:text-4xl text-gray-500 hover:text-gray-700 cursor-pointer mr-2" />
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
