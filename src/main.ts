import Vue from 'vue';
import App from './App.vue';
import VueMeta from 'vue-meta';
import router from './router';
import vuetify from './plugins/vuetify';
import { i18n } from './plugins/i18n';
import { translation } from './plugins/Translation';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

Vue.use(VueMeta);
Vue.prototype.$i18nRoute = translation.i18nRoute.bind(translation);
Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
