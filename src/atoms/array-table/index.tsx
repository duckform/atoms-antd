import { createFieldSchema, createVoidFieldSchema } from "@basic/field/schema";
import { IBehaviorCreator, IResourceCreator, TreeNode } from "@duckform/core";
import {
  DnFC,
  DroppableWidget,
  TreeNodeWidget,
  useNodeIdProps,
  useTreeNode,
} from "@duckform/react";
import { ArrayBase as AntdArrayBase } from "@formily/antd";
import { observer } from "@formily/react";
import { LoadTemplate } from "@utils/LoadTemplate";
import {
  createEnsureTypeItemsNode,
  findNodeByComponentPath,
  hasNodeByComponentPath,
  queryNodesByComponentPath,
} from "@utils/shared";
import { Table, TableProps } from "antd";
import cls from "classnames";
import React from "react";
import { useDropTemplate } from "@hooks/useDropTemplate";
import { quick } from "./quick";
import { ArrayTableSchema } from "./schema";
import "./styles.less";

const ArrayBase = AntdArrayBase as Required<typeof AntdArrayBase> &
  typeof AntdArrayBase;

const ensureObjectItemsNode = createEnsureTypeItemsNode("object");

const HeaderCell: React.FC = (props: any) => {
  return (
    <th
      {...props}
      data-designer-node-id={props.className.match(/data-id\:([^\s]+)/)?.[1]}
    >
      {props.children}
    </th>
  );
};

const BodyCell: React.FC = (props: any) => {
  return (
    <td
      {...props}
      data-designer-node-id={props.className.match(/data-id\:([^\s]+)/)?.[1]}
    >
      {props.children}
    </td>
  );
};

