import rule from "../../src/rules/no-global-constructor.js";
import { runAppsyncRuleTests } from "../helpers/rule-tester.js";

runAppsyncRuleTests("no-global-constructor", rule, {
  valid: [
    'const value = `${count}`;',
    'const value = JSON.stringify(count);',
    'const text = "hello";',
    "const finite = Number.isFinite(count);",
    "const keys = Object.keys(object);",
    "const merged = Object.assign({}, source);",
    "const raw = String.raw`hello`;",
  ],
  invalid: [
    {
      code: "const value = String(count);",
      errors: [{ messageId: "default", data: { name: "String" } }],
    },
    {
      code: "const value = Boolean(flag);",
      errors: [{ messageId: "default", data: { name: "Boolean" } }],
    },
    {
      code: "const value = Number(count);",
      errors: [{ messageId: "default", data: { name: "Number" } }],
    },
    {
      code: "const value = Date();",
      errors: [{ messageId: "default", data: { name: "Date" } }],
    },
    {
      code: "const value = Object(input);",
      errors: [{ messageId: "default", data: { name: "Object" } }],
    },
    {
      code: "const value = Array(3);",
      errors: [{ messageId: "default", data: { name: "Array" } }],
    },
    {
      code: 'const value = Function("return 1");',
      errors: [{ messageId: "default", data: { name: "Function" } }],
    },
  ],
});
