"use server";

import prisma from '@/lib/prisma'

interface opcionPaginacion {
  pagina?: number;
  take?: number;
}

export const getGrupoPaginacion = async ({
  pagina = 1,
  take = 12,
}: opcionPaginacion) => {
  if (isNaN(Number(pagina))) pagina = 1; // si la pagina no es un numero, entonces ponele 1
  if (pagina < 1) pagina = 1;
  try {
    
    const grupos = await prisma.grupo.findMany({
        take: take,
        skip: ( pagina - 1) * take,
        
    })
    // console.log('-------------------')
    // console.log(grupos.length)
    // Obtener el total de grupos
    const totalGrupos = await prisma.grupo.count();
    // console.log(totalGrupos)

    return {
        grupos: grupos,
        currentPage: pagina,
        totalPaginas: Math.ceil(totalGrupos / take),
      };


  } catch (error) {
    throw new Error('No se pudo mostrar los grupos')
  }
};
