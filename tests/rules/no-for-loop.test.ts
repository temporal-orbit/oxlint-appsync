import rule from "../../src/rules/no-for-loop.js";
import { runAppsyncRuleTests } from "../helpers/rule-tester.js";

runAppsyncRuleTests("no-for-loop", rule, {
  valid: [
    "for (const key in object) {}",
    "for (const item of items) {}",
  ],
  invalid: [
    {
      code: "for (let i = 0; i < items.length; i++) {}",
      errors: [{ messageId: "default" }],
    },
  ],
});
