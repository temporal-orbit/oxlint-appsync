import rule from "../../src/rules/no-function-arguments.js";
import { runAppsyncRuleTests } from "../helpers/rule-tester.js";

runAppsyncRuleTests("no-function-arguments", rule, {
  valid: [
    "process(value);",
    "function transform(items) { return items; }",
  ],
  invalid: [
    {
      code: "items.map(function (item) { return item; });",
      errors: [{ messageId: "default" }],
    },
    {
      code: "items.map((item) => item);",
      errors: [{ messageId: "default" }],
    },
    {
      code: "run(() => 1);",
      errors: [{ messageId: "default" }],
    },
  ],
});
