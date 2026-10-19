/* ==========================
   Datos Mockeados - Banda
   ========================== */

const BANDA_DATA = {
  nombre: 'Los Hermanos del Ritmo',
  eslogan: 'Donde la música cobra vida',
  descripcionCorta: 'Más de 15 años llenando escenarios con la mejor fusión de rock, blues y jazz latino.',
  email: 'contacto@loshermanosdelritmo.cl',
  telefono: '+56 9 1234 5678',
  whatsapp: '+56912345678',
  direccion: 'Providencia, Santiago, Región Metropolitana, Chile',
  horarios: [
    { dia: 'Lunes a Viernes', hora: '10:00 - 20:00' },
    { dia: 'Sábados', hora: '12:00 - 18:00' },
    { dia: 'Domingos', hora: 'Cerrado (disponible para eventos)' }
  ],
  redes: {
    instagram: 'https://instagram.com/loshermanosdelritmo',
    facebook: 'https://facebook.com/loshermanosdelritmo',
    youtube: 'https://youtube.com/loshermanosdelritmo',
    spotify: 'https://open.spotify.com/artist/loshermanosdelritmo',
    tiktok: 'https://tiktok.com/@loshermanosdelritmo'
  },
  ubicacion: {
    lat: -33.4314,
    lng: -70.6093,
    mapaEmbed: 'https://www.openstreetmap.org/export/embed.html?bbox=-70.6293%2C-33.4414%2C-70.5893%2C-33.4214&layer=mapnik&marker=-33.4314%2C-70.6093'
  }
};

const INTEGRANTES = [
  {
    nombre: 'Carlos "El Maestro" Ramírez',
    rol: 'Voz principal y guitarra acústica',
    bio: 'Fundador de la banda. Compositor con más de 20 años de experiencia en escenarios nacionales e internacionales.',
    imagen: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop'
  },
  {
    nombre: 'Diego Ramírez',
    rol: 'Guitarra eléctrica y coros',
    bio: 'Hermano menor de Carlos. Apodado "la mano derecha". Especialista en solos y arreglos contemporáneos.',
    imagen: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=400&fit=crop'
  },
  {
    nombre: 'María Sánchez',
    rol: 'Bajista y voz secundaria',
    bio: 'Única mujer en la formación. Aporta groove y elegancia. Graduada en el Conservatorio de Santiago.',
    imagen: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
  },
  {
    nombre: 'Javier "El Pulso" Torres',
    rol: 'Batería y percusión',
    bio: 'El motor rítmico del grupo. Conocido por su energía en vivo y su técnica impecable.',
    imagen: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
  },
  {
    nombre: 'Lucía Mendoza',
    rol: 'Teclados y piano',
    bio: 'Incorporada en 2018. Aporta los matices jazzísticos y las melodías envolventes.',
    imagen: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
  }
];

const SERVICIOS = [
  {
    icono: '🎸',
    titulo: 'Conciertos en Vivo',
    descripcion: 'Presentaciones completas con repertorio personalizado y equipo profesional de sonido e iluminación.',
    incluye: ['Setlist personalizado', 'Sonido profesional', 'Iluminación escénica', 'Backline completo']
  },
  {
    icono: '💍',
    titulo: 'Bodas y Celebraciones',
    descripcion: 'Hacemos de tu día especial una experiencia inolvidable con música en cada momento clave.',
    incluye: ['Ceremonia', 'Cóctel', 'Banquete', 'Fiesta']
  },
  {
    icono: '🏢',
    titulo: 'Eventos Corporativos',
    descripcion: 'Ideal para lanzamientos de producto, fiestas de empresa y galas empresariales.',
    incluye: ['Repertorio profesional', 'Imagen corporativa', 'Coordinación con la organización']
  },
  {
    icono: '🎵',
    titulo: 'Festivales y Grandes Escenarios',
    descripcion: 'Disponemos del equipo y la experiencia para actuar en festivales al aire libre y grandes recintos.',
    incluye: ['Equipo de gran formato', 'Técnicos de escenario', 'Producción completa']
  },
  {
    icono: '🎤',
    titulo: 'Clases y Talleres',
    descripcion: 'Ofrecemos workshops musicales, masterclass y sesiones formativas para todas las edades.',
    incluye: ['Talleres grupales', 'Clases individuales', 'Programas escolares']
  },
  {
    icono: '🎙️',
    titulo: 'Producción Musical',
    descripcion: 'Servicios de grabación, producción y arreglos para artistas que quieran llevar su música al siguiente nivel.',
    incluye: ['Estudio propio', 'Arreglos', 'Mezcla y masterización']
  }
];

