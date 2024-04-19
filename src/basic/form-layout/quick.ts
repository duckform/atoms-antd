import { QuickTransformer, makeTransfomer } from "@utils/shared";

export const quick: QuickTransformer = makeTransfomer("FormLayout", {
  accepts: ["void", "object"],
});
