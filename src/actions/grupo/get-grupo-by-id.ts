'use server'

import prisma from '@/lib/prisma'

export const getGrupoById = async (ids: string[]) => {
  try {
    const grupos = await prisma.grupo.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    })

    if (!grupos) return null

    return { grupos }
  } catch (error) {
    console.log(error)
    throw new Error('No se pudo obtener grupos')
  }
}

