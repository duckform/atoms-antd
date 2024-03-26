import type { ISchema } from "@formily/react";

export const styleSchema = {
  type: "void",
  properties: {
    "style.width": {
      title: "宽度",
      type: "string",
      "x-decorator": "FormItem",
      "x-component": "SizeInput",
    },
    "style.height": {
      title: "高度",
      type: "string",
      "x-decorator": "FormItem",
      "x-component": "SizeInput",
    },
    "style.display": {
      title: "展示",
      "x-component": "DisplayStyleSetter",
    },
    "style.background": {
      title: "背景",
      "x-component": "BackgroundStyleSetter",
    },
    "style.boxShadow": {
      title: "阴影",
      "x-component": "BoxShadowStyleSetter",
    },
    "style.font": {
      title: "字体",
      "x-component": "FontStyleSetter",
    },
    "style.margin": {
      title: "外边距",
      "x-component": "BoxStyleSetter",
    },
    "style.padding": {
      title: "内边距",
      "x-component": "BoxStyleSetter",
    },
    "style.borderRadius": {
      title: "圆角",
      "x-component": "BorderRadiusStyleSetter",
    },
    "style.border": {
      title: "边框",
      "x-component": "BorderStyleSetter",
    },
    "style.opacity": {
      title: "透明度",
      "x-decorator": "FormItem",
      "x-component": "Slider",
      "x-component-props": {
        defaultValue: 1,
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
  },
} satisfies ISchema;
