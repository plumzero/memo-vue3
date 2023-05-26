import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import ComputedAttr from './components/ComputedAttr.vue'
import GetterSetter from './components/GetterSetter.vue'
import AttrWatch from './components/AttrWatch.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/sub/computed',
      component: ComputedAttr
    },
    {
      path: '/sub/computed/getset',
      component: GetterSetter
    },
    {
      path: '/sub/watch',
      component: AttrWatch
    }
  ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')

