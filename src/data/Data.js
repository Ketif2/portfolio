import AUJImage from '../assets/AUJ.png';
import EnglishImage from '../assets/English.png';
import AWSImage from '../assets/AWS.png';
import SFPCImage from '../assets/SFPC.png';
import Chaucherita from '../assets/Chaucherita.png';
import Mangata from '../assets/Mangata.png';
import PodcastParty from '../assets/Podcast.jpg';
import Recuerda from '../assets/Recuerda.png';

export const trajectoryData = [
  { year: '2025', title: 'Room Attendant', company: 'Capital Vacations - Work and Travel' },
  { year: '2024', title: 'Pasante de Procesos', company: 'Colour Republic' },
  { year: '2021 - 2025', title: 'Ingeniería en Software', company: 'Escuela Politécnica Nacional' },
  { year: '2019', title: 'Bachiller Técnico Aplicaciones Informáticas', company: 'Unidad Educativa "Juan de Salinas"' }
];

export const interestsData = [
  { name: 'Música', icon: '🎵', description: 'Explorar géneros y crear playlists' },
  { name: 'Videojuegos', icon: '🎮', description: 'Estrategia y aventuras épicas' },
  { name: 'Viajes', icon: '✈️', description: 'Descubrir culturas y lugares' },
  { name: 'Tecnología', icon: '⚡', description: 'Perfeccionar el idioma global' },
  { name: 'Inglés', icon: '🌍', description: 'Perfeccionar el idioma global' }
];

export const softSkillsData = [
  { name: 'Liderazgo', icon: '👑', description: 'Guiar equipos hacia objetivos' },
  { name: 'Comunicativo', icon: '💬', description: 'Expresar ideas con claridad' },
  { name: 'Trabajo en Equipo', icon: '🤝', description: 'Colaboración efectiva' },
  { name: 'Responsable', icon: '⭐', description: 'Compromiso y cumplimiento' },
  { name: 'Adaptable', icon: '🔄', description: 'Flexibilidad ante cambios' }
];

export const certificationsData = [
  { title: 'AUJ- Certificado de Participación', image: AUJImage,
    link: 'https://www.linkedin.com/in/kevin-revelo-flores-820262295/details/certifications/1734360092121/single-media-viewer/?type=IMAGE&profileId=ACoAAEdoIBgBESTlvgvbJAEOZEZfY8CsZVVNVx4',
    issuer: 'Adopta Un Junior', 
    description: 'El certificado refleja mi participación en la 2da edición del evento "Adopta un Junior", en el cual conformé el área de frontend, trabajé con un equipo de todo el mundo con el fin de desarrollar una solución llamada PodcastParty.' },
  
  { title: 'Engish for Developers & IT Professionals', image: EnglishImage, 
    link: 'https://www.linkedin.com/in/kevin-revelo-flores-820262295/details/certifications/1721783555202/single-media-viewer/?type=DOCUMENT&profileId=ACoAAEdoIBgBESTlvgvbJAEOZEZfY8CsZVVNVx4',
    issuer: 'Digispeak',
    description: 'Se enfoca en el vocabulario y situaciones del ámbito tecnológico. Adopta el uso correcto del verbo "to be" en diferentes tiempos, además de terminología esencial para comprender conversaciones de TI, como "code review" y "risk management".'
  },
  
  { title: 'AWS Well-Architected', image: AWSImage , 
    link: 'https://www.linkedin.com/in/kevin-revelo-flores-820262295/details/certifications/1635544009164/single-media-viewer/?type=DOCUMENT&profileId=ACoAAEdoIBgBESTlvgvbJAEOZEZfY8CsZVVNVx4',
    issuer: 'AWS',
    description: 'Certificación que valida mis conocimientos en la arquitectura de soluciones en AWS, asegurando prácticas recomendadas y eficiencia.'
  },
  
  { title: 'Scrum Foundation Professional Certificate SFPC', image: SFPCImage , 
    link: 'https://www.linkedin.com/in/kevin-revelo-flores-820262295/details/certifications/1635544008746/single-media-viewer/?type=DOCUMENT&profileId=ACoAAEdoIBgBESTlvgvbJAEOZEZfY8CsZVVNVx4',
    issuer: 'CertiProf',
    description: 'Certificación que valida mis conocimientos fundamentales en Scrum, una metodología ágil para la gestión de proyectos. Esta certificación demuestra mi compromiso en los principios y prácticas de Scrum, así como mi capacidad para aplicar estos conceptos en entornos de trabajo reales.'
  }
];

