'use server'

import prisma from '@/lib/prisma'


export const getLugarById = async (id:string) => {
  try {

    const lugar = await prisma.lugar.findFirst({
        where:{
            id:id
        },
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

    if(!lugar) return null

    return lugar

    
  } catch (error) {
    console.log(error)
    throw new Error('No se pudo obtener un lugar por el nombre')
  }
}

 