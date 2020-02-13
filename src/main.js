import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBD_ZqxJbzgqk50VaGWoWZDojNirkqmMJM',
    libraries: 'places'
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
