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
        description: 'i can use js',
      },
      {
        skillName: 'HTML',
        description: 'HTML',
      },
      {
        skillName: 'CSS',
        description: 'CSS - Bootstrap - SCSS',
      },
      {
        skillName: 'Vue.js',
        description: 'Vue.js - Vuex - Vue Router - Nuxt.js',
      },
      {
        skillName: 'ReactJS',
        description: 'ReactJS',
      },
      {
        skillName: 'Python',
        description: 'Python',
      },
      {
        skillName: 'GIT',
        description: 'GIT, GIT flow',
      },
      {
        skillName: 'Scrum',
        description: 'Scrum, Agile',
      },
    ],
    workExperience: [
      {
        company: 'I-ON Digital Corp',
        time: '(09/2020 - now)',
        role: 'Front-end Web Developer',
        responsibility: [
          'Maintain, improve existing project',
          'Apply new feature',
          'Write document for system flow',
        ],
        achivement: [

        ],
        projects: [
          {
            projectName: '',
            time: '',
            teamSize: '',
            role: '',
            responsibility: '',
            technology: [
            ],
          },
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
        ],
      },
      {
        company: 'Linkbynet Vietnam',
        time: '(10/2019 - 02/2020)',
        role: 'Front-end Web Developer Intern',
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
        responsibility: [
          'Design, build lessons plan',
          'Teaching, training',
          'Evaluate, classify students',
        ],
        achivement: [
        ],
        projects: [
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
