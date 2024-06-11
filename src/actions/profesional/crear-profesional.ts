"use server";

import { z } from "zod";
import prisma from "@/lib/prisma";
import { v2 as cloudinary } from "cloudinary";
import { Profesional } from "@prisma/client";
import { url } from "inspector";
cloudinary.config(process.env.CLOUDINARY_URL ?? "");

const RedesEnum = z.enum([
  "Instagram",
  "Facebook",
  "Twitter",
  "Linkedin",
  "Web",
]);

const RedesSchema = z.object({
  url: z.string().url(),
  tipo: RedesEnum,
});

const ProfesionalSchema = z.object({
  id: z.string().uuid().optional().nullable(),
  nombre: z.string().min(3).max(255),
  apellido: z.string().min(3).max(255),
  trabajo: z.array(z.string()).min(1),
  numero: z.string().min(8).max(15),
  redes: z.array(RedesSchema).optional(),
});

export const crearProfesional = async (formData: FormData) => {
  // console.log("Datos del formulario en el backend:");
  //   for (let [key, value] of formData.entries()) {
  //     console.log(`${key}: ${value}`);
  //   }
  try {
    const trabajos = formData.getAll("trabajo").map((t) => t as string);
    const redes = [];

    for (const [key, value] of Object.entries(formData)) {
      {
        const tipo = key.replace("redes[", "").replace("]", "");
        redes.push({ url: value, tipo });
      }
    }

    const profesionalData = {
      nombre: formData.get("nombre") as string,
      apellido: formData.get("apellido") as string,
      numero: formData.get("numero") as string,
      trabajo: trabajos,
      redes,
    };

    const profesionalValido = ProfesionalSchema.safeParse(profesionalData);
    console.log("Profesional valido", profesionalValido);

    if (!profesionalValido.success) {
      return {
        ok: false,
        mensaje: profesionalValido.error.message,
      };
    }

    const { id, ...restInfo } = profesionalValido.data;
    console.log("Datos del profesional a crear:", restInfo);

    const transaccionPrisma = await prisma.$transaction(async (transaccion) => {
      let profesional = await prisma.profesional.create({
        data: restInfo,
      });

      const imagen = formData.get("imagen") as File;
      if (imagen) {
        const urlImagen = await cargarImagen(imagen);

        if (!urlImagen) {
          throw new Error("No se pudo cargar la imagen del profesional");
        }

        profesional = await prisma.profesional.update({
          where: { id: profesional.id },
          data: { imagen: urlImagen },
        });
      }

      return { profesional };
    });

    return {
      ok: true,
      profesional: transaccionPrisma.profesional,
    };
  } catch (error) {
    return {
      ok: false,
      mensaje: "No se pudo crear el profesional",
    };
  }
};

const cargarImagen = async (imagen: File) => {
  try {
    const buffer = await imagen.arrayBuffer();
    const base64Imagen = Buffer.from(buffer).toString("base64"); // Crear un string base64

    const respuesta = await cloudinary.uploader.upload(
      `data:image/png;base64,${base64Imagen}`,
      {
        folder: "profesionales", // Opcional: especificar una carpeta en Cloudinary
      }
    );

    return respuesta.secure_url;
  } catch (error) {
    console.log(error);
    return null;
  }
};
