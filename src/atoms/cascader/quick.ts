import { QuickTransformer, makeTransfomer } from "@utils/shared";

export const quick: QuickTransformer = makeTransfomer("Cascader", {
  accepts: ["number", "string", "array"],
});
