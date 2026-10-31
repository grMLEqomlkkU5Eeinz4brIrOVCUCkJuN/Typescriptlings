// Utility types for unions: Exclude, Extract, NonNullable
//
// Exclude<U, X>    drop the members of U assignable to X
// Extract<U, X>    keep only the members of U assignable to X
// NonNullable<U>   drop null and undefined
//
// TODO: replace each `unknown` using the matching utility type.
import { type Equal, type Expect } from "../../helpers";

// I AM NOT DONE

type AvailableDrinks = "Coffee" | "Tea" | "Water" | "Soda";

type NonCaffeinated = unknown;   // everything except Coffee and Tea
type Caffeinated = unknown;      // only Coffee and Tea

type MaybeString = string | null | undefined;
type JustString = unknown;

type _tests = [
  Expect<Equal<NonCaffeinated, "Water" | "Soda">>,
  Expect<Equal<Caffeinated, "Coffee" | "Tea">>,
  Expect<Equal<JustString, string>>,
];
