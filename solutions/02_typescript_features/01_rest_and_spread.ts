import { assertEqual } from "../../helpers";

function sum(...nums: number[]) {
  return nums.reduce((total, n) => total + n, 0);
}

const front = [1, 2];
const back = [3, 4];
const combined: number[] = [...front, ...back];

const settings = { theme: "dark", fontSize: 12 };
const updated = { ...settings, fontSize: 16 };

assertEqual(sum(1, 2, 3, 4), 10, "sum(1, 2, 3, 4)");
assertEqual(sum(...combined), 10, "sum(...combined)");
assertEqual(combined, [1, 2, 3, 4], "combined");
assertEqual(updated, { theme: "dark", fontSize: 16 }, "updated");
assertEqual(settings.fontSize, 12, "settings must not be mutated");
