import { VuetifyResolver } from 'unplugin-vue-components/resolvers';
import { createVuePlugin as Vue } from 'vite-plugin-vue2';
import eslintPlugin from '@modyqyw/vite-plugin-eslint';
import Components from 'unplugin-vue-components/vite';
import { defineConfig, type UserConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
const config: UserConfig = {
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
    // https://github.com/underfin/vite-plugin-vue2
    Vue({
      target: 'esnext',
    }),
    // unplugin-vue-components
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // generate `components.d.ts` global declarations
      dts: true,
      // auto import for directives
      directives: true,
      // resolvers for custom components
      resolvers: [
        // Vuetify
        VuetifyResolver(),
      ],
    }),
    // eslint
    // https://github.com/ModyQyW/vite-plugin-eslint
    eslintPlugin(),
  ],
  optimizeDeps: {
    exclude: ['vue-demi'],
  },
  // Build Options
  // https://vitejs.dev/config/#build-options
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'VSwatches',
      fileName: format => `v-swatches.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'vuetify/lib', 'vuetify/lib/util/colors'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          'vuetify/lib': 'Vuetify',
          'vuetify/lib/util/colors': 'colors',
          'vue-demi': 'VueDemi',
        },
      },
    },
    target: 'es2021',
    // Minify option
    // https://vitejs.dev/config/#build-minify
    /*
    minify: 'terser',
    terserOptions: {
      ecma: 2020,
      parse: {},
      compress: { drop_console: true },
      mangle: true, // Note `mangle.properties` is `false` by default.
      module: true,
      output: { comments: true, beautify: false },
    },
    */
  },
};

// Export vite config
export default defineConfig(config);
