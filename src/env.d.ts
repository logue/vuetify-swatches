/* eslint-disable */
/// <reference types="vite/client" />

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'vuetify/lib/util/colors.mjs';

interface ImportMetaEnv {
  // see https://vitejs.dev/guide/env-and-mode.html#env-files
  // add .env variables.
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
