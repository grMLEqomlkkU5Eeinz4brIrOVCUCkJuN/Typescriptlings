import { type Equal, type Expect } from "../../helpers";

type Conflict = { id: number } & { id: string };

type IdType = never;

type _tests = [Expect<Equal<Conflict["id"], IdType>>];
