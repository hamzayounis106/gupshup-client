import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // "/api": "http://localhost:8080/",
      '/api': 'https://gupshup-server-3065f391ce53.herokuapp.com/'
    },
  },
});