// Shared helpers for the exercises. You don't need to edit this file.

// Type-level tests: `type _ = Expect<Equal<A, B>>` fails to compile unless A and B are identical.
export type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
export type Expect<T extends true> = T;

// Runtime tests: throws (and fails the exercise) when the values differ.
export function assertEqual<T>(actual: T, expected: T, label = "value"): void {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a !== e) {
    throw new Error(`${label}: expected ${e}, got ${a}`);
  }
}

export function assert(condition: unknown, label = "assertion"): asserts condition {
  if (!condition) throw new Error(`${label} failed`);
}
