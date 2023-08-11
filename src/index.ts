import VSwatches from '@/components/VSwatches.vue';

const installVSwatches = (app: any): void =>
  app.component('VSwatches', VSwatches);

export { VSwatches as default, installVSwatches as install };
