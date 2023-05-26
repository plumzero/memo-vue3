import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import DemoIf from './components/DemoIf.vue'
import DemoList from './components/DemoList.vue'
import DemoListHandle from './components/DemoListHandle.vue'
import DemoListChange from './components/DemoListChange.vue'
import DemoListTodo from './components/DemoListTodo.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/demo/if',
      component: DemoIf
    },
    {
      path: '/demo/list',
      component: DemoList
    },
    {
      path: '/demo/list/handle',
      component: DemoListHandle
    },
    {
      path: '/demo/list/change',
      component: DemoListChange
    },
    {
      path: '/demo/list/todo',
      component: DemoListTodo
    }
  ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')
