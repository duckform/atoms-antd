import { ISchema } from "@formily/react";

export const checkboxSchema: ISchema = {
  type: 'object',
  properties: {
    autoFocus: {
      type: 'boolean',
      title: "自动获取焦点",
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
  },
}