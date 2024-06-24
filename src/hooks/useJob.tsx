'use client'

import { crearProfesional, crearProfessionalOptimizado } from "@/actions"
import { Profesional } from "@/interfaces"
import { useState } from "react"

export const useJob = () => {
    const [nuevoTrabajo, setNuevoTrabajo] = useState<Profesional>({
        nombre: "",
        apellido: "",
        trabajo: [],
        numero: "",
        imagen: ""
    })

    const onChangue  = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {target} = event
        const {value, name} = target

        setNuevoTrabajo((prev) => ({...prev, [name]:value}))
    }
    const onSubmit = ( event: React.FocusEvent) => {
        event.preventDefault()
        crearProfessionalOptimizado(nuevoTrabajo)
    }
    return {onChangue, onSubmit, nuevoTrabajo}


}