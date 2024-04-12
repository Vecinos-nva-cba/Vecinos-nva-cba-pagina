"use client";
import React, { useState } from "react";
import GrupoNuevo from "./ui/GrupoNuevo";
import ProfesionalNuevo from "./ui/ProfesionalNuevo";
import LugarNuevo from "./ui/LugarNuevo";

const NuevoPage = () => {
  const [tipoSeleccionado, setTipoSeleccionado] = useState("grupo");

  const handleSelect = (tipo: string) => {
    setTipoSeleccionado(tipo);
  };

  return (
    <div>
      <div className=" flex flex-col items-center justify-center pb-8">
        <div className="flex bg-gray-400 m-10 rounded-3xl p-2 cursor-pointer border-2">
          <button
            onClick={() => handleSelect("grupo")}
            className={`mx-2 px-4 rounded-3xl p-1 ${
              tipoSeleccionado === "grupo" ? "bg-gray-500" : ""
            }`}
          >
            Grupo
          </button>
          <button
            onClick={() => handleSelect("profesional")}
            className={`mx-2 px-4 rounded-3xl p-1 ${
              tipoSeleccionado === "profesional" ? "bg-gray-500" : ""
            }`}
          >
            Profesional
          </button>
          <button
            onClick={() => handleSelect("lugar")}
            className={`mx-2 px-4 rounded-3xl p-1 ${
              tipoSeleccionado === "lugar" ? "bg-gray-500" : ""
            }`}
          >
            Lugar
          </button>
        </div>
        <div className="">
          {tipoSeleccionado === "grupo" && <GrupoNuevo />}
          {tipoSeleccionado === "profesional" && <ProfesionalNuevo />}
          {tipoSeleccionado === "lugar" && <LugarNuevo />}
        </div>
      </div>
    </div>
  );
};

export default NuevoPage;
