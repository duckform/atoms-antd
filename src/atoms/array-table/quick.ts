import { QuickTransformer, getNodeProps } from "@utils/shared";
import { TreeNode } from "@duckform/core";

export const quick: QuickTransformer = {
  accepts: ["array"],
  disable: (node) => {
    return !/object|array/.test(getNodeProps(node.children[0], "type"));
  },
  transform: (node) => {
    const arrayItems = node.children?.[0];
    if (!arrayItems) return node;

    const done = arrayItems?.children?.find?.(
      (x) => getNodeProps(x, "x-component") === "ArrayTable.Column",
    );
    if (done) return node;

    const children = arrayItems.children ?? [];

    const columns = children.map((item) => {
      const column = new TreeNode(
        {
          componentName: "Field",
          props: {
            type: "void",
            "x-component": "ArrayTable.Column",
            "x-component-props": {
              title: item.props!.name ?? item.props!.title ?? "列标题",
            },
          },
        },
        arrayItems,
      );
      column.append(item.clone());
      item.remove();
      return column;
    });
    const index = new TreeNode(
      {
        componentName: "Field",
        props: {
          type: "void",
          "x-component": "ArrayTable.Column",
          "x-component-props": {
            title: "顺序",
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
      },
      arrayItems,
    );
    const actions = new TreeNode(
      {
        componentName: "Field",
        props: {
          type: "void",
          "x-component": "ArrayTable.Column",
          "x-component-props": {
            title: "操作",
          },
        },
        children: ["MoveUp", "MoveDown", "Remove"].map((Action) => {
          return {
            componentName: "Field",
            props: {
              type: "void",
              "x-component": `ArrayTable.${Action}`,
            },
          };
        }),
      },
      arrayItems,
    );

    columns.unshift(index);
    columns.push(actions);

    arrayItems.setChildren(...columns);

    const addition = new TreeNode(
      {
        componentName: "Field",
        props: {
          type: "void",
          title: "添加条目",
          "x-component": "ArrayTable.Addition",
        },
      },
      node,
    );
    // reset children
    node.setChildren(arrayItems, addition);

    return node;
  },
  reset: (node) => {
    // if (!ArrayTable.match(node)) return node;
    const arrayItems = node.children?.[0];
    const changed = arrayItems.children?.find?.(
      (x) => getNodeProps(x, "x-component") === "ArrayTable.Column",
    );
    if (!changed) return node;

    const items = arrayItems?.children ?? [];

    const unwrapColumns = items.reduce<TreeNode[]>((list, column) => {
      const properties = column.children ?? [];
      // 约定 ArrayTable. 开头的组件都是 ArrayTable 的辅助组件
      const clean = properties.filter(
        (n) => !/^ArrayTable\./.test(getNodeProps(n, "x-component")),
      );
      list.push(...clean);
      return list;
    }, []);

    const itemsWrapNode = new TreeNode({
      componentName: "Field",
      props: {
        type: "object",
      },
    });

    itemsWrapNode.prepend(...unwrapColumns);

    // todo: 验证 , 通过reset 同时也应该去掉了 properties 上的 addition
    node.setChildren(itemsWrapNode);
    return node;
  },
};
