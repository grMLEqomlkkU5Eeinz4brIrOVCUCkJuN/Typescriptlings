// Generic constraints
//
// `extends` limits what a generic accepts:
//   function logLength<T extends { length: number }>(item: T) { ... }
// Strings and arrays work, numbers don't (no .length).
//
// TODO: add a constraint so `getLength` compiles and rejects numbers.
import { assertEqual } from "../../helpers";

// I AM NOT DONE

function getLength<T>(item: T): number {
  return item.length;
}

assertEqual(getLength("Hello Typescript"), 16, "string");
assertEqual(getLength([2]), 1, "array");
// @ts-expect-error numbers have no length
getLength(2);
