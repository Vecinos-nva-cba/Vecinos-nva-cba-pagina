import { Direccion, Redes } from ".";


export interface Lugar {
    id:string
    nombre: string;
    zona: string;
    tipo: string[];
    imagenes: string[];
    direccion: Direccion[];
    redes?: Redes[]
    localizacion?: string | null
  }