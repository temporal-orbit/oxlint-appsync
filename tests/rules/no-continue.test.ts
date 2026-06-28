import rule from "../../src/rules/no-continue.js";
import { runAppsyncRuleTests } from "../helpers/rule-tester.js";

runAppsyncRuleTests("no-continue", rule, {
  valid: ["for (const item of items) { break; }"],
  invalid: [
    {
      code: "for (const item of items) { continue; }",
      errors: [{ messageId: "default" }],
    },
  ],
});
