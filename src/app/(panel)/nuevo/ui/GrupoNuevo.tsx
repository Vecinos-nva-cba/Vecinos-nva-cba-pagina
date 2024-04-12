import React from 'react';

const GrupoNuevo = () => {
  return (
    <div className="min-h-screen  p-0 ">
      <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg rounded-3xl">
        <h1 className="text-2xl font-bold mb-8">Nuevo grupo</h1>
        <form id="form" noValidate>
          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              name="nombre"
              placeholder=" "
              required
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label htmlFor="nombre" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Nombre</label>
            <span className="text-sm text-red-600 hidden" id="error">El nombre es obligatorio</span>
          </div>

          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              name="tipo"
              placeholder=" "
              required
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label htmlFor="tipo" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Tipo</label>
            <span className="text-sm text-red-600 hidden" id="error">El tipo es obligatorio</span>
          </div>

          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              name="link"
              placeholder=" "
              required
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label htmlFor="link" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enlace</label>
            <span className="text-sm text-red-600 hidden" id="error">El enlace es obligatorio</span>
          </div>

          <div className="relative z-0 w-full mb-5">
            <textarea
              name="descripcion"
              placeholder=" "
              required
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label htmlFor="descripcion" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Descripcion</label>
            <span className="text-sm text-red-600 hidden" id="error">La descripción es obligatoria</span>
          </div>

          <div className="relative z-0 w-full">
            <input
              type="file"
              name="imagen"
              accept="image/*"
              required
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label htmlFor="imagen" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
            <span className="text-sm text-red-600 hidden" id="error">La imagen es obligatoria</span>
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

export default GrupoNuevo;
