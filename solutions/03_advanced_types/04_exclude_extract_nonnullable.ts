import { type Equal, type Expect } from "../../helpers";

type AvailableDrinks = "Coffee" | "Tea" | "Water" | "Soda";

type NonCaffeinated = Exclude<AvailableDrinks, "Coffee" | "Tea">;
type Caffeinated = Extract<AvailableDrinks, "Coffee" | "Tea">;

type MaybeString = string | null | undefined;
type JustString = NonNullable<MaybeString>;

type _tests = [
  Expect<Equal<NonCaffeinated, "Water" | "Soda">>,
  Expect<Equal<Caffeinated, "Coffee" | "Tea">>,
  Expect<Equal<JustString, string>>,
];
