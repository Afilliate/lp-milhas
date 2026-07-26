import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,      // Remove todos os console.log
        drop_debugger: true,     // Remove debuggers
        passes: 2               // Compressão mais agressiva
      },
      mangle: {
        properties: {
          regex: /^_/           // Ofusca propriedades privadas que começam com _
        }
      },
      output: {
        beautify: false,
        comments: false         // Remove todos os comentários do bundle
      }
    }
  }
})
