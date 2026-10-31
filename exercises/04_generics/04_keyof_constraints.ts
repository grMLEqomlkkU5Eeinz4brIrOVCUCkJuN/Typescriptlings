// A generic constrained by another generic
//
// Goal: safely read a configuration value given its key. Compile-time checks
// make sure only real keys are used and the return type matches that key.
//   function getSetting<T, K extends keyof T>(obj: T, key: K): T[K]
//
// TODO: make `getSetting` generic so the tests pass.
import { assertEqual, type Equal, type Expect } from "../../helpers";

// I AM NOT DONE

const config = { url: "example.com", retries: 3, debug: true };

function getSetting(obj: any, key: string): any {
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
