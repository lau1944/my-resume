import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  projects: [
    {
      root: './src', // root of your vue project (should contain package.json)
      package: './package.json', // Relative to root property, don't change this.
      jsconfig: './jsconfig.json',  // Relative to root property, don't change this.
      tsconfig: './tsconfig.json'
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url))
    }
  },
})