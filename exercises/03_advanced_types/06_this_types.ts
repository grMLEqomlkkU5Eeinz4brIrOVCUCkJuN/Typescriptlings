// Typing `this`
//
// A fake first parameter named `this` declares what `this` must be. The
// compiler removes it; it doesn't exist at runtime.
// ThisParameterType<F> extracts it, OmitThisParameter<F> removes it.
// Returning `this` lets subclasses keep their own type when chaining.
//
// TODO: 1. add a `this: User` parameter to logName so the detached call errors
//       2. change the return type of `add` so `.square()` is available after `.add()`
import { assertEqual, type Equal, type Expect } from "../../helpers";

// I AM NOT DONE

interface User {
  name: string;
  logName(): string;
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
  add(n: number): BasicCalculator {
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
