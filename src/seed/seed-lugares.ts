interface SeedDireccion {
    calle: string;
    altura: number;
  }
  
  interface SeedLugar {
    nombre: string;
    zona: string;
    tipo: string[];
    imagenes: string[];
    direcciones: SeedDireccion[];
    redes?: SeedRed[];
    localizacion?: string
  }
  interface SeedRed {
    red: string;
    tipo: Redes;
  }
  
  interface SeedData {
    lugares: SeedLugar[];
  }

  type Redes = 'Twitter' |  'Instagram' | 'Facebook' | 'Linkedin' | 'Web'

  export const initialDataLugares: SeedData = {
    lugares: [
      {
        nombre: 'Cafetería Los Amigos',
        zona: 'Centro',
        tipo: ['Cafetería'],
        imagenes: ['cafe-los-amigos.jpg'],
        direcciones: [{ calle: 'Calle Principal', altura: 123 }],
        localizacion: 'https://maps.google.com/?q=cafeteria+los+amigos',
      },
      {
        nombre: 'Parque Central',
        zona: 'Centro',
        tipo: ['Parque'],
        imagenes: ['parque-central.jpg'],
        direcciones: [{ calle: 'Calle avear', altura: 54563 }],
        localizacion: 'https://maps.google.com/?q=parque+central',
      },
      {
        nombre: 'Librería El Sabio',
        zona: 'Barrio Norte',
        tipo: ['Librería'],
        imagenes: ['libreria-el-sabio.jpg'],
        direcciones: [{ calle: 'Avenida Libertador', altura: 456 }],
        redes: [{ red: 'https://facebook.com/libsabio', tipo: 'Facebook' }],
        localizacion: 'https://maps.google.com/?q=libreria+el+sabio',
      },
      {
        nombre: 'Gimnasio FitnessPlus',
        zona: 'Barrio Sur',
        tipo: ['Gimnasio'],
        imagenes: ['gimnasio-fitnessplus.jpg'],
        direcciones: [{ calle: 'Calle Deportiva', altura: 789 }],
        redes: [{ red: 'https://instagram.com/fitnessplus', tipo: 'Instagram' }],
        localizacion: 'https://maps.google.com/?q=gimnasio+fitnessplus',
      },
      {
        nombre: 'Restaurante La Esquina',
        zona: 'Barrio Este',
        tipo: ['Restaurante'],
        imagenes: ['restaurante-la-esquina.jpg'],
        direcciones: [{ calle: 'Esquina Gastronómica', altura: 1011 }],
        redes: [
          { red: 'https://instagram.com/laesquina', tipo: 'Instagram' },
          { red: 'https://twitter.com/laesquina', tipo: 'Twitter' },
        ],
        localizacion: 'https://maps.google.com/?q=restaurante+la+esquina',
      },
      {
        nombre: 'Museo de Arte Moderno',
        zona: 'Barrio Oeste',
        tipo: ['Museo'],
        imagenes: ['museo-arte-moderno.jpg'],
        direcciones: [{ calle: 'Avenida Cultural', altura: 1213 }],
        localizacion: 'https://maps.google.com/?q=museo+arte+moderno',
      },
      {
        nombre: 'Cine Los Arcos',
        zona: 'Barrio Sur',
        tipo: ['Cine'],
        imagenes: ['cine-los-arcos.jpg'],
        direcciones: [{ calle: 'Avenida Cinematográfica', altura: 1415 }],
        localizacion: 'https://maps.google.com/?q=cine+los+arcos',
      },
      {
        nombre: 'Centro de Convenciones',
        zona: 'Barrio Este',
        tipo: ['Centro de Eventos'],
        imagenes: ['centro-convenciones.jpg'],
        direcciones: [{ calle: 'Avenida de Eventos', altura: 1617 }],
        redes: [{ red: 'https://facebook.com/convenciones', tipo: 'Facebook' }],
        localizacion: 'https://maps.google.com/?q=centro+convenciones',
      },
      {
        nombre: 'Teatro Municipal',
        zona: 'Centro',
        tipo: ['Teatro'],
        imagenes: ['teatro-municipal.jpg'],
        direcciones: [{ calle: 'Calle Dramática', altura: 1819 }],
        redes: [{ red: 'https://twitter.com/teatromunicipal', tipo: 'Twitter' }],
        localizacion: 'https://maps.google.com/?q=teatro+municipal',
      },
      {
        nombre: 'Parque de Diversiones',
        zona: 'Barrio Norte',
        tipo: ['Parque de Diversiones'],
        imagenes: ['parque-diversiones.jpg'],
        direcciones: [{ calle: 'Avenida Recreativa', altura: 2021 }],
        localizacion: 'https://maps.google.com/?q=parque+de+diversiones',
      },
      {
        nombre: 'Centro Comercial Plaza',
        zona: 'Barrio Este',
        tipo: ['Centro Comercial'],
        imagenes: ['centro-comercial-plaza.jpg'],
        direcciones: [{ calle: 'Boulevard Comercial', altura: 2223 }],
        localizacion: 'https://maps.google.com/?q=centro+comercial+plaza',
      },
      {
        nombre: 'Hospital San José',
        zona: 'Barrio Sur',
        tipo: ['Hospital'],
        imagenes: ['hospital-san-jose.jpg'],
        direcciones: [{ calle: 'Calle de la Salud', altura: 2425 }],
        redes: [{ red: 'https://facebook.com/hospitalsanjose', tipo: 'Facebook' }],
        localizacion: 'https://maps.google.com/?q=hospital+san+jose',
      },
      {
        nombre: 'Biblioteca Municipal',
        zona: 'Barrio Oeste',
        tipo: ['Biblioteca'],
        imagenes: ['biblioteca-municipal.jpg'],
        direcciones: [{ calle: 'Avenida Cultural', altura: 2627 }],
        localizacion: 'https://maps.google.com/?q=biblioteca+municipal',
      },
      {
        nombre: 'Estadio Deportivo',
        zona: 'Barrio Norte',
        tipo: ['Estadio'],
        imagenes: ['estadio-deportivo.jpg'],
        direcciones: [{ calle: 'Calle del Deporte', altura: 2829 }],
        localizacion: 'https://maps.google.com/?q=estadio+deportivo',
      },
      {
        nombre: 'Plaza de la Independencia',
        zona: 'Centro',
        tipo: ['Plaza'],
        imagenes: ['plaza-independencia.jpg'],
        direcciones: [{ calle: 'Calle veles sarfield', altura: 698 }],
        localizacion: 'https://maps.google.com/?q=plaza+de+la+independencia',
      },
      {
        nombre: 'Zoológico Municipal',
        zona: 'Barrio Sur',
        tipo: ['Zoológico'],
        imagenes: ['zoologico-municipal.jpg'],
        direcciones: [{ calle: 'Avenida Animal', altura: 3031 }],
        localizacion: 'https://maps.google.com/?q=zoologico+municipal',
      },
      {
        nombre: 'Piscina Olímpica',
        zona: 'Barrio Norte',
        tipo: ['Piscina'],
        imagenes: ['piscina-olimpica.jpg'],
        direcciones: [{ calle: 'Calle de la Natación', altura: 3233 }],
        localizacion: 'https://maps.google.com/?q=piscina+olimpica',
      },
      {
        nombre: 'Iglesia San Miguel',
        zona: 'Barrio Sur',
        tipo: ['Iglesia'],
        imagenes: ['iglesia-san-miguel.jpg'],
        direcciones: [{ calle: 'Calle Religiosa', altura: 3435 }],
        redes: [{ red: 'https://twitter.com/iglesiasanmiguel', tipo: 'Twitter' }],
        localizacion: 'https://maps.google.com/?q=iglesia+san+miguel',
      },
      {
        nombre: 'Cine Palace',
        zona: 'Barrio Oeste',
        tipo: ['Cine'],
        imagenes: ['cine-palace.jpg'],
        direcciones: [{ calle: 'Avenida Cinéfila', altura: 3637 }],
        redes: [{ red: 'https://instagram.com/cinepalace', tipo: 'Instagram' }],
        localizacion: 'https://maps.google.com/?q=cine+palace',
      },
      {
        nombre: 'Pizzería Don Giovanni',
        zona: 'Barrio Este',
        tipo: ['Restaurante'],
        imagenes: ['pizzeria-don-giovanni.jpg'],
        direcciones: [{ calle: 'Avenida Gastronómica', altura: 3839 }],
        localizacion: 'https://maps.google.com/?q=pizzeria+don+giovanni',
      },
      {
        nombre: 'Parque Acuático Splash',
        zona: 'Barrio Sur',
        tipo: ['Parque Acuático'],
        imagenes: ['parque-acuatico-splash.jpg'],
        direcciones: [{ calle: 'Calle Acuática', altura: 4041 }],
        localizacion: 'https://maps.google.com/?q=parque+acuatico+splash',
      },
      {
        nombre: 'Universidad Nacional',
        zona: 'Barrio Norte',
        tipo: ['Universidad'],
        imagenes: ['universidad-nacional.jpg'],
        direcciones: [{ calle: 'Avenida Académica', altura: 4243 }],
        redes: [{ red: 'https://linkedin.com/universidadnacional', tipo: 'Linkedin' }],
        localizacion: 'https://maps.google.com/?q=universidad+nacional',
      },
      {
        nombre: 'Mall del Este',
        zona: 'Barrio Este',
        tipo: ['Centro Comercial'],
        imagenes: ['mall-del-este.jpg'],
        direcciones: [{ calle: 'Boulevard Comercial', altura: 4445 }],
        redes: [{ red: 'https://facebook.com/malldelEste', tipo: 'Facebook' }],
        localizacion: 'https://maps.google.com/?q=mall+del+este',
      },
      {
        nombre: 'Jardín Botánico',
        zona: 'Barrio Oeste',
        tipo: ['Jardín Botánico'],
        imagenes: ['jardin-botanico.jpg'],
        direcciones: [{ calle: 'Calle Floral', altura: 4647 }],
        localizacion: 'https://maps.google.com/?q=jardin+botanico',
      },
      {
        nombre: 'Banco Central',
        zona: 'Centro',
        tipo: ['Banco'],
        imagenes: ['banco-central.jpg'],
        direcciones: [{ calle: 'Avenida Bancaria', altura: 4849 }],
        redes: [{ red: 'https://web.com/bancocentral', tipo: 'Web' }],
        localizacion: 'https://maps.google.com/?q=banco+central',
      },
    ],
  };