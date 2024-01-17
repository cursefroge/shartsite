import { createApp } from 'vue'
import App from './App.vue' // Make sure this path points to your App.vue file
import { createRouter, createWebHistory } from 'vue-router'
import FardBux from './FardBux.vue' // Make sure this path points to your FardBux.vue file
import '../public/style.css'

const routes = [
  {
    path: '/fardbux',
    name: 'FardBux',
    component: FardBux
  },
  {
    path: '/',
    name: 'Main',
    component: App
  }
  // other routes...
]

const router = createRouter({
  history: createWebHistory(),
  routes // short for `routes: routes`
})
  
const app = createApp(App) // Pass App component here
app.use(router)
app.mount('#app')