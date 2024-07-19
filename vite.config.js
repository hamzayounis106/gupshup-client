import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://gupshup-server-3065f391ce53.herokuapp.com/",
        changeOrigin: true,
      },
    },
  },
});