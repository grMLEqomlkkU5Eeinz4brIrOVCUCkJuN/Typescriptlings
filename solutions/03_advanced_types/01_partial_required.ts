import { assertEqual } from "../../helpers";

interface Task {
  title: string;
  description: string;
  completed: boolean;
}

function updateTask(task: Task, fieldsToUpdate: Partial<Task>): Task {
  return { ...task, ...fieldsToUpdate };
}

interface OptionalProps {
  name?: string;
  age?: number;
}

function configureSettings(settings: Required<OptionalProps>): string {
  return `Name: ${settings.name.toUpperCase()}, Age: ${settings.age.toFixed(0)}`;
}

const task: Task = { title: "Learn TypeScript", description: "Understand Utility Types", completed: false };

assertEqual(updateTask(task, { completed: true }).completed, true, "updateTask");
assertEqual(configureSettings({ name: "Gaia", age: 9 }), "Name: GAIA, Age: 9", "configureSettings");
// wrapped in a function so it never actually runs
const missingAge = () =>
  // @ts-expect-error age is required now
  configureSettings({ name: "Gaia" });
