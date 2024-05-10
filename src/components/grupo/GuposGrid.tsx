"use client";
import { Grupo } from "@/interfaces";
import { GrupoCard } from "..";
import { useState } from "react";

interface Props {
  grupos: Grupo[];
}

export const GrupoGrid = ({ grupos }: Props) => {
  const [searchText, setSearchText] = useState("");

  const filteredGrupos = grupos.filter(
    (grupo) =>
      grupo.nombre.toLowerCase().includes(searchText.toLowerCase()) ||
      grupo.tipo.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  return (
    <div className="m-8">
      {/* Campo de búsqueda */}
      <input
        type="text"
        placeholder="Buscar grupo..."
        value={searchText}
        onChange={handleSearchChange}
        className="p-2 border rounded-md bg-gray-200 mb-10"
      />

      {/* Lista de grupos filtrados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {filteredGrupos.map((grupo) => (
          <GrupoCard key={grupo.url} titulo={grupo.nombre} descripcion={grupo.descripcion} url={grupo.url} img={grupo.imagen ?? '/wpp.jpg'} tipo={grupo.tipo} />
        ))}
      </div>
    </div>

    // <div className='grid grid-cols-2 sm:grid-cols-3 gap-10 m-10 p-3'>
    //   {
    //     grupos.map( grupo => (
    //         <Card key={grupo.url} titulo={grupo.nombre} descripcion={grupo.descripcion} url={grupo.url} img={grupo.imagen ?? '/wpp.jpg'} tipo={grupo.tipo} />
    //     ))
    //   }
    // </div>
  );
};
