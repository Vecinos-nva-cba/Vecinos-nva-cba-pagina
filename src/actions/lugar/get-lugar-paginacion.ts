"use server";

import prisma from '@/lib/prisma'

interface opcionPaginacion {
  pagina?: number;
  take?: number;
}

export const getLugarPaginacion = async ({
  pagina = 1,
  take = 12,
}: opcionPaginacion) => {
  if (isNaN(Number(pagina))) pagina = 1; // si la pagina no es un numero, entonces ponele 1
  if (pagina < 1) pagina = 1;
  try {
    
    const lugar = await prisma.lugar.findMany({
        take: take,
        skip: ( pagina - 1) * take,
        select:{
          id: true,
          nombre: true,
          barrio: true,
          tipo: true,
          imagenes: true,
          redes: true,
          localizacion: true,
          direccion: { select: { calle: true, altura: true } },
        }
        
    })
    // console.log('-------------------')
    // console.log(grupos.length)
    // Obtener el total de grupos
    const totalLugares = await prisma.lugar.count();
    // console.log(totalGrupos)

    return {
        lugares: lugar,
        currentPage: pagina,
        totalPaginas: Math.ceil(totalLugares / take),
      };


  } catch (error) {
    throw new Error('No se pudo mostrar los lugares')
  }
};
