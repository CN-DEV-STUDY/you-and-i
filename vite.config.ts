import {defineConfig} from 'vite'
import path from "path"
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/login",
  plugins: [react()],
  // https://stackoverflow.com/questions/75883720/504-outdated-optimize-dep-while-using-react-vite
  // optimizeDeps: {
  //   exclude: ['js-big-decimal']
  // },

  build: {
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
