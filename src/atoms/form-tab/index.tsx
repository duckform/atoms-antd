import { IBehaviorCreator, IResourceCreator, TreeNode, createBehavior, createResource } from "@duckform/core";
import {
  DnFC,
  DroppableWidget,
  TreeNodeWidget,
  useNodeIdProps,
  useTreeNode,
} from "@duckform/react";
import { observer } from "@formily/react";
import { Tabs } from "antd";
import { TabPaneProps, TabsProps } from "antd/lib/tabs";
import React, { Fragment, useState } from "react";
import { useDropTemplate } from "../../hooks/index";
import { matchComponent } from "../../utils/shared";
import { createVoidFieldSchema } from "@basic/field/schema";
import { LoadTemplate } from "../../utils/LoadTemplate";
import { FormTabSchema } from "./schema";

const parseTabs = (parent: TreeNode) => {
  const tabs: TreeNode[] = [];
  parent.children.forEach((node) => {
    if (matchComponent(node, "FormTab.TabPane")) {
      tabs.push(node);
    }
  });
  return tabs;
};

const getCorrectActiveKey = (activeKey: string, tabs: TreeNode[]) => {
  if (tabs.length === 0) return;
  if (tabs.some((node) => node.id === activeKey)) return activeKey;
  return tabs[tabs.length - 1].id;
};

const PreviewFormTab: DnFC<TabsProps> & {
  TabPane?: React.FC<TabPaneProps>;
} = observer((props) => {
  const [activeKey, setActiveKey] = useState<string>();
  const nodeId = useNodeIdProps();
  const node = useTreeNode();
  const designer = useDropTemplate("FormTab", (source) => {
    return [
      new TreeNode({
        componentName: "Field",
        props: {
          type: "void",
          "x-component": "FormTab.TabPane",
          "x-component-props": {
            tab: "Unnamed Title",
          },
        },
        children: source,
      }),
    ];
  });
  const tabs = parseTabs(node);
  const renderTabs = () => {
    if (!node.children?.length) return <DroppableWidget />;
    return (
      <Tabs
        {...props}
        activeKey={getCorrectActiveKey(activeKey!, tabs)}
        onChange={(id) => {
          setActiveKey(id);
        }}
      >
        {tabs.map((tab) => {
          const props = tab.props?.["x-component-props"] || {};
          return (
            <Tabs.TabPane
              {...props}
              style={{ ...props.style }}
              tab={
                <span
                  data-content-editable="x-component-props.tab"
                  data-content-editable-node-id={tab.id}
                >
                  {props.tab}
                </span>
              }
              key={tab.id}
            >
              {React.createElement(
                "div",
                {
                  [designer.props.nodeIdAttrName!]: tab.id,
                  style: {
                    padding: "20px 0",
                  },
                },
                tab.children.length ? (
                  <TreeNodeWidget node={tab} />
                ) : (
                  <DroppableWidget node={tab} />
                ),
              )}
            </Tabs.TabPane>
          );
        })}
      </Tabs>
    );
  };
  return (
    <div {...nodeId}>
      {renderTabs()}
      <LoadTemplate
        actions={[
          {
            title: '添加选项卡',
            onClick: () => {
              const tabPane = new TreeNode({
                componentName: "Field",
                resourceName: '选项卡面板',
                props: {
                  type: "void",
                  "x-component": "FormTab.TabPane",
                  "x-component-props": {
                    tab: "Unnamed Title",
                  },
                },
              });
              node.append(tabPane);
              setActiveKey(tabPane.id);
            },
          },
        ]}
      />
    </div>
  );
});

PreviewFormTab.TabPane = (props) => {
  return <Fragment>{props.children}</Fragment>;
};

const Behavior: IBehaviorCreator[] = [{
  name: "FormTab",
  extends: ["Field"],
  selector: (node) => node.props?.["x-component"] === "FormTab",
  designerProps: {
    droppable: true,
    allowAppend: (target, source) =>
      target.children.length === 0 ||
      source!.every(
        (node) => node.props?.["x-component"] === "FormTab.TabPane",
      ),
    propsSchema: createVoidFieldSchema(FormTabSchema),
  },
},
{
  name: "FormTab.TabPane",
  extends: ["Field"],
  selector: (node) => node.props?.["x-component"] === "FormTab.TabPane",
  designerProps: {
    droppable: true,
    allowDrop: (node) => node.props?.["x-component"] === "FormTab",
    propsSchema: createVoidFieldSchema(FormTabSchema.TabPane),
  },
}];

const Resource: IResourceCreator[] = [{
  title: "选项卡",
  elements: [
    {
      componentName: "Field",
      props: {
        type: "void",
        "x-component": "FormTab",
      },
    },
  ],
}];


export const FormTab = Object.assign(PreviewFormTab, {
  Behavior,
  Resource,
  accepts: ["void"],
  transform: () => { }
});
