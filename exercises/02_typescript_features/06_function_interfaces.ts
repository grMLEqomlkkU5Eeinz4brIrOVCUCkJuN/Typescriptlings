// Function types with interfaces
//
// An interface describes a function with a call signature (no property name):
//   interface MathOperation { (x: number, y: number): number }
// Functions are objects, so the same interface can also list properties and methods.
//
// TODO: 1. write `interface MathOperation` with a call signature (two numbers -> number)
//       2. finish `interface Counter`: callable with (start: number) returning string,
//          plus an `interval: number` property and a `reset(): string` method
import { assertEqual } from "../../helpers";

// I AM NOT DONE

const add: MathOperation = (a, b) => a + b;

interface Counter {
  // TODO
}

function getCounter(): Counter {
  const counter = function (start: number) {
    return `Counted from ${start}`;
  } as Counter;
  counter.interval = 123;
  counter.reset = () => "Reset!";
  return counter;
}

const c = getCounter();
assertEqual(add(2, 3), 5, "add");
assertEqual(c(10), "Counted from 10", "c(10)");
assertEqual(c.interval, 123, "c.interval");
assertEqual(c.reset(), "Reset!", "c.reset()");
