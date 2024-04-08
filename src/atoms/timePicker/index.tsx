import { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { TimePicker as FormilyTimePicker } from "@formily/antd";
import { createFieldSchema } from "@basic/field/schema";
import { TimePickerSchema } from "./schema";

const PreviewTimePicker = FormilyTimePicker;

const Behavior: IBehaviorCreator[] = [
  {
    name: "TimePicker",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "TimePicker",
    designerProps: {
      propsSchema: createFieldSchema(TimePickerSchema),
    },
  },
  {
    name: "TimePicker.RangePicker",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "TimePicker.RangePicker",
    designerProps: {
      propsSchema: createFieldSchema(TimePickerSchema.RangePicker),
    },
  },
];

const Resource: IResourceCreator[] = [
  {
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
