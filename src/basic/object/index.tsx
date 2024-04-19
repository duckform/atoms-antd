import { DroppableWidget } from "@duckform/react";
import type { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { createFieldSchema } from "../field/schema";
import { quick } from "./quick";

const PreviewObjectContainer = DroppableWidget;

const Behavior: IBehaviorCreator = {
  name: "Object",
  extends: ["Field"],
  selector: (node) => node.props?.["type"] === "object",
  designerProps: {
    droppable: true,
    propsSchema: createFieldSchema(),
  },
};

const Resource: IResourceCreator = {
  // icon: "ObjectSource",
  title: "对象容器",
  elements: [
    {
      componentName: "Field",
      props: {
        type: "object",
      },
    },
  ],
};

export const ObjectContainer = Object.assign(PreviewObjectContainer, {
  Behavior,
  Resource,
  ...quick,
});
