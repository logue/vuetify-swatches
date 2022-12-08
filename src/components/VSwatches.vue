<script setup lang="ts">
/** Vuetify Swatches */
import { ref, watch, type PropType, type Ref } from 'vue';
import colors from 'vuetify/lib/util/colors.mjs';

/** Props */
const props = defineProps({
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
      'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain'
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
  rounded: { type: [String, Number, Boolean], default: undefined },
  /**
   * Applies border styles to component.
   *
   * @see {@link https://next.vuetifyjs.com/en/api/v-btn/#props-border}
   */
  border: { type: [String, Number, Boolean], default: false },
  /**
   * Designates an elevation applied to the component between 0 and 24.
   *
   * @see {@link https://next.vuetifyjs.com/en/api/v-btn/#props-elevation}
   */
  elevation: { type: [String, Number], default: undefined },
});

/** Emits */
const emit = defineEmits(['update:modelValue']);

const selected: Ref<string | undefined> = ref(props.modelValue);

/**
 * Swatch button clicked handler
 *
 * @param e - Event
 */
const onSwatchClick = (e: Event) => {
  console.log(e.target);
  const value = (e.target as HTMLButtonElement).dataset.value;
  if (!value || props.modelValue === value) {
    return;
  }
  emit('update:modelValue', value);
};

watch(selected, value => console.log(value));
</script>

<template>
  <v-sheet class="v-swatches">
    <div v-for="(cols, rows) in swatches" :key="rows">
      <v-btn
        v-for="color in cols"
        :key="color"
        :border="props.border"
        :class="color === colors.shades.transparent ? 'bg-trasparent' : ''"
        :color="color"
        :disabled="props.disabled"
        :elevation="props.elevation"
        :height="props.size"
        :data-value="color"
        :variant="props.variant"
        :width="props.size"
        min-width="auto"
        @click="onSwatchClick($event)"
      >
        <v-icon
          v-if="color === modelValue"
          :size="iconSize"
          :color="color !== colors.shades.transparent ? color : undefined"
        >
          {{ props.icon }}
        </v-icon>
      </v-btn>
    </div>
  </v-sheet>
</template>

<style lang="scss">
@import '~/vuetify/lib/styles/settings';

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
