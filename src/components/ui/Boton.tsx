import React from 'react';

export const Boton = () => {
  return (
    <div className="relative w-250 h-36 bg-white border-2 border-gray-700 rounded-full flex items-center">
      <div className="w-80.5 h-28 relative top-2 left-2">
        <input className="w-full h-full absolute left-0 top-0 appearance-none cursor-pointer" type="radio" name="btn" value="option1" defaultChecked />
        <div className="w-full h-full bg-white rounded-full flex justify-center items-center">
          <span className="text-gray-700">Grupo</span>
        </div>
      </div>
      <div className="w-80.5 h-28 relative top-2 left-2">
        <input className="w-full h-full absolute left-0 top-0 appearance-none cursor-pointer" type="radio" name="btn" value="option2" />
        <div className="w-full h-full bg-white rounded-full flex justify-center items-center">
          <span className="text-gray-700">Profesional</span>
        </div>
      </div>
      <div className="w-80.5 h-28 relative top-2 left-2">
        <input className="w-full h-full absolute left-0 top-0 appearance-none cursor-pointer" type="radio" name="btn" value="option3" />
        <div className="w-full h-full bg-white rounded-full flex justify-center items-center">
          <span className="text-gray-700">Lugar</span>
        </div>
      </div>
    </div>
  );
};

 
