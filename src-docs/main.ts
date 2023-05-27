import { createApp, h } from 'vue';

import Dev from './DemoPage.vue';
import vuetify from './plugins/vuetify';

const app = createApp({
  render: () => h(Dev),
});
app.use(vuetify);
app.mount('#app');
