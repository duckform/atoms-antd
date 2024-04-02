import { ISchema } from "@formily/react";
import { inputSchema } from "../input/schema";

export const passwordSchema: ISchema = {
  type: "object",
  properties: {
    ...(inputSchema.properties as any),
    checkStrength: {
      type: "boolean",
      title: "检测强度",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
  },
};
