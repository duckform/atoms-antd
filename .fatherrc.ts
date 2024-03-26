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
      "src/atoms/input": {
        name: "DuckFormAtoms.Input",
      },
    },
    extractCSS: true,
    externals: {
      "@basic": "DuckFormAtomsAntd.Basic",
      react: "React",
      "react-dom": "ReactDOM",
      antd: "Antd",
      "@duckform/shared": "DuckForm.Shared",
      "@duckform/core": "DuckForm.Core",
      "@duckform/react": "DuckForm.React",
      "@duckform/settings-form": "DuckForm.SettingsForm",
      "@formily/shared": "Formiy.Shared",
      "@formily/antd": "Formiy.Antd",
      "@formily/core": "Formiy.Core",
      "@formily/json-schema": "Formiy.JsonSchema",
      "@formily/react": "Formiy.React",
      "@formily/reactive": "Formiy.Reactive",
      "@formily/reactive-react": "Formiy.ReactiveReact",
    },
    chainWebpack(config) {
      config.optimization.minimize(false);
      return config;
    },
  },
});
