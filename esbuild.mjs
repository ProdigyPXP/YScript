// @ts-check
if (!process.argv[2]) { // don't waste time on this script if there's no distro
  console.error("\nBuild failed.")
  console.error("You must provide a build target (ex. pnpm build esnext).")
  process.exit(0);
}


import * as esbuild from "esbuild";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";


/** @type string */
const version = JSON.parse(fs.readFileSync("./package.json", "utf8"))["version"];

// 'prod'/'production' => 'esnext'
const distro = process.argv[2].startsWith("prod") ? "esnext" : process.argv[2];
let build = true;



const banner = {
  js: `/* YScript v${version} (${distro}) | Copyright (c) 2016-${new Date().getFullYear()} ProdigyPXP, Yopta.Space project, and Contributors | Licensed under the MIT license */` + 
    `globalThis["yscript"]=Object.create(null);` + 
    `globalThis["yscript"]["distro"]="${distro}";` +
    `globalThis["yscript"]["version"]="${version}";`,
  css: ""
};
const bundle = true;
const entryPoints = ["./src/index.ts"];
let minify = true;
let outfile = "./dist/";
const platform = "browser";
let sourcemap = false;
let target = "esnext";


switch (distro) {
  case "esnext":
    outfile += "yscript-esnext.min.js";
    break;

  case "dev":
    outfile += "yscript.dev.js";
    minify = false;
    sourcemap = true;
    break;

  case "es2016":
  case "es2017":
  case "es2018":
  case "es2019":
  case "es2020":
  case "es2021":
  case "es2022":
    target = distro;
    outfile += `yscipt-${target}.min.js`;
    break;

  default:
    console.error(`[YScript] ${distro} is not a valid distro to build YScript for.`)
    build = false;
}


if (!build) process.exit(0);

await esbuild.build({
  banner,
  bundle,
  entryPoints,
  minify,
  outfile,
  platform,
  sourcemap,
  target,
});

// Copy build to yscript.min.js
const here = path.resolve(fileURLToPath(import.meta.url), "..");
fs.cpSync(here + outfile.replace("./dist/", "/dist/"), here + "/dist/" + "yscript.min.js");


console.log(`[YScript] YScript for ${distro} successfully built.`);