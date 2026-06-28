import rule from "../../src/rules/no-classes.js";
import { runAppsyncRuleTests } from "../helpers/rule-tester.js";

runAppsyncRuleTests("no-classes", rule, {
  valid: ['const value = { name: "test" };', "function create() { return {}; }"],
  invalid: [
    { code: "class Example {}", errors: [{ messageId: "default" }] },
    {
      code: "const Example = class {};",
      errors: [{ messageId: "default" }],
    },
  ],
});
