import Image from "next/image";
import Link from "next/link";
interface Props {
    titulo: string
    descripcion: string
    url: string
    tipo?: string
    img: string
}

export const GrupoCard = ({titulo, descripcion, url ,tipo ,img}:Props) => {
  return (
    <div>
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
        <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 ">
          <Image
            src={img}
            alt="imagen whatsapp"
            layout="fill"
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {titulo}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {descripcion}
          </p>
        </div>
        {tipo && (
        <div className="flex justify-start m-4 pl-2">
          
          <span className="bg-gray-500 text-white py-1 px-2 rounded-md text-sm">{tipo}</span>
          {/* Agregar más casos según los tipos de grupo que tengas */}
        </div>
      )}
        <div className="p-6 pt-0">
          <Link
            className="select-none rounded-lg bg-sky-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
