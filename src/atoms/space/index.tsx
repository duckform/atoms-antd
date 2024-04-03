import { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { Space as FormilySpace } from "@formily/antd";
import { createVoidFieldSchema } from "@basic";
import { DnFC } from "@duckform/react";
import { spaceSchema } from "./schema";
import { withContainer } from "../../utils/Container";

const PreviewSpace: DnFC<React.ComponentProps<typeof FormilySpace>> =
  withContainer(FormilySpace);

const Behavior: IBehaviorCreator[] = [
  {
    name: "Space",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "Space",
    designerProps: {
      droppable: true,
      inlineChildrenLayout: true,
      propsSchema: createVoidFieldSchema(spaceSchema),
    },
  },
];

const Resource: IResourceCreator[] = [
  {
    title: "弹性间距",
    elements: [
      {
        componentName: "Field",
        props: {
          type: "void",
          "x-component": "Space",
        },
      },
    ],
  },
];

export const Space = Object.assign(PreviewSpace, {
  Behavior,
  Resource,
  accepts: [],
  transform: () => { }
});
