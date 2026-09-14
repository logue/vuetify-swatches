import type { SwatchesProp } from './VSwatchesColor';
import type { Anchor } from 'vuetify';
import type { Variant } from 'vuetify/lib/composables/variant.mjs';

export type VSwatchesProps = {
  /** Model value */
  modelValue: string;
  /** Swatch colors */
  swatches: SwatchesProp;
  /** Swatch size */
  size: string;
  /**
   * Selected icon
   * @see {@link https://vuetifyjs.com/en/components/icons/#usage}
   */
  icon: string;
  /** Selected icon size */
  iconSize: string;
  /** Display swatches in a single row */
  inline: boolean;
  /**
   * The variant prop gives you easy access to several different button styles.
   * @see {@link https://vuetifyjs.com/en/components/buttons/#variant}
   */
  variant: Variant;
  /**
   * Removes the ability to click or target the component.
   * @see {@link https://vuetifyjs.com/en/api/v-btn/#props-disabled}
   */
  disabled?: boolean;
  /**
   * Applies a large border radius on the button.
   * @see {@link https://vuetifyjs.com/en/components/buttons/#rounded}
   */
  rounded: string | number | boolean;
  /**
   * Applies border styles to component.
   * @see {@link https://vuetifyjs.com/en/api/v-btn/#props-border}
   */
  border: string | number | boolean;
  /**
   * Designates an elevation applied to the component between 0 and 24.
   * @see {@link https://vuetifyjs.com/en/api/v-btn/#props-elevation}
   */
  elevation: string | number;
  /** Swap cols and rows */
  transpose: boolean;
  /**
   * Tooltip
   * @see {@link https://vuetifyjs.com/en/components/tooltips/}
   */
  tooltip: boolean;
  /**
   * Tooltip location
   * @see {@link https://vuetifyjs.com/en/components/tooltips/#props-location}
   */
  tooltipLocation: Anchor;
};
