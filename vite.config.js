import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { generateIcons } from './src/assets/script/generate-icons.js';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), generateIcons()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'generate-icons',
          buildStart() {
            generateIcons();
          }
        }
      ]
    }
  },
  server: {
  }
});
