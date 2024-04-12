import { Redes } from ".";

export interface Profesional {
    nombre: string;
    apellido: string;
    trabajo: string[];
    numero: string;
    imagen: string;
    redes?: Redes[];
  }