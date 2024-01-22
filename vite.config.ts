import { writeFileSync } from 'node:fs';
import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { defineConfig, type UserConfig } from 'vite';

import { visualizer } from 'rollup-plugin-visualizer';
import banner from 'vite-plugin-banner';
import { checker } from 'vite-plugin-checker';
import dts from 'vite-plugin-dts';
import vuetify from 'vite-plugin-vuetify';

// @ts-nocheck
import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }): UserConfig => {
  const config: UserConfig = {
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
    // https://vitejs.dev/config/shared-options.html#base
    base: './',
    plugins: [
      // Vue3
      vue(),
      // Vuetify Loader
      // https://github.com/vuetifyjs/vuetify-loader
      mode === 'docs'
        ? vuetify({
            autoImport: true,
            styles: 'sass',
          })
        : undefined,
      // vite-plugin-checker
      // https://github.com/fi3ework/vite-plugin-checker
      checker({
        typescript: true,
        // vueTsc: true,
      }),
      // vite-plugin-banner
      // https://github.com/chengpeiquan/vite-plugin-banner
      banner(`/**
 * ${pkg.name}
 *
 * @description ${pkg.description}
 * @author ${pkg.author.name} <${pkg.author.email}>
 * @copyright 2022-2024 By Masashi Yoshikawa All rights reserved.
 * @license ${pkg.license}
 * @version ${pkg.version}
 * @see {@link ${pkg.homepage}}
 */
`),
      // vite-plugin-dts
      // https://github.com/qmhc/vite-plugin-dts
      mode === 'docs' ? undefined : dts(),
    ],
    optimizeDeps: {
      exclude: ['vue'],
    },
    // Build Options
    // https://vitejs.dev/config/#build-options
    build: {
      commonjsOptions: {
        exclude:
          mode === 'docs'
            ? undefined
            : [
                'vuetify/lib',
                'vuetify/lib/components/VBtn',
                'vuetify/lib/components/VIcon',
                'vuetify/lib/components/VSheet',
                'vuetify/lib/util/colors.mjs',
              ],
      },
      outDir: mode === 'docs' ? 'docs' : undefined,
      lib:
        mode === 'docs'
          ? undefined
          : {
              entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
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
        external: mode === 'docs' ? undefined : ['vue', /^vuetify/],
        output: {
          esModule: true,
          generatedCode: {
            reservedNamesAsProps: false,
          },
          interop: 'compat',
          systemNullSetters: false,
          exports: 'named',
          globals: {
            vue: 'Vue',
            'vuetify/components': 'Vuetify/components',
            'vuetify/lib/util/colors.mjs': 'colors',
          },
          manualChunks:
            mode === 'docs'
              ? {
                  vue: ['vue'],
                  vuetify: [
                    'vuetify/components',
                    'vuetify/directives',
                    'vuetify/lib/util/colors.mjs',
                  ],
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
                  'codemirror-lang': ['@codemirror/lang-html'],
                }
              : undefined,
        },
      },
      target: 'esnext',
      minify: mode === 'docs',
    },
    esbuild: {
      drop: command === 'serve' ? [] : ['console'],
    },
  };
  // Write meta data.
  writeFileSync(
    fileURLToPath(new URL('./src/Meta.ts', import.meta.url)),
    `import type MetaInterface from './interfaces/MetaInterface';

  // This file is auto-generated by the build system.
  const meta: MetaInterface = {
    version: '${pkg.version}',
    date: '${new Date().toISOString()}',
  };
  export default meta;
  `
  );
  // Export vite config
  return config;
});
