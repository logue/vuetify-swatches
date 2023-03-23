<script setup lang="ts">
import { ref, type Ref } from 'vue';

import CodeMirror from 'vue-codemirror6';
import { vue } from '@codemirror/lang-vue';

// import VSwatches from './dist/v-swatches.es';
import VSwatches from 'vuetify-swatches';
import { useTheme } from 'vuetify';

const theme = useTheme();

// @ts-ignore
const dark: Ref<boolean> = ref(theme.current.value.dark);

const value: Ref<string> = ref('#ffffff');

const selected: Ref<string> = ref('#ffffff');

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
</script>

<template>
  <v-app :theme="dark ? 'dark' : 'light'">
    <v-app-bar>
      <v-app-bar-title>Vuetify3 Swatch Demo</v-app-bar-title>
      <v-spacer />
      <v-btn
        icon="mdi-github"
        href="https://github.com/logue/vuetify-swatches"
        target="_blank"
      />
      <v-btn icon="mdi-theme-light-dark" @click="dark = !dark" />
    </v-app-bar>
    <v-main>
      <v-container>
        <h2>Basic</h2>
        <p>
          The default palette contains 22 colors with a MaterialColor base
          color. If
          <code>transparent</code>
          is specified for the color specification, a red slanted line is
          entered.
        </p>
        <v-row>
          <v-col>
            <code-mirror class="mb-3" :dark="dark" :lang="vue()" basic readonly>
              <pre>&lt;v-swatches v-model=&quot;selected&quot; /&gt;</pre>
            </code-mirror>
          </v-col>
          <v-col>
            <v-swatches v-model="value" class="mb-3" />
            <v-text-field
              v-model="value"
              label="Result"
              min-width="auto"
              variant="outlined"
            />
          </v-col>
        </v-row>

        <h2>With VMenu</h2>
        <p>
          You can display a color palette in a popup in combination with
          Vuetify's
          <a href="https://next.vuetifyjs.com/en/components/menus/">
            Menu Component
          </a>
          .
        </p>
        <v-row>
          <v-col>
            <code-mirror class="mb-3" :dark="dark" :lang="vue()" basic readonly>
              <pre>
&lt;script setup&gt;
import { ref } from 'vue';
import VSwatches from 'vuetify-swatches';

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
&lt;/script&gt;

&lt;template&gt;
  &lt;v-menu&gt;
    &lt;template #activator=&quot;{ props }&quot;&gt;
      &lt;v-btn
        v-bind=&quot;props&quot;
        :color=&quot;selected&quot;
        class=&quot;mb-3&quot;
        min-width=&quot;auto&quot;
      &gt;
        &lt;v-icon
          :color=&quot;selected&quot;
          style=&quot;filter: invert(100%) grayscale(100%) contrast(100)&quot;
        &gt;
          mdi-menu-down
        &lt;/v-icon&gt;
      &lt;/v-btn&gt;
    &lt;/template&gt;
    &lt;v-swatches v-model=&quot;selected&quot; :swatches=&quot;palette&quot; /&gt;
  &lt;/v-menu&gt;
&lt;/template&gt;</pre
              >
            </code-mirror>
          </v-col>
          <v-col>
            <v-menu class="mb-3">
              <template #activator="{ props }">
                <v-btn
                  v-bind="props"
                  class="mb-3"
                  min-width="auto"
                  :color="selected"
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
            <v-text-field
              v-model="selected"
              label="Result"
              variant="outlined"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer>
      &copy; 2022-2023 by&thinsp;
      <a href="http://logue.dev/">Logue</a>
      &thinsp; . Licensed under the&thinsp;
      <a href="http://opensource.org/licenses/mit-license.php">MIT License</a>
      .
    </v-footer>
  </v-app>
</template>
