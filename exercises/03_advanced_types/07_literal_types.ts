// Literal types
//
// A literal type is a single exact value: "GET", 42, true.
// `let` widens literals ("GET" -> string), `const` keeps them.
// `as const` freezes a whole object/array into readonly literals.
//
// TODO: 1. type `method` so only "GET" | "POST" are allowed
//       2. make `routes` keep its literal values using `as const`
import { type Equal, type Expect } from "../../helpers";

// I AM NOT DONE

let method: string = "GET";
// @ts-expect-error only GET or POST
method = "PATCH";

const routes = {
  home: "/",
  about: "/about",
};

type Route = (typeof routes)[keyof typeof routes];

type _tests = [
  Expect<Equal<typeof method, "GET" | "POST">>,
  Expect<Equal<Route, "/" | "/about">>,
];