export const skillsData = [
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'React', icon: '⚛️' },
  { name: 'Kotlin', icon: '🟣' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'AWS', icon: '🟠' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Git/GitHub', icon: '📂' },
  { name: 'Azure', icon: '🔵' },
  { name: 'Bases de Datos', icon: '🗄️' },
  { name: 'Python', icon: '🐍' },
  { name: 'Java', icon: '☕' },
  { name: 'HTML / CSS', icon: '🌐' },
  { name: 'Tailwind', icon: '🎯' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Patrones de Diseño', icon: '⚙️' },
  { name: 'Netlify', icon: '🚀' },
  { name: 'Microsoft Tools', icon: '🔧' },
  { name: 'Notion', icon: '📝' }
];

export const projectsData = [
  {
    title: 'Interactive Games',
    description: 'Colección de juegos interactivos desarrollados con tecnologías web modernas. Incluye múltiples mini-juegos con interfaz intuitiva y experiencia de usuario optimizada.',
    technologies: ['JavaScript', 'HTML/CSS', 'Juegos Serios', 'Accesible', 'Usable'],
    githubUrl: 'https://github.com/Ketif2/InteractiveGames',
    liveUrl: 'https://interactive-games-alzheimer.netlify.app',
    image: Recuerda,
    category: 'Games',
    credentials: 'terapeuta@gmail.com / 12345'
  },
  {
    title: 'GT-PodcastPartys',
    description: 'Plataforma para organizar y gestionar fiestas de podcasts. Permite crear eventos, invitar participantes y gestionar contenido multimedia de forma colaborativa.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/Ketif2/GT-PodcastPartys',
    liveUrl: 'https://gt-podcast-party.vercel.app',
    linkedinUrl: 'https://www.linkedin.com/posts/franciscopm_mern-pwa-backenddevelopment-ugcPost-7269481040136585222-j2z_?utm_source=share&utm_medium=member_desktop',
    image: PodcastParty,
    category: 'Web App',
    note: 'Este fue un proyecto realizado con personas de España, nos quitaron el acceso a los datos.'
  },
  {
    title: 'Mangata',
    description: 'Página web desarrollada para un emprendimiento de bisutería artesanal. Proyecto freelance que incluye catálogo de productos, galería interactiva, pequeña presentación de la marca y redes de contacto',
    technologies: ['React', 'JavaScript', 'Tailwind'],
    githubUrl: 'https://github.com/Ketif2/Page_Mangata',
    liveUrl: 'https://mangata-ec.netlify.app',
    image: Mangata,
    category: 'Web App',
    freelanceNote: 'Proyecto desarrollado como freelancer para un cliente real'
  },
  {
    title: 'Chaucherita',
    description: 'Aplicación de gestión financiera personal desarrollada con Java Vanilla implementando arquitectura MVC y patrones de diseño como Singleton y Factory para el control de gastos e ingresos.',
    technologies: ['Java Vanilla', 'Aquitectura MVC', 'Figma', 'UI/UX'],
    githubUrl: 'https://github.com/Ketif2/Chaucherita',
    prototypeUrl: 'https://www.figma.com/proto/o3T1oP5y1VIlqKb8hoIyeu/HCI-Chaucherita?node-id=91-1021&p=f&t=vnon9s7Xkkh7wBiT-1&scaling=contain&content-scaling=fixed&page-id=3%3A32&starting-point-node-id=91%3A1021',
    image: Chaucherita,
    category: 'Prototipo de App',
    prototypeNote: 'El proyecto no fue deployado pero se creó un prototipo funcional'
  }
];

export const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'kevrevelo@hotmail.com', 
      link: 'mailto:kevrevelo@hotmail.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Kevin Revelo Flores',
      link: 'https://www.linkedin.com/in/kevin-revelo-flores-820262295/'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'Ketif2',
      link: 'https://github.com/Ketif2'
    },
    {
      icon: '📍',
      label: 'Ubicación',
      value: 'Quito, Ecuador',
      link: null
    }
  ];
