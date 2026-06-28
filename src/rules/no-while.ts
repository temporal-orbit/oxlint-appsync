import { defineAppsyncRule } from "./types.js";
import { reportDefault } from "./utils.js";

export default defineAppsyncRule({
  meta: {
    type: "problem",
    docs: {
      description: "Disallow while loops in AppSync resolvers",
    },
    messages: {
      default: "while loops are not supported in the AppSync JS runtime",
    },
    schema: [],
  },
  createOnce(context) {
    return {
      WhileStatement(node) {
        reportDefault(context, node);
      },
    };
  },
});
