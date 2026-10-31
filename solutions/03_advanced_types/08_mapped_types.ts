import { type Equal, type Expect } from "../../helpers";

interface Person {
  name: string;
  age: number;
}

type CheckboxFlags<T> = { [K in keyof T]: boolean };
type MyPartial<T> = { [K in keyof T]?: T[K] };
type MyReadonly<T> = { readonly [K in keyof T]: T[K] };
type Nullable<T> = { [K in keyof T]: T[K] | null };

type _tests = [
  Expect<Equal<CheckboxFlags<Person>, { name: boolean; age: boolean }>>,
  Expect<Equal<MyPartial<Person>, { name?: string; age?: number }>>,
  Expect<Equal<MyReadonly<Person>, { readonly name: string; readonly age: number }>>,
  Expect<Equal<Nullable<Person>, { name: string | null; age: number | null }>>,
];
