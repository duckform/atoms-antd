import { QuickTransformer, makeTransfomer } from "@utils/shared";

export const quick: QuickTransformer = makeTransfomer("Radio", {
  accepts: ["string", "number", "boolean"],
});
