import App from './App.vue'
import axios from "axios";
import initI18n from '@/plugins/i18n'
import router from './Routes'
import store from './store/index'
import Toast from "vue-toastification";
import Vue from 'vue'
import VueAnimateOnScroll from 'vue-animate-onscroll';
import VueApexCharts from 'vue-apexcharts'
import VueAxios from 'vue-axios';
import vuetify from './plugins/vuetify'
import "vue-toastification/dist/index.css";
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: {
      id: 'G-XDSPGM791X',
      params: {
          send_page_view: false
      }
  }
}, router)

Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

Vue.use(VueAnimateOnScroll);
const i18n = initI18n("ES", "US");

Vue.use(VueAxios, axios);

Vue.use(Toast);

Vue.config.productionTip = false

//Global Variables
Vue.prototype.$api = 'https://globaldv.net/dubery-valencia/api/v1/'
Vue.prototype.$ves = 'https://nearp2p.com/api/sendmailp2p/'

new Vue({
  vuetify,
  router,
  i18n,
  render: h => h(App), store
}).$mount('#app')
