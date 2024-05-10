import { Profesional } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";


interface Props {
    profesional: Profesional;
}

export const ProfesionalCard = ({ profesional }: Props) => {
    const { nombre, apellido, trabajo, imagen, redes } = profesional;

    return (
        <div>
            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <Image
                        src={'/wpp.jpg'}
                        alt={`${nombre} ${apellido}`}
                        layout="fill"
                    />
                </div>
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {nombre} {apellido}
                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        Trabajo: {trabajo.join(', ')}
                    </p>
                    {redes && (
                        <div className="flex flex-wrap mt-2">
                            {redes.map((red, index) => (
                                <a
                                    key={index}
                                    href={red.url}
                                    className="mr-2 mb-2 select-none rounded-lg bg-gray-500 py-1 px-2 text-white text-xs font-semibold uppercase shadow-md shadow-blue-gray-500/20 transition-all hover:shadow-lg hover:shadow-blue-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {red.tipo}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
                <div className="p-6 pt-0">
                    <Link
                        className="select-none rounded-lg bg-sky-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                        href={`/profesional/${nombre}-${apellido}`} // Enlace al primer enlace de redes sociales, o "#" si no hay
                    >
                        Mas infromacion
                    </Link>
                </div>
            </div>
        </div>
    );
};
