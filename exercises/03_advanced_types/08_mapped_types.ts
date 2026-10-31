// Mapped types
//
// A mapped type loops over the keys of another type:
//   keyof T        the keys as a union ('id' | 'name')
//   [K in keyof T] loop over them
//   T[K]           look up each value type
// Add `?` or `readonly` to change modifiers for every key at once.
//
// TODO: implement each type below with a mapped type (no built-in utility types!).
import { type Equal, type Expect } from "../../helpers";

// I AM NOT DONE

interface Person {
  name: string;
  age: number;
}

type CheckboxFlags<T> = unknown;   // same keys, every value boolean
type MyPartial<T> = unknown;       // every key optional
type MyReadonly<T> = unknown;      // every key readonly
type Nullable<T> = unknown;        // every value can also be null

type _tests = [
  Expect<Equal<CheckboxFlags<Person>, { name: boolean; age: boolean }>>,
  Expect<Equal<MyPartial<Person>, { name?: string; age?: number }>>,
  Expect<Equal<MyReadonly<Person>, { readonly name: string; readonly age: number }>>,
  Expect<Equal<Nullable<Person>, { name: string | null; age: number | null }>>,
];
