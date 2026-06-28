import rule from "../../src/rules/no-string-constructor.js";
import { runAppsyncRuleTests } from "../helpers/rule-tester.js";

runAppsyncRuleTests("no-string-constructor", rule, {
  valid: [
    'const value = `${count}`;',
    'const value = JSON.stringify(count);',
    'const text = "hello";',
  ],
  invalid: [
    { code: "const value = String(count);", errors: [{ messageId: "default" }] },
    { code: "const value = new String(count);", errors: [{ messageId: "default" }] },
  ],
});
