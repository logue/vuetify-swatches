/** Swatches prop type */
export type SwatchesProp =
  | (string | undefined)[]
  | (string | undefined)[][]
  | Record<string, (string | undefined)[]>
  | readonly (string | undefined)[]
  | readonly (readonly (string | undefined)[])[];
