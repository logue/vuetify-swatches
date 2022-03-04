<template>
  <v-sheet>
    <div v-for="(colors, rows) in palette" :key="rows">
      <v-btn
        v-for="color in colors"
        :key="color"
        elevation="1"
        :width="size"
        :height="size"
        :color="color"
        :value="color"
        min-width="auto"
        @click="onSwatchClick"
      >
        <v-icon
          v-if="color === selected"
          :size="iconSize"
          :color="color"
          v-text="icon"
        />
      </v-btn>
    </div>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'vue-property-decorator';

import { VSheet, VIcon, VBtn } from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

@Component({
  components: {
    VSheet,
    VBtn,
    VIcon,
  },
})
/** Swatch */
export default class VSwatches extends Vue {
  /** チェックアイコンの表示制御 */
  checkedVisibilty = false;

  /** カラー一覧 */
  @PropSync('swatches', {
    type: Array,
    default: () => [
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
      [
        colors.brown.base,
        colors.blueGrey.base,
        colors.grey.base,
        colors.shades.black,
        colors.shades.white,
        colors.shades.transparent,
      ],
    ],
  })
  palette!: string[] | string[][];

  /** 親コンポーネントからのバインディング */
  @PropSync('value', { required: true, type: String })
  selected!: string;

  /** ボタンの大きさ */
  @Prop({ default: '2rem', type: String })
  readonly size!: string;

  /** 使用するアイコン */
  @Prop({ default: 'mdi-checkbox-marked-circle', type: String })
  readonly icon!: string;

  /** アイコンサイズ */
  @Prop({ default: '1rem', type: String })
  readonly iconSize!: string;

  /**
   * ボタンがクリックされた
   *
   * @param e - イベント
   */
  onSwatchClick(e: Event) {
    const value = (e.target as HTMLButtonElement).value;
    if (!value || this.selected === value) {
      return;
    }
    this.selected = value;
    this.$emit('input', value);
  }
}
</script>

<style lang="scss" scoped>
.v-btn {
  padding: 0 !important;
  margin: 0.1rem;

  .v-icon {
    filter: invert(100%);
  }
}
</style>
