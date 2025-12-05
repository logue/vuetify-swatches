<script setup lang="ts">
import { VBtn, VIcon, VTooltip } from 'vuetify/components';
import colors from 'vuetify/util/colors';

import type { Variant } from 'vuetify/lib/composables/variant.d.ts';
import type { Anchor } from 'vuetify/lib/util/index.d.ts';

interface Props {
  color: string;
  isSelected: boolean;
  size: string;
  icon: string;
  iconSize: string;
  variant: Variant;
  disabled: boolean;
  rounded: string | number | boolean;
  border: string | number | boolean;
  elevation: string | number;
  tooltip: boolean;
  tooltipLocation: Anchor;
}

const props = withDefaults(defineProps<Partial<Props>>(), {
  color: undefined,
  isSelected: false,
  size: '2rem',
  icon: 'mdi-checkbox-marked-circle',
  iconSize: '1rem',
  variant: undefined,
  disabled: false,
  rounded: undefined,
  border: false,
  elevation: undefined,
  tooltip: false,
  tooltipLocation: undefined,
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
    :border="props.border"
    :elevation="props.elevation"
    :height="props.size"
    :variant="props.variant"
    :width="props.size"
    class="p-0"
    disabled
    min-width="auto"
  />
</template>
