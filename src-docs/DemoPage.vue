<script setup lang="ts">
import { ref, type Ref } from 'vue';

import { vue } from '@codemirror/lang-vue';
import CodeMirror from 'vue-codemirror6';
import { useTheme } from 'vuetify';

import { basicPalette, advancedPalette } from '@/presets';
import VSwatches from 'vuetify-swatches';

const theme = useTheme();

const dark: Ref<boolean> = ref(theme.current.value.dark);

const lang = vue();

const color1: Ref<string> = ref('#ffffff');
const color2: Ref<string> = ref('#ffffff');
const color3: Ref<string> = ref('#ffffff');
const color4: Ref<string> = ref('#ffffff');
const color5: Ref<string> = ref('#ffffff');
const color6: Ref<string> = ref('#ffffff');

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
    <v-app-bar title="Vuetify3 Swatch Demo" app>
      <v-btn
        icon="mdi-github"
        href="https://github.com/logue/vuetify-swatches"
        target="_blank"
      />
      <v-btn icon="mdi-theme-light-dark" @click="dark = !dark" />
    </v-app-bar>
    <v-main>
      <v-container>
        <section>
          <h2>Basic</h2>
          <p>
            The colors available in the Material Design color system are
            provided as a preset. You can use it by importing
            <v-code tag="code">basicPalette</v-code>
            from
            <v-code tag="code">vuetify-swatches/presets</v-code>
            .
          </p>
          <v-row>
            <v-col>
              <code-mirror
                class="mb-3"
                :dark="dark"
                :lang="lang"
                basic
                readonly
              >
                <pre>
&lt;script setup&gt;
import { ref } from 'vue';
import VSwatches from 'vuetify-swatches';
import { basicPalette } from 'vuetify-swatches/presets';

const selected = ref('#ffffff');
&lt;/script&gt;

&lt;template&gt;
  &lt;v-swatches v-model=&quot;selected&quot; :swatches=&quot;basicPalette&quot; /&gt;
&lt;/template&gt;</pre
                >
              </code-mirror>
            </v-col>
            <v-col>
              <v-swatches
                v-model="color1"
                :swatches="basicPalette"
                class="mb-3"
              />
              <v-text-field v-model="color1" label="Result" />
            </v-col>
          </v-row>
        </section>
        <section>
          <h2>Inline</h2>
          <p>
            You can display the color palette inline by setting the
            <v-code tag="code">inline</v-code>
            prop to
            <v-code tag="code">true</v-code>
            .
          </p>
          <v-row>
            <v-col>
              <code-mirror
                class="mb-3"
                :dark="dark"
                :lang="lang"
                basic
                readonly
              >
                <pre>
&lt;script setup&gt;
import { ref } from 'vue';
import VSwatches from 'vuetify-swatches';
import { basicPalette } from 'vuetify-swatches/presets';

const selected = ref('#ffffff');
&lt;/script&gt;

&lt;template&gt;
  &lt;v-swatches v-model=&quot;selected&quot; :swatches=&quot;basicPalette&quot; inline /&gt;
&lt;/template&gt;</pre
                >
              </code-mirror>
            </v-col>
            <v-col>
              This is inline swatches:
              <v-swatches v-model="color2" :swatches="basicPalette" inline />
              <v-text-field v-model="color2" inline label="Result" />
            </v-col>
          </v-row>
        </section>

        <section>
          <h2>Tooltip Feature</h2>
          <p>
            You can enable tooltips that show the color code when hovering over
            each swatch by setting the
            <v-code>tag</v-code>
            prop to
            <v-code>tooltip</v-code>
            . You can also set the tooltip location using the
            <v-code>tag</v-code>
            prop
            <v-code>tooltip-location</v-code>
            .
          </p>
          <v-row>
            <v-col>
              <code-mirror
                class="mb-3"
                :dark="dark"
                :lang="lang"
                basic
                readonly
              >
                <pre>
&lt;script setup&gt;
import { ref } from 'vue';
import VSwatches from 'vuetify-swatches';
import { basicPalette } from 'vuetify-swatches/presets';
const selected = ref('#ffffff');
&lt;/script&gt;

