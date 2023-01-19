import VSwatches from '@/components/VSwatches.vue';
import Meta from '@/Meta';

const installVSwatches = (app: any) => app.component('VSwatches', VSwatches);

export { VSwatches as default, installVSwatches as install, Meta };

// For CDN.
// @ts-ignore
if (typeof window !== 'undefined' && window.Vue) {
  // @ts-ignore
  window.Vue.use(VSwatches);
}
