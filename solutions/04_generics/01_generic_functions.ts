import { assertEqual, type Equal, type Expect } from "../../helpers";

function identity<Type>(arg: Type): Type {
  return arg;
}

function first<T>(items: T[]): T | undefined {
  return items[0];
}

const a = identity<string>("Something");
const b: number = identity(42);
const c = first([true, false]);

type _tests = [
  Expect<Equal<typeof a, string>>,
  Expect<Equal<typeof b, number>>,
  Expect<Equal<typeof c, boolean | undefined>>,
];
assertEqual(c, true, "first");
