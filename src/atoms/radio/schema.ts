import { ISchema } from "@formily/react";
import { composeEnum } from "@utils/composeEnum";

export const RadioSchema: ISchema = {
  type: "object",
  properties: {
    optionType: {
      type: "string",
      title: "选项类型",
      enum: composeEnum(["default", "button"], ["默认", "按钮"]),
      "x-decorator": "FormItem",
      "x-component": "Radio.Group",
      "x-component-props": {
        defaultValue: "default",
        optionType: "button",
      },
    },
    buttonStyle: {
      type: "string",
      title: "按钮风格",
      enum: composeEnum(["outline", "solid"], ["空心", "实心"]),
      "x-decorator": "FormItem",
      "x-component": "Radio.Group",
      "x-component-props": {
        defaultValue: "outline",
        optionType: "button",
      },
    },
  },
};
