import { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { DesignModal } from "../../utils/DesignModal";
import { createVoidFieldSchema } from "@basic/field/schema";
import { ShadowModalSchema } from "./schema";

const Behavior: IBehaviorCreator[] = [{
  name: "ShadowModal",
  extends: ["Field"],
  selector: (node) => node.props?.["x-component"] === "ShadowModal",
  designerProps: {
    droppable: true,
    allowDrop: (target) => {
      // 只能在对象容器中使用
      let parent = target;
      while (parent.props?.type !== "object" && parent.props?.type === "void") {
        parent = parent.parent;
      }
      return parent.props?.type === "object";
    },
    propsSchema: createVoidFieldSchema(ShadowModalSchema),
  },
}];

const Resource: IResourceCreator[] = [{
  title: "弹出层编辑",
  elements: [
    {
      componentName: "Field",
      props: {
        type: "void",
        title: "弹出编辑",
        "x-decorator": "ShadowForm",
        "x-component": "ShadowModal",
      },
    },
  ],
}];


export const ShadowModal = Object.assign(DesignModal, {
  Behavior,
  Resource,
  accepts: ["void"],
  transform: () => { }
});
