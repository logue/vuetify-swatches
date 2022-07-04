import { defineConfig, type UserConfig } from 'vite';
import checker from 'vite-plugin-checker';
import vue from '@vitejs/plugin-vue2';
import path from 'path';

// https://vitejs.dev/config/
const config: UserConfig = {
  base: './',
  // Resolver
  resolve: {
    // https://vitejs.dev/config/#resolve-alias
    alias: [
      // make vue external
      {
        find: 'vue',
        replacement: path.resolve(
          __dirname,
          './node_modules/vue/dist/vue.runtime.esm.js'
        ),
      },
      {
        find: 'vuetify',
        replacement: path.resolve(__dirname, './node_modules/vuetify'),
      },
      {
        // vue @ shortcut fix
        find: '@/',
        replacement: `${path.resolve(__dirname, './src')}/`,
      },
      {
        find: 'src/',
        replacement: `${path.resolve(__dirname, './src')}/`,
      },
    ],
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
    // Vue2
    // https://github.com/vitejs/vite-plugin-vue2
    vue(),
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
          vue: ['vue', 'vue-demi'],
          vuetify: ['vuetify/lib', 'vuetify/lib/util/colors'],
          codemirror: [
            '@codemirror/state',
            '@codemirror/view',
            '@codemirror/basic-setup',
            '@codemirror/lang-html',
          ],
        },
      },
    },
    target: 'es2021',
  },
};

// Export vite config
export default defineConfig(config);
