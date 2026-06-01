import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SymptomSelection from '../views/SymptomSelection.vue'
import Question from '../views/Question.vue'
import Summary from '../views/Summary.vue'
import Results from '../views/Results.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
