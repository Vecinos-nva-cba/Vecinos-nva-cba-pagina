import { getLugarById } from "@/actions/lugar/get-lugar-by-id";
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

  // console.log(lugar?.localizacion)

  // console.log(lugar);

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3 ">
      <div className="col-span-1 md:col-span-2">
        {/* Desktop */}
        {lugar && (
          <MuestraLugar
            titulo={lugar.nombre}
            imagenes={lugar.imagenes.map((imagen) => imagen.url)}
            className="hidden md:block ml-6 mr-0"
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
      <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center md:pb-[150px] md:mb-[120px] max-h-screen ">
        <div className="bg-white p-5 rounded-lg shadow-lg">
          <div>
            <h1 className="text-2xl font-bold">{lugar?.nombre}</h1>
            <p className="text-muted-foreground">{"En " + lugar?.barrio}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <p className="text-sm font-medium">Tipo</p>
              <p>{lugar?.tipo.join(", ")}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Dirección</p>
              {Array.isArray(lugar?.direccion) &&
                lugar.direccion.map((direccion, index) => (
                  <span key={index} className="">
                    {direccion.calle} {direccion.altura}
                  </span>
                ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              {lugar !== null &&
                lugar.localizacion !== "undefined" &&
                lugar.localizacion !== null &&
                lugar.localizacion.trim() !== "" && (
                  <div className="text-blue-500 hover:text-blue-700 mt-4 md:mt-2">
                    <p className="text-sm font-medium text-black">Ubicación</p>
                    <Link href={lugar.localizacion} className="">
                      Ver en el mapa
                    </Link>
                  </div>
                )}
            </div>
            <div>
              <div className="flex gap-2">
                {lugar?.redes && lugar.redes.length > 0 && (
                  <div className="flex flex-row items-center mt-5">
                    <h1 className="mr-3 font-bold">Redes sociales:</h1>
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
          </div>
        </div>
      </div>
    </div>
  );
}
