import { type Equal, type Expect } from "../../helpers";

let method: "GET" | "POST" = "GET";
// @ts-expect-error only GET or POST
method = "PATCH";

const routes = {
  home: "/",
  about: "/about",
} as const;

type Route = (typeof routes)[keyof typeof routes];

type _tests = [
  Expect<Equal<typeof method, "GET" | "POST">>,
  Expect<Equal<Route, "/" | "/about">>,
];
