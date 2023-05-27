import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import EventHandlerInline from './components/EventHandlerInline.vue'
import EventHandlerMethod from './components/EventHandlerMethod.vue'
import EventParam from './components/EventParam.vue'
import EventBubble from './components/EventBubble.vue'
import EventCapture from './components/EventCapture.vue'
import EventStop from './components/EventStop.vue'
import EventPrevent from './components/EventPrevent.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/event/handle/inline",
      component: EventHandlerInline
    },
    {
      path: "/event/handle/method",
      component: EventHandlerMethod
    },
    {
      path: "/event/param",
      component: EventParam
    },
    {
      path: "/event/bubble",
      component: EventBubble
    },
    {
      path: "/event/capture",
      component: EventCapture
    },
    {
      path: "/event/stop",
      component: EventStop
    },
    {
      path: "/event/prevent",
      component: EventPrevent
    }
  ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')

