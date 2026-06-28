import type { Rule } from "eslint";
import { defineAppsyncRule } from "./types.js";
import { reportDefault } from "./utils.js";

const FUNCTION_ARGUMENT_TYPES = new Set([
  "FunctionDeclaration",
  "FunctionExpression",
  "ArrowFunctionExpression",
]);

function isFunctionArgument(node: Rule.Node): boolean {
  return FUNCTION_ARGUMENT_TYPES.has(node.type);
}

export default defineAppsyncRule({
  meta: {
    type: "problem",
    docs: {
      description:
        "Disallow passing functions as call arguments in AppSync resolvers",
    },
    messages: {
      default:
        "Passing functions as arguments is not supported in the AppSync JS runtime",
    },
    schema: [],
  },
  createOnce(context) {
    return {
      CallExpression(node) {
        for (const argument of node.arguments) {
          if (argument.type !== "SpreadElement" && isFunctionArgument(argument)) {
            reportDefault(context, argument);
          }
        }
      },
    };
  },
});
