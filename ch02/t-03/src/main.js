import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import ModelInput from './components/ModelInput.vue'
import ModelTextarea from './components/ModelTextarea.vue'
import ModelInputCheckbox from './components/ModelInputCheckbox.vue'
import ModelInputRadio from './components/ModelInputRadio.vue'
import ModelSelect from './components/ModelSelect.vue'
import ModelMultiple from './components/ModelMultiple.vue'
import RegisterPage from './components/RegisterPage.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/model/input',
      component: ModelInput
    },
    {
      path: '/model/textarea',
      component: ModelTextarea
    },
    {
      path: '/model/input/checkbox',
      component: ModelInputCheckbox
    },
    {
      path: '/model/input/radio',
      component: ModelInputRadio
    },
    {
      path: '/model/select',
      component: ModelSelect
    },
    {
      path: '/model/multiple',
      component: ModelMultiple
    },
    {
      path: '/register/page',
      component: RegisterPage
    }
  ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')
