import { ISchema } from "@formily/react";
import { InputSchema } from "../input/schema";

export const PasswordSchema: ISchema = {
  type: "object",
  properties: {
    ...(InputSchema.properties as any),
    checkStrength: {
      type: "boolean",
      title: "检测强度",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
  },
};
