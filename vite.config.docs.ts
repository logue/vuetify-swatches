import { defineConfig, type UserConfig } from 'vite';
import checker from 'vite-plugin-checker';
import Vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
const config: UserConfig = {
  base: './',
  // Resolver
  resolve: {
    // https://vitejs.dev/config/shared-options.html#resolve-alias
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./node_modules', import.meta.url)),
      'vuetify-swatches': fileURLToPath(new URL('./src', import.meta.url)),
    },
    // External
    dedupe: ['vue', 'vuetify'],
  },
  // https://vitejs.dev/config/#server-options
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },
  plugins: [
    // Vue3
    Vue(),
    // Vuetify Loader
    // https://github.com/vuetifyjs/vuetify-loader
    vuetify({
      autoImport: true,
      // styles: 'sass',
    }),
    // vite-plugin-checker
    // https://github.com/fi3ework/vite-plugin-checker
    checker({ typescript: true, vueTsc: true }),
  ],
  // Build Options
  // https://vitejs.dev/config/#build-options
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
          vuetify: [
            'vuetify',
            'vuetify/components',
            'vuetify/directives',
            'vuetify/lib/styles/main.css',
            // 'webfontloader',
          ],
          // materialdesignicons: ['@mdi/font/css/materialdesignicons.css'],
          codemirror: [
            'vue-codemirror6',
            'codemirror',
            '@codemirror/autocomplete',
            '@codemirror/commands',
            '@codemirror/language',
            '@codemirror/lint',
            '@codemirror/search',
            '@codemirror/state',
            '@codemirror/view',
            // Add the following as needed.
            '@codemirror/lang-html',
          ],
        },
      },
    },
    target: 'esnext',
  },
};

// Export vite config
export default defineConfig(config);
