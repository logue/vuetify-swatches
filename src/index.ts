/**
 * Vuetify Swatches Component
 *
 * @license MIT
 * @author Logue {@link logue@hotmail.co.jp}
 * @copyright 2022 Masashi Yoshikawa {@link https://logue.dev/} All rights reserved.
 * @see {@link https://github.com/logue/vuetify-swatches}
 */

import VSwatches from './components/VSwatches.vue';
import { install, App } from 'vue-demi';

install();

const installCodeMirror = (app: App) => {
  app.component('VSwatches', VSwatches);
};

export { VSwatches, installCodeMirror as install };
export default VSwatches;
