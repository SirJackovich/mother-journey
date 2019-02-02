import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import MJCard from './components/MJCard.vue'
import MJButtonCard from './components/MJButtonCard.vue'
import MJListCard from './components/MJListCard.vue'
import MJArchiveListCard from "./components/MJArchiveListCard.vue";

Vue.use(BootstrapVue);
Vue.component('mj-card', MJCard);
Vue.component('mj-button-card', MJButtonCard);
Vue.component('mj-list-card', MJListCard);
Vue.component('mj-archive-list-card', MJArchiveListCard);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

