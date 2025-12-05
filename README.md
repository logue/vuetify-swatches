# Vuetify Swatches

[![jsdelivr CDN](https://data.jsdelivr.com/v1/package/npm/vuetify-swatches/badge)](https://www.jsdelivr.com/package/npm/vuetify-swatches)
[![NPM Downloads](https://img.shields.io/npm/dm/vuetify-swatches.svg?style=flat)](https://www.npmjs.com/package/vuetify-swatches)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/vuetify-swatches/file/README.md)
[![npm version](https://img.shields.io/npm/v/vuetify-swatches.svg)](https://www.npmjs.com/package/vuetify-swatches)
[![Open in Gitpod](https://shields.io/badge/Open%20in-Gitpod-green?logo=Gitpod)](https://gitpod.io/#https://github.com/logue/vuetify-swatches)
[![Twitter Follow](https://img.shields.io/twitter/follow/logue256?style=plastic)](https://twitter.com/logue256)

![demo](https://user-images.githubusercontent.com/480173/156681882-d3d5e868-ba9a-4a34-9e75-08272d39da64.gif)

⚠ **Version 2.x Breaking Changes**: This version includes significant architectural changes.

⚠ This is for Vuetify3. If you are using Vuetify2, please use 1.0.x.

This project is a remake of [saintplay's vue-swatches](https://saintplay.github.io/vue-swatches/) with [Vuetify](https://vuetifyjs.com/).

Unlike the original version, it provides a UI based on Vuetify, such as ripple effects and dark mode.

This library is positioned as a complement to Vuetify and provides a minimal UI. Use the[Menu Component](https://vuetifyjs.com/components/menus/) if you want to display a pop-up menu, and the [Card component](https://vuetifyjs.com/components/cards/) if you want to display a palette.

## Usage

**Note**: In v2.x, the component requires a `swatches` prop to display colors. You can either provide your own color array or use the preset palettes.

### Using Preset Palettes

You can import pre-defined color palettes separately. This keeps your bundle size small by only importing what you need:

```vue
<script setup lang="ts">
import { ref, type Ref } from 'vue';

import VSwatches from 'vuetify-swatches';
// Import only the palette you need
import { basicPalette } from 'vuetify-swatches/presets/basic';
// or
import { advancedPalette } from 'vuetify-swatches/presets/advanced';

const selected: Ref<string> = ref('#ffffff');
</script>

<template>
  <!-- Use the basic palette (22 colors) -->
  <v-swatches v-model="selected" :swatches="basicPalette" />

  <!-- Or use the advanced palette (~200 color variations) -->
  <v-swatches v-model="selected" :swatches="advancedPalette" />
</template>

<style>
@import 'vuetify-swatches/dist/style.css';
</style>
```

## Props

Most props other than size and placement are the same as [v-btn](https://vuetifyjs.com/en/api/v-btn/).

| Variables        | Type           | Default                    | Info                                                                       |
| ---------------- | -------------- | -------------------------- | -------------------------------------------------------------------------- |
| size             | string         | 2rem                       | Swatch Button size                                                         |
| icon             | string         | mdi-checkbox-marked-circle | checked icon                                                               |
| icon-size        | string         | 1rem                       | checked icon size                                                          |
| disabled         | boolean        | false                      | Removes the ability to click or target the component.                      |
| rounded          | number\|string | undefined                  | Applies a large border radius on the button.                               |
| variant          | Variant [^1]   | undefined                  | The variant prop gives you easy access to several different button styles. |
| elevation        | number\|string | undefined                  |                                                                            |
| border           | number\|string | undefined                  |                                                                            |
| transpose        | boolean        | false                      | Swaps the rows and columns of swatches.                                    |
| tooltip          | boolean        | false                      | Display color value in tooltip.                                            |
| tooltip-location | Anchor [^2]    | undefined                  | Tooltip location.                                                          |

[^1]: <https://vuetifyjs.com/api/v-btn/#props-variant>

[^2]: <https://vuetifyjs.com/en/components/tooltips/#props-location>

## Example

For more details, see the [demo page](https://logue.dev/vuetify-swatches).

### Show color code in tooltip

Display the color code in a tooltip when you hover over the swatch.

```vue
<script setup lang="ts">
import { ref, type Ref } from 'vue';

import VSwatches from 'vuetify-swatches';
import { basicPalette } from 'vuetify-swatches/presets';

const selected: Ref<string> = ref('#ffffff');
</script>

<template>
  <v-swatches
    v-model="selected"
    :swatches="basicPalette"
    tooltip
    tooltip-location="top"
    class="mb-3"
  />
</template>

<style>
@import 'vuetify-swatches/dist/style.css';
</style>
```

### Using Custom Colors

You can also provide your own custom color palette. The method of specifying `swatches` is the same as [nested-color of Vue Swatches](https://saintplay.github.io/vue-swatches/examples/#nested-colors).

```vue
<script setup lang="ts">
import { ref, type Ref } from 'vue';

import VSwatches from 'vuetify-swatches';

const customPalette: Ref<string[][]> = ref([
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
]);
const selected: Ref<string> = ref('#ffffff');
</script>

<template>
  <v-swatches v-model="selected" :swatches="customPalette" />
</template>

<style>
@import 'vuetify-swatches/dist/style.css';
</style>
```

### Using with VMenu

If you want to make the color palette appear when you click it, combine it with VMenu:

```vue
<script setup lang="ts">
import { ref, type Ref } from 'vue';

import VSwatches from 'vuetify-swatches';
import { advancedPalette } from 'vuetify-swatches/presets';

const selected: Ref<string> = ref('#ffffff');
</script>

<template>
  <v-menu class="mb-3">
    <template #activator="{ props }">
      <v-btn v-bind="props" class="mb-3" min-width="auto" :color="color4">
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
</template>

<style>
@import 'vuetify-swatches/dist/style.css';
</style>
```

### CDN Usage

```html
<!-- Vue core -->
<script src="https://cdn.jsdelivr.net/npm/vue@3.5.25/dist/vue.global.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuetify@3.11.0/dist/vuetify.min.js"></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/vuetify@3.11.0/dist/vuetify.min.js"
/>
<!-- Markdown wasm -->
<script src="https://cdn.jsdelivr.net/npm/vuetify-swatches@2.0.3/dist/index.iife.min.js"></script>
<script>
  const { createApp } = Vue;
  const { createVuetify } = Vuetify;

  const app = createApp();
  app.use(vuetify).component(VSwatches).mount('#app');
</script>
```

## LICENSE

©2022-2025 by Logue. Licensed under the [MIT License](LICENSE).
