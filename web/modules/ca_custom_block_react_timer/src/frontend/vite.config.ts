import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: "timer.js",
        chunkFileNames: "assets/timer.js",
        assetFileNames: "assets/timer.[ext]"
      }
    }
  },
})
