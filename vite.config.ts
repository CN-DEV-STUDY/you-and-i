import {defineConfig, loadEnv} from 'vite'
import path from "path"
import react from '@vitejs/plugin-react-swc'
import {resolve} from "url";

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
        },
      },
    },
    define: {
      // VITE_MY_VARIABLE 환경 변수를 로드합니다.
      'import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY': process.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY,
      'import.meta.env.VITE_BASE_URL': process.env.VITE_BASE_URL,
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
