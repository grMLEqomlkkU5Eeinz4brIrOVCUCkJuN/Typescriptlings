import { assertEqual } from "../../helpers";

interface User {
  id: number;
  name: string;
}

const user: Readonly<User> = { id: 1, name: "Malika Z" };
// readonly is compile-time only, so this is wrapped to keep it from really running
const rename = () => {
  // @ts-expect-error user must be readonly
  user.name = "Marya A";
};

type Status = "active" | "inactive" | "pending";

const userStatus: Record<number, Status> = {
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
