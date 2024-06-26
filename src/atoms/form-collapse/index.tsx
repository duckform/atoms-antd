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
  TreeNodeWidget,
  useNodeIdProps,
  useTreeNode,
} from "@duckform/react";
import { observer } from "@formily/react";
import { toArr } from "@formily/shared";
import { Collapse } from "antd";
import { CollapsePanelProps, CollapseProps } from "antd/lib/collapse";
import React, { Fragment, useState } from "react";
import { FormCollapseSchema } from "./schema";
import { matchComponent } from "@utils/shared";
import { createVoidFieldSchema } from "@basic/field/schema";
import { LoadTemplate } from "@utils/LoadTemplate";
import { useDropTemplate } from "@hooks/useDropTemplate";
import { quick } from "./quick";

const parseCollapse = (parent: TreeNode) => {
  const tabs: TreeNode[] = [];
  parent.children.forEach((node) => {
    if (matchComponent(node, "FormCollapse.CollapsePanel")) {
      tabs.push(node);
    }
  });
  return tabs;
};

const PreviewFormCollapse: DnFC<CollapseProps> & {
  CollapsePanel?: React.FC<CollapsePanelProps>;
} = observer((props) => {
  const [activeKey, setActiveKey] = useState<string | string[]>([]);
  const node = useTreeNode();
  const nodeId = useNodeIdProps();
  const designer = useDropTemplate("FormCollapse", (source) => {
    const panelNode = new TreeNode({
      componentName: "Field",
      props: {
        type: "void",
        "x-component": "FormCollapse.CollapsePanel",
        "x-component-props": {
          header: "Unnamed Title",
        },
      },
      children: source,
    });

    setActiveKey(toArr(activeKey).concat(panelNode.id));
    return [panelNode];
  });
  const panels = parseCollapse(node);
  const renderCollapse = () => {
    if (!node.children?.length) return <DroppableWidget />;
    return (
      <Collapse {...props} activeKey={panels.map((tab) => tab.id)}>
        {panels.map((panel) => {
          const props = panel.props?.["x-component-props"] || {};
          return (
            <Collapse.Panel
              {...props}
              style={{ ...props.style }}
              header={
                <span
                  data-content-editable="x-component-props.header"
                  data-content-editable-node-id={panel.id}
                >
                  {props.header}
                </span>
              }
              key={panel.id}
            >
              {React.createElement(
                "div",
                {
                  [designer.props.nodeIdAttrName!]: panel.id,
                  style: {
                    padding: "20px 0",
                  },
                },
                panel.children.length ? (
                  <TreeNodeWidget node={panel} />
                ) : (
                  <DroppableWidget />
                ),
              )}
            </Collapse.Panel>
          );
        })}
      </Collapse>
    );
  };
  return (
    <div {...nodeId}>
      {renderCollapse()}
      <LoadTemplate
        actions={[
          {
            title: "添加面板",
            onClick: () => {
              const tabPane = new TreeNode({
                componentName: "Field",
                props: {
                  type: "void",
                  "x-component": "FormCollapse.CollapsePanel",
                  "x-component-props": {
                    header: "Unnamed Title",
                  },
                },
              });
              node.append(tabPane);
              const keys = toArr(activeKey);
              setActiveKey(keys.concat(tabPane.id));
            },
          },
        ]}
      />
    </div>
  );
});

PreviewFormCollapse.CollapsePanel = (props) => {
  return <Fragment>{props.children}</Fragment>;
};

const Behavior: IBehaviorCreator[] = [
  {
    name: "FormCollapse",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "FormCollapse",
    designerProps: {
      droppable: true,
      allowAppend: (target, source) =>
        target.children.length === 0 ||
        source!.every(
          (node) =>
            node.props?.["x-component"] === "FormCollapse.CollapsePanel",
        ),
      propsSchema: createVoidFieldSchema(FormCollapseSchema),
    },
  },
  {
    name: "FormCollapse.CollapsePanel",
    extends: ["Field"],
    selector: (node) =>
      node.props?.["x-component"] === "FormCollapse.CollapsePanel",
    designerProps: {
      droppable: true,
      allowDrop: (node) => node.props?.["x-component"] === "FormCollapse",
      propsSchema: createVoidFieldSchema(FormCollapseSchema.CollapsePanel),
    },
  },
];

const Resource: IResourceCreator[] = [
  {
    title: "折叠面板",
    elements: [
      {
        componentName: "Field",
        props: {
          type: "void",
          "x-component": "FormCollapse",
        },
      },
    ],
  },
];

export const FormCollapse = Object.assign(PreviewFormCollapse, {
  Behavior,
  Resource,
  ...quick,
});
