import { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { TimePicker as FormilyTimePicker } from "@formily/antd";
import { createFieldSchema } from "@basic";
import { timePickerSchema, timeRangePickerSchema } from "./schema";

const PreviewTimePicker = FormilyTimePicker;

const Behavior: IBehaviorCreator[] = [
  {
    name: "TimePicker",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "TimePicker",
    designerProps: {
      propsSchema: createFieldSchema(timePickerSchema),
    },
  },
  {
    name: "TimePicker.RangePicker",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "TimePicker.RangePicker",
    designerProps: {
      propsSchema: createFieldSchema(timeRangePickerSchema),
    },
  },
];

const Resource: IResourceCreator[] = [
  {
    icon: "TimePickerSource",
    title: "时间选择",
    elements: [
      {
        componentName: "Field",
        props: {
          type: "string",
          title: "TimePicker",
          "x-decorator": "FormItem",
          "x-component": "TimePicker",
        },
      },
    ],
  },
  {
    icon: "TimeRangePickerSource",
    title: "时间范围",
    elements: [
      {
        componentName: "Field",
        props: {
          type: "string[]",
          title: "TimeRangePicker",
          "x-decorator": "FormItem",
          "x-component": "TimePicker.RangePicker",
        },
      },
    ],
  },
];

export const TimePicker = Object.assign(PreviewTimePicker, {
  Behavior,
  Resource,
  accepts: ["string"],
  transform: () => { }
});
