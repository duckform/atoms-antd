import { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { TreeSelect as FormilyTreeSelect } from "@formily/antd";
import { createFieldSchema } from "@basic";
import { treeSelectSchema } from "./schema";

const PreviewTreeSelect = FormilyTreeSelect;

const Behavior: IBehaviorCreator[] = [
  {
    name: "TreeSelect",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "TreeSelect",
    designerProps: {
      propsSchema: createFieldSchema(treeSelectSchema),
    },
  },
];

const Resource: IResourceCreator[] = [
  {
    icon: "TreeSelectSource",
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
  accepts: ["number", 'string'],
  transform: () => { }
});
