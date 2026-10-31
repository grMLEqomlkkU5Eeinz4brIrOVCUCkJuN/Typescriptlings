// Default generic types
//
// A type parameter can have a default, used when the caller doesn't pass one:
//   interface ApiResponse<Data = unknown> { data: Data; status: number }
//
// TODO: give `Data` a default of `string` and `Container`'s T a default of `number`.
import { type Equal, type Expect } from "../../helpers";

// I AM NOT DONE

interface ApiResponse<Data> {
  data: Data;
  status: number;
}

class Container<T> {
  constructor(public items: T[] = []) {}
}

const res: ApiResponse = { data: "ok", status: 200 };
const box = new Container();

type _tests = [
  Expect<Equal<ApiResponse["data"], string>>,
  Expect<Equal<ApiResponse<number[]>["data"], number[]>>,
  Expect<Equal<Container["items"], number[]>>,
];
