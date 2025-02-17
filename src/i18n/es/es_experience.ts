import type { Experience } from '@/types'

const experience: Experience = {
  title: 'Experiencia',
  description: 'Puedes descargar mi currículum haciendo clic en el botón de abajo.',
  download_button: 'Descargar CV',
  present: 'Presente',
  month: 'mes | meses',
  year: 'año | años',
  list: [
    {
      company: 'SDWEB SOLUCIONS DIXITAIS SL',
      position: 'Analista Programador',
      url: '',
      startDate: '2024-03',
      endDate: 'Presente',
      highlights: [
        'Desarrollo de aplicaciones web escalables utilizando PHP y Laravel.',
        'Integración de servicios de terceros y optimización de tiempos de respuesta en APIs.',
        'Implementación de estrategias de caching y seguridad en Laravel y Symfony.',
        'Participación en la migración de aplicaciones monolíticas a arquitecturas de microservicios.'
      ],
      description: 'Desarrollo de funcionalidades avanzadas en una plataforma de gestión de viajes, integrando servicios de terceros, optimizando tiempos de respuesta en APIs y mejorando la seguridad con Laravel y Symfony.'
    },
    {
      company: 'TBI Consulting Group',
      position: 'Desarrollador Web',
      url: '',
      startDate: '2023-03',
      endDate: '2024-03',
      highlights: [
        'Desarrollo y modernización de aplicaciones con PHP y Laravel.',
        'Optimización del rendimiento de bases de datos con MySQL y PostgreSQL.',
        'Desarrollo e integración de APIs RESTful.',
        'Mejoras en seguridad y rendimiento de aplicaciones.'
      ],
      description: 'Enfoque en el desarrollo y modernización de aplicaciones con Laravel, garantizando un alto rendimiento en bases de datos, seguridad y desarrollo de APIs.'
    },
    {
      company: 'Irix Galicia S.L',
      position: 'Desarrollador Web',
      url: '',
      startDate: '2022-07',
      endDate: '2023-02',
      highlights: [
        'Desarrollo de nuevas funcionalidades en una aplicación de gestión de inventarios con Laravel.',
        'Refactorización de código en PHP y Java para mejorar el rendimiento del sistema.',
        'Implementación de pruebas unitarias y de integración con PHPUnit y JUnit.',
        'Mantenimiento y desarrollo de aplicaciones con integración de APIs de terceros.'
      ],
      description: 'Desarrollo y mantenimiento de una aplicación de gestión de inventarios, asegurando el rendimiento del sistema mediante refactorización y pruebas automatizadas.'
    },
    {
      company: 'Grupo Firmatel',
      position: 'Desarrollador Web',
      url: '',
      startDate: '2021-02',
      endDate: '2022-06',
      highlights: [
        'Desarrollo y mantenimiento de una aplicación de gestión de recursos humanos con Laravel y Vue.',
        'Implementación de funcionalidades clave como gestión de empleados, control de asistencia y generación de informes.',
        'Colaboración con equipos multidisciplinarios para optimizar procesos internos y mejorar la eficiencia administrativa.'
      ],
      description: 'Desarrollo de una aplicación de gestión de recursos humanos basada en Laravel y Vue, optimizando procesos y asegurando la eficiencia del sistema.'
    }
  ]
}

export default experience
