import { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { TreeSelect as FormilyTreeSelect } from "@formily/antd";
import { createFieldSchema } from "@basic/field/schema";
import { TreeSelectSchema } from "./schema";
import { quick } from "./quick";

const PreviewTreeSelect = FormilyTreeSelect;

const Behavior: IBehaviorCreator[] = [
  {
    name: "TreeSelect",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "TreeSelect",
    designerProps: {
      propsSchema: createFieldSchema(TreeSelectSchema),
    },
  },
];

const Resource: IResourceCreator[] = [
  {
    title: "树选择",
    elements: [
      {
        componentName: "Field",
        props: {
          title: "TreeSelect",
          "x-decorator": "FormItem",
          "x-component": "TreeSelect",
        },
      },
    ],
  },
];

export const TreeSelect = Object.assign(PreviewTreeSelect, {
  Behavior,
  Resource,
  ...quick,
});
