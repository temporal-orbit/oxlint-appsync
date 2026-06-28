import { defineAppsyncRule } from "./types.js";
import { reportDefault } from "./utils.js";

export default defineAppsyncRule({
  meta: {
    type: "problem",
    docs: {
      description: "Disallow class declarations and expressions in AppSync resolvers",
    },
    messages: {
      default: "Classes are not supported in the AppSync JS runtime",
    },
    schema: [],
  },
  createOnce(context) {
    return {
      ClassDeclaration(node) {
        reportDefault(context, node);
      },
      ClassExpression(node) {
        reportDefault(context, node);
      },
    };
  },
});
