import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import EventType from './components/EventType.vue'
import EventKeyup from './components/EventKeyup.vue'
import EventMousedown from './components/EventMousedown.vue'
import EventClick from './components/EventClick.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/event/type",
      component: EventType
    },
    {
      path: "/event/keyup",
      component: EventKeyup
    },
    {
      path: "/event/mousedown",
      component: EventMousedown
    },
    {
      path: "/event/click",
      component: EventClick
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
