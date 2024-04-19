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
      
  "src/atoms/radio": {
    "name": "DuckFormAtoms.Radio"
  },
  "src/atoms/rate": {
    "name": "DuckFormAtoms.Rate"
  },
  "src/atoms/password": {
    "name": "DuckFormAtoms.Password"
  },
  "src/atoms/array-table": {
    "name": "DuckFormAtoms.ArrayTable"
  },
  "src/atoms/upload": {
    "name": "DuckFormAtoms.Upload"
  },
  "src/atoms/array-cards": {
    "name": "DuckFormAtoms.ArrayCards"
  },
  "src/atoms/slider": {
    "name": "DuckFormAtoms.Slider"
  },
  "src/atoms/transfer": {
    "name": "DuckFormAtoms.Transfer"
  },
  "src/atoms/cascader": {
    "name": "DuckFormAtoms.Cascader"
  },
  "src/atoms/card": {
    "name": "DuckFormAtoms.Card"
  },
  "src/atoms/switch": {
    "name": "DuckFormAtoms.Switch"
  },
  "src/atoms/time-picker": {
    "name": "DuckFormAtoms.TimePicker"
  },
  "src/atoms/form-collapse": {
    "name": "DuckFormAtoms.FormCollapse"
  },
  "src/atoms/pro-array-table": {
    "name": "DuckFormAtoms.ProArrayTable"
  },
  "src/atoms/form-tab": {
    "name": "DuckFormAtoms.FormTab"
  },
  "src/atoms/date-picker": {
    "name": "DuckFormAtoms.DatePicker"
  },
  "src/atoms/space": {
    "name": "DuckFormAtoms.Space"
  },
  "src/atoms/number-picker": {
    "name": "DuckFormAtoms.NumberPicker"
  },
  "src/atoms/shadow-modal": {
    "name": "DuckFormAtoms.ShadowModal"
  },
  "src/atoms/input": {
    "name": "DuckFormAtoms.Input"
  },
  "src/atoms/tree-select": {
    "name": "DuckFormAtoms.TreeSelect"
  },
  "src/atoms/checkbox": {
    "name": "DuckFormAtoms.Checkbox"
  },
  "src/atoms/select": {
    "name": "DuckFormAtoms.Select"
  }

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
