<script setup lang="ts">
/** Vuetify Swatches */
import { ref, watch, type PropType, type Ref, computed } from 'vue';

import { zip } from 'es-toolkit';
import { VItem, VItemGroup } from 'vuetify/components';
import colors from 'vuetify/util/colors';

import SwatchButton from './SwatchButton.vue';

import type { Variant } from 'vuetify/lib/composables/variant.d.ts';
import type { Anchor } from 'vuetify/lib/util/index.d.ts';

/** Emits */
const emits = defineEmits({
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  'update:modelValue': (_value: string) => true,
});

/** Props */
const props = defineProps({
  /** Model value */
  modelValue: { type: String, default: colors.shades.white },
  /** Swatch colors */
  swatches: {
    type: Array as PropType<
      | string[]
      | string[][]
      | Record<string, string[]>
      | readonly string[]
      | readonly (readonly string[])[]
    >,
    default: () => [],
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
  /** Display swatches in a single row */
  inline: {
    type: Boolean,
    default: false,
  },
  /**
   * The variant prop gives you easy access to several different button styles..
   *
   * @see {@link https://vuetifyjs.com/en/components/buttons/#variant}
   */
  variant: {
    type: String as PropType<Variant>,
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
  /** Swap cols and rows */
  transpose: {
    type: Boolean,
    default: false,
  },
  /** Tooltip */
  tooltip: {
    type: Boolean,
    default: false,
  },
  /** Tooltip location */
  tooltipLocation: {
    type: String as PropType<Anchor>,
    default: undefined,
  },
});

/** Normalized swatches structure for rendering */
const normalizedSwatches = computed(() => {
  // Convert to array structure first
  const baseSwatches = Array.isArray(props.swatches)
    ? props.swatches
    : Object.values(props.swatches);

  // Apply inline mode: flatten all colors into a single row
  if (props.inline) {
    return [baseSwatches.flat(Infinity) as string[]];
  }

  // Apply transpose mode: swap rows and columns
  if (props.transpose) {
    return zip(...(baseSwatches as string[][])) as string[][];
  }

  // Default: preserve the original structure
  return baseSwatches;
});

/** Selected Color */
const selected: Ref<string> = ref(colors.shades.white);

watch(
  () => selected.value,
  s => emits('update:modelValue', s)
);

watch(
  () => props.modelValue,
  newValue => {
    if (newValue) {
      selected.value = newValue;
    }
  },
  { immediate: true }
);
</script>

<template>
  <v-item-group
    v-model="selected"
    class="v-swatches"
    :class="{ 'd-inline': props.inline }"
    mandatory
  >
    <template v-if="props.inline">
      <v-item
        v-for="color in normalizedSwatches[0]"
        :key="color"
        v-slot="{ isSelected, toggle }"
        :value="color"
      >
        <swatch-button
          :color="color"
          :is-selected="isSelected"
          :size="props.size"
          :icon="props.icon"
          :icon-size="props.iconSize"
          :variant="props.variant"
          :disabled="props.disabled"
          :rounded="props.rounded"
          :border="props.border"
          :elevation="props.elevation"
          :tooltip="props.tooltip"
          :tooltip-location="props.tooltipLocation"
          @click="toggle"
        />
      </v-item>
    </template>
    <div v-for="(cols, rows) in normalizedSwatches" v-else :key="rows">
      <v-item
        v-for="color in cols"
        :key="color"
        v-slot="{ isSelected, toggle }"
        :value="color"
      >
        <swatch-button
          :color="color"
          :is-selected="isSelected"
          :size="props.size"
          :icon="props.icon"
          :icon-size="props.iconSize"
          :variant="props.variant"
          :disabled="props.disabled"
          :rounded="props.rounded"
          :border="props.border"
          :elevation="props.elevation"
          :tooltip="props.tooltip"
          :tooltip-location="props.tooltipLocation"
          @click="toggle"
        />
      </v-item>
    </div>
  </v-item-group>
</template>

<style lang="scss">
.v-swatches {
  .v-btn {
    margin: 0.1rem;

    /** Reverse checkd mark color */
    .v-icon {
      filter: invert(100%) grayscale(100%) contrast(100);
    }

    /** Add Slash */
    &.bg-transparent {
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
</style>
