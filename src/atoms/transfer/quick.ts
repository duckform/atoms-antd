import { QuickTransformer, makeTransfomer } from "@utils/shared";

export const quick: QuickTransformer = makeTransfomer("Transfer", {
  accepts: ["array", "object", "string", "number"],
});
