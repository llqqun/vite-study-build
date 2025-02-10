import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import commonjs from 'vite-plugin-commonjs'
import { generateIcons } from './src/assets/script/generate-icons.js';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), generateIcons(), commonjs()],
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
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/style/mixins.scss" as *;`
      }
    }
  },
  server: {
  }
});
