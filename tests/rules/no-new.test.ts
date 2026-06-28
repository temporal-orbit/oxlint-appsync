import rule from "../../src/rules/no-new.js";
import { runAppsyncRuleTests } from "../helpers/rule-tester.js";

runAppsyncRuleTests("no-new", rule, {
  valid: ["const items = [];", "const value = Object.assign({}, source);"],
  invalid: [
    {
      code: "const value = new Date();",
      errors: [{ messageId: "default" }],
    },
  ],
});
