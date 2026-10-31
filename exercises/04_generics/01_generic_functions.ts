// Generic functions
//
// A generic is a placeholder type the caller fills in. Unlike `any`, it keeps
// the connection between input and output:
//   function identity<Type>(arg: Type): Type { return arg; }
// You can pass it explicitly (identity<string>("x")) or let TS infer it.
//
// TODO: make `first` and `identity` generic so the tests see precise types
//       instead of `any`.
import { assertEqual, type Equal, type Expect } from "../../helpers";

// I AM NOT DONE

function identity(arg: any): any {
  return arg;
}

function first(items: any[]): any {
  return items[0];
}

const a = identity<string>("Something");
const b = identity(42);
const c = first([true, false]);

type _tests = [
  Expect<Equal<typeof a, string>>,
  Expect<Equal<typeof b, number>>,
  Expect<Equal<typeof c, boolean | undefined>>,
];
assertEqual(c, true, "first");
