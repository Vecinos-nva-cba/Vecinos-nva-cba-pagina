"use client";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const ProfesionalNuevo = () => {
  // Estado para almacenar las redes sociales seleccionadas
  const [redesSociales, setRedesSociales] = useState([]);
  // Estado para controlar la visibilidad del campo de entrada de URL para cada red social
  const [mostrarCamposUrl, setMostrarCamposUrl] = useState({});
  const [fotos, setFotos] = useState([]);

  const [trabajos, setTrabajos] = useState([]);
  const [nuevoTrabajo, setNuevoTrabajo] = useState("");

  // Manejador de cambio para la selección de la red social
  const handleRedSocialChange = (event) => {
    const redSocial = event.target.value;
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
      setRedesSociales([...redesSociales, redSocial]);
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
    const nuevasFotos = [...fotos, ...event.target.files];
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
    }
  };

  const handleEliminarTrabajo = (index) => {
    const nuevosTrabajos = [...trabajos];
    nuevosTrabajos.splice(index, 1);
    setTrabajos(nuevosTrabajos);
  };

  return (
    <div className="min-h-screen ">
      <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg rounded-3xl ">
        <h1 className="text-2xl font-bold mb-8">Nuevo profesional</h1>
        <form id="form" noValidate>
          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              name="nombre"
              placeholder=" "
              required
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label
              htmlFor="nombre"
              className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
            >
              Nombre
            </label>
            <span className="text-sm text-red-600 hidden" id="error">
              El nombre es obligatorio
            </span>
          </div>

          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              name="apellido"
              placeholder=" "
              required
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label
              htmlFor="apellido"
              className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
            >
              Apellido
            </label>
            <span className="text-sm text-red-600 hidden" id="error">
              El apellido es obligatorio
            </span>
          </div>

          <div className="relative z-0 w-full ">
            <input
              type="text"
              name="trabajo"
              placeholder=" "
              required
              value={nuevoTrabajo}
              onChange={(e) => setNuevoTrabajo(e.target.value)}
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label
              htmlFor="trabajo"
              className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
            >
              Trabajo/s
            </label>
          </div>

          {/* Mostrar trabajos ingresados como etiquetas */}
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

          {/* Botón para agregar trabajo */}
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
              name="numero"
              placeholder=" "
              required
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label
              htmlFor="numero"
              className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
            >
              Numero de telefono
            </label>
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
                    name={`url${redSocial}`}
                    placeholder={`Ingrese la URL de ${redSocial}`}
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 mr-3"
                  />
                  <label
                    htmlFor={`url${redSocial}`}
                    className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                  >{`Ingrese la URL de ${redSocial}`}</label>
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
              name="imagen"
              onChange={handleAgregarFoto}
              multiple
              className="p-2 border rounded-md bg-gray-100"
              accept="image/*"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {fotos.map((foto, index) => (
              <div key={index}>
                <img
                  src={URL.createObjectURL(foto)}
                  alt={`Foto ${index + 1}`}
                  className="rounded-t shadow-md h-40 w-full object-cover"
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
