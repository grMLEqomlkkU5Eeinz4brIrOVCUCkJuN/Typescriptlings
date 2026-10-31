// Utility types from functions and classes
//
// ReturnType<F>             the return type of a function type
// Parameters<F>             tuple of a function's parameter types
// ConstructorParameters<C>  same, for a class constructor
// InstanceType<C>           the instance type a constructor builds
//
// Use `typeof fn` / `typeof MyClass` to turn a value into a type first.
//
// TODO: replace each `unknown` by DERIVING the type (don't write it by hand).
import { type Equal, type Expect } from "../../helpers";

// I AM NOT DONE

const getString = () => "hello";

function greet(name: string, age: number) {
  return `Hello ${name}, you are ${age} years old.`;
}

class Point {
  constructor(public x: number, public y: number) {}
}

type MyString = unknown;
type GreetParams = unknown;
type PointArgs = unknown;
type PointInstance = unknown;

type _tests = [
  Expect<Equal<MyString, string>>,
  Expect<Equal<GreetParams, [name: string, age: number]>>,
  Expect<Equal<PointArgs, [x: number, y: number]>>,
  Expect<Equal<PointInstance, Point>>,
];
