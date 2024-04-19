import { QuickTransformer, getNodeProps } from "@utils/shared";
import { TreeNode } from "@duckform/core";

export const quick: QuickTransformer = {
  accepts: ["array"],
  transform: (node) => {
    const arrayItems = node.children?.[0];
    const done = arrayItems?.children?.find?.((x) =>
      /^ArrayCards\./.test(getNodeProps(x, "x-component")),
    );
    if (done) return node;

    let items = arrayItems;

    if (!/object|array/.test(getNodeProps(arrayItems, "type"))) {
      // @see https://antd.formilyjs.org/zh-CN/components/array-cards
      // JSON Schema 案例 字符串数组
      items = new TreeNode(
        {
          componentName: "Field",
          props: {
            type: "void",
          },
        },
        node,
      );
      items.append(arrayItems.clone());
    }

    const actions = ["MoveUp", "MoveDown", "Remove"].map((Action) => {
      return new TreeNode(
        {
          componentName: "Field",
          props: {
            type: "void",
            "x-component": `ArrayCards.${Action}`,
          },
        },
        arrayItems,
      );
    });

    const addition = new TreeNode({
      componentName: "Field",
      props: {
        type: "void",
        title: "添加条目",
        "x-component": "ArrayCards.Addition",
      },
    });

    items.prepend(
      new TreeNode({
        componentName: "Field",
        props: {
          type: "void",
          "x-component": "ArrayCards.Index",
        },
      }),
    );
    items.append(...actions);

    node.setChildren(items, addition);

    return node;
  },
  reset: (node) => {
    // if (!ArrayCards.match(node)) return node;
    const arrayItems = node.children?.[0];
    const changed = arrayItems?.children?.find?.(
      (x) => !/^ArrayCards\./.test(getNodeProps(x, "x-component")),
    );
    if (!changed) return node;

    let items = arrayItems;

    const children = arrayItems?.children ?? [];
    const clean = children.filter(
      (n) => !/^ArrayCards\./.test(getNodeProps(n, "x-component")),
    );

    if (getNodeProps(items, "type") === "void") {
      items = clean[0];
    } else {
      items.setChildren(...clean);
    }
    console.log("ArrayCards reset", items);
    node.setChildren(items);
    return node;
  },
};
