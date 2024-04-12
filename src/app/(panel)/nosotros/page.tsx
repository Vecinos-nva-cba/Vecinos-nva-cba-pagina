import Image from "next/image";
import Link from "next/link";
import { IoLogoInstagram, IoLogoTwitch } from "react-icons/io5";

export default function NosotrosPage() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
      <div className="p-5 md:p-10 m-5 md:m-10 flex-shrink-0">
        <Image
          src={"/logo-vncba.png"}
          alt="Foto"
          width={400}
          height={200}
          className="rounded-lg"
        />
      </div>
      <div className="p-5 md:pr-5 m-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Sobre nosotros</h1>
        <p className="text-lg md:text-xl">
          Somos vecinos de Nueva Córdoba que busca crear un espacio donde todos
          los vecinos puedan interactuar, compartir información relevante y
          generar lazos de amistad en nuestro querido barrio.
        </p>

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
