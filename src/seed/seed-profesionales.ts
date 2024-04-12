interface SeedProfesional {
    nombre: string;
    apellido: string;
    trabajo: string[];
    numero: string;
    imagen: string;
    redes?: SeedRed[];

  }
  interface SeedRed {
    red: string;
    tipo: Redes;
  }
  interface SeedData {
    profesionales: SeedProfesional[];
  }

  type Redes = 'Twitter' |  'Instagram' | 'Facebook' | 'Linkedin' | 'Web'


  export const initialDataProfesionales: SeedData = {
    profesionales: [
      {
        nombre: 'Juan',
        apellido: 'García',
        trabajo: ['Diseñador Gráfico', 'Ilustrador'],
        numero: '123456789',
        imagen: 'juan-garcia.jpg',
        redes: [
          { red: 'https://linkedin.com/juangarcia', tipo: 'Linkedin' },
          { red: 'https://twitter.com/juangarcia', tipo: 'Twitter' },
        ],
      },
      {
        nombre: 'María',
        apellido: 'Martínez',
        trabajo: ['Desarrollador Web', 'Programador'],
        numero: '987654321',
        imagen: 'maria-martinez.jpg',
      },
      {
        nombre: 'Carlos',
        apellido: 'López',
        trabajo: ['Analista de Datos'],
        numero: '567890123',
        imagen: 'carlos-lopez.jpg',
        redes: [
          { red: 'https://facebook.com/carloslopez', tipo: 'Facebook' },
        ],
      },
      {
        nombre: 'Laura',
        apellido: 'Hernández',
        trabajo: ['Marketing Digital'],
        numero: '345678901',
        imagen: 'laura-hernandez.jpg',
      },
      {
        nombre: 'Andrés',
        apellido: 'Gómez',
        trabajo: ['Ingeniero de Software'],
        numero: '901234567',
        imagen: 'andres-gomez.jpg',
        redes: [
          { red: 'https://instagram.com/andresgomez', tipo: 'Instagram' },
          { red: 'https://linkedin.com/andresgomez', tipo: 'Linkedin' },
          { red: 'https://twitter.com/andresgomez', tipo: 'Twitter' },
        ],
      },
      {
        nombre: 'Ana',
        apellido: 'Pérez',
        trabajo: ['Diseñadora UX/UI'],
        numero: '234567890',
        imagen: 'ana-perez.jpg',
        redes: [
          { red: 'https://instagram.com/anaperez', tipo: 'Instagram' },
        ],
      },
      {
        nombre: 'Pedro',
        apellido: 'Rodríguez',
        trabajo: ['Desarrollador Full Stack'],
        numero: '789012345',
        imagen: 'pedro-rodriguez.jpg',
      },
      {
        nombre: 'Sofía',
        apellido: 'Díaz',
        trabajo: ['Analista de Marketing'],
        numero: '456789012',
        imagen: 'sofia-diaz.jpg',
        redes: [
          { red: 'https://linkedin.com/sofiadiaz', tipo: 'Linkedin' },
          { red: 'https://twitter.com/sofiadiaz', tipo: 'Twitter' },
        ],
      },
      {
        nombre: 'Daniel',
        apellido: 'Martín',
        trabajo: ['Consultor Financiero'],
        numero: '890123456',
        imagen: 'daniel-martin.jpg',
        redes: [
          { red: 'https://linkedin.com/danielmartin', tipo: 'Linkedin' },
          { red: 'https://facebook.com/danielmartin', tipo: 'Facebook' },
          { red: 'https://twitter.com/danielmartin', tipo: 'Twitter' },
        ],
      },
      {
        nombre: 'Lucía',
        apellido: 'Gutiérrez',
        trabajo: ['Diseñadora Gráfica'],
        numero: '567890123',
        imagen: 'lucia-gutierrez.jpg',
      },
      {
        nombre: 'Javier',
        apellido: 'Sánchez',
        trabajo: ['Desarrollador Frontend'],
        numero: '123456789',
        imagen: 'javier-sanchez.jpg',
        redes: [
          { red: 'https://linkedin.com/javiersanchez', tipo: 'Linkedin' },
          { red: 'https://twitter.com/javiersanchez', tipo: 'Twitter' },
          { red: 'https://instagram.com/javiersanchez', tipo: 'Instagram' },
        ],
      },
      {
        nombre: 'Elena',
        apellido: 'Muñoz',
        trabajo: ['Analista de Datos'],
        numero: '987654321',
        imagen: 'elena-munoz.jpg',
        redes: [
          { red: 'https://linkedin.com/elenamunoz', tipo: 'Linkedin' },
          { red: 'https://twitter.com/elenamunoz', tipo: 'Twitter' },
        ],
      },
      {
        nombre: 'Diego',
        apellido: 'Ruiz',
        trabajo: ['Diseñador Gráfico'],
        numero: '345678901',
        imagen: 'diego-ruiz.jpg',
      },
      {
        nombre: 'Valentina',
        apellido: 'López',
        trabajo: ['Desarrolladora Web'],
        numero: '901234567',
        imagen: 'valentina-lopez.jpg',
        redes: [
          { red: 'https://instagram.com/valentinalopez', tipo: 'Instagram' },
          { red: 'https://twitter.com/valentinalopez', tipo: 'Twitter' },
        ],
      },
      {
        nombre: 'Miguel',
        apellido: 'Hernández',
        trabajo: ['Analista de Sistemas'],
        numero: '234567890',
        imagen: 'miguel-hernandez.jpg',
        redes: [
          { red: 'https://linkedin.com/miguelhernandez', tipo: 'Linkedin' },
        ],
      },
      {
        nombre: 'Carmen',
        apellido: 'Gómez',
        trabajo: ['Diseñadora UX/UI'],
        numero: '789012345',
        imagen: 'carmen-gomez.jpg',
        redes: [
          { red: 'https://instagram.com/carmengomez', tipo: 'Instagram' },
          { red: 'https://facebook.com/carmengomez', tipo: 'Facebook' },
        ],
      },
      {
        nombre: 'Pablo',
        apellido: 'Martínez',
        trabajo: ['Desarrollador Full Stack'],
        numero: '456789012',
        imagen: 'pablo-martinez.jpg',
        redes: [
          { red: 'https://linkedin.com/pablomartinez', tipo: 'Linkedin' },
          { red: 'https://twitter.com/pablomartinez', tipo: 'Twitter' },
        ],
      },
      {
        nombre: 'Laura',
        apellido: 'Sánchez',
        trabajo: ['Analista de Marketing'],
        numero: '901234567',
        imagen: 'laura-sanchez.jpg',
      },
    ],
  };
  