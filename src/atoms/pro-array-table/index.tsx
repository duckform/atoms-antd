import { createFieldSchema, createVoidFieldSchema } from "@basic/field/schema";
import { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import {
  DnFC,
  DroppableWidget,
  TreeNodeWidget,
  useNodeIdProps,
  useTreeNode,
} from "@duckform/react";
import { observer } from "@formily/react";
import { Flex } from "@pro.formily/antd/dist/esm/pro-array-table/mixin.pro";
import { LoadTemplate } from "@utils/LoadTemplate";
import { Table, TableProps } from "antd";
import cls from "classnames";
import React, { useEffect } from "react";
import { useDropTemplate } from "@hooks/useDropTemplate";
import { actions, init, query } from "./helper";
import { mixin } from "./mixin";
import { ProArrayTableSchema } from "./schema";
import "./styles.less";
import { quick } from "./quick";

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

const PreviewProArrayTable: DnFC<TableProps<any>> = observer((props) => {
  const node = useTreeNode();
  const nodeId = useNodeIdProps();

  // useDropTemplate("ProArrayTable", dropTemplate);

  useEffect(() => {
    init(node);
  }, []);

  const columns = query.columns(node);
  const additions = query.additions(node);

  const defaultRowKey = () => {
    return node.id;
  };

  const renderTable = () => {
    if (node.children.length === 0) return <DroppableWidget />;
    return (
      <div>
        <Flex end>
          {additions.map((child) => {
            return <TreeNodeWidget node={child} key={child.id} />;
          })}
        </Flex>
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
                  return children.length > 0 ? children : "Droppable";
                }}
              />
            );
          })}
          {columns.length === 0 && (
            <Table.Column render={() => <DroppableWidget />} />
          )}
        </Table>
      </div>
    );
  };

  useDropTemplate("ProArrayTable.Column", (source) => {
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
            onClick: () => actions.addSort(node),
          },
          {
            title: "添加索引",
            icon: "AddIndex",
            onClick: () => actions.addIndex(node),
          },
          {
            title: "添加列",
            icon: "AddColumn",
            onClick: () => actions.addColumn(node),
          },
          {
            title: "添加操作",
            icon: "AddOperation",
            onClick: () => actions.addOp(node),
          },
          {
            title: "添加 Addition",
            icon: "AddOperation",
            onClick: () => actions.addProAddition(node),
          },
          {
            title: "添加行编辑",
            icon: "AddOperation",
            onClick: () => actions.addRowPopup(node),
          },
        ]}
      />
    </div>
  );
});

const PREFIX = "ProArrayTable";

mixin(PreviewProArrayTable);

const Behavior: IBehaviorCreator[] = [
  {
    name: PREFIX,
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === PREFIX,
    designerProps: {
      droppable: true,
      propsSchema: createFieldSchema(ProArrayTableSchema),
    },
  },
  {
    name: `${PREFIX}.Column`,
    extends: ["Field"],
    selector: (node) => node.props!["x-component"] === `${PREFIX}.Column`,
    designerProps: {
      droppable: true,
      allowDrop: (node) => node?.props?.["x-component"] === PREFIX,
      propsSchema: createVoidFieldSchema(ProArrayTableSchema.Column),
    },
  },
  {
    name: `${PREFIX}.DelegateAction`,
    extends: ["Field"],
    selector: (node) =>
      node.props!["x-component"] === `${PREFIX}.DelegateAction`,
    designerProps: {
      droppable: true,
      allowDrop: (node) => node?.props?.["x-component"] === PREFIX,
      propsSchema: createVoidFieldSchema(ProArrayTableSchema.DelegateAction),
    },
  },
  {
    name: `${PREFIX}.Addition`,
    extends: ["Field"],
    selector: (node) => node.props!["x-component"] === `${PREFIX}.Addition`,
    designerProps: {
      droppable: true,
      allowDrop: (node) => node?.props?.["x-component"] === PREFIX,
      propsSchema: createVoidFieldSchema(ProArrayTableSchema.Addition),
    },
  },

  {
    name: `${PREFIX}.ProAddition`,
    extends: ["Field"],
    selector: (node) => node.props!["x-component"] === `${PREFIX}.ProAddition`,
    designerProps: {
      droppable: true,
      allowDrop: (node) => node?.props?.["x-component"] === PREFIX,
      // propsSchema: createVoidFieldSchema(schemas.ProArrayTable.ProAddition),
      propsSchema: createVoidFieldSchema(ProArrayTableSchema.ProAddition),
    },
  },
  {
    name: `${PREFIX}.Remove`,
    extends: ["Field"],
    selector: (node) => node.props!["x-component"] === `${PREFIX}.Remove`,
    designerProps: {
      droppable: true,
      allowDrop: (node) => node?.props?.["x-component"] === PREFIX,
      propsSchema: createVoidFieldSchema(ProArrayTableSchema.Remove),
    },
  },
  {
    name: `${PREFIX}.MoveUp`,
    extends: ["Field"],
    selector: (node) => node.props!["x-component"] === `${PREFIX}.MoveUp`,
    designerProps: {
      droppable: true,
      allowDrop: (node) => node?.props?.["x-component"] === PREFIX,
      propsSchema: createVoidFieldSchema(),
    },
  },
  {
    name: `${PREFIX}.MoveDown`,
    extends: ["Field"],
    selector: (node) => node.props!["x-component"] === `${PREFIX}.MoveDown`,
    designerProps: {
      droppable: true,
      allowDrop: (node) => node?.props?.["x-component"] === PREFIX,
      propsSchema: createVoidFieldSchema(),
    },
  },
];

const Resource: IResourceCreator[] = [
  {
    title: "高级表格",
    elements: [
      {
        componentName: "Field",

        props: {
          type: "array",
          "x-decorator": "FormItem",
          "x-component": "ProArrayTable",
        },
      },
    ],
  },
];

export const ProArrayTable = Object.assign(PreviewProArrayTable, {
  Behavior,
  Resource,
  ...quick,
});
