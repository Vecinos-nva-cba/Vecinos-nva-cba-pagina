'use client';
import Link from 'next/link';
import { IoMenuOutline } from 'react-icons/io5';
import { useState } from 'react';

export const TopMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-sky-500 flex items-center mg:justify-between w-full relative z-10">
      <div className="flex items-center ">
        <Link href="/">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="230px" // Reduzco el tamaño del logo en tablet
            height="50px" // Reduzco el tamaño del logo en tablet
            viewBox="0 0 906 275"
            enableBackground="new 0 0 906 275"
            xmlSpace="preserve"
            className=" mg:mr-20 " // Ajusto el margen derecho en tablet
          >
            <image xlinkHref="/logo.svg" width="906" height="275" x="0" y="0" />
          </svg>
        </Link>
      </div>
      <div className="hidden md:flex md:flex-1 mg:items-center space-x-4 ml-6 mg:justify-center lg:ml-20 lg:pl-12"> {/* Ajusto los márgenes en tablet */}
        <Link href="/nosotros" className="text-white hover:font-bold hover:text-black px-2">
          Sobre nosotros
        </Link>
        <Link href="/grupos" className="text-white hover:font-bold hover:text-black px-2">
          Grupos
        </Link>
        <Link href="/profesionales" className="text-white hover:font-bold hover:text-black px-2">
          Profesionales
        </Link>
        <Link href="/lugares" className="text-white hover:font-bold hover:text-black px-2">
          Lugares
        </Link>
        <Link href="/nuevo" className="text-white hover:font-bold hover:text-black px-2">
          Registrar nuevo
        </Link>
      </div>
      <div className="sm:hidden flex flex-1 justify-end pr-2 ml-0">
        <button onClick={handleToggleMenu} className="mr-2">
          <IoMenuOutline className="w-8 h-8" /> 
        </button>
      </div>
      {showMenu && (
        <div className="sm:hidden flex flex-col items-center justify-center absolute top-12 left-0 w-full bg-sky-500">
          <Link href="/nosotros" className="text-white hover:font-bold hover:text-black block px-2 py-2">
            Sobre nosotros
          </Link>
          <Link href="/grupos" className="text-white hover:font-bold hover:text-black block px-2 py-2">
            Grupos
          </Link>
          <Link href="/profesionales" className="text-white hover:font-bold hover:text-black block px-2 py-2">
            Profesionales
          </Link>
          <Link href="/lugares" className="text-white hover:font-bold hover:text-black block px-2 py-2">
            Lugares
          </Link>
          <Link href="/nuevo" className="text-white hover:font-bold hover:text-black block px-2 py-2">
            Registrar nuevo
          </Link>
        </div>
      )}
    </nav>
  );
};

export default TopMenu;
