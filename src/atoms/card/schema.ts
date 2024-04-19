import { ISchema } from "@formily/react";

export const CardSchema: ISchema & { Addition?: ISchema } = {
  type: "object",
  properties: {
    title: {
      type: "string",
      title: "类型",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
    extra: {
      type: "string",
      title: "右侧扩展",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
    type: {
      type: "boolean",
      title: "类型",
      enum: [
        { label: "内置", value: "inner" },
        { label: "默认", value: "" },
      ],
      "x-decorator": "FormItem",
      "x-component": "Radio.Group",
      "x-component-props": {
        defaultValue: "",
        optionType: "button",
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
  },
};
