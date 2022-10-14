# Vuetify Swatches

[![jsdelivr CDN](https://data.jsdelivr.com/v1/package/npm/vuetify-swatches/badge)](https://www.jsdelivr.com/package/npm/vuetify-swatches)
[![NPM Downloads](https://img.shields.io/npm/dm/vuetify-swatches.svg?style=flat)](https://www.npmjs.com/package/vuetify-swatches)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/vuetify-swatches/file/README.md)
[![npm version](https://img.shields.io/npm/v/vuetify-swatches.svg)](https://www.npmjs.com/package/vuetify-swatches)
[![Open in Gitpod](https://shields.io/badge/Open%20in-Gitpod-green?logo=Gitpod)](https://gitpod.io/#https://github.com/logue/vuetify-swatches)
[![Twitter Follow](https://img.shields.io/twitter/follow/logue256?style=plastic)](https://twitter.com/logue256)

![demo](https://user-images.githubusercontent.com/480173/156681882-d3d5e868-ba9a-4a34-9e75-08272d39da64.gif)

This project is a remake of [saintplay's vue-swatches](https://saintplay.github.io/vue-swatches/) with [Vuetify](https://vuetifyjs.com/).

Unlike the original version, it provides a UI based on Vuetify, such as ripple effects and dark mode.

This library is positioned as a complement to Vuetify and provides a minimal UI. Use the [Menu Component](https://vuetifyjs.com/components/menus/) if you want to display a pop-up menu, and the [Card component](https://vuetifyjs.com/components/cards/) if you want to display a palette.

For Vuetify3, please use the [next branch](https://github.com/logue/vuetify-swatches/tree/next).

## Usage

In this example, the selected color is assigned to `selected`.

```vue
<template>
  <v-swatches v-model="selected" />
</template>

<script>
import Vue from 'vue';

import VSwatches from 'vuetify-swatches';

export default Vue.extend({
  data() {
    return {
      selected: '#ffffff',
    };
  },
});
</script>

<style>
@import 'vuetify-swatches/style.css';
</style>
```

The method of specifying `swatches` is the same as [nested-color of Vue Swatches](https://saintplay.github.io/vue-swatches/examples/#nested-colors).

If you want to make the color palette appear when you click it, combine it with VMenu.

```vue
<template>
  <v-menu offset-y>
    <template #activator="{ on, attrs }">
      <v-btn v-bind="attrs" min-width="auto" :color="selected" v-on="on">
        <v-icon :color="selected" style="filter: invert(100%)">
          mdi-menu-down
        </v-icon>
      </v-btn>
    </template>
    <v-swatches v-model="selected" :swatches="palette" />
  </v-menu>
</template>

<script>
import Vue from 'vue';

import VSwatches from 'vuetify-swatches';

export default Vue.extend({
  data() {
    return {
      selected: '#ffffff',
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

<style>
@import 'vuetify-swatches/style.css';
</style>
```

### Options

| Variables | Type           | Default                    | Info                                                                                     |
| --------- | -------------- | -------------------------- | ---------------------------------------------------------------------------------------- |
| size      | string         | 2rem                       | Swatch Button size                                                                       |
| icon      | string         | mdi-checkbox-marked-circle | checked icon                                                                             |
| icon-size | string         | 1rem                       | checked icon size                                                                        |
| depressed | boolean        | false                      | Removes the button box shadow.                                                           |
| disabled  | boolean        | false                      | Removes the ability to click or target the component.                                    |
| elevation | number\|string | undefined                  | Designates an elevation applied to the component between 0 and 24.                       |
| outlined  | boolean        | false                      | Makes the background transparent and applies a thin border.                              |
| plain     | boolean        | false                      | Removes the default background change applied when hovering over the button.             |
| raised    | boolean        | true                       | Raised buttons have a box shadow that increases when clicked. This is the default style. |
| rounded   | boolean        | false                      | Applies a large border radius on the button.                                             |
| tile      | boolean        | false                      | Removes the component’s border-radius.                                                   |

## LICENSE

[MIT](LICENSE)
