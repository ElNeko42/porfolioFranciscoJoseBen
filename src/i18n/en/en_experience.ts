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
      company: 'SDWEB SOLUCIONS DIXITAIS SL',
      position: 'Analista Programador',
      url: '',
      startDate: '2024-03',
      endDate: 'Present',
      highlights: [
        'Developed scalable web applications using PHP and Laravel.',
        'Integrated third-party services and optimized API response times.',
        'Implemented caching strategies and security enhancements in Laravel and Symfony.',
        'Contributed to the migration of monolithic applications to microservices architectures.'
      ],
      description: 'Developed advanced functionalities in a travel management platform, integrating third-party services, optimizing API response times, and implementing caching and security strategies in Laravel and Symfony.'
    },
    {
      company: 'TBI Consulting Group',
      position: 'Web Developer',
      url: '',
      startDate: '2023-03',
      endDate: '2024-03',
      highlights: [
        'Developed and modernized applications with PHP and Laravel.',
        'Optimized database performance with MySQL and PostgreSQL.',
        'Worked on API development and integration using RESTful services.',
        'Ensured application security and performance improvements.'
      ],
      description: 'Focused on the development and modernization of applications using Laravel, ensuring database performance, security, and API integrations.'
    },
    {
      company: 'Irix Galicia S.L',
      position: 'Web Developer',
      url: '',
      startDate: '2022-07',
      endDate: '2023-02',
      highlights: [
        'Developed new functionalities in an inventory management application using Laravel.',
        'Refactored PHP and Java code to enhance system performance.',
        'Implemented unit and integration testing with PHPUnit and JUnit.',
        'Maintained and developed applications integrating third-party APIs.'
      ],
      description: 'Developed and maintained an inventory management application, ensuring system performance and quality through refactoring and testing.'
    },
    {
      company: 'Grupo Firmatel',
      position: 'Web Developer',
      url: '',
      startDate: '2021-02',
      endDate: '2022-06',
      highlights: [
        'Developed and maintained a human resources management application with Laravel and Vue.',
        'Implemented employee management, attendance tracking, and reporting features.',
        'Collaborated with teams to optimize internal processes and administrative efficiency.'
      ],
      description: 'Worked on a Laravel and Vue-based HR management application, optimizing processes and ensuring system efficiency.'
    }
  ]
}

export default experience
