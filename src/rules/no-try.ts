import { defineAppsyncRule } from "./types.js";
import { reportDefault } from "./utils.js";

export default defineAppsyncRule({
  meta: {
    type: "problem",
    docs: {
      description:
        "Disallow try/catch/finally statements in AppSync resolvers",
    },
    messages: {
      default:
        "try/catch/finally statements are not supported in the AppSync JS runtime",
    },
    schema: [],
  },
  createOnce(context) {
    return {
      TryStatement(node) {
        reportDefault(context, node);
      },
    };
  },
});
