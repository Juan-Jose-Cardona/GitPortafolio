export type PortfolioAction = {
  label: string;
  href: string;
  external?: boolean;
  download?: boolean;
};

export type PortfolioMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
  href?: string;
  external?: boolean;
  download?: boolean;
};

export type PortfolioItem = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  details?: string[];
  actions?: PortfolioAction[];
  media?: PortfolioMedia;
  color: string;
};

export type PortfolioSystem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  media?: PortfolioMedia;
  accent: string;
  items: PortfolioItem[];
};

export type PortfolioSelection =
  | {
      type: "system";
      system: PortfolioSystem;
    }
  | {
      type: "item";
      system: PortfolioSystem;
      item: PortfolioItem;
    };

export const portfolioSystems: PortfolioSystem[] = [
  {
    id: "perfil",
    title: "Perfil",
    subtitle: "Presentación profesional",
    description:
      "Estudiante de Ingeniería Multimedia con interés y experiencia en el campo del diseño digital y la programación. He desarrollado proyectos académicos usando herramientas como Visual Studio Code, Blender y Adobe Creative Cloud. Me enfoco en el cumplimiento de metas mientras fortalezco mis habilidades mediante proyectos reales.",
    media: {
      type: "image",
      src: "/project-media/profile.png",
      alt: "Imagen de presentación del perfil profesional",
    },
    accent: "#f6b73c",
    items: [
      {
        id: "resumen",
        title: "Resumen profesional",
        eyebrow: "Sobre mí",
        description:
          "Estudiante de Ingeniería Multimedia, con una gran pasión por el diseño digital y con la habilidad de desarrollar experiencias web interactivas. Me interesa la creación de interfaces modernas y visualmente atractivas, con un enfoque en la experiencia del usuario.",
        details: [
          "Enfoque en diseño atractivo.",
          "Interés por proyectos interactivos y experiencias visuales.",
        ],
        color: "#f6b73c",
      },
      {
        id: "objetivo",
        title: "Objetivo profesional",
        eyebrow: "Meta",
        description:
          "Construir soluciones que combinen las habilidades de programación, diseño visual y buena experiencia de usuario.",
        details: [
          "Fortalecer habilidades laborales.",
          "Participar en proyectos reales o académicos con impacto visual.",
        ],
        color: "#ff8c42",
      },
      {
        id: "fortalezas",
        title: "Fortalezas",
        eyebrow: "Valor diferencial",
        description:
          "Organización, creatividad, aprendizaje constante y atención al detalle en la construcción de interfaces.",
        details: [
          "Disposición para investigar y resolver problemas.",
          "Interés por mejorar la calidad visual del producto final.",
        ],
        color: "#ffd166",
      },
    ],
  },
  {
    id: "habilidades",
    title: "Habilidades",
    subtitle: "Tecnologías y herramientas",
    description:
      "Tecnologías principales usadas en el desarrollo del portafolio y en proyectos académicos.",
    accent: "#44d7b6",
    items: [
      {
        id: "react",
        title: "Diseño Gráfico",
        eyebrow: "Diseño en 2D y 3D",
        description:
          "Dominio de programas de software de diseño para crear interfaces visuales atractivas.",
        details: [
          "Experiencia con Adobe Illustrator, Photoshop y After Effects.",
          "Dominio de Blender para modelado 3D y animaciones.",
          "Conocimiento de teoría del color, tipografía y composición visual para interfaces web.",
        ],
        color: "#61dafb",
      },
      {
        id: "javascript",
        title: "Programación",
        eyebrow: "HTML, CSS y JavaScript",
        description:
          "Lógica de interacción, estructuras de datos, funciones y comportamiento dinámico en la página, junto con una estructura semántica, estilos responsivos, animaciones y composición visual del espacio.",
        details: [
          "Eventos de usuario.",
          "Arreglos y objetos para manejar información.",
          "Funciones para organizar la lógica visual.",
          "Diseño por medio de CSS.",
          "Organización visual por secciones.",
          "Uso de GitHub para versionamiento y publicación del proyecto.",
        ],
        color: "#f7df1e",
      },
      {
        id: "html-css",
        title: "Autonomía y Colaboración",
        eyebrow: "Social y colaborativo",
        description:
          "Capacidad para trabajar de manera autónoma y en equipo en entornos colaborativos para resolver problemas.",
        details: [
          "Puntualidad y compromiso con los plazos.",
          "Proactividad en la resolución de problemas.",
          "Cumplimiento de los objetivos establecidos por los superiores.",
          "Comunicación decente y efectiva con compañeros de equipo.",
        ],
        color: "#7aa2ff",
      },
      {
        id: "github",
        title: "Actitud y Aptitud",
        eyebrow: "Comportamiento laboral",
        description:
          "Comportamiento profesional en entornos de trabajo establecidos.",
        details: [
          "Organización del tiempo y los recursos en el espacio laboral.",
          "Cumplimiento de los horarios y tareas asignadas.",
          "Atención en la ejecución de tareas.",
        ],
        color: "#c9d1d9",
      },
    ],
  },
  {
    id: "proyectos",
    title: "Proyectos",
    subtitle: "Trabajos destacados",
    description:
      "Espacio para mostrar proyectos académicos, prácticas y desarrollos personales.",
    accent: "#8f7cff",
    items: [
      {
        id: "segundo-parcial",
        title: "Rampage Rally Landing Challenge",
        eyebrow: "Modelado 3D",
        description:
          "Proyecto de Blender que hace uso de uno de los retos del canal Pwnisher.",
        media: {
          type: "video",
          src: "/project-media/StarFox_RampChallenge.mp4",
          alt: "Vista previa del proyecto Rampage Rally Landing Challenge",
        },
        details: [
          "Modelado de assets y materiales desde cero.",
          "Efectos creados desde cero.",
          "Adaptación de la composición entregada por el canal Pwnisher.",
        ],
        color: "#8f7cff",
      },
      {
        id: "space-scene",
        title: "Letra Dinámica",
        eyebrow: "Práctica académica adaptada: “Bonde do Brunão” - Bruno Mars (2025)",
        description:
          "Un video de lírica musical que muestra la letra de la canción de forma dinámica.",
        media: {
          type: "video",
          src: "/project-media/MainCompLyricsParcial2_V1.mp4",
          alt: "Vista previa del proyecto Letra Dinámica",
        },
        details: [
          "Uso de After Effects y sus extensiones.",
          "Aplicación de assets editados en Illustrator y Photoshop.",
          "El fondo azul oscuro mantiene una identidad visual profesional.",
        ],
        color: "#6ea8ff",
      },
      {
        id: "documentacion",
        title: "Página web interactiva",
        eyebrow: "README",
        description:
          "Desarrollo de la página web interactiva para la escuela Adelante Selby, dirigida a niños con dificultades de aprendizaje.",
        media: {
          type: "image",
          src: "/project-media/AdelanteSelby.png",
          alt: "Vista previa del proyecto Página web interactiva",
          href: "https://eduk12.us/",
          external: true,
        },
        details: [
          "Uso de elementos HTML, JavaScript y CSS.",
          "Trabajo en equipo de tres integrantes para el desarrollo del proyecto.",
          "Organización de versiones en GitHub.",
        ],
        color: "#d5b3ff",
      },
      {
        id: "proyecto-cuatro",
        title: "Cascanueces",
        eyebrow: "Proyecto académico: anuncio modelado en 3D",
        description:
          "Anuncio publicitario para la tienda de pasteles Cascanueces.",
        media: {
          type: "video",
          src: "/project-media/cascaComp.mp4",
          alt: "Video del proyecto Cascanueces",
        },
        details: [
          "Aplica plugins de Blender.",
          "Manejo de secuencias de cámara.",
          "Retoques en After Effects.",
        ],
        color: "#b8f7ff",
      },
      {
        id: "proyecto-cinco",
        title: "Cuña publicitaria: Coca-Cola",
        eyebrow: "Proyecto académico: anuncio modelado en After Effects",
        description:
          "Cuña publicitaria para la marca Coca-Cola, con una duración de 10 segundos. Muestra un producto de la marca y su mensaje publicitario.",
        media: {
          type: "video",
          src: "/project-media/anuncioV2.mp4",
          alt: "Cuña publicitaria del proyecto Coca-Cola",
        },
        details: [
          "Nivel intermedio de After Effects.",
          "Aplicación de UV Maps en Blender.",
          "Integración 3D en After Effects.",
        ],
        color: "#ffcf70",
      },
      {
        id: "proyecto-seis",
        title: "Tiburón low poly",
        eyebrow: "Modelado 3D",
        description:
          "Modelado básico low poly en Blender con un escenario para el animal.",
        media: {
          type: "image",
          src: "/project-media/Shark.png",
          alt: "Tiburón low poly",
        },
        details: [
          "Uso de herramientas de modelado en Blender.",
          "Ajustes de la composición.",
          "Desarrollo de efectos y partículas del escenario.",
        ],
        color: "#ff9ed1",
      },
      {
        id: "proyecto-siete",
        title: "Caminata Zombie",
        eyebrow: "Modelado 3D: Zombie Walk Cycle",
        description:
          "Ciclo de caminata zombie con ambiente tétrico. Modelado desde cero en Blender, con texturas y animación de caminata.",
        media: {
          type: "video",
          src: "/project-media/ZombieWalkV1.mkv",
          alt: "Zombie Walk Cycle",
        },
        details: [
          "Animación capturada por mocap.",
          "Efectos especiales de cámara.",
          "Uso de Weight Maps.",
        ],
        color: "#a5ffce",
      },
      {
        id: "proyecto-ocho",
        title: "Logo animado",
        eyebrow: "Proyecto académico: postproducción de logo animado",
        description:
          "Animación de un logo para una empresa ficticia, realizada con técnicas de postproducción en After Effects.",
        media: {
          type: "video",
          src: "/project-media/logo_anuncio_ejemplo_1.mp4",
          alt: "logo animado",
        },
        details: [
          "Animación en keyframe en After Effects.",
          "Uso de Illustrator para crear los assets necesarios.",
          "Búsqueda de assets en Magnific.",
        ],
        color: "#ffb3a7",
      },
      {
        id: "proyecto-nueve",
        title: "Anuncio publicitario en 2D",
        eyebrow: "Anuncio publicitario. Diseño en 2D",
        description:
          "Anuncio publicitario de la marca ficticia SCROLL K. Diseñado en 2D por medio de herramientas de Creative Cloud como lo son Illustrator, Photoshop y After Effects.",
        media: {
          type: "video",
          src: "/project-media/Tutorial.mp4",
          alt: "Anuncio publicitario en 2D",
        },
        details: [
          "Edición de assets en Photoshop.",
          "Desarrollo de los elementos en Illustrator.",
          "Edición de la animación en After Effects.",
        ],
        color: "#cdb4ff",
      },
    ],
  },
  {
    id: "experiencia",
    title: "Educación",
    subtitle: "Formación académica",
    description:
      "Historial académico y certificaciones relevantes para el mundo laboral.",
    accent: "#ff6b8a",
    items: [
      {
        id: "desarrollo-web",
        title: "Bachillerato. Educación Media",
        eyebrow: "Colegio San Luis Gonzaga",
        description:
          "Formación académica en el Colegio San Luis Gonzaga desde la primaria hasta grado 11 de bachillerato.",
        details: [
          "Agosto 2012 - junio 2023",
        ],
        color: "#ff6b8a",
      },
      {
        id: "trabajo-equipo",
        title: "Universidad. Carrera Profesional",
        eyebrow: "Universidad de San Buenaventura",
        description:
          "Estudio de una carrera profesional en la Universidad de San Buenaventura. Actualmente en curso, en séptimo semestre.",
        details: [
          "Julio 2023 - actualmente",
        ],
        color: "#ff9bb0",
      },
      {
        id: "resolucion",
        title: "Cursos Online",
        eyebrow: "Aprendizaje autónomo",
        description:
          "Cursos online estudiados de manera autodidacta para fortalecer habilidades y conocimientos.",
        details: [
          "Modelado en Blender para intermedios. (2025)",
        ],
        color: "#ffc2d1",
      },
    ],
  },
  {
    id: "contacto",
    title: "Contacto",
    subtitle: "Canales profesionales",
    description:
      "Información de contacto y enlaces para conectar o descargar la hoja de vida.",
    accent: "#4cc9f0",
    items: [
      {
        id: "telefono",
        title: "Número de contacto",
        eyebrow: "Teléfono",
        description:
          "Contáctame personalmente a través de este número de teléfono. Puedes llamarme o enviar un mensaje de texto.",
        details: ["Teléfono principal: +57 305 459 2452"],
        actions: [
          {
            label: "Llamar",
            href: "tel:+573054592452",
          },
        ],
        color: "#4cc9f0",
      },
      {
        id: "correos",
        title: "Dirección de correo",
        eyebrow: "Email",
        description:
          "Correo electrónico por el cual puedes contactarme.",
        details: [
          "Correo 1: cardonajuanjose1987@gmail.com",
          "Correo 2: sernacardona1304@gmail.com",
        ],
        actions: [
          {
            label: "Enviar correo",
            href: "mailto:cardonajuanjose1987@gmail.com", 
          },
        ],
        color: "#80ffdb",
      },
      {
        id: "linkedin",
        title: "LinkedIn",
        eyebrow: "Red profesional",
        description:
          "Enlace directo al perfil profesional de LinkedIn.",
        actions: [
          {
            label: "Abrir LinkedIn",
            href: "https://www.linkedin.com/in/josé-cardona-serna-774072388",
            external: true,
          },
        ],
        color: "#0a66c2",
      },
      {
        id: "cv-pdf",
        title: "Hoja de vida",
        eyebrow: "PDF",
        description:
          "Botón para descargar la hoja de vida en PDF.",
        actions: [
          {
            label: "Descargar PDF",
            href: "./cv.pdf",
            download: true,
          },
        ],
        color: "#ffffff",
      },
    ],
  },
];