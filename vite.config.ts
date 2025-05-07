import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const isLib = mode === "lib";

  return {
    base: "/stock-widget/",
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: isLib
      ? {
          lib: {
            entry: path.resolve(__dirname, "src/main.tsx"),
            name: "StockWidget",
            fileName: "stock-widget",
            formats: ["es", "umd"],
          },
          rollupOptions: {
            external: ["react", "react-dom"],
            output: {
              globals: {
                react: "React",
                "react-dom": "ReactDOM",
              },
            },
          },
        }
      : {},
  };
});
