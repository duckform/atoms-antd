import path from "node:path";
import fs from "node:fs";

const atomsRoot = path.resolve(__dirname, "../src/atoms");
const infoFile = path.resolve(__dirname, "../src/info.ts");

const atoms = fs.readdirSync(atomsRoot);
console.log(`🚀 ~ atoms:`, atoms);

const info = fs.readFileSync(infoFile, "utf-8");
const REPLACER = `"FILL_BY_SCRIPTS"`;

const neo = info.replace(
  REPLACER,
  atoms.map((x) => JSON.stringify(x)).join(","),
);

fs.writeFileSync(infoFile, neo);
