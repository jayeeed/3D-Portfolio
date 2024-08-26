import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import replace from "@rollup/plugin-replace";
import { visualizer } from "rollup-plugin-visualizer";

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  // https://vitejs.dev/config/
  return defineConfig({
    plugins: [
      react(),
      chunkSplitPlugin(),
      visualizer(),
      replace({
        "eval(": "((x)=>x)(", // Replacing eval with a no-op or any other logic
        preventAssignment: true,
      }),
    ],
    server: {
      port: Number(process.env.VITE_PORT) || 3000,
    },
    build: {
      minify: "esbuild",
      sourcemap: false,
      outDir: "dist",
      assetsDir: "assets",
      chunkSizeWarningLimit: 1000,
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "three"],
          // You can add more custom chunks here
        },
      },
    },
  });
};
