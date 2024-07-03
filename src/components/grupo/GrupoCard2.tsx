import Image from "next/image";
import Link from "next/link";

interface Props {
  titulo: string;
  descripcion: string;
  url: string;
  tipo?: string;
  img: string;
}

export const GrupoCard2 = ({ titulo, descripcion, url, tipo, img }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl shadow-gray-400 ">
        <div className="flex justify-center items-center">
          <div className="relative  mx-4 -mt-6 w-56 h-56 overflow-hidden rounded-full bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 shadow-gray-500">
            <Image src={img} alt="imagen whatsapp" layout="fill" />
          </div>
        </div>
        <div className="px-6 pt-6">
          <h5 className="block  text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {titulo}
          </h5>
        </div>
        <div className="px-6 pt-2 ">
          <p className="block  text-base font-light leading-relaxed text-inherit antialiased">
            {descripcion}
          </p>
        </div>
        {tipo && (
          <div className="flex justify-start m-4 pl-2">
            <span
              key={tipo}
              className="bg-gray-500 text-white py-1 px-2 mx-1 rounded-md text-sm"
            >
              {tipo}
            </span>
          </div>
        )}
        <div className="p-6 pt-0 flex items-center justify-center">
          <Link
            className="select-none rounded-lg bg-sky-500 py-3 px-6 text-center align-middle  text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
            href={url}
          >
            Unirme al grupo
          </Link>
        </div>
      </div>
    </div>
  );
};
