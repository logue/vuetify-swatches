import vuetify from './plugins/vuetify';
// @ts-ignore
import Dev from './DemoPage.vue';
import Vue, { h } from 'vue';

const app = new Vue({
  render: () => h(Dev),
  // @ts-ignore
  vuetify,
});

app.$mount('#app');
