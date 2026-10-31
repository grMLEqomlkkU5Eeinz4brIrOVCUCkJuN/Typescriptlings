import { type Equal, type Expect } from "../../helpers";

type CheckString<T> = T extends string ? "String" : "Not a string";
type OnlyValid<T> = T extends string | number | boolean ? T : never;
type Kind<T> = T extends number ? "Number" : T extends string ? "String" : "Other";
type ElementOf<T> = T extends (infer U)[] ? U : never;

type InputType = "text" | "number";
type Reply<T extends InputType> = T extends "text" ? string[] : number[];

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
