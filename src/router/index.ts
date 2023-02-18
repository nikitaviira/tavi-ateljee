import Vue from 'vue';
import VueRouter from 'vue-router';
import { translation } from '@/plugins/Translation';
import Gallery from '@/views/Gallery.vue';
import Contacts from '@/views/Contacts.vue';
import Prices from '@/views/Prices.vue';
import MainPage from '@/views/MainPage.vue';
import type { Route } from 'vue-router/types/router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to: Route, from: Route) {
    return from.params.locale === to.params.locale
      ? { x: 0, y: 0 }
      : null;
  }
});

router.addRoute({
  path: '/:locale',
  component: {
    template: '<router-view />'
  },
  beforeEnter: translation.routeMiddleware,
  children: [
    {
      path: 'main',
      name: 'root',
      component: MainPage
    },
    {
      path: 'gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: 'contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: 'prices',
      name: 'prices',
      component: Prices
    }
  ],
  redirect: { name: 'root', params: { locale: translation.getUserSupportedLocale() } }
});

router.addRoute({
  path: '*',
  redirect: { name: 'root', params: { locale: translation.getUserSupportedLocale() } }
});

export default router;
