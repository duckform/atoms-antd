import { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { Slider as AntdSlider } from "antd";
import { createFieldSchema } from "@basic";
import { sliderSchema } from "./schema";

const PreviewSlider = AntdSlider;

const Behavior: IBehaviorCreator[] = [
  {
    name: "Slider",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "Slider",
    designerProps: {
      propsSchema: createFieldSchema(sliderSchema),
    },
  },
];

const Resource: IResourceCreator[] = [
  {
    title: "滑动条",
    elements: [
      {
        componentName: "Field",
        props: {
          type: "number",
          title: "Slider",
          "x-decorator": "FormItem",
          "x-component": "Slider",
        },
      },
    ],
  },
];

export const Slider = Object.assign(PreviewSlider, {
  Behavior,
  Resource,
  accepts: ["number"],
  transform: () => { }
});
