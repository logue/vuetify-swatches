<script lang="ts" setup vapor>
/** Vuetify Swatches */
import { computed, ref, watch, type ComputedRef, type Ref } from 'vue';

import { zip } from 'es-toolkit';
import { VItem, VItemGroup } from 'vuetify/components';
import colors from 'vuetify/util/colors';

import SwatchButton from './SwatchButton.vue';

import type { VSwatchesProps } from '@/types/VSwatchesProps';

/** Emits */
const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

/** Props */
const props = withDefaults(defineProps<Partial<VSwatchesProps>>(), {
  modelValue: colors.shades.white,
  swatches: () => [],
  size: '2rem',
  icon: 'mdi-checkbox-marked-circle',
  iconSize: '1rem',
  inline: false,
  disabled: false,
  border: false,
  transpose: false,
  tooltip: false,
});

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
