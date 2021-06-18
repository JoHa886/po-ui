import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import POui from './libs/po-ui'

createApp(App)
  .use(store)
  .use(router)
  .use(POui)
  .mount('#app')
