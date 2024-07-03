'use client'
import { Lugar } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

interface Props {
  lugar: Lugar;
}

export const LugarCard3 = ({ lugar }: Props) => {
  const { nombre, barrio, direccion, tipo, imagenes, redes } = lugar;

  return (
    <div className="relative w-80 h-96 shadow-md rounded-md transition-transform duration-400 hover:shadow-lg hover:translate-y-1">
      <div className="absolute inset-0">
        <Image
          src={imagenes[0].url as string}
          alt={nombre}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-50 bg-black bg-opacity-60 rounded-md text-white opacity-0 transform translate-y-full transition-opacity duration-500 transition-transform duration-500 hover:opacity-100 hover:translate-y-0">
        <div className="p-4">
          <label className="block text-lg font-bold">{nombre}</label>
          <p className="text-base font-semibold leading-relaxed">
            Barrio: <span className="font-light">{barrio}</span>
          </p>
          <p className="text-base font-semibold leading-relaxed">
            Dirección:{" "}
            <span className="font-light">
              {direccion
                .map((dir) => `${dir.calle} ${dir.altura}`)
                .join(", ")}
            </span>
          </p>
          {tipo && (
            <div className="flex flex-wrap mt-2">
              {tipo.map((tipo) => (
                <span
                  key={tipo}
                  className="bg-gray-400 bg-opacity-75 text-white py-1 px-2 m-1 rounded-md text-sm"
                >
                  {tipo}
                </span>
              ))}
            </div>
          )}
          <div className="mt-2 flex justify-center">
            <Link
              className="select-none rounded-lg bg-sky-500 py-1 px-2 text-center font-bold  text-white shadow-md transition-all hover:bg-sky-600"
              href={`/lugar/${lugar.id}`}
            >
              Ver más
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .relative:hover .absolute.bottom-0 {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};
