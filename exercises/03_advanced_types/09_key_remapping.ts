// Key remapping with `as`
//
// A plain mapped type can only change values. The `as` clause (TS 4.1+)
// computes the key name; mapping a key to `never` deletes it.
//
//   [P in keyof T as T[P] extends string ? P : never]: T[P]
//    \___________/   \_______________________________/
//    loop over keys       what the key becomes
//
// Template literal types build new names: `on${Capitalize<"click">}` -> "onClick"
//
// TODO: 1. StringKeysOnly<T> keeps only properties whose value is a string
//       2. Getters<T> turns { name: string } into { getName: () => string }
import { type Equal, type Expect } from "../../helpers";

// I AM NOT DONE

interface Person {
  name: string;
  age: number;
  isAdmin: boolean;
}

type StringKeysOnly<T> = unknown;
type Getters<T> = unknown;

type _tests = [
  Expect<Equal<StringKeysOnly<Person>, { name: string }>>,
  Expect<Equal<Getters<{ name: string; age: number }>, { getName: () => string; getAge: () => number }>>,
];
