# Vuetify Swatches

![anime](https://user-images.githubusercontent.com/480173/156681882-d3d5e868-ba9a-4a34-9e75-08272d39da64.gif)

This project is a remake of [saintplay's vue-swatches](https://saintplay.github.io/vue-swatches/) with [Vuetify](https://vuetifyjs.com/).

Unlike the original version, it provides a UI based on Vuetify, such as ripple effects and dark mode.

This library is positioned as a complement to Vuetify and provides a minimal UI. Use the[Menu Component](https://vuetifyjs.com/components/menus/) if you want to display a pop-up menu, and the [Card component](https://vuetifyjs.com/components/cards/) if you want to display a palette.

## Usage

In this example, the selected color is assigned to `selected`.

The method of specifying `swatches` is the same as [nested-color of Vue Swatches](https://saintplay.github.io/vue-swatches/examples/#nested-colors).

```vue
<v-swatches v-model="selected" :swatches="colors" />
```

If you want to make the color palette appear when you click it, combine it with VMenu.

```vue
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
```

### Options

| Variables | Type   | Default                    | Info               |
| --------- | ------ | -------------------------- | ------------------ |
| size      | string | 2rem                       | Swatch Button size |
| icon      | string | mdi-checkbox-marked-circle | checked icon       |
| icon-size | string | 1rem                       | checked icon size  |

## LICENSE

[MIT](LICENSE)
