import { ISchema } from '@formily/react'

export const formStepSchema: ISchema = {
  type: "object",
  properties: {
  },
};

export const formStepPaneSchema: ISchema = {
  type: "object",
  properties: {
    title: {
      type: "string",
      title: "步骤面板",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
  },
};
