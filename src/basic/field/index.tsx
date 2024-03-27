import type { IBehaviorCreator } from "@duckform/core";
import {
  DnFC,
  DroppableWidget,
  useComponents,
  useDesigner,
  useTreeNode,
} from "@duckform/react";
import {
  ArrayField,
  ISchema,
  Field as InternalField,
  ObjectField,
  VoidField,
  observer,
} from "@formily/react";
import { toDesignableFieldProps } from "./utils";

const PreviewField: DnFC<ISchema> = observer((props) => {
  const designer = useDesigner();
  const components = useComponents();
  const node = useTreeNode();
  if (!node) return null;
  const fieldProps = toDesignableFieldProps(
    props,
    components,
    designer.props.nodeIdAttrName!,
    node.id,
  );
  if (props.type === "object") {
    return (
      <DroppableWidget>
        <ObjectField {...fieldProps} name={node.id}>
          {props.children}
        </ObjectField>
      </DroppableWidget>
    );
  } else if (props.type === "array") {
    return <ArrayField {...fieldProps} name={node.id} />;
  } else if (node.props?.["type"] === "void") {
    return (
      <VoidField {...fieldProps} name={node.id}>
        {props.children}
      </VoidField>
    );
  }
  return <InternalField {...fieldProps} name={node.id} />;
});

const Behavior: IBehaviorCreator = {
  name: "Field",
  selector: "Field",
};

export const Field = Object.assign(PreviewField, {
  Behavior,
  accepts: "*",
});
