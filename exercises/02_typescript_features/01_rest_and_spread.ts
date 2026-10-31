// Rest parameters vs the spread operator
//
// Both use `...`:
//   rest   collects many arguments INTO an array:   function f(...nums: number[])
//   spread expands an array/object OUT into places: [...a, ...b], { ...obj, x: 1 }
//
// TODO: 1. give `sum` a typed rest parameter so it accepts any number of numbers
//       2. use spread to build `combined` and `updated`
import { assertEqual } from "../../helpers";

// I AM NOT DONE

function sum(nums) {
  return nums.reduce((total, n) => total + n, 0);
}

const front = [1, 2];
const back = [3, 4];
const combined: number[] = []; // TODO: front followed by back, using spread

const settings = { theme: "dark", fontSize: 12 };
const updated = settings; // TODO: copy of settings with fontSize 16 (don't mutate settings)

assertEqual(sum(1, 2, 3, 4), 10, "sum(1, 2, 3, 4)");
assertEqual(sum(...combined), 10, "sum(...combined)");
assertEqual(combined, [1, 2, 3, 4], "combined");
assertEqual(updated, { theme: "dark", fontSize: 16 }, "updated");
assertEqual(settings.fontSize, 12, "settings must not be mutated");
