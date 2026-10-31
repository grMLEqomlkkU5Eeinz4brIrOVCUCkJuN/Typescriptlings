// public / protected / private
//
//   modifier    same class  subclass  outside
//   public      yes         yes       yes      (the default)
//   protected   yes         yes       no
//   private     yes         no        no
//
// These are compile-time only! For real runtime privacy use a `#field`.
//
// TODO: 1. pick the right modifier for `salary` so Manager can read it but outsiders can't
//       2. make `pin` truly private at runtime using a # field
import { assertEqual } from "../../helpers";

// I AM NOT DONE

class Employee {
  private salary: number;
  constructor(salary: number) {
    this.salary = salary;
  }
}

class Manager extends Employee {
  getBonus() {
    return this.salary * 0.2;
  }
}

const boss = new Manager(5000);
// @ts-expect-error salary must not be readable from outside
boss.salary;

class DigitalWallet {
  pin: number;
  constructor(pin: number) {
    this.pin = pin;
  }
  check(guess: number) {
    return guess === this.pin;
  }
}

const wallet = new DigitalWallet(1234);
assertEqual(boss.getBonus(), 1000, "bonus");
assertEqual(wallet.check(1234), true, "wallet.check");
assertEqual(Object.keys(wallet), [], "pin must be hidden at runtime");
