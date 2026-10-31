import { assertEqual } from "../../helpers";

let greeting: string = "Hello, Typescript!";

const add = (x: number, y: number): number => {
  return x + y;
};

// @ts-expect-error passing a string must be rejected
add(5, "3");

assertEqual(add(2, 3), 5, "add(2, 3)");
assertEqual(greeting, "Hello, Typescript!", "greeting");
