import { type Equal, type Expect } from "../../helpers";

interface Person {
  name: string;
  age: number;
  isAdmin: boolean;
}

type StringKeysOnly<T> = {
  [P in keyof T as T[P] extends string ? P : never]: T[P];
};
type Getters<T> = {
  [K in keyof T as `get${Capitalize<K & string>}`]: () => T[K];
};

type _tests = [
  Expect<Equal<StringKeysOnly<Person>, { name: string }>>,
  Expect<Equal<Getters<{ name: string; age: number }>, { getName: () => string; getAge: () => number }>>,
];
