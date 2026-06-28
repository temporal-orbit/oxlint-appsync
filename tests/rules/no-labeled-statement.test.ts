import rule from "../../src/rules/no-labeled-statement.js";
import { runAppsyncRuleTests } from "../helpers/rule-tester.js";

runAppsyncRuleTests("no-labeled-statement", rule, {
  valid: ["for (const item of items) { break; }"],
  invalid: [
    {
      code: "loop: for (const item of items) { break loop; }",
      errors: [{ messageId: "default" }],
    },
  ],
});
