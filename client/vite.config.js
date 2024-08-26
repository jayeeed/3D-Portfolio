import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  // https://vitejs.dev/config/
  return defineConfig({
    plugins: [react()],
    server: {
      port: Number(process.env.VITE_PORT) || 3000,
    },
    build: {
      minify: "esbuild", // Use 'esbuild' (default) or 'terser' for minification
      sourcemap: false, // Disable source maps for smaller build size
      outDir: "dist", // Specify the output directory
      assetsDir: "assets", // Specify the directory for static assets
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  });
};
