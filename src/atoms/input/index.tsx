import { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { Input as FormilyInput } from "@formily/antd";
import { createFieldSchema } from "@basic";
import { inputSchema, textareaSchema } from "./schema";

const PreviewInput = FormilyInput;

const Behavior: IBehaviorCreator[] = [
  {
    name: "Input",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "Input",
    designerProps: {
      propsSchema: createFieldSchema(inputSchema),
    },
  },
  {
    name: "Input.TextArea",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "Input.TextArea",
    designerProps: {
      propsSchema: createFieldSchema(textareaSchema),
    },
  },
];

const Resource: IResourceCreator[] = [
  {
    title: "输入框",
    elements: [
      {
        componentName: "Field",
        props: {
          type: "string",
          title: "Input",
          "x-decorator": "FormItem",
          "x-component": "Input",
        },
      },
    ],
  },
  {
    title: "文本域",
    elements: [
      {
        componentName: "Field",
        props: {
          type: "string",
          title: "TextArea",
          "x-decorator": "FormItem",
          "x-component": "Input.TextArea",
        },
      },
    ],
  },
];

export const Input = Object.assign(PreviewInput, {
  Behavior,
  Resource,
  accepts: ["string", "number"],
  transform: () => { }
});
