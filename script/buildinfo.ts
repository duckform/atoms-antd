import path from "node:path";
import fs from "node:fs";

const atomsRoot = path.resolve(__dirname, "../src/atoms");
const infoFile = path.resolve(__dirname, "../src/info.ts");
const buildFile = path.resolve(__dirname, "../.fatherrc.ts");

const atoms = fs.readdirSync(atomsRoot);

const info = fs.readFileSync(infoFile, "utf-8");
const REPLACER = `"FILL_BY_SCRIPTS"`;

const neo = info.replace(
  REPLACER,
  atoms.map((x) => JSON.stringify(x)).join(","),
);

// fs.writeFileSync(infoFile, neo);

const BUILD_REPLACDER = "// AUTO BY SCRIPTS";
const buildinfo = fs.readFileSync(buildFile, "utf-8");
const atomComps = atoms.reduce((map, item) => {
  map[`src/atoms/${item}`] = {
    name: `DuckFormAtoms.${item
      .replace(/\w/, (m) => m.toUpperCase())
      .replace(/(-\w)/g, (m) => m.replace("-", "").toUpperCase())}`,
  };
  return map;
}, {});
console.log(`🚀 ~ atomComps ~ atomComps:`, atomComps);
const neoBuild = buildinfo.replace(
  BUILD_REPLACDER,
  JSON.stringify(atomComps, null, 2).replace(/^{/, "").replace(/}$/, ""),
);

fs.writeFileSync(buildFile, neoBuild);
