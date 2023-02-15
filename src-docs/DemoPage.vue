<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title>Vuetify Swatches</v-app-bar-title>
      <v-spacer />
      <v-btn icon href="https://github.com/logue/vuetify-swatches">
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn icon @click="dark = !dark">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <h1>Vuetify Swatches Demo</h1>
        <h2>Basic</h2>
        <p>
          The default palette contains 22 colors with a MaterialColor base
          color. If
          <code>transparent</code>
          is specified for the color specification, a red slanted line is
          entered.
        </p>

        <v-row class="mb-3">
          <v-col>
            <code-mirror
              v-model="code1"
              :dark="dark"
              :lang="lang"
              basic
              readonly
            />
          </v-col>
          <v-col>
            <v-swatches v-model="value" class="mb-3" />
            <v-text-field
              v-model="value"
              label="Selected Color"
              min-width="auto"
              outlined
            />
          </v-col>
        </v-row>

        <h2>With VMenu (Nested Color)</h2>
        <p>
          You can display a color palette in a popup in combination with
          Vuetify's
          <a href="https://v2.vuetifyjs.com/en/components/menus/">
            Menu Component
          </a>
          .
        </p>
        <v-row class="mb-3">
          <v-col>
            <code-mirror
              v-model="code2"
              :dark="dark"
              :lang="lang"
              style="max-height: 5rem"
              basic
              readonly
              wrap
            />
          </v-col>
          <v-col>
            <v-menu class="mb-3" offset-y>
              <template #activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  :color="selected"
                  class="mb-3"
                  min-width="auto"
                  v-on="on"
                >
                  <v-icon
                    :color="selected"
                    style="filter: invert(100%) grayscale(100%) contrast(100)"
                  >
                    mdi-menu-down
                  </v-icon>
                </v-btn>
              </template>
              <v-swatches v-model="selected" :swatches="palette" />
            </v-menu>
            <v-text-field v-model="selected" label="Selected Color" outlined />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  type Ref,
  type WritableComputedRef,
} from 'vue';
import { useVuetify } from './plugins/vuetify';

import CodeMirror from 'vue-codemirror6';
import { vue } from '@codemirror/lang-vue';

import VSwatches from 'vuetify-swatches';

export default defineComponent({
  components: {
    CodeMirror,
    VSwatches,
  },
  setup() {
    const vuetify = useVuetify();

    const dark: WritableComputedRef<boolean> = computed({
      get: () => vuetify.theme.dark,
      set: dark => (vuetify.theme.dark = dark),
    });

    const value: Ref<string> = ref('#ffffff');

    const selected: Ref<string> = ref('#ffffff');

    return {
      dark,
      value,
      selected,
      lang: vue(),
      code1: '<v-swatches v-model="color" />',
      code2: `<template>
  <v-menu class="mb-3" offset-y>
    <template #activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        :color="selected"
        class="mb-3"
        min-width="auto"
        v-on="on"
      >
        <v-icon
          :color="selected"
          style="filter: invert(100%) grayscale(100%) contrast(100)"
        >
          mdi-menu-down
        </v-icon>
      </v-btn>
    </template>
    <v-swatches v-model="selected" :swatches="palette" />
  </v-menu>
<\/template>

<script>
import { defineComponent, ref } from 'vue';
import VSwatches from 'vuetify-swatches';

export default defineComponent({
  components: {
    VSwatches,
  },
  setup() {
    const selected = ref('#ffffff');
    const palette = [
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
    ];

    return { selected, palette };
  }
})
<\/script>`,
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
