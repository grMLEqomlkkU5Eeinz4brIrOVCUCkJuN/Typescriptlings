// Generics in classes and interfaces
//
//   class KeyValuePair<K, V> { constructor(private key: K, private value: V) {} }
//   interface Pair<K, V> { key: K; value: V }
//
// TODO: 1. make `Pair` generic over K and V
//       2. make `KeyValuePair` generic and give `toPair` a precise return type
import { assertEqual, type Equal, type Expect } from "../../helpers";

// I AM NOT DONE

interface Pair {
  key: string;
  value: string;
}

class KeyValuePair {
  constructor(private key: any, private value: any) {}

  display(): string {
    return `Key: ${this.key} has Value: ${this.value}`;
  }

  toPair() {
    return { key: this.key, value: this.value };
  }
}

const configProp: Pair<string, string> = { key: "url", value: "www.someurl.com" };
const port = new KeyValuePair<string, number>("port", 8080);

type _tests = [Expect<Equal<ReturnType<typeof port.toPair>, Pair<string, number>>>];
assertEqual(port.display(), "Key: port has Value: 8080", "display");
assertEqual(configProp.key, "url", "configProp");
