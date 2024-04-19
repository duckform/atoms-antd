import { defineConfig } from "father";

export default defineConfig({
  umd: {
    entry: {
      "src/basic": {
        name: "DuckFormAtoms.Basic",
      },
      "src/info": {
        name: "DuckFormAtoms.Info",
      },
      // AUTO BY SCRIPTS
    },
    extractCSS: true,
    externals: {
      "@basic": "DuckFormAtoms.Basic",
      react: "React",
      "react-dom": "ReactDOM",
      antd: "Antd",
      "@duckform/shared": "DuckForm.Shared",
      "@duckform/core": "DuckForm.Core",
      "@duckform/react": "DuckForm.React",
      "@duckform/settings-form": "DuckForm.SettingsForm",
      "@formily/shared": "Formily.Shared",
      "@formily/antd": "Formily.Antd",
      "@formily/core": "Formily.Core",
      "@formily/json-schema": "Formily.JsonSchema",
      "@formily/react": "Formily.React",
      "@formily/reactive": "Formily.Reactive",
      "@formily/reactive-react": "Formily.ReactiveReact",
    },
    chainWebpack(config) {
      config.optimization.minimize(false);
      return config;
    },
  },
});
