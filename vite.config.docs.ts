import { defineConfig, type UserConfig } from 'vite';
import checker from 'vite-plugin-checker';
import vuetify from 'vite-plugin-vuetify';
import Vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
const config: UserConfig = {
  base: './',
  // Resolver
  resolve: {
    // https://vitejs.dev/config/#resolve-alias
    alias: [
      {
        // vue @ shortcut fix
        find: '@/',
        replacement: `${path.resolve(__dirname, './src')}/`,
      },
    ],
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
          ],
        },
      },
    },
    target: 'es2021',
  },
};

// Export vite config
export default defineConfig(config);
