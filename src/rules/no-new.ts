import { defineAppsyncRule } from "./types.js";
import { reportDefault } from "./utils.js";

export default defineAppsyncRule({
  meta: {
    type: "problem",
    docs: {
      description: "Disallow the new operator in AppSync resolvers",
    },
    messages: {
      default: "The new operator is not supported in the AppSync JS runtime",
    },
    schema: [],
  },
  createOnce(context) {
    return {
      NewExpression(node) {
        reportDefault(context, node);
      },
    };
  },
});
