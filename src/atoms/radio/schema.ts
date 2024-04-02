import { ISchema } from "@formily/react";
import { composeEnum } from "../../utils";

export const radioSchema: ISchema = {
  type: 'object',
  properties: {
    autoFocus: {
      type: 'boolean',
      title: "自动获取焦点",
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    optionType: {
      type: 'string',
      title: "选项类型",
      enum: composeEnum(
        ['default', 'button'],
        ["默认", "按钮"]
      ),
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        defaultValue: 'default',
        optionType: 'button',
      },
    },
    buttonStyle: {
      type: 'string',
      title: "按钮风格",
      enum: composeEnum(
        ['outline', 'solid'],
        ["空心", "实心"]
      ),
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        defaultValue: 'outline',
        optionType: 'button',
      },
    },
  },
}