import { getCurrentInstance, type Vuetify } from 'vue';

// Vuetify
import * as directives from 'vuetify/directives';
import * as components from 'vuetify/components';
import { createVuetify } from 'vuetify';
// Styles
import 'vuetify/styles';

export default createVuetify({
  // https://next.vuetifyjs.com/en/getting-started/installation/
  components,
  directives,
});

/** Get vuetify instance. */
export function useVuetify(): Vuetify {
  /** Get Instance */
  const instance = getCurrentInstance();

  if (!instance) {
    throw new Error(`Should be used in setup().`);
  }
  // @ts-ignore
  return instance.parent.proxy.$vuetify;
}
