<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Vuetify Swatch Demo</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-swatches v-model="color" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import { VContainer, VAppBar, VMain, VApp } from 'vuetify/lib';
import VSwatches from '@/components/VSwatches.vue';

export default Vue.extend({
  components: {
    VSwatches,
    VApp,
    VAppBar,
    VMain,
    VContainer,
  },
  data() {
    return {
      color: '#FFFFFF',
    };
  },
  watch: {},
  async beforeCreate() {},
  created() {},
  methods: {},
});
</script>
