import { QuickTransformer, makeTransfomer } from "@utils/shared";

export const quick: QuickTransformer = makeTransfomer("Select", {
  accepts: ["array", "string", "number", "object"],
});
