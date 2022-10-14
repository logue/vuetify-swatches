import { defineConfig, type UserConfig } from 'vite';
import { fileURLToPath } from 'url';
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';
import checker from 'vite-plugin-checker';
import Components from 'unplugin-vue-components/vite';
import vue from '@vitejs/plugin-vue2';

// https://vitejs.dev/config/
const config: UserConfig = {
  base: './',
  // Resolver
  resolve: {
    // https://vitejs.dev/config/shared-options.html#resolve-alias
    alias: {
      vue: fileURLToPath(
        new URL('./node_modules/vue/dist/vue.runtime.esm.js', import.meta.url)
      ),
      vuetify: fileURLToPath(
        new URL('./node_modules/vuetify', import.meta.url)
      ),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
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
