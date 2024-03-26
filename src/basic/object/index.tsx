import { DroppableWidget } from "@duckform/react";
import type { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { makeFieldSchema } from "../field/schema";

const Preview = DroppableWidget;

const Behavior: IBehaviorCreator = {
  name: "Object",
  extends: ["Field"],
  selector: (node) => node.props?.["type"] === "object",
  designerProps: {
    droppable: true,
    propsSchema: makeFieldSchema(),
  },
};

const Resource: IResourceCreator = {
  icon: "ObjectSource",
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

export const ObjectContainer = Object.assign(Preview, {
  Behavior,
  Resource,
  accepts: ["object", "void"],
});
