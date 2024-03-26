import type { ISchema } from "@formily/react";
import { styleSchema } from "../style/schema";
import { formLayoutSchema } from "../form-layout/schema";

export const formSchema: ISchema = {
  type: "object",
  properties: {
    "form-layout-gorup": {
      title: "表单布局属性",
      type: "void",
      "x-component": "CollapseItem",
      properties: formLayoutSchema.properties,
    },
    "form-style-gorup": {
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
