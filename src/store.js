import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: null,
    overviewInformation: {
      name: 'Lê Anh Vũ',
      role: 'Frontend Developer',
      aboutMe: 'A developer who enthuses on the beauty of the details and the delicacy of every block I create. Nowadays, technology changes day by day, knowing how to learn keep me always Up-to-Date.',
      email: 'vu.leanh2199@gmail.com',
      linkedin: 'www.linkedin.com/in/la-vu',
      city: 'Hồ Chí Minh',
      country: 'Việt Nam',
      currentCompany: 'I-ON Digital Corp',
      birth: 1999,
    },
    keySkills: [
      {
        skillName: 'Javascript',
        description: 'JS',
        rating: 3,
      },
      {
        skillName: 'HTML',
        description: 'HTML',
        rating: 4,
      },
      {
        skillName: 'CSS',
        description: 'CSS - Bootstrap - SCSS',
        rating: 4,
      },
      {
        skillName: 'Vue.js',
        description: 'Vue.js - Vuex - Vue Router - Nuxt.js',
        rating: 3.2,
      },
      {
        skillName: 'ReactJS',
        description: 'ReactJS',
        rating: 2.2,
      },
      {
        skillName: 'Python',
        description: 'Python',
        rating: 3,
      },
      {
        skillName: 'GIT',
        description: 'GIT, GIT flow',
        rating: 4,
      },
      {
        skillName: 'Scrum',
        description: 'Scrum, Agile',
        rating: 4,
      },
    ],
    workExperience: [
      {
        company: 'I-ON Digital Corp',
        time: '(09/2020 - now)',
        role: 'Front-end Web Developer',
        image: '../../../assets/ion.jpg',
        responsibility: [
          'Maintain, improve existing project',
          'Apply new feature',
          'Write document for system flow',
        ],
        achivement: [

        ],
        projects: [
        ],
        technicalSkillSet: [
          'Vue.js',
          'Vue Router',
          'Vuex',
          'Nuxt.js',
          'Vuetify',
          'Javascript',
          'React',
          'HTML',
          'CSS - Bootstrap - SCSS',
          'English',
          'Scrum',
        ],
      },
      {
        company: 'Linkbynet Vietnam',
        time: '(10/2019 - 02/2020)',
        role: 'Front-end Web Developer Intern',
        image: '../../../assets/lbn.jpg',
        responsibility: [
          'Design, build 2 web pages',
          'Maintain, develop existing web pages',
          'Research, apply new technology to project if needed',
        ],
        achivement: [
        ],
        projects: [
          {
            projectName: 'Ticket Page',
            description: 'A web page for displaying ticket\'s information and creating ticket',
            time: '',
            teamSize: '5',
            role: 'Frontend Web Developer',
            responsibility: [
              '1',
              '2',
              '3',
            ],
            technology: [
              'Javascript',
              'Vuejs',
              'Vuex',
              'HTML',
              'CSS',
              'Bootstrap4',
              'English',
            ],
          },
        ],
        technicalSkillSet: [
          'Vue.js',
          'Vuex',
          'Javascript',
          'HTML',
          'CSS - Bootstrap - SCSS',
        ],
      },
      {
        company: 'Teky Academy',
        time: '(08/2020 - now)',
        role: 'Programing Teacher (part-time)',
        image: '../../../assets/teky.jpg',
        responsibility: [
          'Design, build lessons plan',
          'Teaching, training',
          'Evaluate, classify students',
        ],
        achivement: [
        ],
        projects: [
        ],
        technicalSkillSet: [
          'Python',
          'English',
        ],
      },
    ],
    personalProjects: [
      {
        projectName: 'Ticket Page',
        description: 'A web page for displaying ticket\'s information and creating ticket',
        time: '',
        teamSize: '5',
        role: 'Frontend Web Developer',
        responsibility: '',
        technology: [
          'Javascript',
          'Vuejs',
          'Vuex',
          'HTML',
          'CSS',
          'Bootstrap4',
        ],
      },
      {
        projectName: 'Ticket Page',
        description: 'A web page for displaying ticket\'s information and creating ticket',
        time: '',
        teamSize: '5',
        role: 'Frontend Web Developer',
        responsibility: '',
        technology: [
          'Javascript',
          'Vuejs',
          'Vuex',
          'HTML',
          'CSS',
          'Bootstrap4',
        ],
      },
      {
        projectName: 'Ticket Page',
        description: 'A web page for displaying ticket\'s information and creating ticket',
        time: '',
        teamSize: '5',
        role: 'Frontend Web Developer',
        responsibility: '',
        technology: [
          'Javascript',
          'Vuejs',
          'Vuex',
          'HTML',
          'CSS',
          'Bootstrap4',
        ],
      },
    ],
    education: [
      {
        schoolName: 'VNUHCM - University of Science',
        degree: 'Bachelor degree',
        major: 'Information Technology',
        description: [
          'Online studying',
        ],
        color: 'blue',
        subtext: '',
      },
      {
        schoolName: 'INTEK Institute',
        degree: 'Certificate',
        major: 'Fullstack Developer program',
        description: [
          'Project-based curriculum',
          'Soft-skill lessons, workshops',
          'English class with native speaker',
        ],
        color: 'red',
      },
    ],
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
  },
  actions: {

  },
})
