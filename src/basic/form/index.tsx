import { createForm } from "@formily/core";
import { useMemo } from "react";
import { Form as FormilyForm } from "@formily/antd";
import type { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { FormSchema } from "./schema";
import { usePrefix } from "@duckform/react";

const PreviewForm: React.FC<React.ComponentProps<typeof FormilyForm>> = (
  props,
) => {
  const cls = usePrefix("dn-form");

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

const Behavior: IBehaviorCreator = {
  name: "Form",
  selector: (node) => node.componentName === "Form",
  designerProps(node) {
    return {
      draggable: !node.isRoot,
      cloneable: !node.isRoot,
      deletable: !node.isRoot,
      droppable: true,
      propsSchema: FormSchema,
      defaultProps: {
        labelCol: 6,
        wrapperCol: 12,
      },
    };
  },
};

const Resource: IResourceCreator = {
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
};

export const Form = Object.assign(PreviewForm, {
  Behavior,
  Resource,
});
