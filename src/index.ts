/**
 * Vuetify3 Swatches Component
 *
 * @license MIT
 * @author Logue {@link logue@hotmail.co.jp}
 * @copyright 2022 Masashi Yoshikawa {@link https://logue.dev/} All rights reserved.
 * @see {@link https://github.com/logue/vuetify-swatches}
 */

import VSwatches from './components/VSwatches.vue';

const installVSwatches = app => app.component('VSwatches', VSwatches);

export { VSwatches as default, installVSwatches as install };
