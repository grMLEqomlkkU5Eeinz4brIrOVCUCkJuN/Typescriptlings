import { type Equal, type Expect } from "../../helpers";

interface ApiResponse<Data = string> {
  data: Data;
  status: number;
}

class Container<T = number> {
  constructor(public items: T[] = []) {}
}

const res: ApiResponse = { data: "ok", status: 200 };
const box = new Container();

type _tests = [
  Expect<Equal<ApiResponse["data"], string>>,
  Expect<Equal<ApiResponse<number[]>["data"], number[]>>,
  Expect<Equal<Container["items"], number[]>>,
];
