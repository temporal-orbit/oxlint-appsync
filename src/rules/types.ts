import type { Rule } from "eslint";

export type AppsyncRuleModule = {
  meta: Rule.RuleMetaData;
  createOnce: (context: Rule.RuleContext) => Rule.RuleListener;
};

export function defineAppsyncRule(rule: AppsyncRuleModule): AppsyncRuleModule {
  return rule;
}
