import { QuickTransformer, makeTransfomer } from "@utils/shared";

export const quick: QuickTransformer = makeTransfomer("NumberPicker", {
  accepts: ["string", "number"],
});
