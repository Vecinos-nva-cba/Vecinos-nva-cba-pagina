
import { getProfesionalConNombre } from "@/actions/profesional/get-profesional-con-nombre";
import { MuestraLugar, MuestraLugarMobile } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitch,
  IoLogoWebComponent,
} from "react-icons/io5";

interface Props {
  params: {
    nombreApellido: string;
  };
}

export default async function ProfesionalPage({ params }: Props) {
  const { nombreApellido } = params;
  const nombreApellidoAscento = decodeURIComponent(nombreApellido);
  const profesional = await getProfesionalConNombre(nombreApellidoAscento);

  if (!profesional) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-[800px] md:flex-row justify-center md:justify-normal md:ml-10 md:pl-12 items-start md:items-center">
      <div className="flex justify-start md:p-10  m-5 md:m-10 md:ml-10">
        {profesional.imagen.length === 1 ? (
          <Image
            src={profesional.imagen[0].url}
            alt="Foto"
            width={600}
            height={500}
            className="rounded-lg"
          />
        ) : (
          <div className="col-span-1 md:col-span-2">
            {/* Desktop */}
            <MuestraLugar
              titulo={profesional.nombre}
              imagenes={profesional.imagen.map((imagen: any) => imagen.url)}
              className="hidden md:block "
            />

            {/* Mobile */}
            <MuestraLugarMobile
              titulo={profesional.nombre}
              imagenes={profesional.imagen.map((imagen: any) => imagen.url)}
              className="block md:hidden"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col items-start justify-center md:justify-start mx-auto md:mx-0 ml-5 px-2 pb-4 md:pr-5 md:mt-10 mr-5">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          {profesional.nombre} {profesional.apellido}
        </h1>
        <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-0">
          Trabajo que realizo:
        </h2>
        <div className="flex justify-start md:my-3">
          {profesional.trabajo.map((trabajo) => (
            <span
              key={trabajo}
              className="bg-gray-500 mx-1 text-white py-1 px-2 rounded-md text-sm"
            >
              {trabajo}
            </span>
          ))}
        </div>
        <div className="flex mt-5">
          <h1 className="font-bold">Mi telefono es:</h1>
          <span className="ml-2"> {profesional.numero}</span>
        </div>
        {profesional.redesSociales.length > 0 && (
          <div className="flex flex-row items-center mt-5">
            <h1 className="mr-3 font-bold">Mis redes:</h1>
            {profesional.redesSociales.map((red) => (
              <Link href={red.url} key={red.url} passHref>
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
