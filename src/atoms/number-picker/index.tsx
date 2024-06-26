import { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { NumberPicker as FormilyNumberPicker } from "@formily/antd";
import { createFieldSchema } from "@basic/field/schema";
import { NumberPickerSchema } from "./schema";
import { quick } from "./quick";

const PreviewNumberPicker = FormilyNumberPicker;

const Behavior: IBehaviorCreator[] = [
  {
    name: "NumberPicker",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "NumberPicker",
    designerProps: {
      propsSchema: createFieldSchema(NumberPickerSchema),
    },
  },
];

const Resource: IResourceCreator[] = [
  {
    title: "数字输入",
    elements: [
      {
        componentName: "Field",
        props: {
          type: "number",
          title: "NumberPicker",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker",
        },
      },
    ],
  },
];

export const NumberPicker = Object.assign(PreviewNumberPicker, {
  Behavior,
  Resource,
  ...quick,
});
