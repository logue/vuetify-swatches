# Vuetify Swatches

[English](README.md) | [日本語](README.ja.md)

[![jsdelivr CDN](https://data.jsdelivr.com/v1/package/npm/vuetify-swatches/badge)](https://www.jsdelivr.com/package/npm/vuetify-swatches)
[![NPM Downloads](https://img.shields.io/npm/dm/vuetify-swatches.svg?style=flat)](https://www.npmjs.com/package/vuetify-swatches)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/vuetify-swatches/file/README.md)
[![npm version](https://img.shields.io/npm/v/vuetify-swatches.svg)](https://www.npmjs.com/package/vuetify-swatches)
[![Open in Gitpod](https://shields.io/badge/Open%20in-Gitpod-green?logo=Gitpod)](https://gitpod.io/#https://github.com/logue/vuetify-swatches)
[![Twitter Follow](https://img.shields.io/twitter/follow/logue256?style=plastic)](https://twitter.com/logue256)

![demo](https://user-images.githubusercontent.com/480173/156681882-d3d5e868-ba9a-4a34-9e75-08272d39da64.gif)

Vuetify 3 向けのカラースウォッチコンポーネントです。

このプロジェクトは [saintplay の vue-swatches](https://saintplay.github.io/vue-swatches/) を
[Vuetify](https://vuetifyjs.com/) ベースで再構築したものです。
シンプルな API のまま、Vuetify の UI に自然に組み込める設計を目指しています。

## 対応バージョン

- `2.x`: Vuetify 3（現行）
- `1.x`: Vuetify 2

`2.x` は破壊的変更を含み、`swatches` プロパティが必須です。

## インストール

```bash
pnpm add vuetify-swatches
```

## クイックスタート

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

## プリセットパレット

- `basicPalette`: 軽量で一般的な用途向け
- `advancedPalette`: 色バリエーションが豊富な拡張パレット

```ts
import { basicPalette } from 'vuetify-swatches/presets/basic';
import { advancedPalette } from 'vuetify-swatches/presets/advanced';
```

## カスタムパレット

`swatches` にはネストした配列で任意の色パレットを渡せます。

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
```

## Props

スウォッチ固有の項目以外は、基本的に [v-btn](https://vuetifyjs.com/en/api/v-btn/) の仕様に準拠します。

| Prop               | Type           | Default                      | 説明                         |
| ------------------ | -------------- | ---------------------------- | ---------------------------- |
| `size`             | string         | `2rem`                       | スウォッチボタンのサイズ     |
| `icon`             | string         | `mdi-checkbox-marked-circle` | 選択時に表示するアイコン     |
| `icon-size`        | string         | `1rem`                       | アイコンサイズ               |
| `disabled`         | boolean        | `false`                      | 操作を無効化                 |
| `rounded`          | number\|string | `undefined`                  | 角丸                         |
| `variant`          | Variant        | `undefined`                  | Vuetify のボタンバリアント   |
| `elevation`        | number\|string | `undefined`                  | Vuetify の elevation         |
| `border`           | number\|string | `undefined`                  | Vuetify の border            |
| `transpose`        | boolean        | `false`                      | 行と列を入れ替える           |
| `tooltip`          | boolean        | `false`                      | ツールチップで色コードを表示 |
| `tooltip-location` | Anchor         | `undefined`                  | ツールチップの表示位置       |

参照:

- Variant: <https://vuetifyjs.com/api/v-btn/#props-variant>
- Tooltip location: <https://vuetifyjs.com/en/components/tooltips/#props-location>

## デモ

- デモページ: <https://logue.dev/vuetify-swatches>

## ライセンス

Copyright (c) 2022-2026 Logue.
[MIT License](LICENSE) のもとで公開しています。

## スポンサー

このプロジェクトが役に立ったら、スポンサーとしての支援をご検討ください。

[![GitHub Sponsors](https://img.shields.io/github/sponsors/logue?label=Sponsor&logo=github&color=ea4aaa)](https://github.com/sponsors/logue)
