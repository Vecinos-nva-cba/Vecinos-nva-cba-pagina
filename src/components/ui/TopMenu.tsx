"use client";
import Link from "next/link";
import Image from "next/image";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";

export const TopMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="bg-sky-500 w-full relative z-10 ">
      {/* Mobile */}
      <div className="flex items-center justify-center md:hidden px-4 py-2">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Descripción del icono"
            width={150}
            height={150}
          />
        </Link>
        <div className="absolute right-4 top-4">
          <button onClick={handleToggleMenu}>
            <IoMenuOutline className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="md:hidden flex flex-col items-center justify-center absolute top-15 left-0 w-full bg-sky-500 z-20 pb-2">
          <Link
            href="/nosotros"
            className="text-white hover:font-bold hover:text-black block px-2 py-2"
            onClick={handleCloseMenu}
          >
            Sobre nosotros
          </Link>
          <Link
            href="/grupos"
            className="text-white hover:font-bold hover:text-black block px-2 py-2"
            onClick={handleCloseMenu}
          >
            Grupos
          </Link>
          <Link
            href="/profesionales"
            className="text-white hover:font-bold hover:text-black block px-2 py-2"
            onClick={handleCloseMenu}
          >
            Profesionales
          </Link>
          <Link
            href="/lugares"
            className="text-white hover:font-bold hover:text-black block px-2 py-2"
            onClick={handleCloseMenu}
          >
            Lugares
          </Link>
          <Link
            href="/nuevo"
            className="text-white hover:font-bold hover:text-black block px-2 py-2"
            onClick={handleCloseMenu}
          >
            Registrar nuevo
          </Link>
        </div>
      )}
      {/* Desktop */}
      <div className="hidden md:flex items-center py-3 justify-center w-full space-x-4">
        <Link href="/" className="absolute left-0 top-0 ml-8 mt-1">
          <Image
            src="/logo.svg"
            alt="Descripción del icono"
            width={150}
            height={150}
          />
        </Link>
        <Link
          href="/nosotros"
          className="text-white hover:font-bold hover:text-black px-2"
          onClick={handleCloseMenu}
        >
          Sobre nosotros
        </Link>
        <Link
          href="/grupos"
          className="text-white hover:font-bold hover:text-black px-2"
          onClick={handleCloseMenu}
        >
          Grupos
        </Link>
        <Link
          href="/profesionales"
          className="text-white hover:font-bold hover:text-black px-2"
          onClick={handleCloseMenu}
        >
          Profesionales
        </Link>
        <Link
          href="/lugares"
          className="text-white hover:font-bold hover:text-black px-2"
          onClick={handleCloseMenu}
        >
          Lugares
        </Link>
        <Link
          href="/nuevo"
          className="text-white hover:font-bold hover:text-black px-2"
          onClick={handleCloseMenu}
        >
          Registrar nuevo
        </Link>
      </div>
    </nav>
  );
};
