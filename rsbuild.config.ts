import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  source: {
    entry: {
      index: "./playground",
    },
    alias: {
      atoms: "./src",
      '@basic': "./src/basic",
      "@duckform/core": "./node_modules/@duckform/core/dist/esm",
      "@duckform/core/shared": "./node_modules/@duckform/core/dist/esm/shared",
      "@duckform/react": "./node_modules/@duckform/react/dist/esm",
      "@duckform/react/settings-form":
        "./node_modules/@duckform/react/dist/esm/settings-form",
    },
  },
  plugins: [pluginReact()],
});
