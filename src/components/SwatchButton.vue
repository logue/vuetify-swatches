<script lang="ts" setup vapor>
import { VBtn, VIcon, VTooltip } from 'vuetify/components';
import colors from 'vuetify/util/colors';

import type { SwatchButtonProps } from '@/types/SwatchButtonProps';

const props = withDefaults(defineProps<Partial<SwatchButtonProps>>(), {
  isSelected: false,
  size: '2rem',
  icon: 'mdi-checkbox-marked-circle',
  iconSize: '1rem',
  disabled: false,
  border: false,
  tooltip: false,
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
        :border="props.border"
        :class="
          props.color === colors.shades.transparent ? 'bg-transparent' : ''
        "
        :color="props.color"
        :disabled="props.disabled"
        :elevation="props.elevation"
        :height="props.size"
        :variant="props.variant"
        :width="props.size"
        class="p-0"
        min-width="auto"
        @click="emit('click')"
      >
        <v-icon
          v-if="props.isSelected"
          :size="props.iconSize"
          :color="
            props.color !== colors.shades.transparent ? props.color : undefined
          "
          :icon="props.icon"
        />
      </v-btn>
    </template>
  </v-tooltip>
  <v-btn
    v-else
    :height="props.size"
    :width="props.size"
    class="p-0"
    min-width="auto"
    variant="text"
    disabled
  />
</template>
