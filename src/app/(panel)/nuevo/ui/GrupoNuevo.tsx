"use client";
import { crearGrupo } from "@/actions";
import { useRouter, redirect } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

interface inputFormulario {
  nombre: string;
  tipo: string;
  url: string;
  descripcion: string;
  imagen: FileList;
}

const GrupoNuevo = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { isValid },
    getValues,
    setValue,
    reset,
    watch, //Le dice cuando se tiene que volver a renderizar en caso de que haya alñgun cambio en el formulario
  } = useForm<inputFormulario>({
    defaultValues: {
      imagen: undefined,
    },
  });

  const onSubmit = async (data: inputFormulario) => {
    console.log("Datos del formulario:", data); // Agregar esta línea
    const formData = new FormData();

    const { ...grupoAGuardar } = data;
    formData.append("nombre", grupoAGuardar.nombre);
    formData.append("tipo", grupoAGuardar.tipo);
    formData.append("url", grupoAGuardar.url);
    formData.append("descripcion", grupoAGuardar.descripcion);
    if (data.imagen.length > 0) {
      formData.append("imagen", data.imagen[0]);
    }

    const { ok, grupo: grupoCreado } = await crearGrupo(formData);

    if (!ok) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo crear el grupo",
      });
      return;
    }

    // Resetea el formulario
    reset();

    // Muestra una alerta de éxito
    Swal.fire({
      icon: "success",
      title: "Éxito",
      text: "Grupo creado con éxito",
    });
  };

  return (
    <div className="min-h-screen  px-6 ">
      <div className="mx-auto max-w-md px-6 py-10 bg-white border-0 shadow-lg rounded-3xl">
        <h1 className="text-2xl font-bold mb-8">Nuevo grupo</h1>
        <form id="form" noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              placeholder="Nombre"
              {...register("nombre", { required: true })}
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label
              htmlFor="nombre"
              className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
            ></label>
            <span className="text-sm text-red-600 hidden" id="error">
              El nombre es obligatorio
            </span>
          </div>

          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              placeholder="Tipo"
              {...register("tipo", { required: true })}
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label
              htmlFor="tipo"
              className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
            ></label>
            <span className="text-sm text-red-600 hidden" id="error">
              El tipo es obligatorio
            </span>
          </div>

          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              placeholder="Enlace"
              {...register("url", { required: true })}
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label
              htmlFor="link"
              className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
            ></label>
            <span className="text-sm text-red-600 hidden" id="error">
              La url es obligatoria
            </span>
          </div>

          <div className="relative z-0 w-full mb-5">
            <textarea
              placeholder="Descripcion"
              {...register("descripcion", { required: true })}
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label
              htmlFor="descripcion"
              className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
            ></label>
            <span className="text-sm text-red-600 hidden" id="error">
              La descripción es obligatoria
            </span>
          </div>

          <div className="relative z-0 w-full">
            <label
              htmlFor="imagen"
              className="absolute top-0 left-0 duration-300 text-gray-500 font-bold"
            >
              Imagen del grupo
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("imagen")}
              className="pt-8 pb-2 block w-full px-0 mt-6 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <span className="text-sm text-red-600 hidden" id="error">
              La imagen es obligatoria
            </span>
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-sky-500 hover:bg-sky-600 hover:shadow-lg focus:outline-none"
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default GrupoNuevo;
