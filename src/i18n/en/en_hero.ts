import type { Hero } from '@/types'

const hero: Hero = {
  title: 'Hello, I am Francisco Jose Ben Ramírez',
  subtitle:
    'Full Stack Developer specialized in Laravel, Vue, React, and Java. Creator of interactive experiences in video games with Unity',
  name: 'Francisco Jose Ben Ramírez',
  url: '',
  contact_button: 'Contact Me',
  //If a profile has an empty string '', the button will not be rendered
  profiles: {
    linkedin: 'https://www.linkedin.com/in/francisco-josé-ben-ramirez/',
    github: 'https://github.com/ElNeko42',
    youtube: '',
    twitter: '',
    instagram: '',
    facebook: ''
  },
  home: 'Home'
}

export default hero
