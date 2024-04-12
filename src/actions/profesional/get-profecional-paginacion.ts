"use server";

import prisma from '@/lib/prisma'

interface opcionPaginacion {
  pagina?: number;
  take?: number;
}

export const getProfesionalPaginacion = async ({
  pagina = 1,
  take = 12,
}: opcionPaginacion) => {
  if (isNaN(Number(pagina))) pagina = 1; // si la pagina no es un numero, entonces ponele 1
  if (pagina < 1) pagina = 1;
  try {
    
    const profesional = await prisma.profesional.findMany({
        take: take,
        skip: ( pagina - 1) * take,
        
    })
    // console.log('-------------------')
    // console.log(grupos.length)
    // Obtener el total de grupos
    const totalProfesionales = await prisma.profesional.count();
    // console.log(totalGrupos)

    return {
        profesionales: profesional,
        currentPage: pagina,
        totalPaginas: Math.ceil(totalProfesionales / take),
      };


  } catch (error) {
    throw new Error('No se pudo mostrar los profesionales')
  }
};
