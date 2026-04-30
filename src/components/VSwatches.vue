<script setup lang="ts">
/** Vuetify Swatches */
import { computed, ref, watch, type ComputedRef, type Ref } from 'vue';

import { zip } from 'es-toolkit';
import { VItem, VItemGroup } from 'vuetify/components';
import colors from 'vuetify/util/colors';

import SwatchButton from './SwatchButton.vue';

import type { Variant } from 'vuetify/lib/composables/variant.d.ts';
import type { Anchor } from 'vuetify/lib/util/index.d.ts';

/** Swatches prop type */
type SwatchesProp =
  | (string | undefined)[]
  | (string | undefined)[][]
  | Record<string, (string | undefined)[]>
  | readonly (string | undefined)[]
  | readonly (readonly (string | undefined)[])[];

/** Emits */
const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

/** Props */
const props = withDefaults(
  defineProps<{
    /** Model value */
    modelValue?: string;
    /** Swatch colors */
    swatches?: SwatchesProp;
    /** Swatch size */
    size?: string;
    /**
     * Selected icon
     * @see {@link https://vuetifyjs.com/en/components/icons/#usage}
     */
    icon?: string;
    /** Selected icon size */
    iconSize?: string;
    /** Display swatches in a single row */
    inline?: boolean;
    /**
     * The variant prop gives you easy access to several different button styles.
     * @see {@link https://vuetifyjs.com/en/components/buttons/#variant}
     */
    variant?: Variant;
    /**
     * Removes the ability to click or target the component.
     * @see {@link https://vuetifyjs.com/en/api/v-btn/#props-disabled}
     */
    disabled?: boolean;
    /**
     * Applies a large border radius on the button.
     * @see {@link https://vuetifyjs.com/en/components/buttons/#rounded}
     */
    rounded?: string | number | boolean;
    /**
     * Applies border styles to component.
     * @see {@link https://vuetifyjs.com/en/api/v-btn/#props-border}
     */
    border?: string | number | boolean;
    /**
     * Designates an elevation applied to the component between 0 and 24.
     * @see {@link https://vuetifyjs.com/en/api/v-btn/#props-elevation}
     */
    elevation?: string | number;
    /** Swap cols and rows */
    transpose?: boolean;
    /**
     * Tooltip
     * @see {@link https://vuetifyjs.com/en/components/tooltips/}
     */
    tooltip?: boolean;
    /**
     * Tooltip location
     * @see {@link https://vuetifyjs.com/en/components/tooltips/#props-location}
     */
    tooltipLocation?: Anchor;
  }>(),
  {
    modelValue: colors.shades.white,
    swatches: () => [],
    size: '2rem',
    icon: 'mdi-checkbox-marked-circle',
    iconSize: '1rem',
    inline: false,
    variant: undefined,
    disabled: false,
    rounded: undefined,
    border: false,
    elevation: undefined,
    transpose: false,
    tooltip: false,
    tooltipLocation: undefined,
  }
);

/** Normalized swatches structure for rendering */
const normalizedSwatches: ComputedRef<string[][]> = computed(() => {
  // Convert to array structure first
  const baseSwatches: string[][] = Array.isArray(props.swatches)
    ? props.swatches
    : Object.values(props.swatches);

  // Apply inline mode: flatten all colors into a single row
  if (props.inline) {
    return [baseSwatches.flat(Infinity) as string[]];
  }

  // Apply transpose mode: swap rows and columns
  if (props.transpose) {
    return zip(...baseSwatches) as string[][];
  }

  // Default: preserve the original structure
  return baseSwatches;
});

/** Selected Color */
const selected: Ref<string> = ref(colors.shades.white);

watch(
  () => selected.value,
  s => emit('update:modelValue', s)
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
    :class="{ 'd-inline': props.inline }"
    class="v-swatches"
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
          :border="props.border"
          :color="color"
          :disabled="props.disabled"
          :elevation="props.elevation"
          :icon-size="props.iconSize"
          :icon="props.icon"
          :is-selected="isSelected"
          :rounded="props.rounded"
          :size="props.size"
          :tooltip-location="props.tooltipLocation"
          :tooltip="props.tooltip"
          :variant="props.variant"
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
          :border="props.border"
          :color="color"
          :disabled="props.disabled"
          :elevation="props.elevation"
          :icon-size="props.iconSize"
          :icon="props.icon"
          :is-selected="isSelected"
          :rounded="props.rounded"
          :size="props.size"
          :tooltip-location="props.tooltipLocation"
          :tooltip="props.tooltip"
          :variant="props.variant"
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
