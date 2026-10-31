// any vs unknown
//
// `any` turns type checking off. `unknown` forces you to narrow before use:
//   typeof       for primitives
//   instanceof   for classes / built-ins (Date, Error)
//   value is T   user-defined type guards for object shapes
//
// TODO: 1. finish `describe` using typeof / instanceof narrowing
//       2. write the `isUser` type guard (return type must be `value is User`)
import { assertEqual } from "../../helpers";

// I AM NOT DONE

function describe(input: unknown): string {
  // string -> upper-cased, number -> toFixed(2), Error -> its message, anything else -> "unknown"
  return input.toUpperCase();
}

interface User {
  id: number;
  name: string;
}

function isUser(value: unknown) {
  return false;
}

function greet(data: unknown): string {
  if (isUser(data)) {
    return `Hello, ${data.name}`;
  }
  return "Who are you?";
}

assertEqual(describe("hi"), "HI", "string");
assertEqual(describe(3.14159), "3.14", "number");
assertEqual(describe(new Error("boom")), "boom", "error");
assertEqual(describe(null), "unknown", "null");
assertEqual(greet({ id: 1, name: "Ada" }), "Hello, Ada", "user");
assertEqual(greet({ nmae: "Ada" }), "Who are you?", "typo");
assertEqual(greet(null), "Who are you?", "null");
