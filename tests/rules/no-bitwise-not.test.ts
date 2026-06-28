import rule from "../../src/rules/no-bitwise-not.js";
import { runAppsyncRuleTests } from "../helpers/rule-tester.js";

runAppsyncRuleTests("no-bitwise-not", rule, {
  valid: ["const value = !condition;"],
  invalid: [
    {
      code: "const value = ~count;",
      errors: [{ messageId: "default" }],
    },
  ],
});
