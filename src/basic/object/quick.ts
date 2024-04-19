import { getNodeProps, QuickTransformer, makeTransfomer } from "@utils/shared";

export const quick: QuickTransformer = makeTransfomer("ObjectContainer", {
  accepts: ["object"],
});
