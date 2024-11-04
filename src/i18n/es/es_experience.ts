import type { Experience } from '@/types'

const experience: Experience = {
  title: 'Experiencia',
  description: 'Puedes ver mi currículum haciendo clic en el siguiente botón.',
  download_button: 'Descargar CV',
  present: 'Presente',
  month: 'mes | meses',
  year: 'año | años',
  list: [
    {
      company: 'SDWeb',
      position: 'Desarrollador Web Full Stack',
      url: '',
      startDate: '2024-03',
      endDate: 'Presente',
      highlights: [
        'Desarrollé funcionalidades en Symfony para una aplicación de gestión de universidades y centros educativos.',
        'Creé servicios web para enviar datos académicos a la intranet del centro (Drupal) y Moodle.',
        'Implementé módulos para la gestión de datos económicos y la generación de exportadores de Excel.',
        'Realicé mejoras significativas en el rendimiento del sistema y optimización de procesos.'
    ],
    description: 'Desarrollé en Symfony funcionalidades para una aplicación de gestión de universidades y centros educativos, integrando servicios web con plataformas como Drupal y Moodle, y mejorando el rendimiento general del sistema.'    
    },
    {
      company: 'TBI Consulting Group',
      position: 'Desarrollador Web Full Stack',
      url: '',
      startDate: '2023-09',
      endDate: '2024-03',
      highlights: [
        'Desarrollé una aplicación de gestión de viajes para el Camino de Santiago, mejorando la planificación y seguimiento de rutas.',
        'Migré la aplicación original de PHP nativo a Laravel, modernizando la arquitectura y mejorando la escalabilidad.',
        'Implementé funcionalidades avanzadas como gestión de reservas, seguimiento de etapas, y generación de informes de viaje.',
        'Optimicé la experiencia del usuario y la eficiencia del sistema mediante una interfaz más intuitiva y un rendimiento mejorado.'
    ],
    description: 'Estuve desarrollando una aplicación de gestión de viajes para el Camino de Santiago, modernizando la aplicación original al migrarla de PHP nativo a Laravel, con un enfoque en mejorar la funcionalidad, escalabilidad y experiencia del usuario.'
    
    },
    {
      company: 'Alia Technologies',
      position: 'Desarrollador Web Full Stack',
      url: '',
      startDate: '2023-03',
      endDate: '2023-06',
      highlights: [
        'Contribuí a la finalización de una aplicación de gestión para una empresa de limpieza utilizando Laravel y Vue.',
        'Aseguré un alto rendimiento y capacidad de respuesta en la aplicación.',
        'Colaboré en la implementación de funcionalidades clave para la gestión operativa y administrativa.'
    ],
    description: 'Estuve ayudando a finalizar un proyecto de una aplicación de gestión para una empresa de limpieza, enfocándome en asegurar la calidad, eficiencia y rendimiento del sistema.'    
    },
    {
      company: 'Irix Galicia',
      position: 'Desarrollador Web',
      url: '',
      startDate: '2022-07',
      endDate: '2022-11',
      highlights: [
        'Implementé nuevas funcionalidades y optimicé las existentes.',
        'Trabajé en diversos proyectos utilizando tecnologías web modernas.',
        'Desarrollé una aplicación de gestión para una empresa maderera.'
    ],
    description: 'Estuve desarrollando una aplicación de gestión para una empresa maderera y manteniendo páginas web para clientes, enfocándome en mejorar la experiencia del usuario y el rendimiento.'
    
    },
    {
      company: 'Grupo Firmatel',
      position: 'Programador Web',
      url: '',
      startDate: '2021-02',
      endDate: '2022-06',
      highlights: [
        'Desarrollé y mantuve una aplicación de gestión de recursos humanos con Laravel y Vue.',
        'Implementé funcionalidades clave como la gestión de empleados, control de asistencia, y generación de informes.',
        'Colaboré con equipos multidisciplinarios para optimizar procesos internos y mejorar la eficiencia administrativa.'
    ],
      description: 'Trabajé como desarrollador web utilizando Laravel y Vue, desarrollando una aplicación de gestión de recursos humanos. Implementé funcionalidades clave como la gestión de empleados, control de asistencia, generación de informes, y seguimiento de evaluaciones de desempeño, optimizando procesos internos y mejorando la eficiencia administrativa.'
    }
  ]

}

export default experience
