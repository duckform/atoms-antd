import { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { Radio as FormilyRadio } from "@formily/antd";
import { createFieldSchema } from "@basic";
import { radioSchema } from "./schema";

const PreviewRadio = FormilyRadio;

const Behavior: IBehaviorCreator[] = [
  {
    name: "Radio.Group",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "Radio.Group",
    designerProps: {
      propsSchema: createFieldSchema(radioSchema),
    },
  },
];

const Resource: IResourceCreator[] = [
  {
    icon: "RadioGroupSource",
    title: "单选框",
    elements: [
      {
        componentName: "Field",
        props: {
          type: "string | number",
          title: "Radio.Group",
          "x-decorator": "FormItem",
          "x-component": "Radio.Group",
          enum: [
            { label: "选项1", value: 1 },
            { label: "选项2", value: 2 },
          ],
        },
      },
    ],
  },
];

export const Radio = Object.assign(PreviewRadio, {
  Behavior,
  Resource,
  accepts: ["string", "number"],
  transform: () => { }
});
