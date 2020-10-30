import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'User Profile',
          path: '',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },
        {
          name: 'Skills',
          path: 'skills',
          component: () => import('@/views/dashboard/pages/Skills'),
        },
        {
          name: 'Work Experience',
          path: 'workexperience',
          component: () => import('@/views/dashboard/pages/WorkExperience'),
        },
        {
          name: 'Personal Projects',
          path: 'personalProjects',
          component: () => import('@/views/dashboard/pages/PersonalProjects'),
        },
        {
          name: 'Education',
          path: 'education',
          component: () => import('@/views/dashboard/pages/Education'),
        },
      ],
    },
  ],
})
