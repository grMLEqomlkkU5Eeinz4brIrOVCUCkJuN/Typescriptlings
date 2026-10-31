import { assertEqual } from "../../helpers";

function describe(input: unknown): string {
  if (typeof input === "string") return input.toUpperCase();
  if (typeof input === "number") return input.toFixed(2);
  if (input instanceof Error) return input.message;
  return "unknown";
}

interface User {
  id: number;
  name: string;
}

function isUser(value: unknown): value is User {
  return typeof value === "object" && value !== null && "id" in value && "name" in value;
}

function greet(data: unknown): string {
  if (isUser(data)) {
    return `Hello, ${data.name}`;
  }
  return "Who are you?";
}

assertEqual(describe("hi"), "HI", "string");
assertEqual(describe(3.14159), "3.14", "number");
assertEqual(describe(new Error("boom")), "boom", "error");
assertEqual(describe(null), "unknown", "null");
assertEqual(greet({ id: 1, name: "Ada" }), "Hello, Ada", "user");
assertEqual(greet({ nmae: "Ada" }), "Who are you?", "typo");
assertEqual(greet(null), "Who are you?", "null");
