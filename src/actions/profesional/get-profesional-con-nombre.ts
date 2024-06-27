"use server";

import prisma from "@/lib/prisma";

export const getProfesionalConNombre = async (nombreApellido: string) => {
  const [nombre, apellido] = nombreApellido.split("-");

  try {
    const profesional = await prisma.profesional.findFirst({
      where: {
        nombre: nombre,
        apellido: apellido,
      },
      select: {
        id: true,
        nombre: true,
        apellido: true,
        numero: true,
        trabajo: true,
        imagen: true,
        redesSociales: true,
      },
    });

    if (!profesional) return null;

    return profesional;
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo obtener el profesional con el nombre");
  }
};
