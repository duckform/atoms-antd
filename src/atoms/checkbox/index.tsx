import { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { Checkbox as FormilyCheckbox } from "@formily/antd";
import { createFieldSchema } from "@basic";
import { checkboxSchema } from "./schema";

const PreviewCheckbox = FormilyCheckbox;

const Behavior: IBehaviorCreator[] = [
  {
    name: "Checkbox.Group",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "Checkbox.Group",
    designerProps: {
      propsSchema: createFieldSchema(checkboxSchema),
    },
  },
];

const Resource: IResourceCreator[] = [
  {
    title: "复选框",
    elements: [
      {
        componentName: "Field",
        props: {
          type: "Array<string | number>",
          title: "Checkbox Group",
          "x-decorator": "FormItem",
          "x-component": "Checkbox.Group",
          enum: [
            { label: "选项1", value: 1 },
            { label: "选项2", value: 2 },
          ],
        },
      },
    ],
  },
];

export const Checkbox = Object.assign(PreviewCheckbox, {
  Behavior,
  Resource,
  accepts: ["string", "number"],
  transform: () => { }
});
