import Vue from 'vue'
import VueRouter from 'vue-router'
import Opening from '../views/Opening.vue'
import Body from '../views/Body.vue'
import Closing from '../views/Closing.vue'
import NotFound from '../views/NotFound.vue'
import OverView from '../components/OverView.vue'
import Education from '../components/Education.vue'
import Skills from '../components/Skills.vue'
import CarrerHistory from '../components/CarrerHistory.vue'
import Projects from '../components/Projects.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Opening',
    component: Opening
  },
  {
    path: '/Opening',
    name: 'Opening',
    component: Opening
  },
  {
    path: '/Body',
    name: 'Body',
    component: Body,
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: OverView
      },
      {
        path: 'education',
        name: 'Education',
        component: Education
      },
      {
        path: 'skills',
        name: 'Skills',
        component: Skills
      },
      {
        path: 'carrerhistory',
        name: 'Carrer History',
        component: CarrerHistory
      },
      {
        path: 'projects',
        name: 'Projects',
        component: Projects
      }
    ]
  },
  {
    path: '/Closing',
    name: 'Closing',
    component: Closing
  },
  { path: '*', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
