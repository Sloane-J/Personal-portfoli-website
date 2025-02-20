import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory for the build
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})