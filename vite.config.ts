import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  resolve : {
    alias: [{find: "@", replacement: path.resolve(import.meta.url, '/src')}],
  },
  plugins: [react()],
})
