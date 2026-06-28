import rule from "../../src/rules/no-do-while.js";
import { runAppsyncRuleTests } from "../helpers/rule-tester.js";

runAppsyncRuleTests("no-do-while", rule, {
  valid: ["for (const item of items) { break; }"],
  invalid: [
    {
      code: "do { break; } while (condition);",
      errors: [{ messageId: "default" }],
    },
  ],
});
