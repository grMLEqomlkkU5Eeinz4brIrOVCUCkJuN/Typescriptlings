import { type Equal, type Expect } from "../../helpers";

interface Animal { name: string }
interface Dog extends Animal { breed: string }
type Status = "loading" | "success" | "error";
type Point = [number, number];
type Handler = (event: string) => void;

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