const PreviewArrayTable: DnFC<TableProps<any>> = observer((props) => {
  const node = useTreeNode();
  const nodeId = useNodeIdProps();
  useDropTemplate("ArrayTable", (source) => {
    const sortHandleNode = new TreeNode({
      componentName: "Field",
      props: {
        type: "void",
        "x-component": "ArrayTable.Column",
        "x-component-props": {
          title: "Title",
        },
      },
      children: [
        {
          componentName: "Field",
          props: {
            type: "void",
            "x-component": "ArrayTable.SortHandle",
          },
        },
      ],
    });
    const indexNode = new TreeNode({
      componentName: "Field",
      props: {
        type: "void",
        "x-component": "ArrayTable.Column",
        "x-component-props": {
          title: "Title",
        },
      },
      children: [
        {
          componentName: "Field",
          props: {
            type: "void",
            "x-component": "ArrayTable.Index",
          },
        },
      ],
    });
    const columnNode = new TreeNode({
      componentName: "Field",
      props: {
        type: "void",
        "x-component": "ArrayTable.Column",
        "x-component-props": {
          title: "Title",
        },
      },
      children: source.map((node) => {
        node.props!["title"] = undefined;
        return node;
      }),
    });

    const operationNode = new TreeNode({
      componentName: "Field",
      props: {
        type: "void",
        "x-component": "ArrayTable.Column",
        "x-component-props": {
          title: "Title",
        },
      },
      children: [
        {
          componentName: "Field",
          props: {
            type: "void",
            "x-component": "ArrayTable.Remove",
          },
        },
        {
          componentName: "Field",
          props: {
            type: "void",
            "x-component": "ArrayTable.MoveDown",
          },
        },
        {
          componentName: "Field",
          props: {
            type: "void",
            "x-component": "ArrayTable.MoveUp",
          },
        },
      ],
    });
    const objectNode = new TreeNode({
      componentName: "Field",
      props: {
        type: "object",
      },
      children: [sortHandleNode, indexNode, columnNode, operationNode],
    });
    const additionNode = new TreeNode({
      componentName: "Field",
      props: {
        type: "void",
        title: "Addition",
        "x-component": "ArrayTable.Addition",
      },
    });
    return [objectNode, additionNode];
  });
  const columns = queryNodesByComponentPath(node, [
    "ArrayTable",
    "*",
    "ArrayTable.Column",
  ]);
  const additions = queryNodesByComponentPath(node, [
    "ArrayTable",
    "ArrayTable.Addition",
  ]);
  const defaultRowKey = () => {
    return node.id;
  };

  const renderTable = () => {
    if (node.children.length === 0) return <DroppableWidget />;
    return (
      <ArrayBase disabled>
        <Table
          size="small"
          bordered
          {...props}
          scroll={{ x: "100%" }}
          className={cls("ant-formily-array-table", props.className)}
          style={{ marginBottom: 10, ...props.style }}
          rowKey={defaultRowKey}
          dataSource={[{ id: "1" }]}
          pagination={false}
          components={{
            header: {
              cell: HeaderCell,
            },
            body: {
              cell: BodyCell,
            },
          }}
        >
          {columns.map((node) => {
            const children = node.children.map((child) => {
              return <TreeNodeWidget node={child} key={child.id} />;
            });
            const props = node.props!["x-component-props"];
            return (
              <Table.Column
                {...props}
                title={
                  <div data-content-editable="x-component-props.title">
                    {props.title}
                  </div>
                }
                dataIndex={node.id}
                className={`data-id:${node.id}`}
                key={node.id}
                render={(value, record, key) => {
                  return (
                    <ArrayBase.Item key={key} index={key} record={null!}>
                      {children.length > 0 ? children : "Droppable"}
                    </ArrayBase.Item>
                  );
                }}
              />
            );
          })}
          {columns.length === 0 && (
            <Table.Column render={() => <DroppableWidget />} />
          )}
        </Table>
        {additions.map((child) => {
          return <TreeNodeWidget node={child} key={child.id} />;
        })}
      </ArrayBase>
    );
  };

  useDropTemplate("ArrayTable.Column", (source) => {
    return source.map((node) => {
      node.props!["title"] = undefined;
      return node;
    });
  });

  return (
    <div {...nodeId} className="dn-array-table">
      {renderTable()}
      <LoadTemplate
        actions={[
          {
            title: "添加排序",
            icon: "AddSort",
            onClick: () => {
              if (
                hasNodeByComponentPath(node, [
                  "ArrayTable",
                  "*",
                  "ArrayTable.Column",
                  "ArrayTable.SortHandle",
                ])
              )
                return;
              const tableColumn = new TreeNode({
                componentName: "Field",
                props: {
                  type: "void",
                  "x-component": "ArrayTable.Column",
                  "x-component-props": {
                    title: "Title",
                  },
                },
                children: [
                  {
                    componentName: "Field",
                    props: {
                      type: "void",
                      "x-component": "ArrayTable.SortHandle",
                    },
                  },
                ],
              });
              ensureObjectItemsNode(node).prepend(tableColumn);
            },
          },
          {
            title: "添加索引",
            icon: "AddIndex",
            onClick: () => {
              if (
                hasNodeByComponentPath(node, [
                  "ArrayTable",
                  "*",
                  "ArrayTable.Column",
                  "ArrayTable.Index",
                ])
              )
                return;
              const tableColumn = new TreeNode({
                componentName: "Field",
                props: {
                  type: "void",
                  "x-component": "ArrayTable.Column",
                  "x-component-props": {
                    title: "Title",
                  },
                },
                children: [
                  {
                    componentName: "Field",
                    props: {
                      type: "void",
                      "x-component": "ArrayTable.Index",
                    },
                  },
                ],
              });
              const sortNode = findNodeByComponentPath(node, [
                "ArrayTable",
                "*",
                "ArrayTable.Column",
                "ArrayTable.SortHandle",
              ]);
              if (sortNode) {
                sortNode.parent.insertAfter(tableColumn);
              } else {
                ensureObjectItemsNode(node).prepend(tableColumn);
              }
            },
          },
          {
            title: "添加列",
            icon: "AddColumn",
            onClick: () => {
              const operationNode = findNodeByComponentPath(node, [
                "ArrayTable",
                "*",
                "ArrayTable.Column",
                (name) => {
                  return (
                    name === "ArrayTable.Remove" ||
                    name === "ArrayTable.MoveDown" ||
                    name === "ArrayTable.MoveUp"
                  );
                },
              ]);
              const tableColumn = new TreeNode({
                componentName: "Field",
                props: {
                  type: "void",
                  "x-component": "ArrayTable.Column",
                  "x-component-props": {
                    title: "Title",
                  },
                },
              });
              if (operationNode) {
                operationNode.parent.insertBefore(tableColumn);
              } else {
                ensureObjectItemsNode(node).append(tableColumn);
              }
            },
          },
          {
            title: "添加操作",
            icon: "AddOperation",
            onClick: () => {
              const oldOperationNode = findNodeByComponentPath(node, [
                "ArrayTable",
                "*",
                "ArrayTable.Column",
                (name) => {
                  return (
                    name === "ArrayTable.Remove" ||
                    name === "ArrayTable.MoveDown" ||
                    name === "ArrayTable.MoveUp"
                  );
                },
              ]);
              const oldAdditionNode = findNodeByComponentPath(node, [
                "ArrayTable",
                "ArrayTable.Addition",
              ]);
              if (!oldOperationNode) {
                const operationNode = new TreeNode({
                  componentName: "Field",
                  props: {
                    type: "void",
                    "x-component": "ArrayTable.Column",
                    "x-component-props": {
                      title: "Title",
                    },
                  },
                  children: [
                    {
                      componentName: "Field",
                      props: {
                        type: "void",
                        "x-component": "ArrayTable.Remove",
                      },
                    },
                    {
                      componentName: "Field",
                      props: {
                        type: "void",
                        "x-component": "ArrayTable.MoveDown",
                      },
                    },
                    {
                      componentName: "Field",
                      props: {
                        type: "void",
                        "x-component": "ArrayTable.MoveUp",
                      },
                    },
                  ],
                });
                ensureObjectItemsNode(node).append(operationNode);
              }
              if (!oldAdditionNode) {
                const additionNode = new TreeNode({
                  componentName: "Field",
                  props: {
                    type: "void",
                    title: "Addition",
                    "x-component": "ArrayTable.Addition",
                  },
                });
                ensureObjectItemsNode(node).insertAfter(additionNode);
              }
            },
          },
        ]}
      />
    </div>
  );
});

