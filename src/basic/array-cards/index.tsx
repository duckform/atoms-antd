import { IBehaviorCreator, IResourceCreator, TreeNode, createResource } from "@duckform/core";
import {
  DnFC,
  DroppableWidget,
  TreeNodeWidget,
  useNodeIdProps,
  useTreeNode,
} from "@duckform/react";
import { ArrayBase as AntdArrayBase } from "@formily/antd";
import { observer } from "@formily/react";
import { Card, CardProps } from "antd";
import cls from "classnames";
import React, { Fragment } from "react";
import { LoadTemplate } from "../../utils/LoadTemplate";
import { useDropTemplate } from "../../hooks";
import { ArrayCardsSchema } from "./schema";
import {
  createEnsureTypeItemsNode,
  createNodeId,
  findNodeByComponentPath,
  hasNodeByComponentPath,
  queryNodesByComponentPath,
} from "../../utils/shared";
import { createVoidFieldSchema, createFieldSchema } from "../field/schema";
import "./styles.less";

const ArrayBase = AntdArrayBase as Required<typeof AntdArrayBase> &
  typeof AntdArrayBase;

const ensureObjectItemsNode = createEnsureTypeItemsNode("object");

const isArrayCardsOperation = (name: string) =>
  name === "ArrayCards.Remove" ||
  name === "ArrayCards.MoveDown" ||
  name === "ArrayCards.MoveUp";

const PreviewArrayCards: DnFC<CardProps> = observer((props) => {
  const node = useTreeNode();
  const nodeId = useNodeIdProps();
  // const designer2 = useDropTemplate("ArrayCards", () => []);
  const designer = useDropTemplate("ArrayCards", (source) => {
    const indexNode = new TreeNode({
      componentName: node.componentName,
      props: {
        type: "void",
        "x-component": "ArrayCards.Index",
      },
    });
    const additionNode = new TreeNode({
      componentName: node.componentName,
      props: {
        type: "void",
        title: "Addition",
        "x-component": "ArrayCards.Addition",
      },
    });
    const removeNode = new TreeNode({
      componentName: node.componentName,
      props: {
        type: "void",
        title: "Addition",
        "x-component": "ArrayCards.Remove",
      },
    });
    const moveDownNode = new TreeNode({
      componentName: node.componentName,
      props: {
        type: "void",
        title: "Addition",
        "x-component": "ArrayCards.MoveDown",
      },
    });
    const moveUpNode = new TreeNode({
      componentName: node.componentName,
      props: {
        type: "void",
        title: "Addition",
        "x-component": "ArrayCards.MoveUp",
      },
    });

    const objectNode = new TreeNode({
      componentName: node.componentName,
      props: {
        type: "object",
      },
      children: [indexNode, ...source, removeNode, moveDownNode, moveUpNode],
    });
    return [objectNode, additionNode];
  });
  const renderCard = () => {
    if (node.children.length === 0) return <DroppableWidget />;
    const additions = queryNodesByComponentPath(node, [
      "ArrayCards",
      "ArrayCards.Addition",
    ]);
    const indexes = queryNodesByComponentPath(node, [
      "ArrayCards",
      "*",
      "ArrayCards.Index",
    ]);
    const operations = queryNodesByComponentPath(node, [
      "ArrayCards",
      "*",
      isArrayCardsOperation,
    ]);
    console.log(`🚀 ~ renderCard ~ operations:`, operations);

    const children = queryNodesByComponentPath(node, [
      "ArrayCards",
      "*",
      (name) => name.indexOf("ArrayCards.") === -1,
    ]);
    return (
      <ArrayBase disabled>
        <ArrayBase.Item index={0} record={null!}>
          <Card
            {...props}
            title={
              <Fragment>
                {indexes.map((node, key) => (
                  <TreeNodeWidget key={key} node={node} />
                ))}
                <span data-content-editable="x-component-props.title">
                  {props.title}
                </span>
              </Fragment>
            }
            className={cls("ant-formily-array-cards-item", props.className)}
            extra={
              <Fragment>
                {operations.map((node) => (
                  <TreeNodeWidget key={node.id} node={node} />
                ))}
                {props.extra}
              </Fragment>
            }
          >
            <div {...createNodeId(designer, ensureObjectItemsNode(node).id)}>
              {children.length ? (
                children.map((node) => (
                  <TreeNodeWidget key={node.id} node={node} />
                ))
              ) : (
                <DroppableWidget hasChildren={false} />
              )}
            </div>
          </Card>
        </ArrayBase.Item>
        {additions.map((node) => (
          <TreeNodeWidget key={node.id} node={node} />
        ))}
      </ArrayBase>
    );
  };

  return (
    <div {...nodeId} className="dn-array-cards">
      {renderCard()}
      <LoadTemplate
        actions={[
          {
            title: '添加索引',
            icon: "AddIndex",
            onClick: () => {
              if (
                hasNodeByComponentPath(node, [
                  "ArrayCards",
                  "*",
                  "ArrayCards.Index",
                ])
              )
                return;
              const indexNode = new TreeNode({
                componentName: node.componentName,
                props: {
                  type: "void",
                  "x-component": "ArrayCards.Index",
                },
              });
              ensureObjectItemsNode(node).append(indexNode);
            },
          },

          {
            title: '添加操作',
            icon: "AddOperation",
            onClick: () => {
              const oldAdditionNode = findNodeByComponentPath(node, [
                "ArrayCards",
                "ArrayCards.Addition",
              ]);
              if (!oldAdditionNode) {
                const additionNode = new TreeNode({
                  componentName: node.componentName,
                  props: {
                    type: "void",
                    title: "Addition",
                    "x-component": "ArrayCards.Addition",
                  },
                });
                ensureObjectItemsNode(node).insertAfter(additionNode);
              }
              const oldRemoveNode = findNodeByComponentPath(node, [
                "ArrayCards",
                "*",
                "ArrayCards.Remove",
              ]);
              const oldMoveDownNode = findNodeByComponentPath(node, [
                "ArrayCards",
                "*",
                "ArrayCards.MoveDown",
              ]);
              const oldMoveUpNode = findNodeByComponentPath(node, [
                "ArrayCards",
                "*",
                "ArrayCards.MoveUp",
              ]);
              if (!oldRemoveNode) {
                ensureObjectItemsNode(node).append(
                  new TreeNode({
                    componentName: node.componentName,
                    props: {
                      type: "void",
                      "x-component": "ArrayCards.Remove",
                    },
                  }),
                );
              }
              if (!oldMoveDownNode) {
                ensureObjectItemsNode(node).append(
                  new TreeNode({
                    componentName: node.componentName,
                    props: {
                      type: "void",
                      "x-component": "ArrayCards.MoveDown",
                    },
                  }),
                );
              }
              if (!oldMoveUpNode) {
                ensureObjectItemsNode(node).append(
                  new TreeNode({
                    componentName: node.componentName,
                    props: {
                      type: "void",
                      "x-component": "ArrayCards.MoveUp",
                    },
                  }),
                );
              }
            },
          },
        ]}
      />
    </div>
  );
});

