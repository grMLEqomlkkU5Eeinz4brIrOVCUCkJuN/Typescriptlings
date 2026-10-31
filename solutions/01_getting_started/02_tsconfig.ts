import { assertEqual } from "../../helpers";

const config = {
  compilerOptions: {
    target: "es6",
    module: "commonjs",
    outDir: "./dist",
    strict: true,
    sourceMap: true,
  },
  include: ["src/**/*"] as string[],
  exclude: ["src/test.ts"] as string[],
};

assertEqual(config, {
  compilerOptions: { target: "es6", module: "commonjs", outDir: "./dist", strict: true, sourceMap: true },
  include: ["src/**/*"],
  exclude: ["src/test.ts"],
}, "tsconfig");
