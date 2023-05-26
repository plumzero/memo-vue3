import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import LimitDebounce from './components/LimitDebounce.vue'
import LimitThrottle from './components/LimitThrottle.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/limit/throttle',
      component: LimitThrottle
    },
    {
      path: '/limit/debounce',
      component: LimitDebounce
    }
  ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')
