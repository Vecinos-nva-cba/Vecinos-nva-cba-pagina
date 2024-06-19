"use client";
import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useRouter, redirect } from "next/navigation";
import { crearProfesional } from "@/actions";
import Image from "next/image";

const Redes = ["Instagram", "Facebook", "Twitter", "Linkedin", "Web"];
interface inputFormulario {
  nombre: string;
  apellido: string;
  trabajo: string[];
  numero: string;
  imagen: File[];
  redes: { tipo: string, url: string }[];
}

const ProfesionalNuevo = () => {
  // Estado para almacenar las redes sociales seleccionadas
  const [redesSociales, setRedesSociales] = useState<{ tipo: string, url: string }[]>([]);
  // Estado para controlar la visibilidad del campo de entrada de URL para cada red social
  const [mostrarCamposUrl, setMostrarCamposUrl] = useState({});
  const [fotos, setFotos] = useState<File[]>([]);

  const [trabajos, setTrabajos] = useState<string[]>([]);
  const [nuevoTrabajo, setNuevoTrabajo] = useState("");
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
      imagen: [],
      redes: [],
      trabajo: [],
    },
  });
  // useEffect(() => {
  //   console.log("Trabajos actualizados:", trabajos);
  // }, [trabajos]);

  // Manejador de cambio para la selección de la red social
  const handleRedSocialChange = (event) => {
    const redSocial = event.target.value;
    //console.log("Red social seleccionada:", redSocial);

    // Verificar si el campo de URL se está registrando correctamente
    //console.log("Campo de URL registrado:", register(`url-${redSocial}`));

    // Verificar si la red social ya está seleccionada
    if (redesSociales.includes(redSocial)) {
      // Si la red social ya está seleccionada, la eliminamos del array
      const nuevasRedesSociales = redesSociales.filter(
        (rs) => rs !== redSocial
      );
      setRedesSociales(nuevasRedesSociales);
      // Ocultamos el campo de entrada de URL de esa red social
      setMostrarCamposUrl({
        ...mostrarCamposUrl,
        [redSocial]: false,
      });
    } else {
      // Si la red social no está seleccionada, la agregamos al array
      setRedesSociales([...redesSociales, { tipo: redSocial, url: '' }]);
      // Mostramos el campo de entrada de URL de esa red social
      setMostrarCamposUrl({
        ...mostrarCamposUrl,
        [redSocial]: true,
      });
    }
  };

  // Manejador para eliminar una red social seleccionada
  const handleEliminarRedSocial = (redSocial) => {
    const nuevasRedesSociales = redesSociales.filter((rs) => rs !== redSocial);
    setRedesSociales(nuevasRedesSociales);
    setMostrarCamposUrl({
      ...mostrarCamposUrl,
      [redSocial]: false,
    });
  };

  const handleAgregarFoto = (event) => {
    //console.log("Archivos seleccionados:", event.target.files);
    const nuevasFotos = [...fotos, ...event.target.files];
    //console.log("Nuevas fotos:", nuevasFotos);
    setFotos(nuevasFotos);
  };

  const handleEliminarFoto = (index) => {
    const nuevasFotos = fotos.filter((foto, i) => i !== index);
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

  const handleEliminarTrabajo = (index) => {
    const nuevosTrabajos = [...trabajos];
    nuevosTrabajos.splice(index, 1);
    setTrabajos(nuevosTrabajos);
    setValue("trabajo", nuevosTrabajos);
  };

  const onSubmit = async (data: inputFormulario) => {
    const formData = new FormData();

    // console.log("Datos del formulario antes de enviar:");
    // console.log("Trabajos:", trabajos);
    // console.log("Valor del campo de imagen:", getValues("imagen"));
    // console.log("Redes Sociales:", redesSociales);
    // console.log("Fotos", fotos)

    if (trabajos.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Debe seleccionar al menos un trabajo",
      });
      return;
    }

    trabajos.forEach((trabajo, index) =>
      formData.append(`trabajo[${index}]`, trabajo)
    );

    if (fotos.length > 0) {
      fotos.forEach((foto, index) => formData.append(`imagen[${index}]`, foto));
    }

    // redesSociales.forEach((redSocial) => {
    //   console.log(`URL de ${redSocial}:`, getValues(`url-${redSocial}`));
    // });
    // if (redesSociales.length > 0) {
    //   redesSociales.forEach((redSocial) => {
    //     const url = getValues(`url-${redSocial}`);
    //     formData.append(`redes[${redSocial}]`, url); // Agregar la URL de la red social al FormData
    //     formData.append(`redesTipo[${redSocial}]`, redSocial); // Agregar el tipo de red social al FormData
    //   });
    // }

    redesSociales.forEach(({ tipo, url }) => {
      formData.append('redes[]', JSON.stringify({ tipo, url }));
    });

    formData.append("nombre", data.nombre);
    formData.append("apellido", data.apellido);
    formData.append("numero", data.numero);

    console.log("Datos del formulario:");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

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

  return (
    <div className="min-h-screen px-6 ">
      <div className="mx-auto max-w-md px-6 py-10 bg-white border-0 shadow-lg rounded-3xl">
        <h1 className="text-2xl font-bold mb-8">Nuevo profesional</h1>
        <form id="form" noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              {...register("nombre", { required: true })}
              placeholder="Nombre"
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
              {...register("apellido", { required: true })}
              placeholder="Apellido"
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label
              htmlFor="apellido"
              className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
            ></label>
            <span className="text-sm text-red-600 hidden" id="error">
              El apellido es obligatorio
            </span>
          </div>

          <div className="relative z-0 w-full ">
            <input
              type="text"
              placeholder="Trabajo/s"
              required
              value={nuevoTrabajo}
              onChange={(e) => setNuevoTrabajo(e.target.value)}
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label
              htmlFor="trabajo"
              className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
            ></label>
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
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label
              htmlFor="numero"
              className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
            ></label>
            <span className="text-sm text-red-600 hidden" id="error">
              El número es obligatorio
            </span>
          </div>

          {/* Selección de redes sociales */}
          <div className="flex flex-col mb-5 mt-3">
            <span>Red social (opcional)</span>
            <select
              className="p-2 border rounded-md bg-gray-100"
              value=""
              onChange={handleRedSocialChange}
            >
              <option value="" disabled>
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
          {redesSociales.map(
            (redSocial) =>
              mostrarCamposUrl[redSocial] && (
                <div
                  key={redSocial}
                  className="relative z-0 w-full mb-5 flex items-center"
                >
                  <input
                    type="text"
                    placeholder={`Ingrese la URL de ${redSocial}`}
                    {...register(`url-${redSocial}`)}
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 mr-3"
                  />
                  <label
                    htmlFor={`url-${redSocial}`}
                    className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                  ></label>
                  <MdClose
                    className="cursor-pointer"
                    onClick={() => handleEliminarRedSocial(redSocial)}
                  />
                </div>
              )
          )}

          <div className="flex flex-col mb-2">
            <span>Imagen</span>
            <input
              type="file"
              {...register("imagen")}
              onChange={handleAgregarFoto}
              multiple
              className="p-2 border rounded-md bg-gray-100"
              accept="image/*"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {fotos.map((foto, index) => (
              <div key={index}>
                <Image
                  src={URL.createObjectURL(foto)}
                  alt={`Foto ${index + 1}`}
                  className="rounded-t shadow-md h-40 w-full object-cover"
                  width={100}
                  height={100}
                />
                <button
                  type="button"
                  onClick={() => handleEliminarFoto(index)}
                  className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 transition-all rounded-b-xl w-full"
                >
                  Eliminar
                </button>
              </div>
            ))}
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

export default ProfesionalNuevo;
