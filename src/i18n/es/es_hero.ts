import type { Hero } from '@/types'

const hero: Hero = {
  title: 'Hola, soy Francisco Jose Ben Ramírez',
  subtitle:
    'Desarrollador Full Stack especializado en Laravel, Vue, React y Java. Creador de experiencias interactivas en videojuegos con Unity',
  name: 'Francisco Jose Ben Ramírez',
  url: '',
  contact_button: 'Contáctame',
  //Si un perfil tiene una cadena vacía '', el botón no se renderizará
  profiles: {
    linkedin: 'https://www.linkedin.com/in/francisco-josé-ben-ramirez/',
    github: 'https://github.com/ElNeko42',
    youtube: '',
    twitter: '',
    instagram: '',
    facebook: ''
  },
  home: 'Inicio'
}

export default hero
