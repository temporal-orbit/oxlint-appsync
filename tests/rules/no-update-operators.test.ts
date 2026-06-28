import rule from "../../src/rules/no-update-operators.js";
import { runAppsyncRuleTests } from "../helpers/rule-tester.js";

runAppsyncRuleTests("no-update-operators", rule, {
  valid: ["count = count + 1;", "count = count - 1;"],
  invalid: [
    { code: "count++;", errors: [{ messageId: "default" }] },
    { code: "--count;", errors: [{ messageId: "default" }] },
  ],
});
