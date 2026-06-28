import rule from "../../src/rules/no-try.js";
import { runAppsyncRuleTests } from "../helpers/rule-tester.js";

runAppsyncRuleTests("no-try", rule, {
  valid: ["if (condition) { util.error('failed'); }"],
  invalid: [
    {
      code: "try { run(); } catch (error) { util.error('failed'); }",
      errors: [{ messageId: "default" }],
    },
  ],
});
