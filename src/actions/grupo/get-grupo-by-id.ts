'use server'


import prisma from '@/lib/prisma'

export const getGrupoById = async (id: string) => {
    try {
        
    } catch (error) {
        console.log(error)
        throw new Error('No se pudo obtener grupo')
    }
}
