import { assertEqual } from "../../helpers";

function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

assertEqual(getLength("Hello Typescript"), 16, "string");
assertEqual(getLength([2]), 1, "array");
// @ts-expect-error numbers have no length
getLength(2);
