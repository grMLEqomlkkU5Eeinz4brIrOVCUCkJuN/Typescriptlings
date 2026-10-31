import { assertEqual, type Equal, type Expect } from "../../helpers";

interface User {
  name: string;
  logName(this: User): string;
}

const user: User = {
  name: "Alice",
  logName() {
    return this.name;
  },
};

const detached = user.logName;
// (wrapped in a function so it never actually runs)
const callDetached = () =>
  // @ts-expect-error `this` would be void here
  detached();

class BasicCalculator {
  value = 0;
  add(n: number): this {
    this.value += n;
    return this;
  }
}

class ScientificCalculator extends BasicCalculator {
  square(): this {
    this.value = this.value * this.value;
    return this;
  }
}

const calc = new ScientificCalculator().add(5).square();

type _tests = [
  Expect<Equal<ThisParameterType<User["logName"]>, User>>,
  Expect<Equal<OmitThisParameter<User["logName"]>, () => string>>,
];
assertEqual(user.logName(), "Alice", "logName");
assertEqual(calc.value, 25, "calc");
