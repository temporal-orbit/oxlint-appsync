import rule from "../../src/rules/no-this.js";
import { runAppsyncRuleTests } from "../helpers/rule-tester.js";

runAppsyncRuleTests("no-this", rule, {
  valid: ["function load(ctx) { return ctx.value; }"],
  invalid: [
    {
      code: "function load() { return this.value; }",
      errors: [{ messageId: "default" }],
    },
  ],
});
