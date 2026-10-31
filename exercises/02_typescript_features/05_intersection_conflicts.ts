// Conflicts: extends vs &
//
// `interface B extends A` errors right at the definition when members conflict.
// An intersection `{ id: number } & { id: string }` does NOT complain; the
// conflicting property silently becomes `never` and blows up later.
//
// TODO: replace `unknown` in IdType with what TypeScript actually computes
//       for Conflict["id"].
import { type Equal, type Expect } from "../../helpers";

// I AM NOT DONE

type Conflict = { id: number } & { id: string };

type IdType = unknown;

type _tests = [Expect<Equal<Conflict["id"], IdType>>];
