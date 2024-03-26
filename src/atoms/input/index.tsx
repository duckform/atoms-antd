import { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { Input as FormilyInput } from "@formily/antd";
import { makeFieldSchema } from "@basic";

const Preview = FormilyInput;

const Behavior = [
  {
    name: "Input",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "Input",
    designerProps: {
      propsSchema: makeFieldSchema(),
    },
  },
  {
    name: "Input.TextArea",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "Input.TextArea",
    designerProps: {
      propsSchema: makeFieldSchema(),
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

export const Input = Object.assign(Preview, {
  Behavior,
  Resource,
  accepts: ["string", "number"],
});
