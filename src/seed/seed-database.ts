import prisma from "../lib/prisma";
import { initialDataLugares } from "./seed-lugares";
import { initialDataProfesionales } from "./seed-profesionales";
import { initialDataGRupos } from "./seed-grupos";

async function main() {
  await prisma.red.deleteMany();
  await prisma.direccion.deleteMany();
  await prisma.lugar.deleteMany();
  await prisma.profesional.deleteMany();
  await prisma.grupo.deleteMany();

  const lugares = initialDataLugares.lugares;
  const profesionales = initialDataProfesionales.profesionales;
  const grupos = initialDataGRupos.grupos;

  await prisma.grupo.createMany({
    data: grupos,
  });

  await prisma.profesional.createMany({
    data: profesionales.map((profesional) => ({
      nombre: profesional.nombre,
      apellido: profesional.apellido,
      trabajo: { set: profesional.trabajo },
      numero: profesional.numero,
      imagen: profesional.imagen,
    })),
  });
  
  // Obtener los profesionales creados
  const profesionalesCreados = await prisma.profesional.findMany();
  
  // Iterar sobre los profesionales y agregar las relaciones de redes
  for (let i = 0; i < profesionalesCreados.length; i++) {
    const profesional = profesionalesCreados[i];
    const redesProfesional = initialDataProfesionales.profesionales[i].redes || [];
  
    await prisma.profesional.update({
      where: { id: profesional.id },
      data: {
        redes: {
          create: redesProfesional.map((red) => ({
            tipo: red.tipo,
            url: red.red,
          })),
        },
      },
    });
  }
  

  await Promise.all(
    lugares.map(async (seedLugar) => {
      const lugar = await prisma.lugar.create({
        data: {
          nombre: seedLugar.nombre,
          zona: seedLugar.zona,
          tipo: seedLugar.tipo,
          imagenes: seedLugar.imagenes,
          localizacion: seedLugar.localizacion,
          redes: {
            create: seedLugar.redes?.map((red) => ({
              tipo: red.tipo,
              url: red.red,
            })) || [],
          },
        },
      });
  
      const direcciones = await Promise.all(
        seedLugar.direcciones.map(async (seedDireccion) => {
          return prisma.direccion.create({
            data: {
              calle: seedDireccion.calle,
              altura: seedDireccion.altura,
              lugarId: lugar.id,
            },
          });
        })
      );
    })
  );

  console.log("Seed ejecutado correctamente");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
