import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import BindText from './components/BindText.vue'
import BindTextOnce from './components/BindTextOnce.vue'
import BindTextHtml from './components/BindTextHtml.vue'
import BindAttr from './components/BindAttr.vue'
import BindAttrDisabled from './components/BindAttrDisabled.vue'
import BindAttrObject from './components/BindAttrObject.vue'
import BindSelector from './components/BindSelector.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/bind/text',
      component: BindText
    },
    {
      path: '/bind/text/once',
      component: BindTextOnce
    },
    {
      path: '/bind/text/html',
      component: BindTextHtml
    },
    {
      path: '/bind/attr',
      component: BindAttr
    },
    {
      path: '/bind/attr/disabled',
      component: BindAttrDisabled
    },
    {
      path: '/bind/attr/object',
      component: BindAttrObject
    },
    {
      path: '/bind/selector',
      component: BindSelector
    }
  ]
})

app.use(router)
app.mount('#app')
