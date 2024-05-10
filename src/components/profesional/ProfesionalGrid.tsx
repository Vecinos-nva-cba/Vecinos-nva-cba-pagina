'use client'
import { Profesional } from "@/interfaces";
import { ProfesionalCard } from "..";
import { useState } from "react";

interface Props {
  profesionales: Profesional[];
}

export const ProfesionalGrid = ({ profesionales }: Props) => {
  const [searchText, setSearchText] = useState('');

  const filteredProfesional = profesionales.filter((profesional) =>
  profesional.nombre.toLowerCase().includes(searchText.toLowerCase()) ||
  profesional.apellido.toLowerCase().includes(searchText.toLowerCase()) ||
  profesional.trabajo.some(t => t.toLowerCase().includes(searchText.toLowerCase())) 
    
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
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
    </div>

    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-8">
    //   {profesionales.map((profesional) => (
    //     <ProfesionalCard key={profesional.numero} profesional={profesional} />
    //   ))}
    // </div>
  );
};
