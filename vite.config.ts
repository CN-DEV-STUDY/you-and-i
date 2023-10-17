import {defineConfig, loadEnv} from 'vite'
import path from "path"
import react from '@vitejs/plugin-react-swc'
import {resolve} from "url";

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  return {

    plugins: [react(),
      require("@import-meta-env/unplugin").webpack({
        env: ".env",
        example: ".env.example",
        transformMode: "compile-time",
        include: ["VITE_*", "NODE_ENV"],
      }),
    ],
    server: {
      host: true,
      port: 5173
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }


})
