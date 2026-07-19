import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Data": path.resolve(process.cwd(), "src/Data"),
      "@components": path.resolve(process.cwd(), "src/components"),
      "@ui": path.resolve(process.cwd(), "src/components/ui"),
      "@": path.resolve(process.cwd(), "src"),
    },
  },
});
