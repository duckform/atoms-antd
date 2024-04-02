import { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { Transfer as FormilyTransfer } from "@formily/antd";
import { createFieldSchema } from "@basic";
import { transferSchema } from "./schema";

const PreviewTransfer = FormilyTransfer;

const Behavior: IBehaviorCreator[] = [
  {
    name: "Transfer",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "Transfer",
    designerProps: {
      propsSchema: createFieldSchema(transferSchema),
    },
  },
];

const Resource: IResourceCreator[] = [
  {
    icon: "TransferSource",
    title: "穿梭框",
    elements: [
      {
        componentName: "Field",
        props: {
          title: "Transfer",
          "x-decorator": "FormItem",
          "x-component": "Transfer",
        },
      },
    ],
  },
];

export const Transfer = Object.assign(PreviewTransfer, {
  Behavior,
  Resource,
  accepts: ["number", 'string'],
  transform: () => { }
});
