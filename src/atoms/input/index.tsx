import { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { Input as FormilyInput } from "@formily/antd";
import { createFieldSchema } from "@basic";
import { inputSchema } from "./schema";

const PreviewInput = FormilyInput;

const Behavior = [
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
      propsSchema: createFieldSchema(inputSchema),
    },
  },
] satisfies IBehaviorCreator[];

const Resource = [
  {
    icon: "InputSource",
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
    icon: "TextAreaSource",
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
] satisfies IResourceCreator[];

export const Input = Object.assign(PreviewInput, {
  Behavior,
  Resource,
  accepts: ["string", "number"],
});
