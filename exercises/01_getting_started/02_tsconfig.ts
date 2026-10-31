// Configuring tsc
//
// tsconfig.json drives the compiler:
//   target   - ECMAScript version of the emitted JS ("es5", "es6", ...)
//   module   - module system ("commonjs" or ESM like "esnext")
//   lib      - libraries available while compiling (["dom", "es2015"])
//   outDir   - where compiled .js files go
//   strict   - turns on the strict type checking family
//   include / exclude - what to compile and what to skip
//   esModuleInterop / allowSyntheticDefaultImports - default imports from CJS
//
// TODO: fill in `config` so it matches this description:
//   compile to ES6, use commonjs modules, emit into ./dist, enable strict mode
//   and source maps, compile everything in src/**/* except src/test.ts
import { assertEqual } from "../../helpers";

// I AM NOT DONE

const config = {
  compilerOptions: {
    target: "",
    module: "",
    outDir: "",
    strict: false,
    sourceMap: false,
  },
  include: [] as string[],
  exclude: [] as string[],
};

assertEqual(config, {
  compilerOptions: { target: "es6", module: "commonjs", outDir: "./dist", strict: true, sourceMap: true },
  include: ["src/**/*"],
  exclude: ["src/test.ts"],
}, "tsconfig");
