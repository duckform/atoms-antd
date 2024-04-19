import { QuickTransformer, makeTransfomer } from "@utils/shared";

export const quick: QuickTransformer = makeTransfomer("FormCollapse", {
  accepts: ["void", "object"],
});
