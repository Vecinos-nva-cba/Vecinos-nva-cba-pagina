"use client";
import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useRouter, redirect } from "next/navigation";

import Image from "next/image";
// import { useJob } from "@/hooks/useJob";
import clsx from "clsx";
import { crearProfesional } from "@/actions/profesional/crear-profesional";

const Redes = ["Instagram", "Facebook", "Twitter", "Linkedin", "Web"];
interface inputFormulario {
  nombre: string;
  apellido: string;
  trabajo: string[];
  numero: string;
  imagen: FileList;
  redes: { tipo: string; url: string }[];
}

export const ProfesionalNuevo = () => {
  // const { onChangue, onSubmit, nuevoTrabajo} = useJob()
  const [mensajeError, setMensajeError] = useState("");
  // Estado para almacenar las redes sociales seleccionadas
  const [redesSociales, setRedesSociales] = useState<
    { tipo: string; url: string }[]
  >([]);
  const [mostrarCamposUrl, setMostrarCamposUrl] = useState({});
  const [fotos, setFotos] = useState<File[]>([]);

  const [trabajos, setTrabajos] = useState<string[]>([]);
  const [nuevoTrabajo, setNuevoTrabajo] = useState("");
  // useEffect(() => {
  //   console.log("Arreglo de redes sociales: ", redesSociales);
  // }, [redesSociales]);
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { isValid, isSubmitted, errors },
    getValues,
    setValue,
    reset,
    watch, //Le dice cuando se tiene que volver a renderizar en caso de que haya alñgun cambio en el formulario
  } = useForm<inputFormulario>({
    defaultValues: {
      imagen: undefined,
      redes: [],
      trabajo: [],
    },
  });

  const handleRedSocialChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const redSocial = event.target.value;
    const nuevaRedSocial = { tipo: redSocial, url: "" };

    if (redesSociales.some((rs) => rs.tipo === redSocial)) {
      const nuevasRedesSociales = redesSociales.filter(
        (rs) => rs.tipo !== redSocial
      );
      setRedesSociales(nuevasRedesSociales);
      setMostrarCamposUrl((prev) => ({ ...prev, [redSocial]: false }));
    } else {
      setRedesSociales([...redesSociales, nuevaRedSocial]);
      setMostrarCamposUrl((prev) => ({ ...prev, [redSocial]: true }));
    }
  };

  // Manejador para eliminar una red social seleccionada
  const handleEliminarRedSocial = (redSocial: {
    tipo: string;
    url: string;
  }) => {
    const nuevasRedesSociales = redesSociales.filter((rs) => rs !== redSocial);
    setRedesSociales(nuevasRedesSociales);
    setMostrarCamposUrl({
      ...mostrarCamposUrl,
      [String(redSocial.tipo)]: false,
    });
  };

  const handleUrlChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    tipo: string
  ) => {
    const url = event.target.value;
    const redSocial = redesSociales.find((rs) => rs.tipo === tipo);
    if (redSocial) {
      redSocial.url = url;
      setRedesSociales([...redesSociales]); // Update the state with the new URL
    }
  };

  // const handleAgregarFoto = (event) => {
  //   const nuevasFotos = [...fotos,...event.target.files];
  //   setFotos(nuevasFotos);
  //   setValue("imagen", nuevasFotos); // Update the imagen field in the form
  // };

  const handleEliminarFoto = (index: number) => {
    const nuevasFotos = fotos.filter((_, i) => i !== index);
    setFotos(nuevasFotos);
  };

  const handleAgregarTrabajo = () => {
    if (nuevoTrabajo.trim() !== "") {
      setTrabajos([...trabajos, nuevoTrabajo.trim()]);

      setNuevoTrabajo("");
      console.log(trabajos);
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Debe ingresar un trabajo válido",
      });
    }
  };

  const handleEliminarTrabajo = (index: number) => {
    const nuevosTrabajos = [...trabajos];
    nuevosTrabajos.splice(index, 1);
    setTrabajos(nuevosTrabajos);
    setValue("trabajo", nuevosTrabajos);
  };

  const onSubmit = async (data: inputFormulario) => {
    setMensajeError("");
    const formData = new FormData();
    const { imagen, ...profesionalACrear } = data;

    if (trabajos.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Debe seleccionar al menos un trabajo",
      });
      return;
    }

    trabajos.forEach((trabajo) => formData.append("trabajo", trabajo));

    // if (fotos.length > 0) {
    //   fotos.forEach((foto, index) => formData.append(`imagen[${index}]`, foto));
    // }

    // if (imagen) {
    //   for (let i = 0; i < imagen.length; i++) {
    //     formData.append("imagen", imagen[i]); // Se agrega cada imagen al FormData
    //   }
    // }
    const filesArray = [...fotos].reverse(); // Revertir el orden de la array de archivos
    filesArray.forEach((file) => {
      formData.append("imagen", file);
    });

    const redes: any = [];
    redesSociales.forEach((redSocial) => {
      redes.push({ tipo: redSocial.tipo, url: redSocial.url });
    });

    redes.forEach((red: { tipo: string; url: string }) => {
      formData.append("redes", JSON.stringify(red));
    });

    formData.append("nombre", profesionalACrear.nombre);
    formData.append("apellido", profesionalACrear.apellido);
    formData.append("numero", profesionalACrear.numero);

    // console.log("Datos del formulario:");
    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }

    try {
      const {
        ok,
        profesional: profesionalCreado,
        mensaje,
      } = await crearProfesional(formData);

      if (ok) {
        Swal.fire({
          icon: "success",
          title: "Éxito",
          text: "Profesional creado con éxito",
        });
        reset();
        setRedesSociales([]);
        setMostrarCamposUrl({});
        setFotos([]);
        setTrabajos([]);
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: mensaje || "No se pudo crear el profesional",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error en la creación del profesional",
      });
    }
  };

  // const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const isValidForm = await handleSubmit(onSubmit);
  //   if (!isValidForm) {
  //     // If the form is invalid, trigger the validation manually
  //     Object.keys(errors).forEach((key) => {
  //       errors[key].ref.focus();
  //     });
  //   }
  // };

  return (
    <div className="min-h-screen px-6 ">
      <div className="mx-auto max-w-md px-6 py-10 bg-white border-0 shadow-lg rounded-3xl">
        <h1 className="text-2xl font-bold mb-8 text-black">
          Nuevo profesional
        </h1>
        <form id="form" onSubmit={handleSubmit(onSubmit)}>
          {/* <form onSubmit={handleFormSubmit}> */}
          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              {...register("nombre", { required: true })}
              placeholder="Nombre"
              required
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
          </div>

          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              {...register("apellido", { required: true })}
              placeholder="Apellido"
              required
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            {/* <label
              htmlFor="apellido"
              className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
            ></label> */}
          </div>

          <div className="relative z-0 w-full ">
            <input
              type="text"
              {...register("trabajo")}
              placeholder="Trabajo/s que realizo"
              value={nuevoTrabajo}
              onChange={(e) => setNuevoTrabajo(e.target.value)}
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            {/* <label
              htmlFor="trabajo"
              className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
            ></label> */}
          </div>

          <div className="flex flex-wrap mb-4">
            {trabajos.map((trabajo, index) => (
              <span
                key={index}
                className="bg-gray-500 text-white py-1 px-2 rounded-md text-sm mr-2 mt-2 flex items-center"
              >
                {trabajo}
                <MdClose
                  className="ml-2 cursor-pointer"
                  onClick={() => handleEliminarTrabajo(index)}
                />
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={handleAgregarTrabajo}
            className="bg-blue-500 hover:bg-blue-700 text-white text-xs p-2 md:py-2 md:px-4 md:text-2xs rounded-md"
          >
            Agregar Trabajo
          </button>

          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              {...register("numero", { required: true })}
              placeholder="Numero de contacto"
              required
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            {/* <label
              htmlFor="numero"
              className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
            ></label> */}
          </div>

          {/* Selección de redes sociales */}
          <div className="flex flex-col mb-5 mt-3">
            <span className="text-black">Red social (opcional)</span>
            <select
              className="p-2 border rounded-md bg-gray-100"
              value=""
              onChange={handleRedSocialChange}
            >
              <option value="" disabled className="text-black">
                [Seleccione]
              </option>
              <option value="Twitter">Twitter</option>
              <option value="Instagram">Instagram</option>
              <option value="Facebook">Facebook</option>
              <option value="Linkedin">Linkedin</option>
              <option value="Web">Web</option>
            </select>
          </div>

          {/* Campos de entrada de URL, visibles solo para las redes sociales seleccionadas */}
          {redesSociales.map((redSocial, index) => (
            <div
              key={index}
              className="relative z-0 w-full mb-5 flex items-center"
            >
              <input
                type="text"
                placeholder={`Ingrese la URL de ${redSocial.tipo}`}
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 mr-3"
                {...register(`redes.${index}.url`)}
                onChange={(e) => handleUrlChange(e, redSocial.tipo)}
              />
              <label
                htmlFor={`redes.${index}.url`}
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              ></label>
              <MdClose
                className="cursor-pointer"
                onClick={() => handleEliminarRedSocial(redSocial)}
              />
            </div>
          ))}

          <div className="flex flex-col mb-2">
            <span className="text-black">Imagen</span>
            <input
              type="file"
              {...register("imagen")}
              onChange={(e) => {
                if (e.target.files) {
                  setFotos([...fotos, ...Array.from(e.target.files)]);
                }
              }}
              className="pb-2 block w-full px-0 mt-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              multiple
              required
            />
          </div>

          <div className="flex flex-wrap mb-4 mt-4">
            {fotos.map((foto, index) => (
              <div key={index} className="relative mr-2 mb-2">
                <div className="h-24 w-24 relative rounded-md overflow-hidden">
                  <Image
                    src={URL.createObjectURL(foto)}
                    alt={`Imagen ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="absolute top-0 right-0">
                  <button
                    type="button"
                    className="text-white bg-red-500 rounded-full p-1 hover:bg-red-700 transition duration-300"
                    onClick={() => handleEliminarFoto(index)}
                  >
                    <MdClose className="text-xl" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            type="submit"
            // disabled={!isValid}
            className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-sky-500 hover:bg-sky-600 hover:shadow-lg focus:outline-none"
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};
