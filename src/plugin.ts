import { eslintCompatPlugin } from "@oxlint/plugins";
import rules from "./rules/index.js";

export const plugin = eslintCompatPlugin({
  meta: {
    name: "appsync",
  },
  rules,
});

export const recommended = Object.fromEntries(
  Object.keys(rules).map((ruleName) => [`appsync/${ruleName}`, "error"]),
) as Record<`appsync/${keyof typeof rules}`, "error">;
