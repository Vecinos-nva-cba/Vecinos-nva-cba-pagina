import { Direccion, RedSocial } from ".";
import { Imagen } from ".";

export interface Lugar {
    id:string
    nombre: string;
    barrio: string;
    tipo: string[];
    imagenes: Imagen[];
    direccion: Direccion[];
    redes?: RedSocial[]
    localizacion?: string | null
  }