'use server'

import prisma  from "@/lib/prisma"

export const crearProfessionalOptimizado = async (trabajo:any) => {
    try {
        const response = await prisma.profesional.create({data: {...trabajo}})
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}