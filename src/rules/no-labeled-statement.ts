import { defineAppsyncRule } from "./types.js";
import { reportDefault } from "./utils.js";

export default defineAppsyncRule({
  meta: {
    type: "problem",
    docs: {
      description: "Disallow labeled statements in AppSync resolvers",
    },
    messages: {
      default: "Labeled statements are not supported in the AppSync JS runtime",
    },
    schema: [],
  },
  createOnce(context) {
    return {
      LabeledStatement(node) {
        reportDefault(context, node);
      },
    };
  },
});
