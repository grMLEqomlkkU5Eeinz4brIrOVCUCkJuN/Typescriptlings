# BunTypescriptlings

Small broken TypeScript exercises, in the spirit of rustlings, built from my
TypeScript notes. Each file either fails to type-check or fails a test. Fix it,
delete the `// I AM NOT DONE` line, and the runner moves you to the next one.

## Getting started

```sh
bun install
bun run watch      # start here: shows the current exercise and re-checks on save
```

Other commands:

| Command | What it does |
| --- | --- |
| `bun run list` | progress for every exercise |
| `bun run verify` | check all exercises once |
| `bun run verify:solutions` | check the reference solutions |

## How an exercise is checked

1. `tsc --strict` type-checks the file (TypeScript 7)
2. `bun` runs it, so runtime assertions (`assertEqual`) must pass
3. the `// I AM NOT DONE` marker must be gone

Type-level tests use `Expect<Equal<A, B>>` from `helpers.ts`. A
`// @ts-expect-error` line means the next line *must* be a type error, so
those check that your types reject bad input.

## Exercises

| Chapter | Topics |
| --- | --- |
| `01_getting_started` | type annotations, tsconfig options |
| `02_typescript_features` | rest/spread, interface vs type, declaration merging, the index signature gotcha, intersection conflicts, function and construct signatures, access modifiers and `#private`, `unknown` narrowing and type guards, `never` exhaustiveness |
| `03_advanced_types` | Partial/Required, Readonly/Record, Pick/Omit, Exclude/Extract/NonNullable, ReturnType/Parameters/InstanceType, `this` types, literal types and `as const`, mapped types, key remapping, conditional types and `infer` |
| `04_generics` | generic functions, classes and interfaces, constraints, `keyof` constraints, default type parameters |

Stuck? `solutions/` mirrors `exercises/`.
