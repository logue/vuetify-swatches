import { getCurrentInstance } from 'vue-demi';
import 'vuetify/dist/vuetify.min.css';
import Vuetify from 'vuetify';
import Vue from 'vue';

Vue.use(Vuetify);

export default new Vuetify();

/** Get vuetify instance (For Composition api) */
export function useVuetify() {
  /** Get Instance */
  const instance = getCurrentInstance();
  if (!instance) {
    throw new Error(`Should be used in setup().`);
  }
  // @ts-ignore
  return instance.proxy.$vuetify;
}
