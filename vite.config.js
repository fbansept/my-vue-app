import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/my-vue-app/",
  build: {
    outDir: 'docs', // utilisez "docs" au lieu de "dist" car GitHub Pages utilise ce répertoire pour afficher votre site
    lib: {
      entry: 'src/my-element.js',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
})
