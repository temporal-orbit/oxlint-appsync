import type { Rule } from "eslint";
import { defineAppsyncRule } from "./types.js";
import { reportDefault } from "./utils.js";

function definitionCreatesFunction(def: Rule.Scope.Definition): boolean {
  if (def.type === "FunctionName") {
    return true;
  }

  if (def.type === "Variable" && def.node.type === "VariableDeclarator") {
    const init = def.node.init;
    if (!init) {
      return false;
    }

    return (
      init.type === "FunctionExpression" ||
      init.type === "ArrowFunctionExpression"
    );
  }

  return false;
}

function isFunctionReference(
  node: Rule.Node,
  context: Rule.RuleContext,
): boolean {
  if (node.type === "FunctionExpression") {
    return true;
  }

  if (node.type !== "Identifier") {
    return false;
  }

  let scope: Rule.Scope.Scope | null = context.sourceCode.getScope(node);
  while (scope) {
    const variable = scope.set.get(node.name);
    if (variable?.defs.some(definitionCreatesFunction)) {
      return true;
    }
    scope = scope.upper;
  }

  return false;
}

export default defineAppsyncRule({
  meta: {
    type: "problem",
    docs: {
      description:
        "Disallow passing function references as call arguments in AppSync resolvers",
    },
    messages: {
      default:
        "Passing a function reference as an argument is not supported in the AppSync JS runtime; use an inline arrow function instead",
    },
    schema: [],
  },
  createOnce(context) {
    return {
      CallExpression(node) {
        for (const argument of node.arguments) {
          if (argument.type === "SpreadElement") {
            continue;
          }

          if (isFunctionReference(argument, context)) {
            reportDefault(context, argument);
          }
        }
      },
    };
  },
});
