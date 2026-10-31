import { assertEqual, type Equal, type Expect } from "../../helpers";

const config = { url: "example.com", retries: 3, debug: true };

function getSetting<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const retries = getSetting(config, "retries");
const debug = getSetting(config, "debug");
// @ts-expect-error not a key of config
getSetting(config, "timeout");

type _tests = [
  Expect<Equal<typeof retries, number>>,
  Expect<Equal<typeof debug, boolean>>,
];
assertEqual(retries, 3, "retries");
