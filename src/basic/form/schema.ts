import type { ISchema } from "@formily/react";
import { styleSchema } from "../style/schema";
import { FormLayoutSchema } from "../form-layout/schema";

export const FormSchema = {
  type: "object",
  properties: {
    "form-layout-group": {
      title: "表单布局属性",
      type: "void",
      "x-component": "CollapseItem",
      properties: FormLayoutSchema.properties,
    },
    "form-style-group": {
      title: "表单样式属性",
      type: "void",
      "x-component": "CollapseItem",
      "x-component-props": { defaultExpand: false },
      properties: {
        style: styleSchema,
      },
    },
  },
} satisfies ISchema;
