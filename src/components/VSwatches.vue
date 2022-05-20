<template>
  <v-sheet class="v-swatches">
    <div v-for="(colors, rows) in palette" :key="rows">
      <v-btn
        v-for="color in colors"
        :key="color"
        elevation="1"
        :width="size"
        :height="size"
        :color="color"
        :value="color"
        min-width="auto"
        @click="onSwatchClick"
      >
        <v-icon v-if="color === selected" :size="iconSize" :color="color">
          {{ icon }}
        </v-icon>
      </v-btn>
    </div>
  </v-sheet>
</template>

<script lang="ts">
import { ref, defineComponent, type SetupContext, type Ref } from 'vue-demi';

import { VSheet, VIcon, VBtn } from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

/** Vuetify Swatches */
export default defineComponent({
  /** Component name */
  name: 'VSwatches',
  /** Components */
  components: {
    VSheet,
    VBtn,
    VIcon,
  },
  /** Model Definition */
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  props: {
    /** Model value */
    modelValue: { type: String, required: true },
    /** Swatch colors */
    swatches: {
      type: Array as () => string[] | string[][],
      default: () => [
        [colors.shades.black, colors.shades.white],
        [
          colors.red.base,
          colors.pink.base,
          colors.purple.base,
          colors.deepPurple.base,
          colors.indigo.base,
          colors.blue.base,
          colors.lightBlue.base,
          colors.cyan.base,
        ],
        [
          colors.teal.base,
          colors.green.base,
          colors.lightGreen.base,
          colors.lime.base,
          colors.yellow.base,
          colors.amber.base,
          colors.orange.base,
          colors.deepOrange.base,
        ],
        [colors.brown.base, colors.blueGrey.base, colors.grey.base],
      ],
    },
    /** Swatch sized */
    size: { type: String, default: '2rem' },
    /** selected icon */
    icon: { type: String, default: 'mdi-checkbox-marked-circle' },
    /** selected icon size */
    iconSize: { type: String, default: '1rem' },
  },
  /** Emits */
  emits: ['update:modelValue'],
  /**
   * Setup
   * @param props  - Props
   * @param context - Context
   */
  setup(props, context: SetupContext) {
    /** チェックアイコンの表示制御 */
    const checkedVisibilty: Ref<boolean> = ref(false);

    /** Palette */
    const palette: Ref<string[] | string[][]> = ref(props.swatches);

    /** Selected color */
    const selected: Ref<string> = ref(props.modelValue);

    /**
     * ボタンがクリックされた
     *
     * @param e - イベント
     */
    const onSwatchClick = (e: Event) => {
      const value = (e.target as HTMLButtonElement).value;
      if (!value || selected.value === value) {
        return;
      }
      selected.value = value;
      context.emit('update:modelValue', value);
    };

    return {
      checkedVisibilty,
      palette,
      selected,
      onSwatchClick,
    };
  },
});
</script>

<style lang="scss">
.v-swatches {
  .v-btn {
    padding: 0 !important;
    margin: 0.1rem;

    .v-icon {
      filter: invert(100%);
    }
  }
}
</style>
