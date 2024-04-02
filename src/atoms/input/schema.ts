import type { ISchema } from "@formily/react";
import { composeEnum } from "../../utils";

export const inputSchema: ISchema = {
  type: "object",
  properties: {
    addonBefore: {
      type: "string",
      title: "后缀标签",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
    addonAfter: {
      type: "string",
      title: "前缀标签",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
    prefix: {
      type: "string",
      title: "前缀",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
    suffix: {
      type: "string",
      title: "后缀",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
    allowClear: {
      type: "boolean",
      title: "允许清除内容",
      "x-decorator": "FormItem",
      "x-component": "Switch",
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
    maxLength: {
      type: "number",
      title: "最大长度",
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
        ["大", "小", "默认", "继承"]
      ),
      "x-decorator": "FormItem",
      "x-component": "Select",
      "x-component-props": {
        defaultValue: "middle",
      },
    },
  },
};

export const textareaSchema: ISchema = {
  type: "object",
  properties: {
    bordered: {
      title: "是否有边框",
      type: "boolean",
      "x-decorator": "FormItem",
      "x-component": "Switch",
      "x-component-props": {
        defaultChecked: true,
      },
    },
    maxLength: {
      type: "number",
      title: "最大长度",
      "x-decorator": "FormItem",
      "x-component": "NumberPicker",
    },
    placeholder: {
      type: "string",
      title: "占位提示",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
    autoSize: {
      type: "boolean",
      title: "自适应高度",
      "x-decorator": "FormItem",
      "x-component": "Switch",
      "x-decorator-props": {
        tooltip: "可设置为 true | false 或对象：{ minRows: 2, maxRows: 6 }",
      },
    },
    showCount: {
      type: "string",
      title: "是否展示字数",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
  },
};