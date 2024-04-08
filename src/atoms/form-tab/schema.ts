import { ISchema } from '@formily/react'
import { composeEnum } from '../../utils/composeEnum';

export const FormTabSchema: ISchema & { TabPane?: ISchema } = {
  type: "object",
  properties: {
    animated: {
      type: "boolean",
      title: "启用动画过渡",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    centered: {
      type: "boolean",
      title: "标签居中",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    size: {
      type: "string",
      title: "尺寸",
      enum: composeEnum(
        ["large", "small", "default", null!],
        ["大", "小", "默认", "继承"]
      ),
      "x-decorator": "FormItem",
      "x-component": "Select",
      "x-component-props": {
        defaultValue: "default",
      },
    },
    type: {
      type: "string",
      title: "类型",
      "x-decorator": "FormItem",
      "x-component": "Radio.Group",
      enum: [
        { label: "线框", value: "line" },
        { label: "卡片", value: "card" },
      ],
      "x-component-props": {
        defaultValue: "line",
        optionType: "button",
      },
    },
  },
};

FormTabSchema.TabPane = {
  type: "object",
  properties: {
    tab: {
      type: "string",
      title: "选项卡面板",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
  },
};
