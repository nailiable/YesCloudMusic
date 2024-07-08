import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      imports: [
        'vue',
        {
          'ts-pattern': [
            'match',
          ],
        },
      ],
      dts: './auto-imports.d.ts',
    }),
  ],
  build: {
    lib: {
      entry: './lib/main.ts',
      name: 'playlist',
      fileName: 'playlist',
    },
    rollupOptions: {
      external: ['vue', '@naiable/utils'],
    },
  },
})
