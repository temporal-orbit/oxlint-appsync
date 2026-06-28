import rule from "../../src/rules/no-in-operator.js";
import { runAppsyncRuleTests } from "../helpers/rule-tester.js";

runAppsyncRuleTests("no-in-operator", rule, {
  valid: ["const hasKey = Object.hasOwn(object, 'key');"],
  invalid: [
    {
      code: "const hasKey = 'key' in object;",
      errors: [{ messageId: "default" }],
    },
  ],
});
