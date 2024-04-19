import { QuickTransformer, makeTransfomer } from "@utils/shared";

export const quick: QuickTransformer = makeTransfomer("Checkbox", {
  accepts: ["boolean", "number", "string"],
});
