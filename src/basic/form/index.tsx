import { createForm } from "@formily/core";
import { useMemo } from "react";
import { Form as FormilyForm } from "@formily/antd";
import type { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { formSchema } from "./schema";
import { usePrefix } from "@duckform/react";

const PreviewForm: React.FC<React.ComponentProps<typeof FormilyForm>> = (
  props,
) => {
  const cls = usePrefix("desinable-form");

  const form = useMemo(() => {
    return createForm({
      designable: true,
    });
  }, []);

  return (
    <FormilyForm {...props} form={form} className={cls}>
      {props.children}
    </FormilyForm>
  );
};

const Behavior = {
  name: "Form",
  selector: (node) => node.componentName === "Form",
  designerProps(node) {
    return {
      draggable: !node.isRoot,
      cloneable: !node.isRoot,
      deletable: !node.isRoot,
      droppable: true,
      propsSchema: formSchema,
      defaultProps: {
        labelCol: 6,
        wrapperCol: 12,
      },
    };
  },
} satisfies IBehaviorCreator;

const Resource = {
  // icon: "",
  title: "表单",
  elements: [
    {
      componentName: "Field",
      props: {
        type: "object",
        "x-component": "Form",
      },
    },
  ],
} satisfies IResourceCreator;

export const Form = Object.assign(PreviewForm, {
  Behavior,
  Resource,
});
