import { QuickTransformer, makeTransfomer } from "@utils/shared";

export const quick: QuickTransformer = makeTransfomer("Switch", {
  accepts: ["string", "number", "boolean"],
});
