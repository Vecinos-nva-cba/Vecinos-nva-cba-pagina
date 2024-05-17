import React from 'react';
import Image from "next/image";
interface Props {
  titulo: string;
  descripcion: string;
  url: string;
  img: string;
}

const CardServer: React.FC<Props> = ({ titulo, descripcion, url, img }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="flex-shrink-0">
        <Image className="h-48 w-full object-cover" src={img} alt="" />
      </div>
      <div className="flex items-center justify-center w-full p-6">
        <div className="w-full">
          <h2 className="mb-1 text-xl font-bold tracking-tight text-gray-900">
            {titulo}
          </h2>
          <p className="text-gray-700">{descripcion}</p>
        </div>
      </div>
      <div className="w-full p-6 flex items-center justify-center">
        <button
          type="button"
          className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <a href={url}>Ver más</a>
        </button>
      </div>
    </div>
  );
};

export default CardServer;