&lt;template&gt;
  &lt;v-swatches
    v-model=&quot;selected&quot;
    :swatches=&quot;basicPalette&quot;
    tooltip
    tooltip-location=&quot;top&quot;
  /&gt;
&lt;/template&gt;</pre
                >
              </code-mirror>
            </v-col>
            <v-col>
              <v-swatches
                v-model="color6"
                :swatches="basicPalette"
                tooltip
                tooltip-location="top"
                class="mb-3"
              />
              <v-text-field v-model="color6" label="Result" />
            </v-col>
          </v-row>
        </section>

        <section>
          <h2>Custom Color</h2>
          <p>
            You can set any color you like by specifying a hex code or RGB value
            in addition to the base colors of the Material Color system.
          </p>
          <v-row>
            <v-col>
              <code-mirror
                class="mb-3"
                :dark="dark"
                :lang="lang"
                basic
                readonly
              >
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
  &lt;v-swatches v-model=&quot;selected&quot; :swatches=&quot;palette&quot; /&gt;
&lt;/template&gt;</pre
                >
              </code-mirror>
            </v-col>
            <v-col>
              <v-swatches v-model="color3" :swatches="palette" class="mb-3" />
              <v-text-field v-model="color3" label="Result" />
            </v-col>
          </v-row>
        </section>

        <section>
          <h2>With VMenu and advanced palette combination</h2>
          <p>
            You can display a color palette in a popup in combination with
            Vuetify's
            <a href="https://next.vuetifyjs.com/en/components/menus/">
              Menu Component
            </a>
            .
          </p>
          <v-alert type="info" class="mb-3" variant="tonal">
            From v2, you need wrap
            <v-code>v-card</v-code>
            around
            <v-code>v-swatches</v-code>
            .
          </v-alert>
          <v-row>
            <v-col>
              <code-mirror
                class="mb-3"
                :dark="dark"
                :lang="lang"
                basic
                readonly
              >
                <pre>
&lt;script setup&gt;
import { ref } from 'vue';
import VSwatches from 'vuetify-swatches';
import { advancedPalette } from 'vuetify-swatches/presets';

const selected = ref('#ffffff');
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
    &lt;v-card title="Select a color"&gt;
      &lt;v-swatches v-model=&quot;selected&quot; :swatches=&quot;advancedPalette&quot; /&gt;
    &lt;/v-card&gt;
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
                    :color="color4"
                  >
                    <v-icon
                      :color="color4"
                      style="filter: invert(100%) grayscale(100%) contrast(100)"
                    >
                      mdi-menu-down
                    </v-icon>
                  </v-btn>
                </template>
                <v-card title="Select a color">
                  <v-swatches v-model="color4" :swatches="advancedPalette" />
                </v-card>
              </v-menu>
              <v-text-field v-model="color4" label="Result" />
            </v-col>
          </v-row>
        </section>
        <section>
          <h2>Swap palette cols and rows (transpose)</h2>
          <p>
            You can transpose the swatches by setting the
            <v-code>tag</v-code>
            prop to
            <v-code>transpose</v-code>
            .
          </p>
          <code-mirror class="mb-3" :dark="dark" :lang="lang" basic readonly>
            <pre>
&lt;script setup&gt;
import { ref } from 'vue';
import VSwatches from 'vuetify-swatches';
const selected = ref('#ffffff');
&lt;/script&gt;

&lt;template&gt;
  &lt;v-swatches v-model=&quot;selected&quot; :swatches=&quot;advancedPalette&quot; transpose /&gt;
&lt;/template&gt;</pre
            >
          </code-mirror>
          <v-swatches
            v-model="color5"
            :swatches="advancedPalette"
            transpose
            class="mb-3"
          />
          <v-text-field v-model="color5" label="Result" />
        </section>
      </v-container>
    </v-main>
    <v-footer app elevation="3">
      &copy; 2022-2025 by&thinsp;
      <a href="http://logue.dev/">Logue</a>
      &thinsp; . Licensed under the&thinsp;
      <a href="http://opensource.org/licenses/mit-license.php">MIT License</a>
      .
    </v-footer>
  </v-app>
</template>
