interface SeedGrupo {
  nombre: string;
  descripcion: string;
  imagen?: string;
  tipo: string;
  url: string;
}
interface SeedData {
    grupos: SeedGrupo[];
  }

export const initialDataGRupos: SeedData = {
  grupos: [
    {
      nombre: "Club de Lectura",
      descripcion:
        "Grupo dedicado a la lectura y discusión de libros de diversos géneros literarios.",
      imagen: "/wpp.jpg",
      tipo: "Cultura",
      url: "https://clubdelectura.com",
    },
    {
      nombre: "Grupo de Música Clásica",
      descripcion:
        "Amantes de la música clásica se reúnen para compartir y disfrutar de conciertos y discusiones sobre compositores y obras maestras.",
      tipo: "Música",
      url: "https://musicaclassica.com",
    },
    {
      nombre: "Grupo de Excursionismo",
      descripcion:
        "Aventureros y amantes de la naturaleza se unen para explorar senderos y montañas, disfrutando de la belleza natural y el aire libre.",
      tipo: "Deportes",
      url: "https://excursionismoaventura.com",
    },
    {
      nombre: "Grupo de Cocina Gourmet",
      descripcion:
        "Apasionados por la cocina se reúnen para aprender nuevas recetas, técnicas culinarias y degustar exquisitos platillos gourmet.",
      tipo: "Gastronomía",
      url: "https://cocinagourmetclub.com",
    },
    {
      nombre: "Grupo de Fotografía Creativa",
      descripcion:
        "Fotógrafos aficionados y profesionales comparten su pasión por la fotografía, explorando técnicas creativas y compartiendo consejos y trucos.",
      tipo: "Arte",
      url: "https://fotografiacreativaclub.com",
    },
    {
      nombre: "Grupo de Yoga y Meditación",
      descripcion:
        "Practicantes de yoga y meditación se reúnen para encontrar paz interior, equilibrio y bienestar a través de prácticas físicas y mentales.",
      tipo: "Bienestar",
      url: "https://yogaymeditacionpaz.com",
    },
    {
      nombre: "Grupo de Idiomas",
      descripcion:
        "Personas interesadas en aprender nuevos idiomas se unen para practicar conversaciones, intercambiar conocimientos y mejorar sus habilidades lingüísticas.",
      tipo: "Educación",
      url: "https://grupoidiomasaprende.com",
    },
    {
      nombre: "Grupo de Cineclub",
      descripcion:
        "Amantes del cine se reúnen para ver películas clásicas, independientes y de autor, y luego discutir y analizar sus aspectos cinematográficos.",
      tipo: "Entretenimiento",
      url: "https://cineclubclasicos.com",
    },
    {
      nombre: "Grupo de Voluntariado",
      descripcion:
        "Personas comprometidas con causas sociales y comunitarias se unen para realizar acciones voluntarias y contribuir al bienestar de quienes más lo necesitan.",
      tipo: "Solidaridad",
      url: "https://voluntariadosolidario.com",
    },
    {
      nombre: "Grupo de Viajes y Aventuras",
      descripcion:
        "Aventureros y viajeros se reúnen para planificar y realizar emocionantes viajes y aventuras, explorando destinos exóticos y culturas diferentes.",
      tipo: "Viajes",
      url: "https://viajesaventuras.com",
    },
    {
      nombre: "Grupo de Teatro Amateur",
      descripcion:
        "Aficionados al teatro participan en la práctica y presentación de obras teatrales, desarrollando habilidades escénicas y disfrutando del arte dramático.",
      tipo: "Arte",
      url: "https://teatroamateurclub.com",
    },
    {
      nombre: "Grupo de Escritura Creativa",
      descripcion:
        "Escritores aficionados y aspirantes a autores comparten sus escritos, reciben retroalimentación y participan en ejercicios creativos para mejorar sus habilidades literarias.",
      tipo: "Literatura",
      url: "https://escrituracreativaclub.com",
    },
    {
      nombre: "Grupo de Fitness y Entrenamiento",
      descripcion:
        "Entusiastas del fitness y la actividad física se reúnen para realizar entrenamientos, compartir rutinas y motivarse mutuamente para alcanzar sus objetivos de salud y bienestar.",
      tipo: "Deportes",
      url: "https://fitnessentrenamientoclub.com",
    },
    {
      nombre: "Grupo de Jardinería y Horticultura",
      descripcion:
        "Amantes de las plantas y la jardinería comparten conocimientos, técnicas y consejos para cuidar y cultivar hermosos jardines y huertos.",
      tipo: "Hogar",
      url: "https://jardineriahorticulturaclub.com",
    },
    {
      nombre: "Grupo de Astronomía",
      descripcion:
        "Entusiastas de la astronomía se reúnen para observar el cielo nocturno, explorar el universo y discutir sobre planetas, estrellas y fenómenos celestes.",
      tipo: "Ciencia",
      url: "https://astronomiaclub.com",
    },
    {
      nombre: "Grupo de Club de Lectura Juvenil",
      descripcion:
        "Jóvenes lectores se reúnen para compartir sus libros favoritos, discutir temas relevantes y fomentar el amor por la lectura entre los más jóvenes.",
      tipo: "Cultura",
      url: "https://lecturajuvenilclub.com",
    },
    {
      nombre: "Grupo de Club de Música Indie",
      descripcion:
        "Amantes de la música indie se reúnen para descubrir nuevas bandas, compartir recomendaciones y discutir sobre el vibrante mundo de la música alternativa.",
      tipo: "Música",
      url: "https://musicaindieclub.com",
    },
    {
      nombre: "Grupo de Senderismo y Naturaleza",
      descripcion:
        "Apasionados por la naturaleza y el senderismo exploran rutas escénicas, disfrutan del aire libre y descubren la belleza natural de diferentes entornos.",
      tipo: "Deportes",
      url: "https://senderismonaturalezaclub.com",
    },
  ],
};
