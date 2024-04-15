import { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { Input as FormilyInput } from "@formily/antd";
import { createFieldSchema } from "@basic/field/schema";
import { InputSchema } from "./schema";

const PreviewInput = FormilyInput;

const Behavior: IBehaviorCreator[] = [
  {
    name: "Input",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "Input",
    designerProps: {
      propsSchema: createFieldSchema(InputSchema),
    },
  },
  {
    name: "Input.TextArea",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "Input.TextArea",
    designerProps: {
      propsSchema: createFieldSchema(InputSchema.TextArea),
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
    title: "多行输入",
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
