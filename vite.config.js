import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    globals: true,
    setupFiles: ["./tests/setup.js"],
  },
  server: {
    proxy: {
      // https://jhbljs92.tistory.com/entry/Pre-Project-5
      "/api": {
        target: "http://localhost:8000",
        rewrite: (path) => path.replace(/^\/api/, ""),
        changeOrigin: true,
      },
    },
    // proxy: {
    //   // http://localhost:8000/press_api/press?sort=subscriber_count&number=5
    //   // "/press_api/press": "http://localhost:8000",
    // },
  },
});
