import { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { Switch as AntdSwitch } from "antd";
import { createFieldSchema } from "@basic";
import { checkboxSchema } from "./schema";

const PreviewSwitch = AntdSwitch;

const Behavior: IBehaviorCreator[] = [
  {
    name: "Switch",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "Switch",
    designerProps: {
      propsSchema: createFieldSchema(checkboxSchema),
    },
  },
];

const Resource: IResourceCreator[] = [
  {
    title: "开关",
    elements: [
      {
        componentName: "Field",
        props: {
          type: "boolean",
          title: "Switch",
          "x-decorator": "FormItem",
          "x-component": "Switch",
        },
      },
    ],
  },
];

export const Switch = Object.assign(PreviewSwitch, {
  Behavior,
  Resource,
  accepts: ["boolean"],
  transform: () => { }
});
