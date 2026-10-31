#!/usr/bin/env bun
// BunTypescriptlings runner.
//   bun run watch          work through exercises one by one, re-checking on save
//   bun run verify         check every exercise once
//   bun run list           show progress
//   bun runner.ts <cmd> solutions   run against the solutions folder instead
import { readdirSync, watch } from "node:fs";
import { join, relative } from "node:path";

const ROOT = import.meta.dir;
const [cmd = "watch", dirName = "exercises"] = Bun.argv.slice(2);
const DIR = join(ROOT, dirName);
const MARKER = "// I AM NOT DONE";

const c = {
  red: (s: string) => `\x1b[31m${s}\x1b[0m`,
  green: (s: string) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s: string) => `\x1b[33m${s}\x1b[0m`,
  dim: (s: string) => `\x1b[2m${s}\x1b[0m`,
  bold: (s: string) => `\x1b[1m${s}\x1b[0m`,
};

function listExercises(): string[] {
  return readdirSync(DIR, { recursive: true, encoding: "utf8" })
    .filter((f) => f.endsWith(".ts"))
    .sort()
    .map((f) => join(DIR, f));
}

type Result =
  | { status: "compile-error" | "runtime-error"; output: string }
  | { status: "not-done" | "done" };

const TSC_FLAGS = [
  "--ignoreConfig", "--noEmit", "--strict", "--skipLibCheck",
  "--target", "ES2022", "--module", "preserve", "--moduleResolution", "bundler",
  "--lib", "ES2022,DOM", "--types", "bun", "--pretty",
];

async function check(file: string): Promise<Result> {
  const tsc = Bun.spawnSync([join(ROOT, "node_modules/.bin/tsc"), ...TSC_FLAGS, file], { cwd: ROOT });
  if (tsc.exitCode !== 0) {
    return { status: "compile-error", output: tsc.stdout.toString() + tsc.stderr.toString() };
  }
  const run = Bun.spawnSync(["bun", file], { cwd: ROOT });
  if (run.exitCode !== 0) {
    return { status: "runtime-error", output: run.stdout.toString() + run.stderr.toString() };
  }
  const src = await Bun.file(file).text();
  return src.includes(MARKER) ? { status: "not-done" } : { status: "done" };
}

const name = (f: string) => relative(DIR, f);

function report(file: string, r: Result) {
  const n = c.bold(name(file));
  switch (r.status) {
    case "compile-error":
      console.log(c.red(`✗ ${name(file)} has type errors:\n`));
      console.log(r.output.trim());
      break;
    case "runtime-error":
      console.log(c.red(`✗ ${name(file)} compiled, but a test failed:\n`));
      console.log(r.output.trim());
      break;
    case "not-done":
      console.log(c.green(`✓ ${n} compiles and passes its tests!`));
      console.log(c.yellow(`  Remove the "${MARKER}" line to move on to the next exercise.`));
      break;
    case "done":
      console.log(c.green(`✓ ${n}`));
  }
}

async function firstPending(files: string[]) {
  for (const [i, f] of files.entries()) {
    const r = await check(f);
    if (r.status !== "done") return { file: f, result: r, index: i };
  }
  return null;
}

async function runWatch() {
  const files = listExercises();
  let busy = false;
  const tick = async () => {
    if (busy) return;
    busy = true;
    console.clear();
    const pending = await firstPending(files);
    if (!pending) {
      console.log(c.green(c.bold(`🎉 All ${files.length} exercises done!`)));
      process.exit(0);
    }
    console.log(c.dim(`Progress: ${pending.index}/${files.length}   (edit ${relative(ROOT, pending.file)})\n`));
    report(pending.file, pending.result);
    console.log(c.dim("\nWatching for changes... (Ctrl+C to quit)"));
    busy = false;
  };
  await tick();
  let timer: Timer | undefined;
  watch(DIR, { recursive: true }, () => {
    clearTimeout(timer);
    timer = setTimeout(tick, 150);
  });
}

async function runVerify() {
  let failed = 0;
  for (const f of listExercises()) {
    const r = await check(f);
    if (r.status === "compile-error" || r.status === "runtime-error") failed++;
    if (r.status === "done") report(f, r);
    else console.log(c.red(`✗ ${name(f)} (${r.status})`));
  }
  console.log(failed ? c.red(`\n${failed} failing`) : c.green("\nAll compile and pass."));
  process.exit(failed ? 1 : 0);
}

async function runList() {
  for (const f of listExercises()) {
    const r = await check(f);
    const mark = r.status === "done" ? c.green("done   ") : c.yellow("pending");
    console.log(`${mark}  ${name(f)}`);
  }
}

if (cmd === "watch") await runWatch();
else if (cmd === "verify") await runVerify();
else if (cmd === "list") await runList();
else console.log("usage: bun runner.ts [watch|verify|list] [exercises|solutions]");
