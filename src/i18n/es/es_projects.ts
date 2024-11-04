import type { Projects } from '@/types'

const projects: Projects = {
  title: 'Proyectos',
  source: 'GitHub',
  website: 'Sitio Web',
  main: [
    {
      name: 'Chabots de atención al cliente',
      techstack: ['Laravel', 'Vue', 'IA', 'Tailwind CSS','MySQL'],
      image: 'chatbot.png',
      description:
        'Desarrollé un chatbot inteligente utilizando Laravel y Vue.js que está diseñado para interactuar de manera eficiente en diversos entornos. Este chatbot es capaz de desempeñar múltiples roles, como responder preguntas frecuentes, proporcionar información sobre productos y servicios, y ofrecer asistencia al cliente en tiempo real. Además, el chatbot está equipado con un sistema de IA que le permite aprender y mejorar su rendimiento con el tiempo, brindando una experiencia de usuario personalizada y efectiva.',
      src: 'https://github.com/ElNeko42/ChatBot',
      url: 'https://github.com/ElNeko42/ChatBot'
    },
    {
      name: 'Magic score',
      techstack: ['Ionic', 'Angular', 'Capacitor', 'TypeScript'],
      image: '3.png',
      description:
        'Desarrollé una aplicación integral para aficionados a Magic: The Gathering, utilizando Ionic y Angular, disponible tanto para Android como para iOS. Esta aplicación facilita el seguimiento de las partidas mediante contadores intuitivos y un marcador fácil de usar, mejorando la experiencia de juego. Aprovechando las capacidades multiplataforma de Ionic, la app ofrece una interfaz homogénea y amigable para usuarios en diferentes sistemas operativos, siendo una herramienta indispensable para cualquier aficionado a Magic',
      src: 'https://github.com/ElNeko42/magic-score',
      url: 'https://github.com/ElNeko42/magic-score'
    },
    {
      name: 'Eshop eletronica',
      techstack: ['Prestashop', 'PHP', 'MySQL', 'JavaScript'],
      image: 'eshop.png',
      description:
        'Esta es una tienda online desarrollada con PrestaShop, específicamente diseñada para una tienda de electrónica. El objetivo es proporcionar una plataforma eficiente y atractiva para la venta de productos electrónicos, ofreciendo una experiencia de compra fluida tanto para el cliente como para el administrador de la tienda.',
      src: '',
      url: ''
    }
  ],
  // Puedes dejar este arreglo vacío
  other: [
    {
      name: 'Museo virtual',
      techstack: ['Unity', 'C#', 'Blender', 'Photoshop'],
      description:
        'El Museo Virtual es una aplicación desarrollada en Unity que permite a los usuarios explorar un museo digital dedicado a los videojuegos. En este entorno interactivo, los visitantes pueden recorrer diferentes salas que exhiben objetos, arte, y elementos históricos relacionados con el mundo de los videojuegos',
      url: 'https://github.com/ElNeko42/museo',
      src: 'https://github.com/ElNeko42/museo'
    },
    {
      name: 'Traductor Assect para Unity',
      techstack: ['Unity', 'C#'],
      description:
        'Este Asset de Unity es una herramienta desarrollada en C# que permite la traducción de textos dentro de un proyecto de Unity. Está diseñado para facilitar la localización de juegos o aplicaciones, permitiendo a los desarrolladores gestionar múltiples idiomas de manera eficiente',
      url: 'https://github.com/ElNeko42/traductor',
      src: 'https://github.com/ElNeko42/traductor'
    },
    {
      name: 'Trivia React App',
      techstack: ['Ruby', 'Iconify', 'Rust'],
      description:
        'La "Trivia React App" es una divertida aplicación web desarrollada para aficionados a los juegos de trivia. Con un diseño moderno y una interfaz amigable, los usuarios pueden disfrutar de una experiencia única, poniendo a prueba sus conocimientos en diferentes categorías y niveles de dificultad.',
      url: 'https://github.com/ElNeko42/Trivial-juego-sencillo',
      src: 'https://github.com/ElNeko42/Trivial-juego-sencillo'
    },
    {
      name: 'App gestión refugio Animales',
      techstack: ['Laravel', 'Vue', 'MySQL','Tailwind CSS'],
      description:
        'Esta es una aplicación open-source desarrollada con Laravel en el backend y Vue en el frontend, diseñada para ayudar a los refugios de animales a gestionar sus operaciones de manera eficiente. El proyecto fue creado como una iniciativa personal para apoyar a los refugios en su labor de cuidado y adopción de animales',
      url: 'https://github.com/johndoes/PlantWhisperer',
      src: 'https://github.com/johndoes/PlantWhisperer'
    }
  ]
}

export default projects
