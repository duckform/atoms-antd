import { QuickTransformer, makeTransfomer } from "@utils/shared";

export const quick: QuickTransformer = makeTransfomer("TimePicker", {
  accepts: ["string", "number", "array"],
});
