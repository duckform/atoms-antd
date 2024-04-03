import { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { Select as FormilySelect } from "@formily/antd";
import { createFieldSchema } from "@basic";
import { selectSchema } from "./schema";

const PreviewSelect = FormilySelect;

const Behavior: IBehaviorCreator[] = [
  {
    name: "Select",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "Select",
    designerProps: {
      propsSchema: createFieldSchema(selectSchema),
    },
  },
];

const Resource: IResourceCreator[] = [
  {
    title: "选择框",
    elements: [
      {
        componentName: "Field",
        props: {
          title: "Select",
          "x-decorator": "FormItem",
          "x-component": "Select",
        },
      },
    ],
  },
];

export const Select = Object.assign(PreviewSelect, {
  Behavior,
  Resource,
  accepts: ["string", "number"],
  transform: () => { }
});