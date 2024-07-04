"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import Swal from "sweetalert2";
import Image from "next/image";
import { crearLugar } from "@/actions/lugar/crear-lugar";

interface inputFomulario {
  nombre: string;
  barrio: string;
  tipo: string[];
  imagenes: FileList;
  redes: { tipo: string; url: string }[];
  localizacion: string;
  direccion: { calle: string; altura: number };
}

export const LugarNuevo = () => {
  // Estado para almacenar las redes sociales seleccionadas
  const [redesSociales, setRedesSociales] = useState<
    { tipo: string; url: string }[]
  >([]);
  // Estado para controlar la visibilidad del campo de entrada de URL para cada red social
  const [mostrarCamposUrl, setMostrarCamposUrl] = useState({});
  const [fotos, setFotos] = useState<File[]>([]);

  const [tiposLugar, setTiposLugar] = useState<string[]>([]);
  const [nuevoTipoLugar, setNuevoTipoLugar] = useState("");

  const [direccion, setDireccion] = useState({
    calle: "",
    altura: 0,
  });
  const {
    handleSubmit,
    register,
    formState: { isValid, isSubmitted, errors },
    getValues,
    setValue,
    reset,
    watch,
  } = useForm<inputFomulario>({
    defaultValues: {
      tipo: [""],
      imagenes: undefined,
      redes: [],
    },
  });

  // Manejador de cambio para la selección de la red social
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
  //   const nuevasFotos = [...fotos, ...event.target.files];
  //   setFotos(nuevasFotos);
  // };

  const handleEliminarFoto = (index: number) => {
    const nuevasFotos = fotos.filter((_, i) => i !== index);
    setFotos(nuevasFotos);
  };

  const handleAgregarTipoLugar = () => {
    if (nuevoTipoLugar.trim() !== "") {
      setTiposLugar([...tiposLugar, nuevoTipoLugar.trim()]);
      setNuevoTipoLugar("");
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Debe ingresar un lugar ",
      });
    }
  };

  const handleEliminarTipoLugar = (index: number) => {
    const nuevosTiposLugar = [...tiposLugar];
    nuevosTiposLugar.splice(index, 1);
    setTiposLugar(nuevosTiposLugar);
    setValue("tipo", nuevosTiposLugar);
  };

  // const handleDireccionChange = (event) => {
  //   const { name, value } = event.target;
  //   setDireccion((prevDireccion) => ({...prevDireccion, [name]: value }));
  // };

  const onSubmit = async (data: inputFomulario) => {
    // const errors = validateForm(data);
    // if (errors) {
    //   console.log(errors);
    //   return;
    // }
    const formData = new FormData();
    const { imagenes, ...lugarACrear } = data;

    formData.append("nombre", lugarACrear.nombre);
    formData.append("barrio", lugarACrear.barrio);
    formData.append("localizacion", lugarACrear.localizacion);
    console.log("lugarACrear.direccion:", lugarACrear.direccion);
    

    formData.append("direccion", JSON.stringify({
      calle: lugarACrear.direccion.calle,
      altura: lugarACrear.direccion.altura ? lugarACrear.direccion.altura : null,
    }));

    const filesArray = [...fotos].reverse(); // Revertir el orden de la array de archivos
    filesArray.forEach((file) => {
      formData.append("imagenes", file);
    });

    if (tiposLugar.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Debe colocar al menos un tipo de lugar",
      });
      return;
    }

    tiposLugar.forEach((tipoLugar) => formData.append("tipo", tipoLugar));

    const redes: any = [];
    redesSociales.forEach((redSocial) => {
      redes.push({ tipo: redSocial.tipo, url: redSocial.url });
    });

    redes.forEach((red: { tipo: string; url: string }) => {
      formData.append("redes", JSON.stringify(red));
    });

    // console.log("Datos del formulario:");
    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }

  
    try {
      const { ok, lugar: lugarCreado, mensaje } = await crearLugar(formData);

      if (ok) {
        Swal.fire({
          icon: "success",
          title: "Éxito",
          text: "Lugar creado con éxito",
        });
        reset();
        setRedesSociales([]);
        setMostrarCamposUrl({});
        setFotos([]);
        setTiposLugar([]);
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: mensaje || "No se pudo crear el lugar",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error en la creación del lugar",
      });
    }
  };

  return (
    <div className="min-h-screen px-6 ">
      <div className="mx-auto max-w-md px-6 py-10 bg-white border-0 shadow-lg rounded-3xl">
        <h1 className="text-2xl font-bold mb-8 text-black">Nuevo lugar</h1>
        <form id="form" onSubmit={handleSubmit(onSubmit)}>
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
              {...register("direccion.calle", { required: true })}
              placeholder="Calle"
              required
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
          </div>
          <div className="relative z-0 w-full mb-5">
            <input
              type="number"
              {...register("direccion.altura", {
                
                valueAsNumber: true,
              })}
              placeholder="Altura"
              
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
          </div>
          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              {...register("barrio", { required: true })}
              placeholder="Barrio o zona"
              required
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
          </div>

          {/* Campo de entrada para agregar tipo de lugar */}
          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              {...register("tipo")}
              placeholder="Tipo de lugar"
              value={nuevoTipoLugar}
              onChange={(e) => setNuevoTipoLugar(e.target.value)}
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
          </div>
          {/* Mostrar tipos de lugar ingresados como etiquetas */}
          <div className="flex flex-wrap mb-4">
            {tiposLugar.map((tipo, index) => (
              <span
                key={index}
                className="bg-gray-500 text-white py-1 px-2 rounded-md text-sm mr-2 mt-2 flex items-center"
              >
                {tipo}
                <MdClose
                  className="ml-2 cursor-pointer"
                  onClick={() => handleEliminarTipoLugar(index)}
                />
              </span>
            ))}
          </div>

          {/* Botón para agregar tipo de lugar */}
          <button
            type="button"
            onClick={handleAgregarTipoLugar}
            className="bg-blue-500 hover:bg-blue-700 text-white text-xs p-2 md:py-2 md:px-4 md:text-2xs rounded-md"
          >
            Agregar tipo de lugar
          </button>

          <div className="relative z-0 w-full">
            <input
              type="text"
              {...register("localizacion")}
              placeholder="Ubicacion en Google Maps (opcional)"
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />

            <span className="text-sm text-red-600 hidden" id="error">
              La localización es obligatoria
            </span>
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
            <span>Imagenes</span>
            <input
              type="file"
              {...register("imagenes")}
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
            className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-sky-500 hover:bg-sky-600 hover:shadow-lg focus:outline-none"
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

// const filesArray = [...fotos].reverse(); // Revertir el orden de la array de archivos
//     filesArray.forEach((file) => {
//       formData.append("imagenes", file);
//     });
