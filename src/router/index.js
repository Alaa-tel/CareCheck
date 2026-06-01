import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PatientTypeView from '../views/PatientTypeView.vue'
import AgeGroupView from '../views/AgeGroupView.vue'
import SymptomSelection from '../views/SymptomSelection.vue'
import Question from '../views/Question.vue'
import Summary from '../views/Summary.vue'
import Results from '../views/Results.vue'
import ActionView from '../views/ActionView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/patient-type',
    name: 'PatientType',
    component: PatientTypeView
  },
  {
    path: '/age-group',
    name: 'AgeGroup',
    component: AgeGroupView
  },
  {
    path: '/symptoms',
    name: 'SymptomSelection',
    component: SymptomSelection
  },
  {
    path: '/question/:questionId',
    name: 'Question',
    component: Question
  },
  {
    path: '/summary',
    name: 'Summary',
    component: Summary
  },
  {
    path: '/results',
    name: 'Results',
    component: Results
  },
  {
    path: '/action',
    name: 'Action',
    component: ActionView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
