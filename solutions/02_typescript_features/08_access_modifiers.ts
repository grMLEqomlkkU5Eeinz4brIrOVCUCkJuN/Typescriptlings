import { assertEqual } from "../../helpers";

class Employee {
  protected salary: number;
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
  #pin: number;
  constructor(pin: number) {
    this.#pin = pin;
  }
  check(guess: number) {
    return guess === this.#pin;
  }
}

const wallet = new DigitalWallet(1234);
assertEqual(boss.getBonus(), 1000, "bonus");
assertEqual(wallet.check(1234), true, "wallet.check");
assertEqual(Object.keys(wallet), [], "pin must be hidden at runtime");
