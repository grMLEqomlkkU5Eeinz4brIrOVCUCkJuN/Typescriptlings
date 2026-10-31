import { assertEqual, type Equal, type Expect } from "../../helpers";

interface Pair<K, V> {
  key: K;
  value: V;
}

class KeyValuePair<K, V> {
  constructor(private key: K, private value: V) {}

  display(): string {
    return `Key: ${this.key} has Value: ${this.value}`;
  }

  toPair(): Pair<K, V> {
    return { key: this.key, value: this.value };
  }
}

const configProp: Pair<string, string> = { key: "url", value: "www.someurl.com" };
const port = new KeyValuePair<string, number>("port", 8080);

type _tests = [Expect<Equal<ReturnType<typeof port.toPair>, Pair<string, number>>>];
assertEqual(port.display(), "Key: port has Value: 8080", "display");
assertEqual(configProp.key, "url", "configProp");
