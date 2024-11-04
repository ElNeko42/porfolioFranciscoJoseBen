import type { Projects } from '@/types'

const projects: Projects = {
  title: 'Projects',
  source: 'GitHub',
  website: 'Website',
  main: [
    {
      name: 'Customer Service Chatbots',
      techstack: ['Laravel', 'Vue', 'AI', 'Tailwind CSS', 'MySQL'],
      image: 'chatbot.png',
      description:
        'I developed an intelligent chatbot using Laravel and Vue.js, designed to efficiently interact in various environments. This chatbot can perform multiple roles, such as answering frequently asked questions, providing information about products and services, and offering real-time customer support. Additionally, the chatbot is equipped with an AI system that allows it to learn and improve its performance over time, providing a personalized and effective user experience.',
      src: 'https://github.com/ElNeko42/ChatBot',
      url: 'https://github.com/ElNeko42/ChatBot'
    },
    {
      name: 'Magic Score',
      techstack: ['Ionic', 'Angular', 'Capacitor', 'TypeScript'],
      image: '3.png',
      description:
        'I developed a comprehensive app for Magic: The Gathering enthusiasts using Ionic and Angular, available for both Android and iOS. This app facilitates game tracking through intuitive counters and an easy-to-use scoreboard, enhancing the gaming experience. Leveraging Ionic’s cross-platform capabilities, the app offers a seamless and user-friendly interface across different operating systems, making it an essential tool for any Magic fan.',
      src: 'https://github.com/ElNeko42/magic-score',
      url: 'https://github.com/ElNeko42/magic-score'
    },
    {
      name: 'E-Shop Electronics',
      techstack: ['Prestashop', 'PHP', 'MySQL', 'JavaScript'],
      image: 'eshop.png',
      description:
        'This is an online store developed with PrestaShop, specifically designed for an electronics shop. The goal is to provide an efficient and attractive platform for selling electronic products, offering a smooth shopping experience for both customers and store administrators.',
      src: '',
      url: ''
    }
  ],
  // You can leave this array empty
  other: [
    {
      name: 'Virtual Museum',
      techstack: ['Unity', 'C#', 'Blender', 'Photoshop'],
      description:
        'The Virtual Museum is an application developed in Unity that allows users to explore a digital museum dedicated to video games. In this interactive environment, visitors can browse different rooms showcasing objects, art, and historical elements related to the world of video games.',
      url: 'https://github.com/ElNeko42/museo',
      src: 'https://github.com/ElNeko42/museo'
    },
    {
      name: 'Text Translator Asset for Unity',
      techstack: ['Unity', 'C#'],
      description:
        'This Unity asset is a tool developed in C# that enables text translation within a Unity project. It is designed to facilitate the localization of games or applications, allowing developers to manage multiple languages efficiently.',
      url: 'https://github.com/ElNeko42/traductor',
      src: 'https://github.com/ElNeko42/traductor'
    },
    {
      name: 'Trivia React App',
      techstack: ['Ruby', 'Iconify', 'Rust'],
      description:
        'The "Trivia React App" is a fun web application developed for trivia game enthusiasts. With a modern design and user-friendly interface, users can enjoy a unique experience, testing their knowledge across various categories and difficulty levels.',
      url: 'https://github.com/ElNeko42/Trivial-juego-sencillo',
      src: 'https://github.com/ElNeko42/Trivial-juego-sencillo'
    },
    {
      name: 'Animal Shelter Management App',
      techstack: ['Laravel', 'Vue', 'MySQL', 'Tailwind CSS'],
      description:
        'This is an open-source application developed with Laravel on the backend and Vue on the frontend, designed to help animal shelters efficiently manage their operations. The project was created as a personal initiative to support shelters in their mission to care for and find homes for animals.',
      url: 'https://github.com/johndoes/PlantWhisperer',
      src: 'https://github.com/johndoes/PlantWhisperer'
    }
  ]

}

export default projects
