'use client'
import React, { use, useState } from 'react';
import { Lugar } from '@/interfaces';
import { LugarCard, Paginacion } from '..';

interface Props {
  lugares: Lugar[];
  totalPaginas: number
}

export const LugarGrid = ({ lugares, totalPaginas }: Props) => {
  const [searchText, setSearchText] = useState('');
  const [isSearching, setIsSearching] = useState(false)

  const filteredLugares = lugares.filter((lugar) =>
    lugar.nombre.toLowerCase().includes(searchText.toLowerCase()) ||
    lugar.barrio.toLowerCase().includes(searchText.toLowerCase())
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
        placeholder="Buscar lugar..."
        value={searchText}
        onChange={handleSearchChange}
        className="p-2 border rounded-md bg-gray-200 mb-10"
      />

      {/* Lista de lugares filtrados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {filteredLugares.map((lugar) => (
          <LugarCard key={lugar.nombre + lugar.barrio} lugar={lugar} />
        ))}
      </div>
      {!isSearching && <Paginacion totalPaginas={totalPaginas} />}
    </div>
  );
};
