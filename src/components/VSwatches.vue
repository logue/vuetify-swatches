<template>
  <v-sheet class="v-swatches">
    <div v-for="(colors, rows) in swatches" :key="rows" class="d-flex">
      <v-btn
        v-for="color in colors"
        :key="color"
        :elevation="elevation"
        :width="size"
        :height="size"
        :color="color"
        :data-value="color"
        min-width="auto"
        @click="onSwatchClick($event)"
      >
        <v-icon v-if="color === modelValue" :size="iconSize" :color="color">
          {{ icon }}
        </v-icon>
      </v-btn>
    </div>
  </v-sheet>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  type PropType,
  type Ref,
  type SetupContext,
} from 'vue';

// eslint-disable-next-line import/no-unresolved
import colors from 'vuetify/lib/util/colors.mjs';

/** Vuetify Swatches */
export default defineComponent({
  /** Component name */
  name: 'VSwatches',
  /** Model Definition */
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  props: {
    /** Model value */
    modelValue: { type: String, default: '#ffffff' },
    /** Swatch colors */
    swatches: {
      type: Array as PropType<string[] | string[][]>,
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
    /** The size of the shadow of the button */
    elevation: { type: Number, default: 1 },
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
    /** Check icon visibility */
    const checkedVisibilty: Ref<boolean> = ref(false);
    /**
     * ボタンがクリックされた
     *
     * @param e - イベント
     */
    const onSwatchClick = (e: Event) => {
      const value = (e.target as HTMLButtonElement).dataset.value;
      if (!value || props.modelValue === value) {
        return;
      }
      context.emit('update:modelValue', value);
    };
    return {
      checkedVisibilty,
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
      filter: invert(100%) grayscale(100%) contrast(100);
    }
  }
}
</style>
