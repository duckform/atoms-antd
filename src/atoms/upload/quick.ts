import { QuickTransformer, makeTransfomer } from "@utils/shared";

export const quick: QuickTransformer = makeTransfomer("TreeSelect", {
  accepts: ["array", "string"],
});
