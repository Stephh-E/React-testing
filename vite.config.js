import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // use "describe", "expect", without importing them in test files
    environment: "jsdom", // makes tests work better as if they are in browser
    setupFiles: "src/setupTest.js" // test config before test run
  }
})
