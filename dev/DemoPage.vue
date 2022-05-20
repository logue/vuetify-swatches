<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title>Vuetify Swatch Demo</v-app-bar-title>
      <v-spacer />
      <v-btn icon @click="dark = !dark">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <h2>Basic</h2>
        <code-mirror class="mb-3" :lang="cmLang" basic :dark="dark" readonly>
          <pre>&lt;v-swatches v-model="color" /&gt;</pre>
        </code-mirror>

        <v-swatches v-model="value" class="mb-3" />
        <v-text-field label="Result" min-width="auto" :value="value" outlined />
        <h2>With VMenu</h2>

        <code-mirror class="mb-3" :lang="cmLang" :dark="dark" basic readonly>
          <pre>
&lt;v-menu offset-y&gt;
  &lt;template #activator=&quot;{ on, attrs }&quot;&gt;
    &lt;v-btn v-bind=&quot;attrs&quot; min-width=&quot;auto&quot; :color=&quot;selected&quot; v-on=&quot;on&quot;&gt;
      &lt;v-icon :color=&quot;selected&quot; style=&quot;filter: invert(100%)&quot;&gt;
        mdi-menu-down
      &lt;/v-icon&gt;
    &lt;/v-btn&gt;
  &lt;/template&gt;
  &lt;v-swatches v-model=&quot;selected&quot; :swatches=&quot;palette&quot; /&gt;
&lt;/v-menu&gt;</pre
          >
        </code-mirror>

        <v-menu class="mb-3" offset-y>
          <template #activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              class="mb-3"
              min-width="auto"
              :color="selected"
              v-on="on"
            >
              <v-icon :color="selected" style="filter: invert(100%)">
                mdi-menu-down
              </v-icon>
            </v-btn>
          </template>
          <v-swatches v-model="selected" :swatches="palette" />
        </v-menu>
        <v-text-field label="Result" :value="selected" outlined />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent, ref, watch } from 'vue-demi';

import {
  VApp,
  VAppBar,
  VAppBarTitle,
  VBtn,
  VContainer,
  VIcon,
  VMain,
  VMenu,
  VSpacer,
  VTextField,
} from 'vuetify/lib';
import { html } from '@codemirror/lang-html';
import CodeMirror from 'vue-codemirror6';

// import VSwatches from './dist/v-swatches.es';
import { useVuetify } from './plugins/vuetify';
import VSwatches from '@/';

export default defineComponent({
  components: {
    CodeMirror,
    VSwatches,
    VApp,
    VAppBar,
    VAppBarTitle,
    VBtn,
    VContainer,
    VIcon,
    VMain,
    VMenu,
    VSpacer,
    VTextField,
  },
  setup() {
    const vuetify = useVuetify();

    const dark = ref(window.matchMedia('(prefers-color-scheme: dark)').matches);

    watch(dark, v => (vuetify.theme.dark = v));

    return {
      dark,
      value: '#ffffff',
      selected: '#ffffff',
      cmLang: html(),
      palette: [
        [
          '#ffb7b7',
          '#ffdbb7',
          '#ffffb7',
          '#b7ffb7',
          '#b7ffff',
          '#b7b7ff',
          '#ffb7ff',
          '#ffffff',
        ],
        [
          '#ff5555',
          '#ffa555',
          '#ffff55',
          '#55ff55',
          '#55ffff',
          '#5555ff',
          '#ff55ff',
          '#aaaaaa',
        ],
        [
          '#ff0000',
          '#ff7f00',
          '#ffff00',
          '#00ff00',
          '#00ffff',
          '#0000ff',
          '#ff00ff',
          '#555555',
        ],
        [
          '#7f0000',
          '#7f4c00',
          '#7f7f00',
          '#007f00',
          '#007f7f',
          '#00007f',
          '#7f007f',
          '#000000',
        ],
      ],
    };
  },
});
</script>
