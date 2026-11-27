import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const demo = page => resolve(import.meta.dirname, 'demo', page);

export default defineConfig({
  root: 'demo',
  base: './',
  build: {
    outDir: '../dist/demo',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: demo('index.html'),
        formulario: demo('formulario.html'),
      },
    },
  },
});
