import Image from "next/image";
import Link from "next/link";
import { IoLogoInstagram, IoLogoTwitch } from "react-icons/io5";

export default function NosotrosPage() {
  return (
    <div className="flex flex-col md:h-[700px] md:min-h-screen md:flex-row justify-center items-center ">
      <div className="p-5 md:p-10 m-3 md:m-10 flex-shrink-0 flex justify-center items-center animate__animated animate__fadeInUp">
        <Image
          src={"/logo-vncba.png"}
          alt="Foto"
          width={400}
          height={200}
          className="rounded-lg"
        />
      </div>
      <div className="p-5 md:pr-5 m-auto animate__animated animate__zoomIn">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Sobre nosotros
          </h1>
          <p className="text-lg md:text-xl">
            Somos vecinos de Nueva Córdoba que buscan crear un espacio donde
            todos los residentes puedan interactuar, compartir información
            relevante y formar lazos de amistad en nuestro querido barrio.
          </p>

          <h2 className="text-2xl mt-4 font-bold">¿Qué buscamos?</h2>
          <p className="text-lg">
            Queremos brindar soluciones a la comunidad, como conocer nuevas
            personas para hacer planes, conectar intereses diversos, debatir
            sobre distintos temas y ayudarnos mutuamente.
          </p>

          <h2 className="text-xl mt-4 font-bold">
            - Necesitas conocer gente nueva?
          </h2>
          <p className="text-lg">
            En la sección de grupos, encontrarás diferentes grupos de WhatsApp a
            los cuales puedes unirte según tus intereses.
          </p>

          <h2 className="text-xl mt-4 font-bold">
            - Necesitas un profesional para solucionar un problema?
          </h2>
          <p className="text-lg">
            En la sección de profesionales, encontrarás distintos profesionales
            con su información de contacto para que puedas resolver cualquier
            inconveniente que tengas.
          </p>

          <h2 className="text-xl mt-4 font-bold">
            - Quieres ofrecer tus servicios?
          </h2>
          <p className="text-lg">
            Regístrate con todos tus datos y aparecerás en la sección de
            profesionales para que alguien pueda contactarte.
          </p>

          <h2 className="text-xl mt-4 font-bold">
            - Quieres conocer nuevos lugares?
          </h2>
          <p className="text-lg">
            En la sección de lugares, encontrarás distintos sitios que puedes
            visitar y conocer.
          </p>

          <h2 className="text-xl mt-4 font-bold">
            - Quieres promocionar tu local?
          </h2>
          <p className="text-lg">
            Registra tu local con todos sus datos y aparecerá en la sección de
            lugares para que la gente lo encuentre fácilmente.
          </p>
        </div>

        <div className="flex flex-row items-center mt-5">
          <h1 className="mr-3">Nuestras redes:</h1>
          <Link href={"/"} className="mr-3">
            <IoLogoInstagram className="text-3xl md:text-4xl text-pink-500 hover:text-pink-700 cursor-pointer" />
          </Link>
          <Link href={"/"}>
            <IoLogoTwitch className="text-3xl md:text-4xl text-purple-500 hover:text-purple-700 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
}
