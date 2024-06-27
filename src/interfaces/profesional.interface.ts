import { RedSocial } from ".";
import { Imagen } from ".";


export interface Profesional {
  id: string;
  nombre: string;
  apellido: string;
  numero: string;
  trabajo: string[];
  imagen: Imagen[];
  redesSociales: RedSocial[];
}

