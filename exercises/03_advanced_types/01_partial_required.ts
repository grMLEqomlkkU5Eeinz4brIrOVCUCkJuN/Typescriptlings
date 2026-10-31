// Utility types: Partial<T> and Required<T>
//
// Partial<T>  makes every property optional (great for "update some fields").
// Required<T> is the opposite: every property must be present.
//
// TODO: fix the parameter types of `updateTask` and `configureSettings`
//       using Partial / Required.
import { assertEqual } from "../../helpers";

// I AM NOT DONE

interface Task {
  title: string;
  description: string;
  completed: boolean;
}

function updateTask(task: Task, fieldsToUpdate: Task): Task {
  return { ...task, ...fieldsToUpdate };
}

interface OptionalProps {
  name?: string;
  age?: number;
}

function configureSettings(settings: OptionalProps): string {
  return `Name: ${settings.name.toUpperCase()}, Age: ${settings.age.toFixed(0)}`;
}

const task: Task = { title: "Learn TypeScript", description: "Understand Utility Types", completed: false };

assertEqual(updateTask(task, { completed: true }).completed, true, "updateTask");
assertEqual(configureSettings({ name: "Gaia", age: 9 }), "Name: GAIA, Age: 9", "configureSettings");
// wrapped in a function so it never actually runs
const missingAge = () =>
  // @ts-expect-error age is required now
  configureSettings({ name: "Gaia" });
