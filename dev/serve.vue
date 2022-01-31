<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Vuetify Swatch Demo</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <swatch v-model="color" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Swatch from '@/components/Swatch.vue';
import Vue from 'vue';

import VContainer from 'vuetify/lib/components/VContent';
import VAppBar from 'vuetify/lib/components/VAppBar';
import VMain from 'vuetify/lib/components/VMain';
import VApp from 'vuetify/lib/components/VApp';

export default Vue.extend({
  components: {
    Swatch,
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
