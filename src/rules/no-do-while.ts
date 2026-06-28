import { defineAppsyncRule } from "./types.js";
import { reportDefault } from "./utils.js";

export default defineAppsyncRule({
  meta: {
    type: "problem",
    docs: {
      description: "Disallow do-while loops in AppSync resolvers",
    },
    messages: {
      default: "do-while loops are not supported in the AppSync JS runtime",
    },
    schema: [],
  },
  createOnce(context) {
    return {
      DoWhileStatement(node) {
        reportDefault(context, node);
      },
    };
  },
});
