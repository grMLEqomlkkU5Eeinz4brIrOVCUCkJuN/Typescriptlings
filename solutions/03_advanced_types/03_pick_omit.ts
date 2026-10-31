import { type Equal, type Expect } from "../../helpers";

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;
type TodoInfo = Omit<Todo, "completed">;

const preview: TodoPreview = { title: "Finish article", completed: false };
const info: TodoInfo = { title: "Write blog post", description: "about utility types" };

type _tests = [
  Expect<Equal<keyof TodoPreview, "title" | "completed">>,
  Expect<Equal<keyof TodoInfo, "title" | "description">>,
];
