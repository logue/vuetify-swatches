import Vue, { getCurrentInstance } from 'vue';
import type Framework from 'vuetify/lib';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify();

/** Get vuetify instance (For Composition api) */
export function useVuetify(): Framework {
  /** Get Instance */
  const instance = getCurrentInstance();
  if (!instance) {
    throw new Error(`Should be used in setup().`);
  }
  // @ts-ignore
  return instance.proxy.$vuetify;
}
