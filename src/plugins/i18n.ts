import Vue from 'vue';
import VueI18n from 'vue-i18n';
import ru from '@/locale/locale-ru.json';

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: 'ru',
  fallbackLocale: 'ru',
  messages: { ru }
});
