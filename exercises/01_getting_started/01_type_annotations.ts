// Type annotations
//
// TypeScript is JavaScript with static types. In plain JS, add(5, "3")
// happily returns "53". With annotations, the compiler refuses it.
//
// TODO: annotate `x`, `y` and the return type of `add` as numbers,
//       and give `greeting` a string annotation.
//       The @ts-expect-error line below only compiles once add(5, "3") IS an error.
import { assertEqual } from "../../helpers";

// I AM NOT DONE

let greeting = "Hello, Typescript!";

const add = (x, y) => {
  return x + y;
};

// @ts-expect-error passing a string must be rejected
add(5, "3");

assertEqual(add(2, 3), 5, "add(2, 3)");
assertEqual(greeting, "Hello, Typescript!", "greeting");
