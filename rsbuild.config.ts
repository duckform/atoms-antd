import { defineConfig } from "@rsbuild/core";
const { RsdoctorRspackPlugin } = require("@rsdoctor/rspack-plugin");
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  source: {
    entry: {
      index: "./playground",
    },
    alias: {
      atoms: "./src",
      "@duckform/core": "./node_modules/@duckform/core/dist/esm",
      "@duckform/core/shared": "./node_modules/@duckform/core/dist/esm/shared",
      "@duckform/react": "./node_modules/@duckform/react/dist/esm",
      "@duckform/react/settings-form":
        "./node_modules/@duckform/react/dist/esm/settings-form",
    },
    transformImport: [
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: "css",
      },
    ],
  },
  plugins: [pluginReact()],
  tools: {
    rspack(config, { appendPlugins }) {
      // 仅在 RSDOCTOR 为 true 时注册插件，因为插件会增加构建耗时
      if (process.env.RSDOCTOR) {
        appendPlugins(
          new RsdoctorRspackPlugin({
            // 插件选项
          }),
        );
      }
    },
  },
});
