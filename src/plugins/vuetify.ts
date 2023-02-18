import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export type VForm = Vue & { validate: () => boolean; reset: () => void };
export default new Vuetify({});
