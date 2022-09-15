import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, type UserConfig } from 'vite';
import vuetify from 'vite-plugin-vuetify';
import checker from 'vite-plugin-checker';
import banner from 'vite-plugin-banner';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const pkg = require('./package.json');

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }): Promise<UserConfig> => {
  const config: UserConfig = {
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
      // Vue3
      vue(),
      // Vuetify Loader
      // https://github.com/vuetifyjs/vuetify-loader
      vuetify({
        autoImport: false,
        // styles: 'sass',
      }),
      // vite-plugin-checker
      // https://github.com/fi3ework/vite-plugin-checker
      checker({ typescript: true, vueTsc: false }),
      // vite-plugin-banner
      // https://github.com/chengpeiquan/vite-plugin-banner
      banner(`/**
 * ${pkg.name}
 *
 * @description ${pkg.description}
 * @author ${pkg.author.name} <${pkg.author.email}>
 * @copyright 2022 By Masashi Yoshikawa All rights reserved.
 * @license ${pkg.license}
 * @version ${pkg.version}
 * @see {@link ${pkg.homepage}}
 */
`),
    ],
    optimizeDeps: {
      exclude: ['vue', 'vuetify'],
    },
    // Build Options
    // https://vitejs.dev/config/#build-options
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'VSwatches',
        formats: ['umd', 'es', 'iife'],
        fileName: format => `index.${format}.js`,
      },
      rollupOptions: {
        plugins: [
          mode === 'analyze'
            ? // rollup-plugin-visualizer
              // https://github.com/btd/rollup-plugin-visualizer
              visualizer({
                open: true,
                filename: 'dist/stats.html',
                gzipSize: true,
                brotliSize: true,
              })
            : undefined,
        ],
        external: ['vue', 'vuetify/lib', 'vuetify/lib/util/colors.mjs'],
        output: {
          exports: 'named',
          globals: {
            vue: 'Vue',
            vuetify: 'Vuetify',
            colors: 'vuetify/lib/util/colors.mjs',
          },
        },
      },
      target: 'es2021',
      // Minify option
      minify: 'esbuild',
    },
    esbuild: {
      drop: command == 'serve' ? [] : ['console'],
    },
  };
  // Export vite config
  return config;
});
