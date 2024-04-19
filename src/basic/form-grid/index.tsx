import {
  IBehaviorCreator,
  IResourceCreator,
  TreeNode,
  createBehavior,
  createResource,
} from "@duckform/core";
import {
  DnFC,
  DroppableWidget,
  useNodeIdProps,
  useTreeNode,
} from "@duckform/react";
import { FormGrid as FormilyGird } from "@formily/antd";
import { observer } from "@formily/reactive-react";
import React from "react";
import { FormGridSchema } from "./schema";
import "./styles.less";
import { createFieldSchema } from "../field/schema";
import { LoadTemplate } from "@utils/LoadTemplate";

type formilyGrid = typeof FormilyGird;

const PreviewFormGrid: DnFC<React.ComponentProps<formilyGrid>> & {
  GridColumn?: React.FC<React.ComponentProps<formilyGrid["GridColumn"]>>;
} = observer((props) => {
  const node = useTreeNode();
  const nodeId = useNodeIdProps();
  if (node.children.length === 0) return <DroppableWidget {...props} />;

  return (
    <div {...nodeId} className="dn-grid">
      <FormilyGird {...props}>{props.children}</FormilyGird>
      <LoadTemplate
        actions={[
          {
            title: "添加网格列",
            icon: "AddColumn",
            onClick: () => {
              const column = new TreeNode({
                componentName: "Field",
                resourceName: "网格列",
                props: {
                  type: "void",
                  "x-component": "FormGrid.GridColumn",
                },
              });
              node.append(column);
            },
          },
        ]}
      />
    </div>
  );
});

PreviewFormGrid.GridColumn = observer(({ gridSpan, ...props }) => {
  return (
    <DroppableWidget {...props} data-grid-span={gridSpan}>
      {props.children}
    </DroppableWidget>
  );
});

const Behavior: IBehaviorCreator[] = [
  {
    name: "FormGrid",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "FormGrid",
    designerProps: {
      droppable: true,
      allowDrop: (node) => node.props?.["x-component"] !== "FormGrid",
      propsSchema: createFieldSchema(FormGridSchema),
    },
  },
  {
    name: "FormGrid.GridColumn",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "FormGrid.GridColumn",
    designerProps: {
      droppable: true,
      resizable: {
        width(node) {
          const span = Number(node.props?.["x-component-props"]?.gridSpan ?? 1);
          return {
            plus: () => {
              if (span + 1 > 12) return;
              node.props!["x-component-props"] =
                node.props?.["x-component-props"] || {};
              node.props!["x-component-props"].gridSpan = span + 1;
            },
            minus: () => {
              if (span - 1 < 1) return;
              node.props!["x-component-props"] =
                node.props?.["x-component-props"] || {};
              node.props!["x-component-props"].gridSpan = span - 1;
            },
          };
        },
      },
      resizeXPath: "x-component-props.gridSpan",
      resizeStep: 1,
      resizeMin: 1,
      resizeMax: 12,
      allowDrop: (node) => node.props?.["x-component"] === "FormGrid",
      propsSchema: createFieldSchema(FormGridSchema.GridColumn),
    },
  },
];

const Resource: IResourceCreator[] = [
  {
    title: "网格布局",
    elements: [
      {
        componentName: "Field",
        props: {
          type: "void",
          "x-component": "FormGrid",
        },
        children: [
          {
            componentName: "Field",
            resourceName: "网格列",
            props: {
              type: "void",
              "x-component": "FormGrid.GridColumn",
            },
          },
          {
            componentName: "Field",
            resourceName: "网格列",
            props: {
              type: "void",
              "x-component": "FormGrid.GridColumn",
            },
          },
          {
            componentName: "Field",
            resourceName: "网格列",
            props: {
              type: "void",
              "x-component": "FormGrid.GridColumn",
            },
          },
        ],
      },
    ],
  },
];

export const FormGrid = Object.assign(PreviewFormGrid, {
  Behavior,
  Resource,
  accepts: ["void"],
  transform: () => {},
});
