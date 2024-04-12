'use server'

import prisma from '@/lib/prisma'


export const getLugarById = async (id:string) => {
  try {

    const lugar = await prisma.lugar.findFirst({
        where:{
            id:id
        },
        include:{
            redes: true, 
            direccion: true
        }
    })

    if(!lugar) return null

    return lugar

    
  } catch (error) {
    console.log(error)
    throw new Error('No se pudo obtener un lugar por el nombre')
  }
}

 