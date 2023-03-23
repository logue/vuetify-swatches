import VSwatches from '@/components/VSwatches.vue';

const installVSwatches = (app: any): void =>
  app.component('VSwatches', VSwatches);

export { VSwatches as default, installVSwatches as install };

// For CDN.
// @ts-expect-error
if (typeof window !== 'undefined' && window.Vue) {
  // @ts-expect-error
  window.Vue.use(VSwatches);
}
