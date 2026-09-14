import type { Variant } from 'vuetify/lib/composables/variant.d.ts';
import type { Anchor } from 'vuetify/lib/util/index.d.ts';

export type SwatchButtonProps = {
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
};
