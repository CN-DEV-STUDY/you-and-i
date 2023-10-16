import {defineConfig, loadEnv} from 'vite'
import path from "path"
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    plugins: [react()],
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
