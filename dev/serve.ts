import vuetify from './plugins/vuetify';
import Dev from './DemoPage.vue';
import Vue, { h } from 'vue';

const app = new Vue({
  render: () => h(Dev),
  vuetify,
});

app.$mount('#app');
