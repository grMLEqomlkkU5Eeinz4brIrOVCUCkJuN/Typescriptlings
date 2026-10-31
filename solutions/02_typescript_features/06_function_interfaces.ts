import { assertEqual } from "../../helpers";

interface MathOperation {
  (x: number, y: number): number;
}

const add: MathOperation = (a, b) => a + b;

interface Counter {
  (start: number): string;
  interval: number;
  reset(): string;
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
