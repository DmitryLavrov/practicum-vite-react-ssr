import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import babel from '@rollup/plugin-babel'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ extensions: ['.ts', '.tsx'], babelHelpers: 'bundled' }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "ssr.tsx"),
      name: 'Client',
      formats: ['cjs'],
    },
    rollupOptions: {
      output: {
        dir: 'ssr-dist',
      },
    }
  }
})