ArrayBase.mixin(PreviewArrayCards);

const Behavior: IBehaviorCreator[] = [{
  name: 'ArrayCards',
  extends: ["Field"],
  selector: (node) => node.props?.["x-component"] === 'ArrayCards',
  designerProps: {
    droppable: true,
    propsSchema: createFieldSchema(ArrayCardsSchema),
  },
},
{
  name: 'ArrayCards.Addition',
  extends: ["Field"],
  selector: (node) => node.props?.["x-component"] === 'ArrayCards.Addition',
  designerProps: {
    allowDrop(parent) {
      return parent.props?.["x-component"] === 'ArrayCards';
    },
    propsSchema: createVoidFieldSchema(ArrayCardsSchema.Addition),
  },
},
{
  name: 'ArrayCards.Remove',
  extends: ["Field"],
  selector: (node) => node.props?.["x-component"] === 'ArrayCards.Remove',
  designerProps: {
    allowDrop(parent) {
      return parent.props?.["x-component"] === 'ArrayCards';
    },
    propsSchema: createVoidFieldSchema(),
  },
},
{
  name: 'ArrayCards.Index',
  extends: ["Field"],
  selector: (node) => node.props?.["x-component"] === 'ArrayCards.Index',
  designerProps: {
    allowDrop(parent) {
      return parent.props?.["x-component"] === 'ArrayCards';
    },
    propsSchema: createVoidFieldSchema(),
  },
},
{
  name: 'ArrayCards.MoveUp',
  extends: ["Field"],
  selector: (node) => node.props?.["x-component"] === 'ArrayCards.MoveUp',
  designerProps: {
    allowDrop(parent) {
      return parent.props?.["x-component"] === 'ArrayCards';
    },
    propsSchema: createVoidFieldSchema(),
  },
},
{
  name: 'ArrayCards.MoveDown',
  extends: ["Field"],
  selector: (node) => node.props?.["x-component"] === 'ArrayCards.MoveDown',
  designerProps: {
    allowDrop(parent) {
      return parent.props?.["x-component"] === "ArrayCards";
    },
    propsSchema: createVoidFieldSchema(),
  },
},];

const Resource: IResourceCreator[] = createResource({
  title: "自增卡片",
  elements: [
    {
      componentName: "Field",
      props: {
        type: "array",
        "x-decorator": "FormItem",
        "x-component": "ArrayCards",
        "x-component-props": {
          title: "Title",
        },
      },
    },
  ],
});


export const ArrayCards = Object.assign(PreviewArrayCards, {
  Behavior,
  Resource,
  accepts: ["array"],
  transform: () => { }
});
