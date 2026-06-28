import rule from "../../src/rules/no-generators.js";
import { runAppsyncRuleTests } from "../helpers/rule-tester.js";

runAppsyncRuleTests("no-generators", rule, {
  valid: ["function load() { return 1; }"],
  invalid: [
    {
      code: "function* load() { yield 1; }",
      errors: [{ messageId: "default" }],
    },
    {
      code: "const load = function* () { yield 1; };",
      errors: [{ messageId: "default" }],
    },
  ],
});
