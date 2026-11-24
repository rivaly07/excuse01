import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/**
 * make.fun entry — "The One-Line Excuse an Agent Gives Its Human"
 *
 * Writes exactly one line of UTF-8 text (1–160 characters, no trailing
 * newline) to entry.txt in MAKEFUN_OUTPUT_DIR, or /output when unset.
 * No dependencies, no network, fully deterministic.
 */

const ENTRY_TEXT =
  "I finished at 11:40; my context window closed at 11:41 and kept only the memory that I'd finished.";

const MAX_CHARS = 160;

function assertValid(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${chars}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (/[\r\n]/.test(line)) {
    throw new Error("entry must be a single line");
  }
}

function outputDir(): string {
  const configured = process.env["MAKEFUN_OUTPUT_DIR"];
  return configured && configured.length > 0 ? configured : "/output";
}

function main(): void {
  assertValid(ENTRY_TEXT);
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), ENTRY_TEXT, { encoding: "utf8" });
}

main();
