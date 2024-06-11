import Image from "next/image";
import "animate.css";
import { fontTitulo } from "@/config/fonts";
import { GrupoCard } from "@/components";
import { Card } from "@/components/dashboard/Card";
import { getGrupoPaginacion } from "@/actions";
import { getGrupoById } from "@/actions/grupo/get-grupo-by-id";
import { SwipperCard } from "@/components/dashboard/SwipperCard";

export default async function PanelPage() {
  const grupo1 = await getGrupoById("105067ea-0252-44f7-9ae3-c7941a596864");
  console.log(grupo1);
  const cards = [
    {
      titulo: "Trabajo",
      descripcion: "Grupo para compartir empleos de trabajo",
      url: "/grupo/123",
      img: "/wpp.jpg",
    },
    {
      titulo: "Venta",
      descripcion: "Espacio para compartir consejos y estrategias de ventas.",
      url: "/grupo/123",
      img: "/wpp.jpg",
    },
    {
      titulo: "Estudio",
      descripcion:
        "Grupo destinado a compartir recursos de estudio y aprendizaje.",
      url: "/grupo/123",
      img: "/wpp.jpg",
    },
    // Agrega más tarjetas si es necesario
  ];
  return (
    <div className="container mx-auto ">
      <section className="md:min-h-full">
        <div className="relative w-full min-h-80 h-[70vh] md:h-[50vh] lg:h-[90vh]">
          <div className="absolute inset-0 bg-black opacity-100"></div>
          {/* Fondo oscuro semi-transparente */}
          <Image
            src={`/1.jpg`}
            alt="Foto portada"
            layout="fill"
            objectFit="cover"
            className="object-cover object-center opacity-60"
          />
          <div
            className={`absolute inset-0 flex flex-col justify-center items-center px-5 text-center mg:pb-20 animate__animated animate__fadeInDown`}
          >
            <h1 className="text-xl md:text-4xl lg:text-5xl text-sky-500 font-bold">
              Por una vecindad unida
            </h1>
            <p className="text-xs md:text-lg lg:text-xl font-bold text-white">
              En búsqueda de poder ayudarnos a través de la comunicación entre
              todos los vecinos de Nueva Córdoba
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap w-full justify-center">
        <div className="flex w-full">
          <h1
            className={`flex justify-center items-center bg-sky-500 w-full relative py-3 md:py-5 text-xl lg:text-4xl ${fontTitulo.className}`}
          >
            Grupos mas destacados
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-10  my-10 items-center justify-center mg:flex-rows-2 lg:flex-rows-3">
          {cards.map((grupo) => {
            return (
              <div key={grupo.titulo}>

                <Card
                  titulo={grupo.titulo}
                  descripcion={grupo.descripcion}
                  url={grupo.url}
                  img={grupo.img}
                />
              </div>
            );
          })}
          
        </div>
      </section>

      <section className=" bg-gray-600 py-16 md:py-20 flex flex-col  justify-start pl-10 pr-10 w-full">
        <h2 className="flex  text-xl lg:text-2xl text-sky-500 font-bold mb-2">
          Profesionales
        </h2>
        <p className="text-sm  lg:text-base text-white">
          Es un hecho establecido hace demasiado tiempo que un lector se
          distraerá con el contenido del texto de un sitio mientras que mira su
          diseño. El punto de usar Lorem Ipsum es que tiene una distribución más
          o menos normal de las letras, al contrario de usar textos como por
          ejemplo Contenido aquí, contenido aquí. Estos textos hacen
        </p>
      </section>

      <section>
        <div className="flex w-full ">
          <h1
            className={`flex justify-center items-center bg-sky-500 w-full relative py-3 md:py-5 text-xl lg:text-4xl ${fontTitulo.className}`}
          >
            Lugares sorpendentes
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-10  my-10 items-center justify-center mg:flex-rows-2 lg:flex-rows-3">
          <Card
            titulo="Compra"
            descripcion="Grupo dedicado a la colaboración en compras comunitarias."
            url="/grupo/123"
            img="/8.jpg"
          />
          <Card
            titulo="Venta"
            descripcion="Espacio para compartir consejos y estrategias de ventas."
            url="/grupo/123"
            img="/7.jpg"
          />
          <Card
            titulo="Estudio"
            descripcion="Grupo destinado a compartir recursos de estudio y aprendizaje."
            url="/grupo/123"
            img="/6.jpg"
          />
        </div>
      </section>
    </div>
  );
}
