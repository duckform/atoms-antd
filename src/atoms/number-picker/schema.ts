import { ISchema } from "@formily/react";
import { composeEnum } from "@utils/composeEnum";

export const NumberPickerSchema: ISchema = {
  type: "object",
  properties: {
    decimalSeparator: {
      type: "string",
      title: "小数点",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
    precision: {
      type: "number",
      title: "数字精度",
      "x-decorator": "FormItem",
      "x-component": "NumberPicker",
    },
    max: {
      type: "number",
      title: "最大值",
      "x-decorator": "FormItem",
      "x-component": "NumberPicker",
    },
    min: {
      type: "number",
      title: "最小值",
      "x-decorator": "FormItem",
      "x-component": "NumberPicker",
    },
    step: {
      type: "number",
      title: "步长",
      "x-decorator": "FormItem",
      "x-component": "NumberPicker",
    },
    placeholder: {
      type: "string",
      title: "占位提示",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
    size: {
      type: "string",
      title: "尺寸",
      enum: composeEnum(
        ["large", "small", "middle", null!],
        ["大", "小", "默认", "继承"],
      ),
      "x-decorator": "FormItem",
      "x-component": "Select",
      "x-component-props": {
        defaultValue: "middle",
      },
    },
    formatter: {
      title: "格式转换器",
      "x-decorator": "FormItem",
      "x-component": "ValueInput",
      "x-component-props": {
        include: ["EXPRESSION"],
      },
      "x-decorator-props": {
        tooltip: "格式：function(value: number | string): string",
      },
    },
    parser: {
      title: "格式解析器",
      "x-decorator": "FormItem",
      "x-component": "ValueInput",
      "x-component-props": {
        include: ["EXPRESSION"],
      },
      "x-decorator-props": {
        tooltip:
          "指定从 格式转换器 里转换回数字的方式，和 格式转换器 搭配使用,格式：function(string): number",
      },
    },
    stringMode: {
      type: "boolean",
      title: "字符串格式",
      "x-decorator": "FormItem",
      "x-component": "Switch",
      "x-decorator-props": {
        tooltip: "开启后支持高精度小数。同时 onChange 将返回 string 类型",
      },
    },
    bordered: {
      type: "boolean",
      title: "是否有边框",
      "x-decorator": "FormItem",
      "x-component": "Switch",
      "x-component-props": {
        defaultChecked: true,
      },
    },
    keyboard: {
      type: "boolean",
      title: "启用快捷键",
      "x-decorator": "FormItem",
      "x-component": "Switch",
      "x-component-props": {
        defaultChecked: true,
      },
    },
  },
};
