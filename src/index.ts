import VSwatches from './components/VSwatches.vue';

const installVSwatches = app => app.component('VSwatches', VSwatches);

export { VSwatches as default, installVSwatches as install };

// For CDN.
// @ts-ignore
if (typeof window !== 'undefined' && window.Vue) {
  // @ts-ignore
  window.Vue.use(VSwatches);
}
