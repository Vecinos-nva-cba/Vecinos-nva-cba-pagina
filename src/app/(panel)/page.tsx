import Image from "next/image";
import "animate.css";
import { fontTitulo } from "@/config/fonts";
import { GrupoCard, LugarCard } from "@/components";
import { Card } from "@/components/dashboard/Card";

import { SwipperCard } from "@/components/dashboard/SwipperCard";
import { Grupo, Lugar } from "@/interfaces";
import AnimatedOnScroll from "@/components/ui/AnimateScroll";
import { getGrupoById } from "@/actions/grupo/get-grupo-by-id";
import { getLugarById } from "@/actions/lugar/get-lugar-by-id";

export default async function PanelPage() {
  const grupoIds = [
    // "5432569e-4d2d-481a-8ccf-4df8bf41a61a",
    // "1bcdb26a-f27d-42a1-a914-b9ec29014ff9",
    // "a85d87d7-2045-4f0a-9efd-bb7f52f04dd1",
    "e21d8b6e-1f75-4f90-90d5-12a13d1f5678"
  ];
  const grupoData = await getGrupoById(grupoIds);

  const lugares: Lugar[] | null = [];
  const getLugarOrDefault = async (id: string) => {
    const lugar = await getLugarById(id);
    return (
      lugar ?? {
        id: "",
        nombre: "",
        barrio: "",
        tipo: [],
        localizacion: null,
        imagenes: [],
        redes: [],
        direccion: [],
      }
    );
  };

  const lugarId1 = await getLugarOrDefault(
    "c3d8b7a1-5e12-4f90-90d5-12a13d1f5680"
  );
  // const lugarId1 = await getLugarOrDefault(
  //   "3b36d79f-e857-469a-a86b-4b1cabfe640b"
  // );
  // const lugarId2 = await getLugarOrDefault(
  //   "d2e78118-c5ee-4985-acba-9b2f2d6ec6a2"
  // );
  // const lugarId3 = await getLugarOrDefault(
  //   "e7f58c01-00b6-4e02-b2b9-3d40e2814acf"
  // );
  lugares.push(lugarId1);
  // lugares.push(lugarId2);
  // lugares.push(lugarId3);
  // console.log(grupo1);

  return (
    <div className="  ">
      <section className="md:min-h-full">
        <div className="relative w-full min-h-80 h-[70vh] md:h-[50vh] lg:h-[90vh]">
          <div className="absolute inset-0 bg-black opacity-100"></div>
          {/* Fondo oscuro semi-transparente */}
          <Image
            src={`/1.jpg`}
            alt="Foto portada"
            width={1200} // add this
            height={800} // add this
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100vh",
            }}
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

      <section className="flex flex-wrap relative w-full justify-center">
        <div className="flex w-full">
          <h1
            className={`flex justify-center items-center bg-sky-500 w-full relative py-3 md:py-5 text-xl lg:text-4xl ${fontTitulo.className}`}
          >
            Grupos mas destacados
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-10  my-10 items-center justify-center mg:flex-rows-2 lg:flex-rows-3">
          {grupoData?.grupos.map((grupo) => {
            return (
              <AnimatedOnScroll
                key={grupo.url}
                animationClass="animate__fadeInRight"
              >
                <div>
                  <Card
                    titulo={grupo.nombre}
                    descripcion={grupo.descripcion}
                    url={grupo.url}
                    img={grupo.imagen ?? ""}
                  />
                </div>
              </AnimatedOnScroll>
            );
          })}
        </div>
      </section>

      <section className=" bg-gray-600 py-16 md:py-20 flex flex-col  justify-start pl-10 pr-10 w-full">
        <h2 className="flex  text-xl md:text-3xl text-sky-500 font-bold mb-2">
          Profesionales
        </h2>
        <p className="text-sm md:text-xl  text-white">
          Ofrecemos un catálogo completo de profesionales de diversas
          especializaciones, para que ya no tengas que buscar por todos lados.
          Nuestra plataforma te permite encontrar el profesional adecuado para
          tus necesidades urgentes de manera rápida y eficiente. Simplemente
          busca por la especialidad que necesitas y encontrarás información
          detallada, incluyendo números de teléfono y enlaces a redes sociales.
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

        <div className="flex flex-col md:flex-row gap-10 my-10 items-center justify-center mg:flex-rows-2 lg:flex-rows-3">
          {lugares.map((lugar) => (
            <AnimatedOnScroll
              key={lugar.id}
              animationClass="animate__fadeInRight"
            >
              <LugarCard key={lugar.id} lugar={lugar} />
            </AnimatedOnScroll>
          ))}
        </div>
      </section>
    </div>
  );
}
