import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import ComponentAlert from './components/ComponentAlert.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/component/alert',
      component: ComponentAlert
    }
  ]
})

const app = createApp(App)

app.component('my-alert', ComponentAlert)
app.use(router)
app.mount('#app')
