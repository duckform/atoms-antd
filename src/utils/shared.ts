import { Engine, TreeNode } from "@duckform/core";
type AcceptType =
  | "void"
  | "string"
  | "number"
  | "integer"
  | "array"
  | "boolean"
  | "null"
  | "object";

export type QuickTransformer = {
  accepts: AcceptType[];
  disable?: (node: TreeNode) => boolean;
  transform?: (node: TreeNode) => TreeNode;
  reset?: (node: TreeNode) => TreeNode;
};

export const makeTransfomer = (
  CompName: string,
  options: QuickTransformer,
  appendProps?: Record<string, any>,
) => {
  const transfomer: QuickTransformer = {
    ...options,
    transform: (node) => {
      const done = getNodeProps(node, "x-component") === CompName;
      if (done) return node;
      const props = node.props!["x-components-props"];
      node.props!["x-components-props"] = {
        ...props,
        ...appendProps,
        _memo: props,
      };
      return node;
    },
    reset: (node) => {
      const changed = getNodeProps(node, "x-component") === CompName;
      if (!changed) return node;
      const props = node.props!["x-components-props"];
      node.props!["x-components-props"] = { ...props._memo };
      return node;
    },
  };
  return transfomer;
};

export const getNodeProps = (
  node: TreeNode,
  key: "x-component" | "x-component-props" | "type" | "title" | (string & {}),
) => node?.props?.[key];

export type ComponentNameMatcher =
  | string
  | string[]
  | ((name: string, node: TreeNode, context?: any) => boolean);

export const matchComponent = (
  node: TreeNode,
  name: ComponentNameMatcher,
  context?: any,
) => {
  if (name === "*") return true;
  const componentName = node?.props?.["x-component"];
  if (typeof name === "function")
    return name(componentName || "", node, context);
  if (Array.isArray(name)) return name.includes(componentName);
  return componentName === name;
};

export const matchChildComponent = (
  node: TreeNode,
  name: ComponentNameMatcher,
  context?: any,
) => {
  if (name === "*") return true;
  const componentName = node?.props?.["x-component"];
  if (!componentName) return false;
  if (typeof name === "function")
    return name(componentName || "", node, context);
  if (Array.isArray(name)) return name.includes(componentName);
  return componentName.indexOf(`${name}.`) > -1;
};

export const includesComponent = (
  node: TreeNode,
  names: ComponentNameMatcher[],
  target?: TreeNode,
) => {
  return names.some((name) => matchComponent(node, name, target));
};

export const queryNodesByComponentPath = (
  node: TreeNode,
  path: ComponentNameMatcher[],
): TreeNode[] => {
  if (path?.length === 0) return [];
  if (path?.length === 1) {
    if (matchComponent(node, path[0])) {
      return [node];
    }
  }
  return matchComponent(node, path[0])
    ? node.children.reduce((buf, child) => {
        return buf.concat(queryNodesByComponentPath(child, path.slice(1)));
      }, [] as TreeNode[])
    : [];
};

export const findNodeByComponentPath = (
  node: TreeNode,
  path: ComponentNameMatcher[],
): TreeNode | undefined => {
  if (path?.length === 0) return;
  if (path?.length === 1) {
    if (matchComponent(node, path[0])) {
      return node;
    }
  }
  if (matchComponent(node, path[0])) {
    for (let i = 0; i < node.children.length; i++) {
      const next = findNodeByComponentPath(node.children[i], path.slice(1));
      if (next) {
        return next;
      }
    }
  }
};

export const hasNodeByComponentPath = (
  node: TreeNode,
  path: ComponentNameMatcher[],
) => !!findNodeByComponentPath(node, path);

export const matchArrayItemsNode = (node: TreeNode) => {
  return (
    node?.parent?.props?.["type"] === "array" &&
    node?.parent?.children?.[0] === node
  );
};

export const createNodeId = (designer: Engine, id: string) => {
  return {
    [designer.props.nodeIdAttrName!]: id,
  };
};

export const createEnsureTypeItemsNode = (type: string) => (node: TreeNode) => {
  const objectNode = node.children.find(
    (child) => child.props?.["type"] === type,
  );
  if (objectNode) {
    return objectNode;
  } else {
    const newObjectNode = new TreeNode({
      componentName: "Field",
      props: {
        type,
      },
    });
    node.prepend(newObjectNode);
    return newObjectNode;
  }
};

// export const eachNode = (node: TreeNode, iter: (node: TreeNode) => boolean) => {
//   const next = iter(node);
//   if (next && Array.isArray(node.children)) {
//     node.children.forEach((child) => (child ? eachNode(child, iter) : null));
//   }
// };
