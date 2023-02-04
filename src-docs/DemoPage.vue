<script setup lang="ts">
import { ref, type Ref } from 'vue';

import CodeMirror from 'vue-codemirror6';
import { html } from '@codemirror/lang-html';

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
        <code-mirror class="mb-3" :dark="dark" :lang="html()" basic readonly>
          <pre>&lt;v-swatches v-model=&quot;selected&quot; /&gt;</pre>
        </code-mirror>
        <v-swatches v-model="value" class="mb-3" />
        <v-text-field
          v-model="value"
          label="Result"
          min-width="auto"
          variant="outlined"
        />
        <h2>With VMenu</h2>
        <code-mirror class="mb-3" :dark="dark" :lang="html()" basic readonly>
          <pre>
&lt;script setup&gt;
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
  &lt;v-menu offset-y&gt;
    &lt;template #activator=&quot;{ props }&quot;&gt;
      &lt;v-btn v-bind=&quot;props&quot; min-width=&quot;auto&quot; :color=&quot;selected&quot;&gt;
        &lt;v-icon
          :color=&quot;selected&quot;
          style=&quot;filter: invert(100%) grayscale(100%) contrast(100);&quot;
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
        <v-text-field v-model="selected" label="Result" variant="outlined" />
      </v-container>
    </v-main>
  </v-app>
</template>
