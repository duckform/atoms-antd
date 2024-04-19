export const deps = {
  react: ["React", "react@18.2.0/umd/react.production.min.js"],
  "react-dom": ["ReactDOM", "react-dom@17.0.2/umd/react-dom.production.min.js"],
  antd: [
    "Antd",
    ["antd@4.16.13/dist/antd.min.js", "antd@4.16.13/dist/antd.min.css"],
  ],
  "@duckform/core/shared": ["DuckForm.Shared", null],
  "@duckform/core": ["DuckForm.Core", null],
  "@duckform/react": ["DuckForm.React", null],
  "@duckform/react/settings-form": ["DuckForm.SettingsForm", null],
  "@formily/shared": ["Formily.Shared", null],
  "@formily/antd": ["Formily.Antd", null],
  "@formily/core": ["Formily.Core", null],
  "@formily/json-schema": ["Formily.JsonSchema", null],
  "@formily/react": ["Formily.React", null],
  "@formily/reactive": ["Formily.Reactive", null],
  "@formily/reactive-react": ["Formily.ReactiveReact", null],
};

export const atoms = ["FILL_BY_SCRIPTS"];
export const version = "FILL_BY_GA_SCRIPTS";
