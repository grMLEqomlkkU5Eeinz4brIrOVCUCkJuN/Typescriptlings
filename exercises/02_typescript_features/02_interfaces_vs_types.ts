// Interfaces vs types
//
// `interface` declares a named object shape. `type` is an alias for ANY type:
// object shapes, but also unions, tuples, functions and primitives.
// Interfaces extend with `extends`, types combine with `&` (intersection).
//
// TODO: 1. declare `interface Animal { name: string }` and `interface Dog` that extends it with `breed: string`
//       2. declare `type Status` as the union "loading" | "success" | "error"
//       3. declare `type Point` as a tuple of exactly two numbers
//       4. declare `type Handler` as a function taking a string and returning void
import { type Equal, type Expect } from "../../helpers";

// I AM NOT DONE

const rex: Dog = { name: "Rex", breed: "Collie" };
const animal: Animal = rex;

let s: Status = "loading";
// @ts-expect-error not part of the union
s = "finished";

const p: Point = [10, 20];
// @ts-expect-error too many elements
const bad: Point = [10, 20, 30];

const log: Handler = (event) => console.log(event.toUpperCase());

type _tests = [
  Expect<Equal<Status, "loading" | "success" | "error">>,
  Expect<Equal<Point, [number, number]>>,
  Expect<Equal<ReturnType<Handler>, void>>,
];
