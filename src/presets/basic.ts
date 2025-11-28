import colors from 'vuetify/util/colors';

/**
 * Basic Material Design color palette
 * Contains base colors from Material Design color system
 */
export const basicPalette = [
  [colors.shades.black, colors.shades.white, colors.shades.transparent],
  [
    colors.red.base,
    colors.pink.base,
    colors.purple.base,
    colors.deepPurple.base,
    colors.indigo.base,
    colors.blue.base,
    colors.lightBlue.base,
    colors.cyan.base,
  ],
  [
    colors.teal.base,
    colors.green.base,
    colors.lightGreen.base,
    colors.lime.base,
    colors.yellow.base,
    colors.amber.base,
    colors.orange.base,
    colors.deepOrange.base,
  ],
  [colors.brown.base, colors.blueGrey.base, colors.grey.base],
] as const;
