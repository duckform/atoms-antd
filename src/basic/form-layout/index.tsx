import type { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { FormLayout as FormilyFormLayout } from "@formily/antd";
import { makeVoidFieldSchema } from "../../basic/field/schema";
import { formLayoutSchema } from "./schema";
import { DroppableWidget } from "@duckform/react";

const Preview = (props: React.PropsWithChildren<React.ComponentProps<typeof FormilyFormLayout>>) => {
  return <DroppableWidget>
    <FormilyFormLayout {...props}></FormilyFormLayout>
  </DroppableWidget> 
};

const Behavior = {
  name: "FormLayout",
  extends: ["Field"],
  selector: (node) => node.props?.["x-component"] === "FormLayout",
  designerProps: {
    droppable: true,
    propsSchema: makeVoidFieldSchema(formLayoutSchema),
  },
} satisfies IBehaviorCreator;

const Resource = {
  icon: "FormLayoutSource",
  elements: [
    {
      componentName: "Field",
      props: {
        type: "void",
        "x-component": "FormLayout",
      },
    },
  ],
} satisfies IResourceCreator;

export const FormLayout = Object.assign(Preview, {
  Behavior,
  Resource,
  types: ['object', 'void']
});
