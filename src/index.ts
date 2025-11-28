import VSwatches from './components/VSwatches.vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const installVSwatches = (app: any): void =>
  app.component('VSwatches', VSwatches);

export { VSwatches as default, installVSwatches as install };

// Export preset palettes (tree-shakeable - only imported palettes will be included in the bundle)
export { basicPalette, advancedPalette } from './palettes';
