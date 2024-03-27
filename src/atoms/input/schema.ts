import type { ISchema } from "@formily/react";

export const inputSchema: ISchema = {
  type: "object",
  properties: {
    prefix: {
      title: "前缀",
      type: "string",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
    suffix: {
      title: "后缀",
      type: "string",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
    allowClear: {
      title: "允许清空",
      type: "boolean",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    maxLength: {
      title: "最大长度",
      type: "number",
      "x-decorator": "FormItem",
      "x-component": "NumberPicker",
    },
    placeholder: {
      title: "占位提示",
      type: "string",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
  },
};
