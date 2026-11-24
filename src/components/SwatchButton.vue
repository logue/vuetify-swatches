<script lang="ts" setup vapor>
import { VBtn, VIcon, VTooltip } from 'vuetify/components';
import colors from 'vuetify/util/colors';

import type { SwatchButtonProps } from '@/types/SwatchButtonProps.d.ts';

const props = withDefaults(defineProps<Partial<SwatchButtonProps>>(), {
  isSelected: false,
  size: '2rem',
  icon: 'mdi-checkbox-marked-circle',
  iconSize: '1rem',
  disabled: false,
  border: false,
  tooltip: false
});

const emit = defineEmits<{
  click: [];
}>();
</script>

<template>
  <v-tooltip
    v-if="props.color"
    :disabled="!props.tooltip"
    :location="props.tooltipLocation"
    :text="props.color"
  >
    <template #activator="{ props: tooltipProps }">
      <v-btn
        v-bind="tooltipProps"
        class="p-0"
        :class="props.color === colors.shades.transparent ? 'bg-transparent' : ''"
        :width="props.size"
        :height="props.size"
        :border="props.border"
        :color="props.color"
        :disabled="props.disabled"
        :elevation="props.elevation"
        :variant="props.variant"
        min-width="auto"
        @click="emit('click')"
      >
        <v-icon
          v-if="props.isSelected"
          :size="props.iconSize"
          :color="props.color !== colors.shades.transparent ? props.color : undefined"
          :icon="props.icon"
        />
      </v-btn>
    </template>
  </v-tooltip>
  <v-btn
    v-else
    class="p-0"
    :width="props.size"
    :height="props.size"
    min-width="auto"
    variant="text"
    disabled
  />
</template>
