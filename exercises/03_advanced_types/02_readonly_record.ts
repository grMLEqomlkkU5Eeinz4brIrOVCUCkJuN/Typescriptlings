// Utility types: Readonly<T> and Record<Keys, Type>
//
// Readonly<T>      every property becomes readonly (compile time only).
// Record<K, V>     an object type whose keys are K and values are V.
//
// TODO: 1. type `user` so that assigning to user.name is an error
//       2. type `userStatus` as a Record from number to Status
import { assertEqual } from "../../helpers";

// I AM NOT DONE

interface User {
  id: number;
  name: string;
}

const user: User = { id: 1, name: "Malika Z" };
// readonly is compile-time only, so this is wrapped to keep it from really running
const rename = () => {
  // @ts-expect-error user must be readonly
  user.name = "Marya A";
};

type Status = "active" | "inactive" | "pending";

const userStatus = {
  1: "active",
  2: "inactive",
  3: "pending",
};
const addBad = () => {
  // @ts-expect-error only Status values are allowed
  userStatus[4] = "deleted";
};

assertEqual(user.name, "Malika Z", "readonly");
assertEqual(userStatus[1], "active", "record");
