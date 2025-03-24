import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@molecules": path.resolve(__dirname, "./src/components/molecules"),
      "@atoms": path.resolve(__dirname, "./src/components/atoms"),
      "@organisms": path.resolve(__dirname, "./src/components/organisms"),
      "@data": path.resolve(__dirname, "./src/assets/data"),
      "@pages": path.resolve(__dirname, "./src/components/pages"),
    },
  },
});
