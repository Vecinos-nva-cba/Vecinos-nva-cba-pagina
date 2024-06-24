import { Direccion, Redes } from ".";


export interface Lugar {
    id:string
    nombre: string;
    barrio: string;
    tipo: string[];
    imagenes: string[];
    direccion: Direccion[];
    redes?: Redes[]
    localizacion?: string | null
  }