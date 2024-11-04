import type { About } from '@/types'

const about: About = {
  title: 'About',
  summary:
    "By day ☀️, I'm a software engineer with a knack for turning complex problems into simple solutions. By night 🌙, I moonlight as a connoisseur of fine memes and a hopeful astronaut. With a penchant for puns and a deep love for all things tech, I've successfully convinced my plants to tweet when they need watering. \n\n A seasoned juggler of tasks and an enthusiast of all things tech, I've mastered the art of turning coffee ☕ into code and chaos into order.",
  education: {
    title: 'Education',
    list: [
      {
        title: 'Bootcamp in Data Analysis and Artificial Intelligence',
        institution: 'Hack A Boss',
        url: '',
        description:
          'Intensive program focused on data analysis and the development of artificial intelligence solutions, preparing students to tackle advanced technological challenges.',
        startDate: '2024-01',
        endDate: '2024-06',
        courses: [
          'Data Analysis',
          'Artificial Intelligence Models',
          'Machine Learning Solutions'
        ]
      },
      {
        title: 'Advanced Technician in Multiplatform Application Development (DAM)',
        institution: 'Colexio Karbo',
        url: '',
        description:
          'Technical program focused on the development of mobile and desktop applications, utilizing modern frameworks and agile methodologies.',
        startDate: '2017-09',
        endDate: '2019-06',
        courses: [
          'Mobile Application Development',
          'Database and Information Management',
          'Computer Systems Programming'
        ]
      },
      {
        title: 'Intermediate Technician in Digital Prepress',
        institution: 'IES Calvo Sotelo',
        url: '',
        description:
          'Technical course centered on the preparation and production of digital graphic materials, with knowledge in graphic design and specialized software handling.',
        startDate: '2015-09',
        endDate: '2017-06',
        courses: [
          'Prepress Techniques',
          'Digital Graphic Design',
          'Graphic Material Production'
        ]
      },
    ]  
  },
  // achievements: {
  //   title: 'Achievements',
  //   list: [
  //     {
  //       title: "World's Best Armchair Astronaut",
  //       date: '2023-04',
  //       url: 'https://website/news/worlds-best-armchair-astronaut',
  //       awarder: 'Galactic Couch Potato Association',
  //       summary:
  //         "Awarded for outstanding achievements in the field of amateur space exploration from the comfort of one's living room. Recognized for over 500 hours of logged telescope time pointed at the TV screen, simulating a journey across the cosmos while never actually leaving the sofa."
  //     },
  //     {
  //       title: 'Supreme Overlord of Spreadsheet Sorcery',
  //       date: '2022-11',
  //       url: 'https://website/news/spreadsheet-sorcery',
  //       awarder: 'International League of Data Wizards',
  //       summary:
  //         'Honored for transforming ordinary spreadsheets into dazzling arrays of formulas and charts that not only compute complex datasets but also tell compelling stories, perform light shows, and occasionally predict the weather.'
  //     },
  //     {
  //       title: 'Grand Champion of Procrastination',
  //       date: '2024-01',
  //       url: 'https://website/news/procrastination-champ',
  //       awarder: 'Global Guild of Time Wasters',
  //       summary:
  //         'Awarded for successfully putting off a 10-minute task for over 6 months, a remarkable demonstration of procrastination skills, turning the act of delaying into an art form, and finally completing the task during a commercial break.'
  //     },
  //     {
  //       title: 'Lifetime Achievement in Snack Innovation',
  //       date: '2023-03',
  //       url: 'https://website/news/snack-innovation',
  //       awarder: 'Snack Lovers Federation',
  //       summary:
  //         'Recognized for a lifelong dedication to creating the perfect snack combinations that balance salty, sweet, crunchy, and gooey in one bite. Famous for inventing the chocolate-covered pretzel marshmallow nacho.'
  //     }
  //   ]
  // }
}

export default about
