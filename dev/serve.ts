import { createApp, isVue3 } from 'vue-demi';
import vuetify from './plugins/vuetify';
import Dev from './DemoPage.vue';

if (isVue3) {
  console.info('ℹ Running as Vue3.');
} else {
  console.info('ℹ Running as Vue2.');
}

const app = createApp({
  render: h => h(Dev),
  vuetify,
});

app.mount('#app');
