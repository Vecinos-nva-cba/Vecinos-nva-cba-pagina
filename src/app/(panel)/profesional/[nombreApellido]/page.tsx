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
  IoLogoTwitter,
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
    <div className="flex flex-col min-h-[800px] md:flex-row justify-start md:justify-center md:ml-10 md:pl-12 items-center">
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
      <div className="grid gap-4 mx-8 bg-white p-16 rounded-lg shadow-lg items-center justify-center">
        <div className="grid gap-1">
          <h1 className="text-3xl font-bold">
            {profesional.nombre} {profesional.apellido}
          </h1>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <PhoneIcon className="w-5 h-5 text-muted-foreground" />
            <span>{profesional.numero}</span>
          </div>
          <div className="flex items-center gap-2">
            <BriefcaseIcon className="w-5 h-5 text-muted-foreground" />
            <span>{profesional.trabajo.join(", ")}</span>
          </div>
          {profesional.redesSociales.length > 0 && (
            <div>
              <h1 className=" mb-1">Mis redes sociales:</h1>
              <div className="flex flex-row">
                {profesional.redesSociales.map((red) => (
                  <Link href={red.url} key={red.url} passHref>
                    {red.tipo === "Instagram" && (
                      <IoLogoInstagram className="text-3xl md:text-4xl text-pink-500 hover:text-pink-700 cursor-pointer mr-2" />
                    )}
                    {red.tipo === "Twitter" && (
                      <IoLogoTwitter className="text-3xl md:text-4xl text-celeste-500 hover:text-celeste-700 cursor-pointer mr-2" />
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function BriefcaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}
function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
