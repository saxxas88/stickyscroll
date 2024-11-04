import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
      alias: {
      "@": path.resolve(__dirname, "/"),
      "@config": path.resolve(__dirname, "./config"),
      "@assets": path.resolve(__dirname, "./assets"),
      "@style": path.resolve(__dirname, "./style"),
      "@components": path.resolve(__dirname, "./components"),
      "@utils": path.resolve(__dirname, "./utils"),
    },
  },
});