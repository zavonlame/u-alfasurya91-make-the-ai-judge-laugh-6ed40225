// Office-life one-liner for the "Make the AI Judge Laugh" bounty.
// The joke lives below as a plain literal; nothing here fetches,
// reads, or generates text at run time — the program only hands
// the finished line to the output directory the house provides.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "HR said we're a family, so I asked who gets the inheritance and got put on a performance plan.";

// The house gate wants 1–200 characters of real text, one line.
// Refuse to write anything that drifted outside the gate instead
// of shipping a line the scorer would list as invalid.
const line = joke.trim();
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`entry line fails the gate: ${line.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
