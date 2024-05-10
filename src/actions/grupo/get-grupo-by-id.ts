'use server'


import prisma from '@/lib/prisma'

export const getGrupoById = async (id: string) => {
    try {
        
        const grupo = await prisma.grupo.findFirst( {
            where: {
                id: id
            }
        })

        if (!grupo) return null

        return {grupo}
    } catch (error) {
        console.log(error)
        throw new Error('No se pudo obtener grupo')
    }
}
