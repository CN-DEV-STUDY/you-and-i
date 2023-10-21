import {defineConfig} from 'vite'
import path from "path"
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // https://stackoverflow.com/questions/75883720/504-outdated-optimize-dep-while-using-react-vite
  // optimizeDeps: {
  //   exclude: ['js-big-decimal']
  // },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
