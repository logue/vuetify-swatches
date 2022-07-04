import { VuetifyResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
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
      {
        // vue @ shortcut fix
        find: '@/',
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
    // unplugin-vue-components
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // generate `components.d.ts` global declarations
      // https://github.com/antfu/unplugin-vue-components#typescript
      dts: true,
      // auto import for directives
      directives: false,
      // resolvers for custom components
      resolvers: [
        // Vuetify
        VuetifyResolver(),
      ],
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
