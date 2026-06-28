import rule from "../../src/rules/no-function-arguments.js";
import { runAppsyncRuleTests } from "../helpers/rule-tester.js";

runAppsyncRuleTests("no-function-arguments", rule, {
  valid: [
    "process(value);",
    "items.map((item) => item);",
    "items.some((i) => i.startsWith('team/createdBy/'));",
    "run(() => 1);",
    "function transform(items) { return items; }",
  ],
  invalid: [
    {
      code: "const project = (item) => item; items.map(project);",
      errors: [{ messageId: "default" }],
    },
    {
      code: "function project(item) { return item; } items.map(project);",
      errors: [{ messageId: "default" }],
    },
    {
      code: "items.map(function (item) { return item; });",
      errors: [{ messageId: "default" }],
    },
    {
      code: "const handler = () => 1; run(handler);",
      errors: [{ messageId: "default" }],
    },
  ],
});
