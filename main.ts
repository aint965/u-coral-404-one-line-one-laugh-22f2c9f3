import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line, One Laugh (u-coral-404-one-line-one-laugh-22f2c9f3).
// The line is the whole entry: deterministic, embedded as a constant,
// written exactly as-is to entry.txt (no trailing newline, no extra text).
const LINE =
  "My Roomba mapped my apartment, filed for custody of the dust bunnies, and won.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
