import { Lugar } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

interface Props {
  lugar: Lugar;
}

export const LugarCard2 = ({ lugar }: Props) => {
  const { nombre, barrio, direccion, tipo, imagenes, redes } = lugar;

  return (
    <div className="w-60 h-80 relative shadow-md rounded-md hover:shadow-lg">
      <div className="absolute top-20 w-full rounded-md">
        <Image src={imagenes[0].url as string} alt={nombre} height={1000} width={1000} />
      </div>
      <div className="absolute bottom-0 w-full h-9 bg-black bg-opacity-50 rounded-t-md text-white shadow-md transition-height duration-500 ease-in-out p-2 overflow-hidden hover:h-40">
        <label className="font-bold">{nombre}</label>
        <p className="block font-sans text-base font-semibold leading-relaxed text-inherit antialiased">
            Barrio: <span className="font-light">{barrio}</span>
          </p>
          <p className="block font-sans text-base font-semibold  leading-relaxed text-inherit antialiased">
            Dirección:{" "}
            <span className="font-light">
              {" "}
              {direccion
                .map((direccion) => `${direccion.calle} ${direccion.altura}`)
                .join(", ")}
            </span>
          </p>
          {tipo && (
          <div className="flex justify-start m-2 pl-1">
            {tipo.map((tipo) => (
              <span
                key={tipo}
                className="bg-black text-white py-1 px-2 mx-1 rounded-md text-sm"
              >
                {tipo}
              </span>
            ))}
          </div>
        )}
        <div className="p-6 pt-0  flex justify-center">
          <Link
            className="select-none rounded-lg bg-sky-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
            href={`/lugar/${lugar.id}`}
          >
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};
