import { QuickTransformer, makeTransfomer } from "@utils/shared";

export const quick: QuickTransformer = makeTransfomer("DatePicker", {
  accepts: ["array", "number", "string"],
});
