import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import replace from "@rollup/plugin-replace";
import { visualizer } from "rollup-plugin-visualizer";
import packageJSON from "./package.json" assert { type: "json" };
import pluginTerser from "@rollup/plugin-terser";

// https://vitejs.dev/config/
export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    input: "bundle.js",
    output: [
      {
        file: "dist/" + packageJSON.name + ".cjs.js",
        format: "cjs",
      },
      {
        file: "dist/" + packageJSON.name + ".es.js",
        format: "es",
      },
      {
        name: "myObject",
        file: "dist/" + packageJSON.name + ".iife.js",
        format: "iife",
      },
      {
        name: "myObject",
        file: "dist/" + packageJSON.name + ".umd.js",
        format: "umd",
      },
    ],
    plugins: [
      react(),
      chunkSplitPlugin(),
      visualizer(),
      pluginTerser(),
      replace({
        "eval(": "((x)=>x)(", // Replacing eval with a no-op or any other logic
        preventAssignment: true,
      }),
    ],
    server: {
      port: Number(process.env.VITE_PORT) || 3000,
    },
    build: {
      minify: false,
      terserOptions: {
        compress: false,
        mangle: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "three"],
          // You can add more custom chunks here
        },
      },
    },
  };
};
