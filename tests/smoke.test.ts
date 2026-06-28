import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { recommended } from "../src/plugin.js";

const rootDir = path.resolve(fileURLToPath(new URL("../", import.meta.url)));
const fixturePath = path.join(rootDir, "tests/fixtures/sample-appsync.js");
const oxlintBinary = path.join(rootDir, "node_modules/.bin/oxlint");

const expectedRules = Object.keys(recommended);

function toOxlintRuleId(ruleId: string): string {
  const [pluginName, ruleName] = ruleId.split("/");
  return `${pluginName}(${ruleName})`;
}

describe("oxlint smoke test", () => {
  it("reports every AppSync restriction on the sample fixture", () => {
    const result = spawnSync(
      oxlintBinary,
      [fixturePath, "--config", "tests/oxlintrc.smoke.json"],
      {
        cwd: rootDir,
        encoding: "utf8",
        env: {
          ...process.env,
          NO_COLOR: "1",
        },
      },
    );

    const output = `${result.stdout ?? ""}${result.stderr ?? ""}`;
    expect(result.error).toBeUndefined();

    for (const ruleId of expectedRules) {
      expect(output).toContain(toOxlintRuleId(ruleId));
    }
  });
});
