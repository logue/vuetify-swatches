import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';

import dts from 'vite-plugin-dts';

// Vite config for building preset files
export default defineConfig({
  plugins: [
    dts({
      processor: 'ts',
      tsconfigPath: './tsconfig.app.json',
      outDirs: 'dist/presets',
      entryRoot: 'src/presets',
      include: ['src/presets/**/*.ts']
    })
  ],
  build: {
    outDir: 'dist/presets',
    emptyOutDir: true,
    lib: {
      entry: {
        index: fileURLToPath(new URL('./src/presets/index.ts', import.meta.url)),
        basic: fileURLToPath(new URL('./src/presets/basic.ts', import.meta.url)),
        advanced: fileURLToPath(new URL('./src/presets/advanced.ts', import.meta.url))
      },
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`
    },
    rollupOptions: {
      external: ['vuetify/util/colors'],
      output: {
        preserveModules: false
      }
    }
  }
});
