# Vuetify Swatch

This project is a remake of [saintplay's vue-swatch](https://saintplay.github.io/vue-swatches/) with [Vuetify](https://vuetifyjs.com/).

Unlike the original version, it provides a UI based on Vuetify, such as ripple effects and dark mode.

Please use in combination with [Menu Component](https://vuetifyjs.com/components/menus/).

## Usage

In this example, the selected color is assigned to `selected`.

The method of specifying `swatches` is the same as [nested-color of Vue Swatches](https://saintplay.github.io/vue-swatches/examples/#nested-colors).

```vue
<v-swatch v-model="selected" :swatches="colors" />
```

### Options

| Variables | Type   | Default                    | Info               |
| --------- | ------ | -------------------------- | ------------------ |
| size      | string | 2rem                       | Swatch Button size |
| icon      | string | mdi-checkbox-marked-circle | checked icon       |
| icon-size | string | 1rem                       | checked icon size  |

## LICENSE

[MIT](LICENSE)
