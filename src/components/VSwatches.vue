<template>
  <v-sheet class="v-swatches">
    <div v-for="(colors, rows) in swatches" :key="rows">
      <v-btn
        v-for="color in colors"
        :key="color"
        :color="color"
        :disabled="disabled"
        :height="size"
        :value="color"
        :variant="variant"
        :width="size"
        :data-value="color"
        :class="color === shades.transparent ? 'bg-trasparent' : ''"
        min-width="auto"
        @click="onSwatchClick($event)"
      >
        <v-icon
          v-if="color === modelValue"
          :size="iconSize"
          :color="color !== shades.transparent ? color : undefined"
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
    /** Swatch size */
    size: { type: String, default: '2rem' },
    /** Selected icon */
    icon: { type: String, default: 'mdi-checkbox-marked-circle' },
    /** selected icon size */
    iconSize: { type: String, default: '1rem' },
    /**
     * The variant prop gives you easy access to several different button styles..
     *
     * @see {@link https://next.vuetifyjs.com/en/components/buttons/#variant}
     */
    variant: {
      type: String as PropType<
        'elevated' | 'flat' | 'tonal' | 'outlined' | 'text' | 'plain'
      >,
      default: undefined,
    },
    /**
     * Removes the ability to click or target the component.
     *
     * @see {@link https://vuetifyjs.com/en/api/v-btn/#props-disabled}
     */
    disabled: { type: Boolean, default: undefined },
    /**
     * Applies a large border radius on the button.
     *
     * @see {@link https://next.vuetifyjs.com/en/components/buttons/#rounded}
     */
    rounded: { type: String, Number, default: undefined },
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

    /**
     * Swatch button clicked handler
     *
     * @param e - Event
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
      shades: colors.shades,
    };
  },
});
</script>

<style lang="scss">
@import 'node_modules/vuetify/lib/styles/settings';

.v-swatches {
  .v-btn {
    padding: 0 !important;
    margin: 0.1rem;

    .v-icon {
      filter: invert(100%) grayscale(100%) contrast(100);
    }

    &.bg-trasparent {
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
