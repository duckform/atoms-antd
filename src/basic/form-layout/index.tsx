import type { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { FormLayout as FormilyFormLayout } from "@formily/antd";
import { createVoidFieldSchema } from "@basic/field/schema";
import { FormLayoutSchema } from "./schema";
import { DroppableWidget } from "@duckform/react";

const PreviewFormLayout = (
  props: React.PropsWithChildren<
    React.ComponentProps<typeof FormilyFormLayout>
  >,
) => {
  return (
    <DroppableWidget>
      <FormilyFormLayout {...props}></FormilyFormLayout>
    </DroppableWidget>
  );
};

const Behavior: IBehaviorCreator = {
  name: "FormLayout",
  extends: ["Field"],
  selector: (node) => node.props?.["x-component"] === "FormLayout",
  designerProps: {
    droppable: true,
    propsSchema: createVoidFieldSchema(FormLayoutSchema),
  },
};

const Resource: IResourceCreator = {
  title: "表单布局",
  elements: [
    {
      componentName: "Field",
      props: {
        type: "void",
        "x-component": "FormLayout",
      },
    },
  ],
};

export const FormLayout = Object.assign(PreviewFormLayout, {
  Behavior,
  Resource,
  accepts: ["object", "void"],
});
