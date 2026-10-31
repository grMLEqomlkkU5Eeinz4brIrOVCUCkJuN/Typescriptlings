import { type Equal, type Expect } from "../../helpers";

const getString = () => "hello";

function greet(name: string, age: number) {
  return `Hello ${name}, you are ${age} years old.`;
}

class Point {
  constructor(public x: number, public y: number) {}
}

type MyString = ReturnType<typeof getString>;
type GreetParams = Parameters<typeof greet>;
type PointArgs = ConstructorParameters<typeof Point>;
type PointInstance = InstanceType<typeof Point>;

type _tests = [
  Expect<Equal<MyString, string>>,
  Expect<Equal<GreetParams, [name: string, age: number]>>,
  Expect<Equal<PointArgs, [x: number, y: number]>>,
  Expect<Equal<PointInstance, Point>>,
];
