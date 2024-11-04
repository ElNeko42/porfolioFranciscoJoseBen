import type { Experience } from '@/types'

const experience: Experience = {
  title: 'Experience',
  description: 'You can download my resume by clicking the button below.',
  download_button: 'Download CV',
  present: 'Present',
  month: 'month | months',
  year: 'year | years',
  list: [
    {
      company: 'SDWeb',
      position: 'Full Stack Web Developer',
      url: '',
      startDate: '2024-03',
      endDate: 'Present',
      highlights: [
        'Developed functionalities in Symfony for a university and educational center management application.',
        'Created web services to send academic data to the institution’s intranet (Drupal) and Moodle.',
        'Implemented modules for managing financial data and generating Excel exports.',
        'Achieved significant performance improvements and optimized processes.'
      ],
      description: 'Developed functionalities in Symfony for a university and educational center management application, integrating web services with platforms like Drupal and Moodle, and improving overall system performance.'
    },
    {
      company: 'TBI Consulting Group',
      position: 'Full Stack Web Developer',
      url: '',
      startDate: '2023-09',
      endDate: '2024-03',
      highlights: [
        'Developed a travel management application for the Camino de Santiago, enhancing route planning and tracking.',
        'Migrated the original application from native PHP to Laravel, modernizing the architecture and improving scalability.',
        'Implemented advanced features such as reservation management, stage tracking, and travel report generation.',
        'Optimized user experience and system efficiency through a more intuitive interface and improved performance.'
      ],
      description: 'Developed a travel management application for the Camino de Santiago, modernizing the original application by migrating it from native PHP to Laravel, focusing on improving functionality, scalability, and user experience.'
    },
    {
      company: 'Alia Technologies',
      position: 'Full Stack Web Developer',
      url: '',
      startDate: '2023-03',
      endDate: '2023-06',
      highlights: [
        'Contributed to the completion of a management application for a cleaning company using Laravel and Vue.',
        'Ensured high performance and responsiveness in the application.',
        'Collaborated in the implementation of key functionalities for operational and administrative management.'
      ],
      description: 'Assisted in the completion of a management application project for a cleaning company, focusing on ensuring system quality, efficiency, and performance.'
    },
    {
      company: 'Irix Galicia',
      position: 'Web Developer',
      url: '',
      startDate: '2022-07',
      endDate: '2022-11',
      highlights: [
        'Implemented new functionalities and optimized existing ones.',
        'Worked on various projects using modern web technologies.',
        'Developed a management application for a timber company.'
      ],
      description: 'Developed a management application for a timber company and maintained client websites, focusing on improving user experience and performance.'
    },
    {
      company: 'Grupo Firmatel',
      position: 'Web Programmer',
      url: '',
      startDate: '2021-02',
      endDate: '2022-06',
      highlights: [
        'Developed and maintained a human resources management application with Laravel and Vue.',
        'Implemented key functionalities such as employee management, attendance tracking, and report generation.',
        'Collaborated with multidisciplinary teams to optimize internal processes and enhance administrative efficiency.'
      ],
      description: 'Worked as a web developer using Laravel and Vue, developing a human resources management application. Implemented key functionalities such as employee management, attendance tracking, report generation, and performance evaluation tracking, optimizing internal processes and improving administrative efficiency.'
    }
  ]

}

export default experience
