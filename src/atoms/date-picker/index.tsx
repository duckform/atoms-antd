import { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { DatePicker as FormilyDatePicker } from "@formily/antd";
import { createFieldSchema } from "@basic/field/schema";
import { DatePickerSchema } from "./schema";
import { quick } from "./quick";

const PreviewDatePicker = FormilyDatePicker;

const Behavior: IBehaviorCreator[] = [
  {
    name: "DatePicker",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "DatePicker",
    designerProps: {
      propsSchema: createFieldSchema(DatePickerSchema),
    },
  },
  {
    name: "DatePicker.RangePicker",
    extends: ["Field"],
    selector: (node) =>
      node.props?.["x-component"] === "DatePicker.RangePicker",
    designerProps: {
      propsSchema: createFieldSchema(DatePickerSchema.RangePicker),
    },
  },
];

const Resource: IResourceCreator[] = [
  {
    title: "日期选择",
    elements: [
      {
        componentName: "Field",
        props: {
          type: "string",
          title: "DatePicker",
          "x-decorator": "FormItem",
          "x-component": "DatePicker",
        },
      },
    ],
  },
  {
    title: "日期范围",
    elements: [
      {
        componentName: "Field",
        props: {
          type: "string[]",
          title: "DateRangePicker",
          "x-decorator": "FormItem",
          "x-component": "DatePicker.RangePicker",
        },
      },
    ],
  },
];

export const DatePicker = Object.assign(PreviewDatePicker, {
  Behavior,
  Resource,
  ...quick,
});
