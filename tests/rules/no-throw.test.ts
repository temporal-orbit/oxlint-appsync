import rule from "../../src/rules/no-throw.js";
import { runAppsyncRuleTests } from "../helpers/rule-tester.js";

runAppsyncRuleTests("no-throw", rule, {
  valid: ["util.error('failed');"],
  invalid: [
    {
      code: "throw new Error('failed');",
      errors: [{ messageId: "default" }],
    },
  ],
});
