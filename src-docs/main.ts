import vuetify from './plugins/vuetify';
import { createApp, h } from 'vue';
import Dev from './DemoPage.vue';

const app = createApp({
  render: () => h(Dev),
});
app.use(vuetify);
app.mount('#app');
