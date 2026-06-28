import type { Rule } from "eslint";

type NodeWithType = { type: string };

export function isIdentifier(
  node: NodeWithType | null | undefined,
  name: string,
): boolean {
  return node?.type === "Identifier" && (node as { name: string }).name === name;
}

export function reportDefault(
  context: Rule.RuleContext,
  node: Rule.Node,
  messageId = "default",
): void {
  context.report({ node, messageId });
}