ArrayBase.mixin(PreviewArrayTable);

const Behavior: IBehaviorCreator[] = [
  {
    name: "ArrayTable",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "ArrayTable",
    designerProps: {
      droppable: true,
      propsSchema: createFieldSchema(ArrayTableSchema),
    },
  },
  {
    name: "ArrayTable.Addition",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "ArrayTable.Addition",
    designerProps: {
      allowDrop(parent) {
        return parent.props?.["x-component"] === "ArrayTable";
      },
      propsSchema: createVoidFieldSchema(ArrayTableSchema.Addition),
    },
  },
  {
    name: `ArrayTable.Remove`,
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "ArrayTable.Remove",
    designerProps: {
      allowDrop(parent) {
        return parent.props?.["x-component"] === "ArrayTable";
      },
      propsSchema: createVoidFieldSchema(),
    },
  },
  {
    name: "ArrayTable.Index",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "ArrayTable.Index",
    designerProps: {
      allowDrop(parent) {
        return parent.props?.["x-component"] === "ArrayTable";
      },
      propsSchema: createVoidFieldSchema(),
    },
  },
  {
    name: "ArrayTable.MoveUp",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "ArrayTable.MoveUp",
    designerProps: {
      allowDrop(parent) {
        return parent.props?.["x-component"] === "ArrayTable";
      },
      propsSchema: createVoidFieldSchema(),
    },
  },
  {
    name: "ArrayTable.MoveDown",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "ArrayTable.MoveDown",
    designerProps: {
      allowDrop() {
        return false;
      },
      propsSchema: createVoidFieldSchema(),
    },
  },
  {
    name: "ArrayTable.Column",
    extends: ["Field"],
    selector: (node) => node.props!["x-component"] === "ArrayTable.Column",
    designerProps: {
      droppable: true,
      allowDrop: (node) =>
        node.props!["type"] === "object" &&
        node.parent?.props?.["x-component"] === "ArrayTable",
      propsSchema: createVoidFieldSchema(ArrayTableSchema.Column),
    },
  },
];

const Resource: IResourceCreator[] = [
  {
    title: "自增表格",
    elements: [
      {
        componentName: "Field",
        props: {
          type: "array",
          "x-decorator": "FormItem",
          "x-component": "ArrayTable",
        },
      },
    ],
  },
];

export const ArrayTable = Object.assign(PreviewArrayTable, {
  Behavior,
  Resource,
  ...quick,
});
