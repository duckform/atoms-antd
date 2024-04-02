import { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { DatePicker as FormilyDatePicker } from "@formily/antd";
import { createFieldSchema } from "@basic";
import { datePickerSchema, dateRangePickerSchema } from "./schema";

const PreviewDatePicker = FormilyDatePicker;

const Behavior: IBehaviorCreator[] = [
  {
    name: "DatePicker",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "DatePicker",
    designerProps: {
      propsSchema: createFieldSchema(datePickerSchema),
    },
  },
  {
    name: "DatePicker.RangePicker",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "DatePicker.RangePicker",
    designerProps: {
      propsSchema: createFieldSchema(dateRangePickerSchema),
    },
  },
];

const Resource: IResourceCreator[] = [
  {
    icon: "DatePickerSource",
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
    icon: "DateRangePickerSource",
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
  accepts: ["string"],
  transform: () => { }
});
