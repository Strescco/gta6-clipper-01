// gta6-clipper-01 entry: copies VIDEO.json to /output, byte-identical.
// Node 22, standard library only, no network access.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const source = join(repoDir, "VIDEO.json");
const outDir = "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "VIDEO.json"));
console.log("wrote /output/VIDEO.json");
