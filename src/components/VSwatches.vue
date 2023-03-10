<template>
  <v-sheet class="v-swatches">
    <div v-for="(colors, rows) in swatches" :key="rows">
      <v-btn
        v-for="color in colors"
        :key="color"
        :color="color"
        :depressed="depressed"
        :disabled="disabled"
        :elevation="elevation"
        :height="size"
        :outlined="outlined"
        :plain="plain"
        :raised="raised"
        :tile="tile"
        :value="color"
        :width="size"
        min-width="auto"
        @click="onSwatchClick($event)"
      >
        <v-icon
          v-if="color === modelValue"
          :size="iconSize"
          :color="color !== 'transparent' ? color : undefined"
        >
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
  watch,
  type PropType,
  type Ref,
  type SetupContext,
} from 'vue-demi';

import colors from 'vuetify/lib/util/colors';

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
    modelValue: { type: String, default: colors.shades.white },
    /** Swatch colors */
    swatches: {
      type: Array as PropType<string[] | string[][]>,
      default: () => [
        [colors.shades.black, colors.shades.white, colors.shades.transparent],
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
    /** Selected icon */
    icon: { type: String, default: 'mdi-checkbox-marked-circle' },
    /** selected icon size */
    iconSize: { type: String, default: '1rem' },
    /**
     * Removes the button box shadow.
     *
     * @see {@link https://vuetifyjs.com/en/components/buttons/#depressed}
     */
    depressed: { type: Boolean, default: false },
    /**
     * Removes the ability to click or target the component.
     *
     * @see {@link https://vuetifyjs.com/en/api/v-btn/#props-disabled}
     */
    disabled: { type: Boolean, default: false },
    /**
     * Designates an elevation applied to the component between 0 and 24.
     *
     * @see {@link https://vuetifyjs.com/en/api/v-btn/#props-elevation}
     */
    elevation: { type: [Number, String], default: undefined },
    /**
     * Makes the background transparent and applies a thin border.
     *
     * @see {@link https://vuetifyjs.com/en/components/buttons/#outlined}
     */
    outlined: { type: Boolean, default: false },
    /**
     * Removes the default background change applied when hovering over the button.
     *
     * @see {@link https://vuetifyjs.com/en/components/buttons/#plain}
     */
    plain: { type: Boolean, default: false },
    /**
     * Raised buttons have a box shadow that increases when clicked. This is the default style.
     *
     * @see {@link https://vuetifyjs.com/en/components/buttons/#raised}
     */
    raised: { type: Boolean, default: true },
    /**
     * Applies a large border radius on the button.
     *
     * @see {@link https://vuetifyjs.com/en/components/buttons/#rounded}
     */
    rounded: { type: Boolean, default: false },
    /**
     * Removes the component’s border-radius.
     *
     * @see {@link https://vuetifyjs.com/en/components/buttons/#tile}
     */
    tile: { type: Boolean, default: false },
  },
  /** Emits */
  emits: ['update:modelValue'],
  /**
   * Setup
   *
   * @param props  - Props
   * @param context - Context
   */
  setup(props, context: SetupContext) {
    /** Check icon visibility */
    const checkedVisibilty: Ref<boolean> = ref(false);

    /** Selected Color */
    const selected: Ref<string> = ref(props.modelValue);

    /**
     * Swatch button clicked handler
     *
     * @param e - Event
     */
    const onSwatchClick = (e: PointerEvent) => {
      const value = (e.target as HTMLButtonElement).value;
      if (!value || props.modelValue === value) {
        return;
      }
      selected.value = value;
    };

    watch(
      () => selected.value,
      value => context.emit('update:modelValue', value)
    );

    return {
      checkedVisibilty,
      onSwatchClick,
    };
  },
});
</script>

<style lang="scss">
@import 'node_modules/vuetify/src/styles/styles';

.v-swatches {
  .v-btn {
    padding: 0 !important;
    margin: 0.1rem;

    .v-icon {
      filter: invert(100%) grayscale(100%) contrast(100);
    }

    &.transparent {
      background: linear-gradient(
        to top left,
        transparent 0,
        transparent calc(50% - 0.1rem),
        map-get($red, 'base') 50%,
        transparent calc(50% + 0.1rem),
        transparent
      );
      .v-icon {
        filter: none;
      }
    }
  }
}
</style>
