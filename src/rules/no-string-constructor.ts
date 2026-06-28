import { defineAppsyncRule } from "./types.js";
import { isIdentifier, reportDefault } from "./utils.js";

export default defineAppsyncRule({
  meta: {
    type: "problem",
    docs: {
      description:
        "Disallow using String() to stringify values in AppSync resolvers",
    },
    messages: {
      default:
        "Do not use String() to stringify variables in the AppSync JS runtime",
    },
    schema: [],
  },
  createOnce(context) {
    return {
      CallExpression(node) {
        if (isIdentifier(node.callee, "String")) {
          reportDefault(context, node);
        }
      },
      NewExpression(node) {
        if (isIdentifier(node.callee, "String")) {
          reportDefault(context, node);
        }
      },
    };
  },
});
