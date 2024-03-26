import { defineConfig } from "@rsbuild/core";
const { RsdoctorRspackPlugin } = require("@rsdoctor/rspack-plugin");
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  source: {
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
