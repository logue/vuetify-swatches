<script lang="ts" setup vapor>
/** Vuetify Swatches */
import { computed } from 'vue';

import { zip } from 'es-toolkit';
import { VItem, VItemGroup } from 'vuetify/components';
import colors from 'vuetify/util/colors';

import SwatchButton from './SwatchButton.vue';

import type { VSwatchesProps } from '@/types/VSwatchesProps.d.ts';

/** Props */
const {
  swatches = [],
  size = '2rem',
  icon = 'mdi-checkbox-marked-circle',
  iconSize = '1rem',
  inline = false,
  variant,
  disabled = false,
  rounded,
  border = false,
  elevation,
  transpose = false,
  tooltip = false,
  tooltipLocation
} = defineProps<Partial<Omit<VSwatchesProps, 'modelValue'>>>();

/** Selected Color */
const selected = defineModel<string>({
  default: colors.shades.white
});

/** Normalized swatches structure for rendering */
const normalizedSwatches = computed(() => normalizeSwatches(swatches, inline, transpose));

function normalizeSwatches(
  swatches: VSwatchesProps['swatches'],
  inline: boolean,
  transpose: boolean
): SwatchRows {
  const rows = Array.isArray(swatches)
    ? isSwatchRows(swatches)
      ? swatches
      : swatches.length > 0
        ? [swatches]
        : []
    : Object.values(swatches);

  if (inline) {
    return [rows.flat()];
  }

  if (transpose) {
    return zip(...rows);
  }

  return rows;
}

function isSwatchRows(swatches: VSwatchesProps['swatches']): swatches is SwatchRows {
  return Array.isArray(swatches) && swatches.every(Array.isArray);
}

type SwatchRows = readonly (readonly (string | undefined)[])[];
</script>

<template>
  <v-item-group v-model="selected" class="v-swatches" :class="{ 'd-inline': inline }" mandatory>
    <template v-if="inline">
      <v-item
        v-for="color in normalizedSwatches[0]"
        :key="color"
        v-slot="{ isSelected, toggle }"
        :value="color"
      >
        <swatch-button
          :border="border"
          :color="color"
          :disabled="disabled"
          :elevation="elevation"
          :icon-size="iconSize"
          :icon="icon"
          :is-selected="isSelected"
          :rounded="rounded"
          :size="size"
          :tooltip-location="tooltipLocation"
          :tooltip="tooltip"
          :variant="variant"
          @click="toggle"
        />
      </v-item>
    </template>
    <template v-else>
      <div v-for="(cols, rows) in normalizedSwatches" :key="rows">
        <v-item v-for="color in cols" :key="color" v-slot="{ isSelected, toggle }" :value="color">
          <swatch-button
            :border="border"
            :color="color"
            :disabled="disabled"
            :elevation="elevation"
            :icon-size="iconSize"
            :icon="icon"
            :is-selected="isSelected"
            :rounded="rounded"
            :size="size"
            :tooltip-location="tooltipLocation"
            :tooltip="tooltip"
            :variant="variant"
            @click="toggle"
          />
        </v-item>
      </div>
    </template>
  </v-item-group>
</template>

<style lang="scss" scoped>
.v-swatches {
  :deep(.v-btn) {
    margin: 0.1rem;
  }

  /** Reverse checkd mark color */
  :deep(.v-icon) {
    filter: invert(100%) grayscale(100%) contrast(100);
  }

  /** Add Slash */
  :deep(.bg-transparent) {
    background: linear-gradient(
      to top left,
      transparent 0,
      transparent calc(50% - 0.1rem),
      rgb(var(--v-theme-error)) 50%,
      transparent calc(50% + 0.1rem),
      transparent
    );
  }

  :deep(.bg-transparent .v-icon) {
    filter: none;
  }
}
</style>
