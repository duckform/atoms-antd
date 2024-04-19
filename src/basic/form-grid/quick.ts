import { getNodeProps, QuickTransformer, makeTransfomer } from "@utils/shared";

export const quick: QuickTransformer = makeTransfomer("FormGrid", {
  accepts: ["void", "object"],
  transform: (node) => {
    const done = getNodeProps(node, "x-component") === "FormGrid";
    if (done) return node;
    const props = node.props!["x-components-props"];
    node.props!["x-components-props"] = {
      ...props,
      _memo: props,
      minColumns: 1,
      maxColumns: 3,
    };
    return node;
  },
});
