import { QuickTransformer, makeTransfomer } from "@utils/shared";

export const quick: QuickTransformer = makeTransfomer("Rate", {
  accepts: ["string", "number"],
});
