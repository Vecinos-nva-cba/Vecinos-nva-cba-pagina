'use client'
import { Profesional } from "@/interfaces";
import { Paginacion, ProfesionalCard } from "..";
import { useState } from "react";

interface Props {
  profesionales: Profesional[];
  totalPaginas: number
}

export const ProfesionalGrid = ({ profesionales, totalPaginas }: Props) => {
  const [searchText, setSearchText] = useState('');
  const [isSearching, setIsSearching] = useState(false)

  const filteredProfesional = profesionales.filter((profesional) =>
  profesional.nombre.toLowerCase().includes(searchText.toLowerCase()) ||
  profesional.apellido.toLowerCase().includes(searchText.toLowerCase()) ||
  profesional.trabajo.some(t => t.toLowerCase().includes(searchText.toLowerCase())) 
    
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchText(value);
    setIsSearching(value.length > 0);
  };
  return (

<div className="m-8">
      {/* Campo de búsqueda */}
      <input
        type="text"
        placeholder="Buscar profesional..."
        value={searchText}
        onChange={handleSearchChange}
        className="p-2 border rounded-md bg-gray-200 mb-10"
      />

      {/* Lista de lugares filtrados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {filteredProfesional.map((profesional) => (
          <ProfesionalCard key={profesional.numero} profesional={profesional} />
        ))}
      </div>
      {!isSearching && <Paginacion totalPaginas={totalPaginas} />}
    </div>

    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-8">
    //   {profesionales.map((profesional) => (
    //     <ProfesionalCard key={profesional.numero} profesional={profesional} />
    //   ))}
    // </div>
  );
};
