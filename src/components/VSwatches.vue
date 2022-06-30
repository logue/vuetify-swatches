<template>
  <v-sheet class="v-swatches">
    <div v-for="(colors, rows) in swatches" :key="rows">
      <v-btn
        v-for="color in colors"
        :key="color"
        :elevation="elevation"
        :width="size"
        :height="size"
        :color="color"
        min-width="auto"
        @click="onSwatchClick(color)"
      >
        <v-icon v-if="color === selected" :size="iconSize" :color="color">
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
    modelValue: { type: String, required: true },
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
    /** チェックアイコンの表示制御 */
    const checkedVisibilty: Ref<boolean> = ref(false);

    /** Selected color */
    const selected: Ref<string> = ref(props.modelValue);

    /**
     * ボタンがクリックされた
     *
     * @param value - 色
     */
    const onSwatchClick = (value: string) => {
      if (!value || selected.value === value) {
        return;
      }
      selected.value = value;
      context.emit('update:modelValue', value);
    };

    return {
      checkedVisibilty,
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
