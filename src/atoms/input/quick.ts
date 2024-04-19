import { QuickTransformer, makeTransfomer } from "@utils/shared";

export const quick: QuickTransformer = makeTransfomer("Input", {
  accepts: ["string", "number", "object", "array"],
});
