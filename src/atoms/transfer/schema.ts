import { ISchema } from "@formily/react";

export const TransferSchema: ISchema = {
  type: "object",
  properties: {
    oneWay: {
      type: "boolean",
      title: "单向展示",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    showSearch: {
      type: "boolean",
      title: "支持搜索",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    showSearchAll: {
      type: "boolean",
      title: "支持全选",
      "x-decorator": "FormItem",
      "x-component": "Switch",
      "x-component-props": {
        defaultChecked: true,
      },
    },
    filterOption: {
      title: "选项筛选器",
      "x-decorator": "FormItem",
      "x-component": "ValueInput",
      "x-component-props": {
        include: ["EXPRESSION"],
      },
    },
    operations: {
      title: "操作文案集合",
      "x-decorator": "FormItem",
      "x-component": "ValueInput",
      "x-component-props": {
        include: ["EXPRESSION"],
      },
      "x-decorator-props": {
        tooltip: "格式：string[]",
      },
    },
    titles: {
      title: "标题集合",
      "x-decorator": "FormItem",
      "x-component": "ValueInput",
      "x-component-props": {
        include: ["EXPRESSION"],
      },
      "x-decorator-props": {
        tooltip: "格式：string[]",
      },
    },
  },
};
