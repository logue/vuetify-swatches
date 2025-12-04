import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';

import dts from 'vite-plugin-dts';

// Vite config for building preset files
export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: './tsconfig.app.json',
      outDir: 'dist/presets',
      entryRoot: 'src/presets',
    }),
  ],
  build: {
    outDir: 'dist/presets',
    emptyOutDir: true,
    lib: {
      entry: {
        index: fileURLToPath(
          new URL('./src/presets/index.ts', import.meta.url)
        ),
        basic: fileURLToPath(
          new URL('./src/presets/basic.ts', import.meta.url)
        ),
        advanced: fileURLToPath(
          new URL('./src/presets/advanced.ts', import.meta.url)
        ),
      },
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: ['vuetify/util/colors'],
      output: {
        preserveModules: false,
      },
    },
  },
});
