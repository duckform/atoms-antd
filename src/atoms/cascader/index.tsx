import { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { Cascader as FormilyCascader } from "@formily/antd";
import { createFieldSchema } from "@basic";
import { CascaderSchema } from "./schema";

const PreviewCascader = FormilyCascader;

const Behavior: IBehaviorCreator[] = [
  {
    name: "Cascader",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "Cascader",
    designerProps: {
      propsSchema: createFieldSchema(CascaderSchema),
    },
  },
];

const Resource: IResourceCreator[] = [
  {
    title: "联级选择",
    elements: [
      {
        componentName: "Field",
        props: {
          title: "Cascader",
          "x-decorator": "FormItem",
          "x-component": "Cascader",
        },
      },
    ],
  },
];

export const Cascader = Object.assign(PreviewCascader, {
  Behavior,
  Resource,
  accepts: [],
  transform: () => { }
});
