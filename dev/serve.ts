import vuetify from './plugins/vuetify';
import Vue, { type VNode } from 'vue';

import Dev from './serve.vue';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h): VNode => h(Dev),
}).$mount('#app');
