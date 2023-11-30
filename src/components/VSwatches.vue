<script setup lang="ts">
/** Vuetify Swatches */
import { ref, watch, type PropType, type Ref, onMounted } from 'vue';

import { VBtn, VIcon, VSheet } from 'vuetify/components';
import {
  shades,
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  blueGrey,
  grey,
} from 'vuetify/lib/util/colors.mjs';

/** Emits */
const emits = defineEmits({
  'update:modelValue': (value: string) => true,
});

/** Props */
const props = defineProps({
  /** Model value */
  modelValue: { type: String, default: shades.white },
  /** Swatch colors */
  swatches: {
    type: Array as PropType<string[] | string[][] | Record<string, string[]>>,
    default: () => [
      [shades.black, shades.white, shades.transparent],
      [
        red.base,
        pink.base,
        purple.base,
        deepPurple.base,
        indigo.base,
        blue.base,
        lightBlue.base,
        cyan.base,
      ],
      [
        teal.base,
        green.base,
        lightGreen.base,
        lime.base,
        yellow.base,
        amber.base,
        orange.base,
        deepOrange.base,
      ],
      [brown.base, blueGrey.base, grey.base],
    ],
  },
  /** Swatch size */
  size: {
    type: String,
    default: '2rem',
  },
  /** Selected icon */
  icon: {
    type: String,
    default: 'mdi-checkbox-marked-circle',
  },
  /** selected icon size */
  iconSize: {
    type: String,
    default: '1rem',
  },
  /**
   * The variant prop gives you easy access to several different button styles..
   *
   * @see {@link https://vuetifyjs.com/en/components/buttons/#variant}
   */
  variant: {
    type: String as PropType<
      NonNullable<'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain'>
    >,
    default: undefined,
  },
  /**
   * Removes the ability to click or target the component.
   *
   * @see {@link https://vuetifyjs.com/en/api/v-btn/#props-disabled}
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * Applies a large border radius on the button.
   *
   * @see {@link https://vuetifyjs.com/en/components/buttons/#rounded}
   */
  rounded: {
    type: [String, Number, Boolean],
    default: undefined,
  },
  /**
   * Applies border styles to component.
   *
   * @see {@link https://vuetifyjs.com/en/api/v-btn/#props-border}
   */
  border: {
    type: [String, Number, Boolean],
    default: false,
  },
  /**
   * Designates an elevation applied to the component between 0 and 24.
   *
   * @see {@link https://vuetifyjs.com/en/api/v-btn/#props-elevation}
   */
  elevation: {
    type: [String, Number],
    default: undefined,
  },
});

/** Selected Color */
const selected: Ref<string> = ref(shades.white);

/**
 * Swatch button clicked handler
 *
 * @param e - Event
 */
const onSwatchClick = (e: Event) =>
  (selected.value = (e.target as HTMLButtonElement).value || shades.white);

watch(
  () => selected.value,
  s => emits('update:modelValue', s)
);

onMounted(() => {
  if (props.modelValue) {
    selected.value = props.modelValue;
  }
});
</script>

<template>
  <v-sheet class="v-swatches">
    <div v-for="(cols, rows) in swatches" :key="rows">
      <v-btn
        v-for="color in cols"
        :key="color"
        :border="props.border"
        :class="color === shades.transparent ? 'bg-trasparent' : ''"
        :color="color"
        :disabled="props.disabled"
        :elevation="props.elevation"
        :height="props.size"
        :value="color"
        :variant="props.variant"
        :width="props.size"
        min-width="auto"
        @click="onSwatchClick"
      >
        <v-icon
          v-if="color === modelValue"
          :size="iconSize"
          :color="color !== shades.transparent ? color : undefined"
        >
          {{ props.icon }}
        </v-icon>
      </v-btn>
    </div>
  </v-sheet>
</template>

<style lang="scss">
.v-swatches {
  div {
    .v-btn {
      padding: 0 !important;
      margin: 0.1rem;

      /** Reverse checkd mark color */
      .v-icon {
        filter: invert(100%) grayscale(100%) contrast(100);
      }

      /** Add Slash */
      &.bg-trasparent {
        background: linear-gradient(
          to top left,
          transparent 0,
          transparent calc(50% - 0.1rem),
          rgb(var(--v-theme-error)) 50%,
          transparent calc(50% + 0.1rem),
          transparent
        );
        .v-icon {
          filter: none;
        }
      }
    }
  }
}
</style>
