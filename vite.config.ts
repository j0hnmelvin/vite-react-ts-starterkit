import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // https://stackoverflow.com/a/77663240
    environment: "jsdom", // https://stackoverflow.com/a/77663240
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
      // 'tests/unit/UserListItem.test.tsx'
    ],
    setupFiles: './setupTest.ts', // https://stackoverflow.com/a/77663240
  },
  server: {
    host: true,
    port: 5173
  }
});
