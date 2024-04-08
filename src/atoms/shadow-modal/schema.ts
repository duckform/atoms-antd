import { ISchema } from "@formily/react";

export const ShadowModalSchema: ISchema = {
  type: "object",
  properties: {
    title: {
      type: "string",
      title: "标题",
      "x-decorator": "FormItem",
      "x-component": "Input",
      default: "弹窗层编辑",
    },
    okText: {
      type: "string",
      title: "确认文案",
      "x-decorator": "FormItem",
      "x-component": "Input",
      default: "好的",
    },
    cancelText: {
      type: "string",
      title: "取消文案",
      "x-decorator": "FormItem",
      "x-component": "Input",
      default: "放弃",
    },
  },
};
