import rule from "../../src/rules/no-while.js";
import { runAppsyncRuleTests } from "../helpers/rule-tester.js";

runAppsyncRuleTests("no-while", rule, {
  valid: ["for (const item of items) { break; }"],
  invalid: [
    {
      code: "while (condition) { break; }",
      errors: [{ messageId: "default" }],
    },
  ],
});
