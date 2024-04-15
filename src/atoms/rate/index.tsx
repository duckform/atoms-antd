import { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { Rate as AntdRate } from "antd";
import { createFieldSchema } from "@basic/field/schema";
import { RateSchema } from "./schema";

const PreviewRate = AntdRate;

const Behavior: IBehaviorCreator[] = [
  {
    name: "Rate",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "Rate",
    designerProps: {
      propsSchema: createFieldSchema(RateSchema),
    },
  },
];

const Resource: IResourceCreator[] = [
  {
    title: "评分器",
    elements: [
      {
        componentName: "Field",
        props: {
          type: "number",
          title: "Rate",
          "x-decorator": "FormItem",
          "x-component": "Rate",
        },
      },
    ],
  },
];

export const Rate = Object.assign(PreviewRate, {
  Behavior,
  Resource,
  accepts: ["number"],
  transform: () => { }
});
