// 'use server'

// import {z} from 'zod'
// import prisma from '@/lib/prisma'
// import { Grupo } from '@prisma/client'
// import {v2 as cloudinary} from 'cloudinary';
// cloudinary.config(process.env.CLOUDINARY_URL ?? '')


// const GrupoSchema = z.object({
//     id: z.string().uuid().optional().nullable(),
//     nombre: z.string().min(3).max(255),
//     descripcion: z.string(),
//     tipo: z.string().min(3).max(80),
//     url: z.string().min(3).max(500),
// })

// console.log('Importing crear-grupo module...')
// export const crearGrupoAction = async (formData: FormData) => {
//     try {
//         const data = Object.fromEntries(formData.entries());
//         console.log("Datos del formulario:", data);

//         const grupoValidado = GrupoSchema.safeParse(data);
//         if (!grupoValidado.success) {
//             console.error("Errores de validación:", grupoValidado.error);
//             return { ok: false };
//         }

//         const grupo = grupoValidado.data;
        
//         const { id, ...restInfo } = grupo;
        

//         const transsaccionPrisma = await prisma.$transaction(async (transaccion) => {
//             let grupo: Grupo;
//             grupo = await prisma.grupo.create({
//                 data: {
//                     ...restInfo,
//                 },
//             });

//             const imagen = formData.get("imagen") as File;
//             if (imagen) {
//                 const urlImagen = await cargarImagen(imagen);

//                 if (!urlImagen) {
//                     throw new Error("No se pudo cargar la imagen del grupo");
//                 }

//                 grupo = await prisma.grupo.update({
//                     where: { id: grupo.id },
//                     data: { imagen: urlImagen },
//                 });
//             }

//             return { grupo };
//         });

//         console.log("Grupo creado:", transsaccionPrisma.grupo);

//         return {
//             ok: true,
//             grupo: transsaccionPrisma.grupo,
//         };
//     } catch (error) {
//         console.error("Error al crear el grupo:", error);
//         return {
//             ok: false,
//             mensaje: "No se pudo crear el grupo",
//         };
//     }
// };



// const cargarImagen = async (imagen: File) => {
//     try {
//         const buffer = await imagen.arrayBuffer()
//         const base64Imagen = Buffer.from(buffer).toString('base64') // Crear un string base64

//         const respuesta = await cloudinary.uploader.upload(`data:image/png;base64,${base64Imagen}`, {
//             folder: "grupos", // Opcional: especificar una carpeta en Cloudinary
//             transformation: {
//                 aspect_ratio: "4:3" ,
//                 crop: "fill"
//               }
//         })

//         return respuesta.secure_url
//     } catch (error) {
//         console.log(error)
//         return null
//     }
// }