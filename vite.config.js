import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: "/", // Изменено для Vercel
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  publicDir: "public",
  assetsInclude: ["**/*.MP4", "**/*.mp4", "**/*.webm", "**/*.gif"],

  server: {
    port: 3000,
    open: true,
    host: true,
  },

  build: {
    outDir: "dist",
    assetsDir: "assets",
    minify: "esbuild",
    sourcemap: mode === "development",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split(".").at(1)?.toLowerCase();
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/images/[name][extname]`;
          }
          if (/mp4|webm/i.test(extType)) {
            return `assets/videos/[name][extname]`;
          }
          return `assets/[name][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
}));
