import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild', // usa o minificador nativo do Vite
    // Remova a seção 'terserOptions' inteira
  }
})
