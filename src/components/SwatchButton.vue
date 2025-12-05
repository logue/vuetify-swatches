<script setup lang="ts">
import { VBtn, VIcon } from 'vuetify/components';
import colors from 'vuetify/util/colors';

import type { Variant } from 'vuetify/lib/composables/variant.d.ts';

interface Props {
  color?: string;
  isSelected?: boolean;
  size?: string;
  icon?: string;
  iconSize?: string;
  variant?: Variant;
  disabled?: boolean;
  rounded?: string | number | boolean;
  border?: string | number | boolean;
  elevation?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
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
});

const emit = defineEmits<{
  click: [];
}>();
</script>

<template>
  <v-btn
    v-if="!props.color"
    disabled
    :border="props.border"
    :elevation="props.elevation"
    :height="props.size"
    :variant="props.variant"
    :width="props.size"
    class="p-0"
    min-width="auto"
  />
  <v-btn
    v-else
    :border="props.border"
    :class="props.color === colors.shades.transparent ? 'bg-transparent' : ''"
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
