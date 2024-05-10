'use client'
import React, { useState } from 'react';
import { Lugar } from '@/interfaces';
import { LugarCard } from '..';

interface Props {
  lugares: Lugar[];
}

export const LugarGrid = ({ lugares }: Props) => {
  const [searchText, setSearchText] = useState('');

  const filteredLugares = lugares.filter((lugar) =>
    lugar.nombre.toLowerCase().includes(searchText.toLowerCase()) ||
    lugar.zona.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
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
          <LugarCard key={lugar.nombre + lugar.zona} lugar={lugar} />
        ))}
      </div>
    </div>
  );
};
