import { Profesional } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

interface Props {
  profesional: Profesional;
}

export const ProfesionalCard = ({ profesional }: Props) => {
  const { nombre, apellido, trabajo, imagen, redesSociales } = profesional;

  return (
    <div className="flex justify-center ">
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl shadow-gray-400">
        <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <Image
            src={imagen[0].url as string}
            alt={`${nombre} ${apellido}`}
            layout="fill"
          />
        </div>
        <div className="pt-6 pl-6">
          <h5 className=" block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {nombre} {apellido}
          </h5>
        </div>
        {trabajo && (
          <div className="flex justify-start m-4 pl-2">
            {trabajo.map((trabajo, index) => (
              <span
                key={index}
                className="bg-gray-500 text-white py-1 px-2 mx-1 rounded-md text-sm"
              >
                {trabajo}
              </span>
            ))}
          </div>
        )}
        <div className="p-6 pt-0 flex items-center justify-center">
          <Link
            className=" select-none rounded-lg bg-sky-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
            href={`/profesional/${nombre}-${apellido}`}
          >
            Más información
          </Link>
        </div>
      </div>
    </div>
  );
};