const PRECIOS = [
  {
    nombre: 'Plan Esencial',
    precio: 650000,
    descripcion: 'Ideal para eventos íntimos',
    destacado: false,
    caracteristicas: [
      { texto: '1 hora de actuación', incluido: true },
      { texto: 'Hasta 30 invitados', incluido: true },
      { texto: 'Repertorio estándar', incluido: true },
      { texto: 'Equipo básico de sonido', incluido: true },
      { texto: 'Iluminación escénica', incluido: false },
      { texto: '2 horas de actuación', incluido: false },
      { texto: 'Repertorio personalizado', incluido: false }
    ]
  },
  {
    nombre: 'Plan Premium',
    precio: 1450000,
    descripcion: 'El más solicitado',
    destacado: true,
    caracteristicas: [
      { texto: '2 horas de actuación', incluido: true },
      { texto: 'Hasta 100 invitados', incluido: true },
      { texto: 'Repertorio personalizado', incluido: true },
      { texto: 'Equipo profesional de sonido', incluido: true },
      { texto: 'Iluminación escénica', incluido: true },
      { texto: 'DJ set posterior', incluido: true },
      { texto: 'Sesión de fotos', incluido: false }
    ]
  },
  {
    nombre: 'Plan VIP',
    precio: 2950000,
    descripcion: 'Experiencia completa',
    destacado: false,
    caracteristicas: [
      { texto: '3+ horas de actuación', incluido: true },
      { texto: 'Sin límite de invitados', incluido: true },
      { texto: 'Repertorio 100% a medida', incluido: true },
      { texto: 'Equipo de alta gama', incluido: true },
      { texto: 'Iluminación profesional', incluido: true },
      { texto: 'DJ set + animación', incluido: true },
      { texto: 'Sesión de fotos profesional', incluido: true }
    ]
  }
];

const GALERIA = [
  { url: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&h=600&fit=crop', alt: 'Concierto en vivo escenario' },
  { url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop', alt: 'Concierto con luces' },
  { url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop', alt: 'Guitarrista en concierto' },
  { url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop', alt: 'Público disfrutando' },
  { url: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&h=600&fit=crop', alt: 'Micrófono en concierto' },
  { url: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop', alt: 'Multitud en festival' },
  { url: 'https://images.unsplash.com/photo-1485579149621-3123dd979885?w=800&h=600&fit=crop', alt: 'Guitarra eléctrica' },
  { url: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=600&fit=crop', alt: 'Batería en concierto' },
  { url: 'https://images.unsplash.com/photo-1518972559570-7cc1309f3229?w=800&h=600&fit=crop', alt: 'Concierto íntimo' },
  { url: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop', alt: 'Pianista en concierto' },
  { url: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=800&h=600&fit=crop', alt: 'Saxofonista' },
  { url: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&h=600&fit=crop', alt: 'Festival al aire libre' }
];

const EVENTOS = [
  {
    fecha: '15 NOV 2026',
    titulo: 'Festival de Primavera Santiago',
    lugar: 'Auditorio al aire libre, Santiago',
    hora: '21:00',
    estado: 'Entradas disponibles'
  },
  {
    fecha: '22 NOV 2026',
    titulo: 'Noche de Jazz & Blues',
    lugar: 'Sala de conciertos, Santiago',
    hora: '22:30',
    estado: 'Casi agotado'
  },
  {
    fecha: '05 DIC 2026',
    titulo: 'Concierto Benéfico',
    lugar: 'Teatro, Valparaíso',
    hora: '20:00',
    estado: 'Entradas disponibles'
  },
  {
    fecha: '24 DIC 2026',
    titulo: 'Gala de Navidad',
    lugar: 'Hotel, Santiago',
    hora: '21:00',
    estado: 'Privado'
  }
];

const TESTIMONIOS = [
  {
    nombre: 'Ana Martínez',
    evento: 'Boda · Junio 2026',
    texto: 'Hicieron de nuestra boda algo mágico. Todos los invitados siguen hablando de la música. ¡100% recomendados!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    nombre: 'Empresa TechSantiago',
    evento: 'Evento corporativo · Marzo 2026',
    texto: 'Profesionalidad absoluta. Adaptaron su repertorio a nuestra marca y el resultado fue espectacular.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop'
  },
  {
    nombre: 'Festival Sonido del Sur',
    evento: 'Festival · Agosto 2026',
    texto: 'Una de las bandas más sólidas del panorama nacional. Su directo es simplemente impresionante.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
  }
];

const HISTORIA = [
  {
    año: '2009',
    titulo: 'Los inicios',
    descripcion: 'Carlos y Diego Ramírez forman la banda en un pequeño garaje de Santiago. Sus primeras actuaciones son en bares locales.'
  },
  {
    año: '2013',
    titulo: 'Primer álbum',
    descripcion: 'Lanzan "Ritmo y Alma", su primer trabajo discográfico, que alcanza el top 10 en plataformas digitales.'
  },
  {
    año: '2017',
    titulo: 'Gira nacional',
    descripcion: 'Más de 50 conciertos por todo Chile. Reconocidos como "Revelación Musical" por la revista Sonido.'
  },
  {
    año: '2020',
    titulo: 'Pausa creativa',
    descripcion: 'Durante la pandemia producen su segundo álbum en estudio, lanzando sencillos que se vuelven virales.'
  },
  {
    año: '2024',
    titulo: 'Nueva formación',
    descripcion: 'Se incorporan Lucía (teclados) y María (bajo), dando un nuevo aire a la banda con su fusión latina-jazz.'
  },
  {
    año: '2026',
    titulo: '15º aniversario',
    descripcion: 'Celebran 15 años con una gira especial por los mejores escenarios de Chile y Latinoamérica.'
  }
];