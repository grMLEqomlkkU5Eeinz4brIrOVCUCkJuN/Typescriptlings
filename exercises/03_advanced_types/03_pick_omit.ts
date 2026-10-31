// Utility types: Pick<T, Keys> and Omit<T, Keys>
//
// Pick keeps only the listed keys. Omit keeps everything except the listed keys.
//
// TODO: define TodoPreview (only title + completed) with Pick
//       and TodoInfo (everything but completed) with Omit.
import { type Equal, type Expect } from "../../helpers";

// I AM NOT DONE

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Todo;
type TodoInfo = Todo;

const preview: TodoPreview = { title: "Finish article", completed: false };
const info: TodoInfo = { title: "Write blog post", description: "about utility types" };

type _tests = [
  Expect<Equal<keyof TodoPreview, "title" | "completed">>,
  Expect<Equal<keyof TodoInfo, "title" | "description">>,
];
