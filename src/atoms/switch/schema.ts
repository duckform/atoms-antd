import { ISchema } from "@formily/react";
import { composeEnum } from "src/utils";

export const checkboxSchema: ISchema = {
  type: 'object',
  properties: {
    autoFocus: {
      type: 'boolean',
      title: "自动获取焦点",
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    size: {
      type: 'string',
      title: "尺寸",
      enum: composeEnum(
        ['large', 'small', 'default', ''],
        ["大", "小", "默认", "继承"]
      ),
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'default',
      },
    }
  }
}
