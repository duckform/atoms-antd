import { ISchema } from "@formily/react";

export const SliderSchema: ISchema = {
  type: "object",
  properties: {
    allowClear: {
      type: "boolean",
      title: "允许清除内容",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    dots: {
      type: "boolean",
      title: "刻度固定",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    range: {
      type: "boolean",
      title: "双滑块",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    reverse: {
      type: "boolean",
      title: "反向坐标系",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    vertical: {
      type: "boolean",
      title: "垂直布局",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    tooltipVisible: {
      type: "boolean",
      title: "提示显示",
      "x-decorator": "FormItem",
      "x-component": "Switch",
      "x-decorator-props": {
        tooltip:
          "开启时，提示 将会始终显示；否则始终不显示，哪怕在拖拽及移入时",
      },
    },
    tooltipPlacement: {
      title: "提示位置",
      "x-decorator": "FormItem",
      "x-component": "ValueInput",
      "x-component-props": {
        include: ["EXPRESSION"],
      },
      "x-decorator-props": {
        tooltip: "设置 提示 展示位置。参考 Tooltip",
      },
    },
    marks: {
      title: "刻度标签",
      "x-decorator": "FormItem",
      "x-component": "ValueInput",
      "x-component-props": {
        include: ["EXPRESSION"],
      },
    },
    max: {
      type: "number",
      title: "最大值",
      "x-decorator": "FormItem",
      "x-component": "NumberPicker",
      "x-component-props": {
        defaultValue: 100,
      },
    },
    min: {
      type: "number",
      title: "最小值",
      "x-decorator": "FormItem",
      "x-component": "NumberPicker",
      "x-component-props": {
        defaultValue: 0,
      },
    },
    step: {
      type: "number",
      title: "步长",
      "x-decorator": "FormItem",
      "x-component": "NumberPicker",
      "x-component-props": {
        defaultValue: 1,
      },
    },
  },
};
