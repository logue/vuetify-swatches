# Vuetify Swatches

[English](README.md) | [日本語](README.ja.md)

[![jsdelivr CDN](https://data.jsdelivr.com/v1/package/npm/vuetify-swatches/badge)](https://www.jsdelivr.com/package/npm/vuetify-swatches)
[![NPM Downloads](https://img.shields.io/npm/dm/vuetify-swatches.svg?style=flat)](https://www.npmjs.com/package/vuetify-swatches)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/vuetify-swatches/file/README.md)
[![npm version](https://img.shields.io/npm/v/vuetify-swatches.svg)](https://www.npmjs.com/package/vuetify-swatches)
[![Open in Gitpod](https://shields.io/badge/Open%20in-Gitpod-green?logo=Gitpod)](https://gitpod.io/#https://github.com/logue/vuetify-swatches)
[![Twitter Follow](https://img.shields.io/twitter/follow/logue256?style=plastic)](https://twitter.com/logue256)

![demo](https://user-images.githubusercontent.com/480173/156681882-d3d5e868-ba9a-4a34-9e75-08272d39da64.gif)

A color swatch component for Vuetify 3.

This project is a Vuetify-based remake of [saintplay's vue-swatches](https://saintplay.github.io/vue-swatches/).
It keeps the API simple while fitting naturally into Vuetify UI patterns.

## Compatibility

- `2.x`: Vuetify 3 (current)
- `1.x`: Vuetify 2

`2.x` contains breaking changes and requires the `swatches` prop.

## Installation

```bash
pnpm add vuetify-swatches
```

## Quick Start

```vue
<script setup lang="ts">
import { ref, type Ref } from 'vue';

import VSwatches from 'vuetify-swatches';
import { basicPalette } from 'vuetify-swatches/presets/basic';

const selected: Ref<string> = ref('#ffffff');
</script>

<template>
  <v-swatches v-model="selected" :swatches="basicPalette" />
</template>

<style>
@import 'vuetify-swatches/dist/style.css';
</style>
```

## Preset Palettes

- `basicPalette`: lightweight palette for common use cases
- `advancedPalette`: larger palette with many color variations

```ts
import { advancedPalette } from 'vuetify-swatches/presets/advanced';
import { basicPalette } from 'vuetify-swatches/presets/basic';
```

## Custom Palette

You can pass your own nested color array to `swatches`.

```vue
<script setup lang="ts">
import { ref, type Ref } from 'vue';

import VSwatches from 'vuetify-swatches';

const customPalette: Ref<string[][]> = ref([
  ['#ffb7b7', '#ffdbb7', '#ffffb7', '#b7ffb7', '#b7ffff', '#b7b7ff', '#ffb7ff', '#ffffff'],
  ['#ff5555', '#ffa555', '#ffff55', '#55ff55', '#55ffff', '#5555ff', '#ff55ff', '#aaaaaa'],
  ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff', '#555555'],
  ['#7f0000', '#7f4c00', '#7f7f00', '#007f00', '#007f7f', '#00007f', '#7f007f', '#000000']
]);

const selected: Ref<string> = ref('#ffffff');
</script>

<template>
  <v-swatches v-model="selected" :swatches="customPalette" />
</template>
```

## Props

Most props (except swatch-specific options) follow [v-btn](https://vuetifyjs.com/en/api/v-btn/).

| Prop               | Type           | Default                      | Description                   |
| ------------------ | -------------- | ---------------------------- | ----------------------------- |
| `size`             | string         | `2rem`                       | Swatch button size            |
| `icon`             | string         | `mdi-checkbox-marked-circle` | Icon shown for selected color |
| `icon-size`        | string         | `1rem`                       | Icon size                     |
| `disabled`         | boolean        | `false`                      | Disables interaction          |
| `rounded`          | number\|string | `undefined`                  | Border radius                 |
| `variant`          | Variant        | `undefined`                  | Vuetify button variant        |
| `elevation`        | number\|string | `undefined`                  | Vuetify elevation             |
| `border`           | number\|string | `undefined`                  | Vuetify border                |
| `transpose`        | boolean        | `false`                      | Swap rows and columns         |
| `tooltip`          | boolean        | `false`                      | Show color value in tooltip   |
| `tooltip-location` | Anchor         | `undefined`                  | Tooltip location              |

Reference:

- Variant: <https://vuetifyjs.com/api/v-btn/#props-variant>
- Tooltip location: <https://vuetifyjs.com/en/components/tooltips/#props-location>

## Demo

- Demo page: <https://logue.dev/vuetify-swatches>

## License

Copyright (c) 2022-2026 Logue.
Licensed under the [MIT License](LICENSE).

## Sponsor

If this project helps your work, consider sponsoring:

[![GitHub Sponsors](https://img.shields.io/github/sponsors/logue?label=Sponsor&logo=github&color=ea4aaa)](https://github.com/sponsors/logue)
