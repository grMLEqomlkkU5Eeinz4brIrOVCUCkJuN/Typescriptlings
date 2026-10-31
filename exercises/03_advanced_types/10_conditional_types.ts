// Conditional types
//
//   T extends U ? X : Y       "if T is assignable to U then X else Y"
// On a union, they distribute over each member, so `T extends X ? T : never`
// filters a union. `infer` captures a piece of the matched type.
//
// TODO: implement each type, then type `processInput` so the reply type
//       depends on the input kind.
import { type Equal, type Expect } from "../../helpers";

// I AM NOT DONE

type CheckString<T> = unknown;        // "String" or "Not a string"
type OnlyValid<T> = unknown;          // keep members that are string | number | boolean
type Kind<T> = unknown;               // "Number", "String" or "Other" (nested conditional)
type ElementOf<T> = unknown;          // element type of an array, never otherwise (use infer)

type InputType = "text" | "number";
type Reply<T extends InputType> = unknown; // "text" -> string[], "number" -> number[]

function processInput<T extends InputType>(type: T, input: Reply<T>) {
  return `${type}: ${JSON.stringify(input)}`;
}

processInput("text", ["Hello", "World"]);
processInput("number", [1, 2, 3]);
// @ts-expect-error text needs strings
processInput("text", [1, 2]);

type _tests = [
  Expect<Equal<CheckString<string>, "String">>,
  Expect<Equal<CheckString<number>, "Not a string">>,
  Expect<Equal<OnlyValid<string | boolean | null>, string | boolean>>,
  Expect<Equal<Kind<number>, "Number">>,
  Expect<Equal<Kind<string>, "String">>,
  Expect<Equal<Kind<boolean>, "Other">>,
  Expect<Equal<ElementOf<string[]>, string>>,
  Expect<Equal<ElementOf<number>, never>>,
];
