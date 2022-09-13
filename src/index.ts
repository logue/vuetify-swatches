import VSwatches from './components/VSwatches.vue';

const installVSwatches = (app: any) => app.component('VSwatches', VSwatches);

export { VSwatches as default, installVSwatches as install };

// For CDN.
// @ts-ignore
if (typeof window !== 'undefined' && window.Vue) {
  // @ts-ignore
  window.Vue.use(VSwatches);
}
