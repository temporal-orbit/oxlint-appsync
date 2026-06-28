import rule from "../../src/rules/no-instanceof.js";
import { runAppsyncRuleTests } from "../helpers/rule-tester.js";

runAppsyncRuleTests("no-instanceof", rule, {
  valid: ['const isObject = typeof value === "object";'],
  invalid: [
    {
      code: "const isArray = value instanceof Array;",
      errors: [{ messageId: "default" }],
    },
  ],
});
