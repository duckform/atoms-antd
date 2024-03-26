export const deps = {
  react: ["React", "react@18.2.0/umd/react.production.min.js"],
  "react-dom": ["ReactDOM", "react-dom@17.0.2/umd/react-dom.production.min.js"],
  antd: [
    "Antd",
    ["antd@4.16.13/dist/antd.min.js", "antd@4.16.13/dist/antd.min.css"],
  ],
  "@duckform/shared": ["DuckForm.Shared", null],
  "@duckform/core": ["DuckForm.Core", null],
  "@duckform/react": ["DuckForm.React", null],
  "@duckform/settings-form": ["DuckForm.SettingsForm", null],
  "@formily/shared": ["Formiy.Shared", null],
  "@formily/antd": ["Formiy.Antd", null],
  "@formily/core": ["Formiy.Core", null],
  "@formily/json-schema": ["Formiy.JsonSchema", null],
  "@formily/react": ["Formiy.React", null],
  "@formily/reactive": ["Formiy.Reactive", null],
  "@formily/reactive-react": ["Formiy.ReactiveReact", null],
};

export const atoms = ["input"];
export const version = "0.1.1";
